import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from './Logo';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/process', label: 'Process' },
    { path: '/case-studies', label: 'Case Studies' },
    { path: '/faq', label: 'FAQ' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/about', label: 'About' },
  ];

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 glass bg-navy-900/90 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex-shrink-0 flex items-center cursor-pointer"
          >
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `relative text-sm font-medium transition-colors duration-300 ${
                  isActive 
                    ? 'text-gold-400' 
                    : 'text-slate-300 hover:text-gold-400'
                }`}
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {/* Active Indicator Line */}
                    <span 
                      className={`absolute -bottom-2 left-0 w-full h-0.5 bg-gold-400 transform transition-transform duration-300 origin-left ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    ></span>
                  </>
                )}
              </NavLink>
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
              className="text-slate-300 hover:text-white focus:outline-none p-2"
              aria-label="Toggle mobile menu"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`}></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu with Smooth Animation */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out glass ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100 border-t border-slate-700' : 'max-h-0 opacity-0 border-t-0 border-transparent'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => `block w-full text-left px-3 py-3 text-base font-medium rounded-r-md transition-all duration-200 border-l-4 ${
                isActive 
                  ? 'bg-gold-400/10 text-gold-400 border-gold-400' 
                  : 'text-slate-300 border-transparent hover:bg-slate-800 hover:text-white'
              }`}
            >
              {item.label}
            </NavLink>
          ))}
          <div className="mt-4 px-3 mb-2">
            <a 
              href="https://calendly.com/thedreamjobconsultant/60min/" 
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-3 text-base font-bold text-navy-900 gold-btn rounded-full shadow-lg hover:shadow-gold-400/20 transition-all transform hover:-translate-y-1"
            >
              Book Strategy Call
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;