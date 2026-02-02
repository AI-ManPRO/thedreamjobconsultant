
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { VoiceSession } from '../services/liveApiService';
import VoiceIndicator from './VoiceIndicator';
import { ConnectionStatus } from '../types';

const VoiceWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<ConnectionStatus>(ConnectionStatus.DISCONNECTED);
  const [transcript, setTranscript] = useState<{ text: string, role: 'user' | 'agent' }[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const sessionRef = useRef<VoiceSession | null>(null);
  const transcriptEndRef = useRef<HTMLDivElement>(null);

  const brandGold = '#d4a017';
  const brandNavy = '#2d3748';

  useEffect(() => {
    if (isOpen) {
      transcriptEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [transcript, isOpen]);

  const handleTranscript = useCallback((text: string, role: 'user' | 'agent') => {
    setTranscript(prev => [...prev, { text, role }]);
  }, []);

  const handleError = useCallback((error: string) => {
    setErrorMessage(error);
    setStatus(ConnectionStatus.ERROR);
  }, []);

  const handleStatusChange = useCallback((connected: boolean) => {
    setStatus(connected ? ConnectionStatus.CONNECTED : ConnectionStatus.DISCONNECTED);
  }, []);

  const toggleSession = async () => {
    if (status === ConnectionStatus.CONNECTED || status === ConnectionStatus.CONNECTING) {
      sessionRef.current?.stop();
      sessionRef.current = null;
      setStatus(ConnectionStatus.DISCONNECTED);
    } else {
      setErrorMessage(null);
      setStatus(ConnectionStatus.CONNECTING);
      const session = new VoiceSession(handleTranscript, handleError, handleStatusChange);
      sessionRef.current = session;
      await session.start();
    }
  };

  return (
    <div className="fixed bottom-6 left-6 flex flex-col items-start pointer-events-none font-sans" style={{ zIndex: 99999999 }}>
      {/* Expanded Chat Dialog */}
      {isOpen && (
        <div className="bg-white w-[300px] md:w-[320px] rounded-[2rem] shadow-[0_30px_80px_rgba(0,0,0,0.3)] overflow-hidden border border-gray-100 flex flex-col mb-4 pointer-events-auto animate-in slide-in-from-left-8 fade-in duration-500">
          {/* Header */}
          <div className="p-4 bg-[#2d3748] text-white flex justify-between items-center relative">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center shadow-md transform -rotate-3">
                <span className="text-xl font-black" style={{ color: brandGold }}>A</span>
              </div>
              <div>
                <h3 className="font-bold text-lg tracking-tight leading-none">Anna AI</h3>
                <p className="text-[8px] uppercase tracking-[0.15em] text-gray-400 font-bold mt-1 opacity-80">Explore Website</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="bg-white/5 hover:bg-white/20 p-2 rounded-full transition-all active:scale-90"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Conversation History */}
          <div className="flex-1 min-h-[250px] max-h-[380px] overflow-y-auto p-4 bg-[#f8f9fb] flex flex-col space-y-4">
            {transcript.length === 0 && (
              <div className="text-center py-8 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-4">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={brandGold}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h4 className="text-gray-900 font-bold text-base mb-1 italic">"Start Interviewing."</h4>
                <p className="text-gray-500 text-xs max-w-[180px]">I'm Anna. Click below to explore our services.</p>
              </div>
            )}
            {transcript.map((item, idx) => (
              <div key={idx} className={`flex ${item.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2`}>
                <div className={`max-w-[90%] rounded-2xl px-4 py-2.5 text-xs shadow-sm ${
                  item.role === 'user' 
                    ? 'text-white rounded-tr-none font-medium' 
                    : 'bg-white text-gray-800 rounded-tl-none border border-gray-100 leading-relaxed'
                }`} style={{ backgroundColor: item.role === 'user' ? brandGold : undefined }}>
                  {item.text}
                </div>
              </div>
            ))}
            <div ref={transcriptEndRef} />
          </div>

          {/* Controls */}
          <div className="p-5 bg-white border-t border-gray-100 flex flex-col items-center">
            <VoiceIndicator 
              isActive={status === ConnectionStatus.CONNECTED} 
              status={status === ConnectionStatus.CONNECTED ? 'connected' : status === ConnectionStatus.CONNECTING ? 'connecting' : status === ConnectionStatus.ERROR ? 'error' : 'idle'}
            />
            
            <button
              onClick={toggleSession}
              disabled={status === ConnectionStatus.CONNECTING}
              className={`w-full mt-5 py-3 rounded-2xl font-bold text-sm transition-all shadow-xl transform active:scale-95 ${
                status === ConnectionStatus.CONNECTED 
                  ? 'bg-red-500 text-white' 
                  : 'text-white hover:-translate-y-0.5'
              }`}
              style={{ backgroundColor: status === ConnectionStatus.CONNECTED ? undefined : brandGold }}
            >
              {status === ConnectionStatus.CONNECTED ? 'End Session' : 
               status === ConnectionStatus.CONNECTING ? 'Connecting...' : 'Talk to Anna AI'}
            </button>
            {errorMessage && <p className="mt-2 text-[10px] text-red-500 font-medium">{errorMessage}</p>}
          </div>
        </div>
      )}

      {/* Main Floating Button (Trigger) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`pointer-events-auto w-14 h-14 rounded-full flex items-center justify-center shadow-[0_15px_40px_rgba(212,160,23,0.4)] transition-all duration-300 transform hover:scale-110 active:scale-95 ${!isOpen ? 'anna-pulse' : ''}`}
        style={{ backgroundColor: isOpen ? 'white' : brandGold }}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={brandGold}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        ) : (
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
            <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-white border-2 border-[#d4a017] animate-ping"></div>
          </div>
        )}
      </button>
    </div>
  );
};

export default VoiceWidget;
