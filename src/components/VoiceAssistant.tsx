
import React, { useState, useEffect, useRef } from 'react';
import { useMultimodalLive } from '../hooks/useMultimodalLive';
import { motion, AnimatePresence } from 'framer-motion';

const VoiceAssistant: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {
        isConnected,
        isListening,
        isSpeaking,
        error,
        startRecording,
        stopRecording,
        toggleConnection,
        connect
    } = useMultimodalLive();

    const toggleOpen = () => {
        setIsOpen(!isOpen);
        if (!isOpen && !isConnected) {
            connect(); // Auto-connect when opening
        }
    };

    const handleMicClick = () => {
        if (isListening) {
            stopRecording();
        } else {
            startRecording();
        }
    };

    return (
        <div className="fixed bottom-6 right-24 z-50 flex flex-col items-end pointer-events-none">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="mb-4 bg-white rounded-3xl shadow-2xl w-80 overflow-hidden pointer-events-auto border border-gray-100 font-sans"
                    >
                        {/* Header */}
                        <div className="bg-[#1e1e24] p-6 text-white flex flex-col items-center justify-center relative overlow-hidden">
                            <div className="absolute top-4 right-4">
                                <button onClick={toggleOpen} className="text-gray-400 hover:text-white transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                            </div>

                            {/* Avatar / Visualizer */}
                            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center mb-4 relative shadow-lg">
                                {/* Ripple Effect when speaking */}
                                {isSpeaking && (
                                    <>
                                        <span className="absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-20 animate-ping"></span>
                                        <span className="absolute inline-flex h-[120%] w-[120%] rounded-full bg-purple-400 opacity-10 animate-ping animation-delay-500"></span>
                                    </>
                                )}
                                <span className="text-3xl font-bold text-white z-10">AI</span>
                            </div>

                            <h3 className="text-xl font-bold mb-1">Anna</h3>
                            <p className="text-sm text-gray-400 mb-6 flex items-center gap-2">
                                <span className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                {isConnected ? "Connected & Ready" : "Disconnected"}
                            </p>

                            {/* Main Mic Button */}
                            <button
                                onClick={handleMicClick}
                                disabled={!isConnected}
                                className={`
                        w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-xl transition-all transform hover:scale-105 active:scale-95
                        ${isListening
                                        ? 'bg-red-500 text-white shadow-red-500/50'
                                        : 'bg-white text-gray-800 hover:bg-gray-100'
                                    }
                    `}
                            >
                                {isListening ? (
                                    <span className="animate-pulse">⬛</span>
                                ) : (
                                    <span>🎤</span>
                                )}
                            </button>
                            <p className="text-xs text-gray-500 mt-4 h-4">
                                {isListening ? "Listening..." : isSpeaking ? "Speaking..." : "Tap to speak"}
                            </p>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-50 text-red-600 text-xs p-3 text-center border-t border-red-100">
                                {error}
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Toggle Button */}
            <motion.button
                onClick={toggleOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="pointer-events-auto flex items-center justify-center w-16 h-16 rounded-full bg-[#1e1e24] text-white shadow-xl hover:bg-gray-800 transition-colors focus:outline-none ring-4 ring-white/50"
            >
                <span className="text-2xl">💬</span>
            </motion.button>
        </div>
    );
};

export default VoiceAssistant;
