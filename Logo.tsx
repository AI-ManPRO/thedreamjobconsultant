import React from 'react';

const Logo = ({ className = "" }) => {
  return (
    <img 
      src="./logo.png" 
      alt="The Dream Job Consultant" 
      className={`h-12 md:h-14 w-auto object-contain ${className}`}
    />
  );
};

export default Logo;