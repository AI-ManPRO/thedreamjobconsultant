import React, { useState } from 'react';

const Logo = ({ className = "" }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <img 
    // from google.colab import drive
    // rive.mount('/content/drive')
    // src="content/drive/My Drive/AI Studio/logo.png" 
      src="/logo64x64.png" 
      alt="The Dream Job Consultant - Dream Job Comes True" 
      className={`h-12 md:h-14 w-auto object-contain ${className}`}
      onError={(e) => {
        setImgError(true);
      }}
    />
  );
};

export default Logo;