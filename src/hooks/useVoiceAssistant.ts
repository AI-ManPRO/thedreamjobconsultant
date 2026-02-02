
import { useState, useCallback, useEffect, useRef } from 'react';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

interface UseVoiceAssistantProps {
    apiEndpoint?: string; // Optional for dev/testing
}

export const useVoiceAssistant = ({ apiEndpoint = '/.netlify/functions/voice-chat' }: UseVoiceAssistantProps = {}) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isListening, setIsListening] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Refs for Speech Recognition and Synthesis
    const recognitionRef = useRef<any>(null);
    const synthesisRef = useRef<SpeechSynthesis>(window.speechSynthesis);

    // Initialize Speech Recognition
    useEffect(() => {
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            console.warn('Speech recognition not supported in this browser.');
            return;
        }

        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        const recognition = new SpeechRecognition();

        recognition.continuous = false; // We want single turn per click usually, or continuous? Let's do single turn for stability
        recognition.lang = 'en-US';
        recognition.interimResults = false;

        recognition.onstart = () => setIsListening(true);

        recognition.onend = () => {
            setIsListening(false);
        };

        recognition.onerror = (event: any) => {
            console.error('Speech recognition error', event.error);
            setIsListening(false);
            setError('Could not hear you. Please try again.');
        };

        recognition.onresult = async (event: any) => {
            const transcript = event.results[0][0].transcript;
            if (transcript) {
                await processUserMessage(transcript);
            }
        };

        recognitionRef.current = recognition;
    }, []);

    const speak = useCallback((text: string) => {
        if (!synthesisRef.current) return;

        // Cancel any current speaking
        synthesisRef.current.cancel();

        const utterance = new SpeechSynthesisUtterance(text);

        // Attempt to select a specific voice
        const voices = synthesisRef.current.getVoices();
        // Priority: 
        // 1. Google US English (often very high quality)
        // 2. Microsoft Zira (common Windows female voice)
        // 3. Any US English Female voice
        // 4. Any top US English voice
        const preferredVoice = voices.find(v => v.name === 'Google US English') ||
            voices.find(v => v.name.includes('Zira')) ||
            voices.find(v => v.lang === 'en-US' && v.name.includes('Female')) ||
            voices.find(v => v.lang === 'en-US');

        if (preferredVoice) {
            utterance.voice = preferredVoice;
        }

        utterance.rate = 1.0;
        utterance.pitch = 1.0;

        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);

        synthesisRef.current.speak(utterance);
    }, []);

    const processUserMessage = async (text: string) => {
        setIsLoading(true);
        setError(null);

        // Add user message to state
        const newUserMsg: Message = { role: 'user', content: text };
        setMessages(prev => [...prev, newUserMsg]);

        try {
            // Prepare history for API
            // Limit history to last 10 messages to avoid token limits if necessary
            const historyForApi = messages.slice(-10);

            const response = await fetch(apiEndpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: text,
                    history: historyForApi
                })
            });

            if (!response.ok) {
                throw new Error('Failed to get response from AI');
            }

            const data = await response.json();
            const aiResponseText = data.response;

            // Add AI response to state
            setMessages(prev => [...prev, { role: 'assistant', content: aiResponseText }]);

            // Speak the response
            speak(aiResponseText);

        } catch (err: any) {
            console.error('AI Interaction Error:', err);
            setError('Sorry, I am having trouble connecting right now.');
            speak("I'm sorry, I encountered an error connecting to my brain.");
        } finally {
            setIsLoading(false);
        }
    };

    const startListening = useCallback(() => {
        if (recognitionRef.current) {
            try {
                recognitionRef.current.start();
                setError(null);
            } catch (e) {
                console.error("Already started", e);
            }
        } else {
            setError('Speech recognition not supported.');
        }
    }, []);

    const stopListening = useCallback(() => {
        if (recognitionRef.current) {
            recognitionRef.current.stop();
        }
    }, []);

    const stopSpeaking = useCallback(() => {
        if (synthesisRef.current) {
            synthesisRef.current.cancel();
            setIsSpeaking(false);
        }
    }, []);

    return {
        messages,
        isListening,
        isSpeaking,
        isLoading,
        error,
        startListening,
        stopListening,
        stopSpeaking
    };
};
