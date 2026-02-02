
import React from 'react';
import VoiceWidget from './components/VoiceWidget';

const App: React.FC = () => {
  return (
    <>
      {/* 
        This is a standalone widget component. 
        When integrated into www.TheDreamJobConsultant.com, 
        it will inject the floating bubble onto every page.
      */}
      <VoiceWidget />
    </>
  );
};

export default App;
