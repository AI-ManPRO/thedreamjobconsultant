import React, { useState } from 'react';

const Logo = ({ className = "" }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <img 
      src="logo.png" 
     // alt="The Dream Job Consultant - Dream Job Comes True" 
     // className={`h-12 md:h-14 w-auto object-contain ${className}`}
      onError={(e) => {
        setImgError(true);
      }}
    />
  );
};

export default Logo;