
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/**
 * Anna AI - The Dream Job Consultant
 * Aggressive Injection Script
 */
const mountAnna = () => {
  const ROOT_ID = 'anna-voice-agent-final-v1';
  
  if (document.getElementById(ROOT_ID)) return;

  // 1. Create a debug banner to PROVE the script is running
  const debugBanner = document.createElement('div');
  debugBanner.innerText = '● Anna AI: ACTIVE';
  Object.assign(debugBanner.style, {
    position: 'fixed',
    top: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#d4a017',
    color: 'white',
    padding: '4px 12px',
    fontSize: '10px',
    fontWeight: 'bold',
    borderRadius: '0 0 8px 8px',
    zIndex: '2147483647',
    pointerEvents: 'none'
  });
  document.body.appendChild(debugBanner);

  // 2. Create the widget container
  const container = document.createElement('div');
  container.id = ROOT_ID;
  
  // Position it absolutely on top of everything
  Object.assign(container.style, {
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: 'auto',
    height: 'auto',
    zIndex: '2147483646', // Just below the debug banner
    pointerEvents: 'none',
    display: 'block'
  });
  
  document.body.appendChild(container);

  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  console.log("%c ANNA AI: System Initialized on Bottom-Left ", "color: #d4a017; font-weight: bold; border: 1px solid #d4a017; padding: 4px;");
};

// Mount as early as possible
if (document.body) {
  mountAnna();
} else {
  document.addEventListener('DOMContentLoaded', mountAnna);
}
