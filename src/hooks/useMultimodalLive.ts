
import { useState, useEffect, useCallback, useRef } from 'react';
import { AudioRecorder, AudioStreamer } from '../utils/audio-manager';
import { COMPANY_KNOWLEDGE } from '../data/company-knowledge';
import { PERSONA_PROMPT } from '../data/persona-prompt';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY; // Expects VITE_ prefix for frontend
const HOST = 'generativelanguage.googleapis.com';
const URI = `wss://${HOST}/ws/google.ai.generativelanguage.v1alpha.GenerativeService.BidiGenerateContent`;

export const useMultimodalLive = () => {
    const [isConnected, setIsConnected] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false); // Managed by audio level or events
    const [error, setError] = useState<string | null>(null);

    const wsRef = useRef<WebSocket | null>(null);
    const recorderRef = useRef<AudioRecorder | null>(null);
    const streamerRef = useRef<AudioStreamer | null>(null);

    const connect = useCallback(() => {
        if (wsRef.current) return;
        if (!API_KEY) {
            setError("Missing API Key. Please add VITE_GEMINI_API_KEY to your environment.");
            return;
        }

        const ws = new WebSocket(`${URI}?key=${API_KEY}`);

        ws.onopen = () => {
            console.log('Gemini Live Connected');
            setIsConnected(true);
            setError(null);

            // Send Setup Message
            const setupMessage = {
                setup: {
                    model: "models/gemini-2.0-flash-exp",
                    generationConfig: {
                        responseModalities: ["AUDIO"],
                        speechConfig: {
                            voiceConfig: {
                                prebuiltVoiceConfig: {
                                    voiceName: "Aoede" // The chosen voice
                                }
                            }
                        }
                    },
                    systemInstruction: {
                        parts: [
                            { text: PERSONA_PROMPT },
                            { text: "Knowledge Base (Minimal for Testing):" },
                            // DRASITC REDUCTION: Only sending 500 chars to verify connection. 
                            { text: COMPANY_KNOWLEDGE.slice(0, 500) }
                        ]
                    }
                }
            };
            ws.send(JSON.stringify(setupMessage));
        };

        ws.onmessage = async (event) => {
            let data;
            try {
                if (event.data instanceof Blob) {
                    const text = await event.data.text();
                    data = JSON.parse(text);
                } else {
                    data = JSON.parse(event.data);
                }
            } catch (e) {
                console.error("Error parsing message", e);
                return;
            }

            // Handle Audio Output from Server
            if (data.serverContent?.modelTurn?.parts?.[0]?.inlineData) {
                const audioBase64 = data.serverContent.modelTurn.parts[0].inlineData.data;
                if (audioBase64) {
                    setIsSpeaking(true);
                    streamerRef.current?.addPCM16(audioBase64);
                    // Reset speaking state logic would ideally come from the streamer finishing
                    // specific event handling for 'turnComplete' can also help
                }
            }

            // Handle Turn Complete (maybe stop visualizer?)
            if (data.serverContent?.turnComplete) {
                // console.log("Turn complete");
                // We might keep 'isSpeaking' true while audio buffer plays out in the streamer
                setTimeout(() => setIsSpeaking(false), 2000); // Rough estimate, ideally Streamer callbacks
            }
        };

        ws.onerror = (e) => {
            console.error("WebSocket Error", e);
            setError("Connection Error. Please check your API Key and Network.");
            setIsConnected(false);
        };

        ws.onclose = (event) => {
            console.log("Gemini Live Disconnected", event);
            console.log(`Close Code: ${event.code}, Reason: ${event.reason}, Clean: ${event.wasClean}`);
            setIsConnected(false);
            setIsListening(false);

            // Helpful error mapping
            if (event.code === 1000) {
                // Normal closure
            } else if (event.code === 1006) {
                setError("Connection closed abnormally (1006). specific details are hidden by browsers, but this often means SSL failure or Refused Connection.");
            } else if (event.code === 4003 || event.code === 1002) {
                setError("Authentication failed. Check your API Key.");
            } else {
                setError(`Connection closed: ${event.code} ${event.reason || 'Unknown error'}`);
            }
        };

        wsRef.current = ws;
        streamerRef.current = new AudioStreamer();
    }, []);

    const disconnect = useCallback(() => {
        wsRef.current?.close();
        wsRef.current = null;

        recorderRef.current?.stop();
        recorderRef.current = null;

        streamerRef.current?.stop();
        streamerRef.current = null;
    }, []);

    const startRecording = useCallback(async () => {
        if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) {
            connect();
            // Wait a sec for connection? Better pattern is to connect mostly on mount or first interaction
            // For now, assume connected or let user click again.
        }

        try {
            recorderRef.current = new AudioRecorder((base64Data) => {
                if (wsRef.current?.readyState === WebSocket.OPEN) {
                    const msg = {
                        realtimeInput: {
                            mediaChunks: [{
                                mimeType: "audio/pcm;rate=16000",
                                data: base64Data
                            }]
                        }
                    };
                    wsRef.current.send(JSON.stringify(msg));
                }
            });
            await recorderRef.current.start();
            setIsListening(true);
        } catch (e) {
            console.error("Mic Error", e);
            setError("Microphone access denied.");
        }
    }, [connect]);

    const stopRecording = useCallback(() => {
        recorderRef.current?.stop();
        recorderRef.current = null;
        setIsListening(false);
    }, []);

    const toggleConnection = useCallback(() => {
        if (isConnected) {
            disconnect();
        } else {
            connect();
        }
    }, [isConnected, connect, disconnect]);

    return {
        isConnected,
        isListening,
        isSpeaking,
        error,
        startRecording,
        stopRecording,
        toggleConnection,
        connect
    };
};
