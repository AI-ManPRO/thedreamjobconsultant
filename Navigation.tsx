import React from 'react';
import Logo from './Logo';

const Navigation = ({ activePage, navigate, mobileMenuOpen, setMobileMenuOpen }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'stories', label: 'Success Stories' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'about', label: 'About' },
  ];

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 glass bg-navy-900/90 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer" 
            onClick={() => navigate('home')}
          >
            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`text-sm font-medium transition ${
                  activePage === item.id 
                    ? 'text-gold-400' 
                    : 'text-slate-300 hover:text-gold-400'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <a 
              href="https://calendly.com/thedreamjobconsultant/60min/" 
              target="_blank" 
              className="gold-btn text-navy-900 px-6 py-2.5 rounded-full font-bold text-sm"
            >
              Book Strategy Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass border-t border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  navigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 text-base font-medium rounded ${
                  activePage === item.id ? 'bg-slate-800 text-gold-400' : 'text-white hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a 
              href="https://calendly.com/thedreamjobconsultant/60min/" 
              className="block px-3 py-2 text-base font-bold text-gold-400 hover:bg-slate-800 rounded"
            >
              Book Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;