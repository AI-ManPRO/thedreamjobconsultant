import React, { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Home from './Home';
import Services from './Services';
import SuccessStories from './SuccessStories';
import Pricing from './Pricing';

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return <Home navigate={navigate} />;
      case 'services':
      case 'process':
        return <Services />;
      case 'stories':
        return <SuccessStories />;
      case 'pricing':
        return <Pricing />;
      default:
        return <Home navigate={navigate} />;
    }
  };

  return (
    <>
      <Navigation 
        activePage={activePage} 
        navigate={navigate} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      
      <main className="min-h-screen">
        {renderContent()}
      </main>

      <Footer navigate={navigate} />

      {/* FIXED WIDGETS */}
      <a href="https://wa.me/201023642127?text=Hello%20Ayman,%20I%20am%20interested%20in%20Reverse%20Recruiting%20Services" target="_blank" className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition hover:scale-110 animate-bounce">
        <i className="fab fa-whatsapp text-3xl"></i>
      </a>

      <button className="fixed bottom-6 right-24 z-40 bg-navy-700 text-white px-4 py-3 rounded-full shadow-lg border border-slate-600 flex items-center gap-2 hover:bg-navy-600 transition">
        <i className="fas fa-robot text-gold-400"></i>
        <span className="text-sm font-medium">Ask AI Assistant</span>
      </button>
    </>
  );
};

export default App;