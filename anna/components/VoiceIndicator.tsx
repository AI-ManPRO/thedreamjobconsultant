
import React from 'react';

interface VoiceIndicatorProps {
  isActive: boolean;
  status: 'connecting' | 'connected' | 'idle' | 'error';
}

const VoiceIndicator: React.FC<VoiceIndicatorProps> = ({ isActive, status }) => {
  return (
    <div className="relative flex items-center justify-center w-16 h-16">
      {isActive && (
        <>
          <div className="pulse-ring scale-125"></div>
          <div className="pulse-ring scale-100 opacity-40"></div>
        </>
      )}
      <div className={`z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
        status === 'connected' ? 'bg-[#d4a017] shadow-lg' :
        status === 'connecting' ? 'bg-[#2d3748] animate-pulse' :
        status === 'error' ? 'bg-red-500' :
        'bg-gray-100'
      }`}>
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-white transition-transform duration-300 ${isActive ? 'scale-125' : 'scale-100'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      </div>
    </div>
  );
};

export default VoiceIndicator;
