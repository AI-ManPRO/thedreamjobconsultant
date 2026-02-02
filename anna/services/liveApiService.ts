
import { GoogleGenAI, Modality, LiveServerMessage } from '@google/genai';
import { ANNA_SYSTEM_PROMPT, VOICE_NAME, SAMPLE_RATE_IN, SAMPLE_RATE_OUT } from '../constants';
import { decode, decodeAudioData, createPcmBlob } from './audioUtils';

export class VoiceSession {
  private ai: any;
  private session: any;
  private inputAudioContext: AudioContext | null = null;
  private outputAudioContext: AudioContext | null = null;
  private nextStartTime = 0;
  private sources = new Set<AudioBufferSourceNode>();
  private micStream: MediaStream | null = null;
  private isDisposed = false;

  constructor(
    private onTranscript: (text: string, role: 'user' | 'agent') => void,
    private onError: (error: string) => void,
    private onStatusChange: (connected: boolean) => void
  ) {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async start() {
    try {
      this.micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.inputAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: SAMPLE_RATE_IN });
      this.outputAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: SAMPLE_RATE_OUT });

      const sessionPromise = this.ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-12-2025',
        callbacks: {
          onopen: () => {
            if (this.isDisposed) return;
            this.onStatusChange(true);
            this.setupMicrophone(sessionPromise);
          },
          onmessage: async (message: LiveServerMessage) => {
            if (this.isDisposed) return;
            this.handleMessage(message);
          },
          onerror: (e: any) => {
            console.error('Gemini Live API Error:', e);
            if (!this.isDisposed) {
              this.onError('Connection error occurred.');
            }
          },
          onclose: () => {
            if (this.isDisposed) return;
            this.onStatusChange(false);
            this.cleanup();
          },
        },
        config: {
          responseModalities: [Modality.AUDIO],
          systemInstruction: ANNA_SYSTEM_PROMPT,
          // CRITICAL: This tool allows Anna to "browse" your website for every answer.
          tools: [{ googleSearch: {} }],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: VOICE_NAME } },
          },
          inputAudioTranscription: {},
          outputAudioTranscription: {},
        },
      });

      this.session = await sessionPromise;
    } catch (err) {
      if (!this.isDisposed) {
        this.onError('Could not start voice session. Check microphone permissions.');
        this.cleanup();
      }
      console.error(err);
    }
  }

  private setupMicrophone(sessionPromise: Promise<any>) {
    if (!this.inputAudioContext || !this.micStream) return;

    const source = this.inputAudioContext.createMediaStreamSource(this.micStream);
    const scriptProcessor = this.inputAudioContext.createScriptProcessor(4096, 1, 1);

    scriptProcessor.onaudioprocess = (audioProcessingEvent) => {
      if (this.isDisposed) return;
      const inputData = audioProcessingEvent.inputBuffer.getChannelData(0);
      const pcmBase64 = createPcmBlob(inputData);

      sessionPromise.then((session) => {
        if (this.isDisposed) return;
        session.sendRealtimeInput({
          media: {
            data: pcmBase64,
            mimeType: `audio/pcm;rate=${SAMPLE_RATE_IN}`,
          },
        });
      });
    };

    source.connect(scriptProcessor);
    scriptProcessor.connect(this.inputAudioContext.destination);
  }

  private async handleMessage(message: LiveServerMessage) {
    if (this.isDisposed) return;

    const audioData = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
    if (audioData && this.outputAudioContext) {
      this.nextStartTime = Math.max(this.nextStartTime, this.outputAudioContext.currentTime);
      const audioBuffer = await decodeAudioData(
        decode(audioData),
        this.outputAudioContext,
        SAMPLE_RATE_OUT,
        1
      );
      const source = this.outputAudioContext.createBufferSource();
      source.buffer = audioBuffer;
      const gainNode = this.outputAudioContext.createGain();
      source.connect(gainNode);
      gainNode.connect(this.outputAudioContext.destination);

      source.addEventListener('ended', () => {
        this.sources.delete(source);
      });

      source.start(this.nextStartTime);
      this.nextStartTime += audioBuffer.duration;
      this.sources.add(source);
    }

    if (message.serverContent?.inputTranscription) {
      this.onTranscript(message.serverContent.inputTranscription.text, 'user');
    }
    if (message.serverContent?.outputTranscription) {
      this.onTranscript(message.serverContent.outputTranscription.text, 'agent');
    }

    if (message.serverContent?.interrupted) {
      this.stopCurrentAudio();
    }
  }

  private stopCurrentAudio() {
    this.sources.forEach((source) => {
      try { source.stop(); } catch (e) {}
    });
    this.sources.clear();
    this.nextStartTime = 0;
  }

  stop() {
    if (this.isDisposed) return;
    if (this.session) {
      try {
        this.session.close();
      } catch (e) {
        console.warn('Error closing session:', e);
      }
    }
    this.cleanup();
  }

  private cleanup() {
    if (this.isDisposed) return;
    this.isDisposed = true;

    this.stopCurrentAudio();
    
    if (this.micStream) {
      this.micStream.getTracks().forEach(track => track.stop());
      this.micStream = null;
    }
    
    if (this.inputAudioContext) {
      if (this.inputAudioContext.state !== 'closed') {
        this.inputAudioContext.close().catch(err => console.error('Error closing input audio context:', err));
      }
      this.inputAudioContext = null;
    }
    
    if (this.outputAudioContext) {
      if (this.outputAudioContext.state !== 'closed') {
        this.outputAudioContext.close().catch(err => console.error('Error closing output audio context:', err));
      }
      this.outputAudioContext = null;
    }
  }
}
