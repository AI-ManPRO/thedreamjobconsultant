import React, { useState } from 'react';

const Logo = ({ className = "" }) => {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    // Fallback: Custom SVG that mimics the "Dream Job" Logo
    // Golden abstract figure reaching up + Teal document accent
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {/* SVG Icon */}
        <div className="w-12 h-12 flex-shrink-0">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
             {/* The Swoosh/Base */}
             <path d="M20 85 C 40 95, 80 95, 90 75" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round" />
             
             {/* The Person / Abstract Body */}
             <path d="M45 80 C 45 60, 35 40, 50 25" stroke="#F59E0B" strokeWidth="8" strokeLinecap="round" />
             {/* Head */}
             <circle cx="50" cy="15" r="8" fill="#F59E0B" />
             
             {/* The Arm Reaching Up */}
             <path d="M50 35 L 75 15" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round" />
             
             {/* The "Job/Document" (Teal Accent) */}
             <rect x="70" y="20" width="15" height="20" rx="2" fill="#2DD4BF" transform="rotate(15 70 20)" />
          </svg>
        </div>
        
        {/* Text Representation */}
        <div className="flex flex-col">
          <span className="text-white font-sans font-bold tracking-widest text-sm md:text-base uppercase leading-tight">
            The Dream Job Consultant
          </span>
          <span className="text-gold-500 font-sans font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase mt-0.5">
            Dream Job Comes True
          </span>
        </div>
      </div>
    );
  }

  return (
    <img 
      src="logo.png" 
      alt="The Dream Job Consultant - Dream Job Comes True" 
      className={`h-12 md:h-14 w-auto object-contain ${className}`}
      onError={(e) => {
        setImgError(true);
      }}
    />
  );
};

export default Logo;