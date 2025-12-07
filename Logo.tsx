import React, { useState } from 'react';

const Logo = ({ className = "" }) => {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    // Fallback to the original CSS/Text logo if image fails to load
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-yellow-700 rounded-lg flex items-center justify-center text-navy-900 font-bold text-xl">
            <i className="fas fa-briefcase"></i>
        </div>
        <span className="font-serif font-bold text-xl md:text-2xl text-white tracking-wide">
            The Dream Job <span className="text-gold-400">Consultant</span>
        </span>
      </div>
    );
  }

  return (
    <img 
      src="logo.png" 
      alt="The Dream Job Consultant" 
      className={`h-14 md:h-16 w-auto object-contain ${className}`}
      onError={() => setImageError(true)}
    />
  );
};

export default Logo;