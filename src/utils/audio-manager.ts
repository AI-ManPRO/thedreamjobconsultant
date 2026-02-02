
export class AudioRecorder {
    private audioContext: AudioContext | null = null;
    private stream: MediaStream | null = null;
    private processor: ScriptProcessorNode | null = null;
    private input: MediaStreamAudioSourceNode | null = null;
    private onAudioData: (data: string) => void;

    constructor(onAudioData: (data: string) => void) {
        this.onAudioData = onAudioData;
    }

    async start() {
        this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({
            sampleRate: 16000, // Gemini expects 16kHz
        });

        this.stream = await navigator.mediaDevices.getUserMedia({
            audio: {
                channelCount: 1,
                sampleRate: 16000,
            },
        });

        this.input = this.audioContext.createMediaStreamSource(this.stream);

        // Use ScriptProcessor for broad compatibility (though deprecated, it's easier than Worklets for bundling without config)
        this.processor = this.audioContext.createScriptProcessor(4096, 1, 1);

        this.processor.onaudioprocess = (e) => {
            const inputData = e.inputBuffer.getChannelData(0);
            // Convert Float32 to Int16 PCM
            const pcmData = this.floatTo16BitPCM(inputData);
            const base64Data = this.arrayBufferToBase64(pcmData);
            this.onAudioData(base64Data);
        };

        this.input.connect(this.processor);
        this.processor.connect(this.audioContext.destination);
    }

    stop() {
        if (this.processor) {
            this.processor.disconnect();
            this.processor = null;
        }
        if (this.input) {
            this.input.disconnect();
            this.input = null;
        }
        if (this.stream) {
            this.stream.getTracks().forEach(track => track.stop());
            this.stream = null;
        }
        if (this.audioContext) {
            this.audioContext.close();
            this.audioContext = null;
        }
    }

    private floatTo16BitPCM(float32Array: Float32Array): ArrayBuffer {
        const buffer = new ArrayBuffer(float32Array.length * 2);
        const view = new DataView(buffer);
        for (let i = 0; i < float32Array.length; i++) {
            let s = Math.max(-1, Math.min(1, float32Array[i]));
            view.setInt16(i * 2, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
        }
        return buffer;
    }

    private arrayBufferToBase64(buffer: ArrayBuffer): string {
        let binary = '';
        const bytes = new Uint8Array(buffer);
        const len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    }
}

export class AudioStreamer {
    private audioContext: AudioContext;
    private audioQueue: string[] = [];
    private isPlaying = false;
    private scheduledTime = 0;

    constructor() {
        this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({
            sampleRate: 24000 // Gemini Output is 24kHz
        });
    }

    addPCM16(base64Data: string) {
        this.audioQueue.push(base64Data);
        this.processQueue();
    }

    private async processQueue() {
        if (this.isPlaying || this.audioQueue.length === 0) return;

        this.isPlaying = true;

        while (this.audioQueue.length > 0) {
            const chunk = this.audioQueue.shift();
            if (!chunk) continue;

            const audioBuffer = await this.base64ToAudioBuffer(chunk);
            this.playBuffer(audioBuffer);
        }

        this.isPlaying = false;
    }

    private async base64ToAudioBuffer(base64: string): Promise<AudioBuffer> {
        const binaryString = window.atob(base64);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }

        // Int16 -> Float32
        const int16Array = new Int16Array(bytes.buffer);
        const float32Array = new Float32Array(int16Array.length);
        for (let i = 0; i < int16Array.length; i++) {
            float32Array[i] = int16Array[i] / 32768.0;
        }

        const audioBuffer = this.audioContext.createBuffer(1, float32Array.length, 24000);
        audioBuffer.getChannelData(0).set(float32Array);
        return audioBuffer;
    }

    private playBuffer(buffer: AudioBuffer) {
        const source = this.audioContext.createBufferSource();
        source.buffer = buffer;
        source.connect(this.audioContext.destination);

        const currentTime = this.audioContext.currentTime;
        // ensure we schedule in the future
        if (this.scheduledTime < currentTime) {
            this.scheduledTime = currentTime;
        }
        source.start(this.scheduledTime);
        this.scheduledTime += buffer.duration;
    }

    stop() {
        this.audioQueue = [];
        this.scheduledTime = 0;
        this.audioContext.close().then(() => {
            this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({
                sampleRate: 24000
            });
        });
    }
}
