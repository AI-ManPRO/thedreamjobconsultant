import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from './Logo';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { path: '/', label: 'Home' },
    {
      path: '/services',
      label: 'Services',
      dropdown: [
        { path: '/services/career-coaching', label: 'Career Coaching' },
        { path: '/services/resume-writing', label: 'Resume Writing' },
        { path: '/services/linkedin-profile', label: 'LinkedIn Optimization' },
        { path: '/services/networking', label: 'Professional Network' },
        { path: '/services/market-research', label: 'Market Research' },
        { path: '/services/application-management', label: 'Application Management' },
        { path: '/services/interview-prep', label: 'Interview Preparation' },
        { path: '/services/salary-negotiation', label: 'Salary Negotiation' },
      ]
    },
    { path: '/process', label: 'Process' },
    { path: '/case-studies', label: 'Case Studies' },
    { path: '/outplacement', label: 'Outplacement' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/blog', label: 'Blog' },
    { path: '/faq', label: 'FAQ' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

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
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <div
                key={item.path}
                className="relative group"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `relative text-sm font-medium transition-colors duration-300 flex items-center gap-1 ${isActive || (item.dropdown && location.pathname.includes(item.path))
                    ? 'text-gold-400'
                    : 'text-slate-300 hover:text-gold-400'
                    }`}
                  onClick={() => setActiveDropdown(null)}
                >
                  {item.label}
                  {item.dropdown && <i className="fas fa-chevron-down text-xs opacity-70 mt-0.5"></i>}

                  {/* Active Indicator Line (Only for main items without dropdown active, or simplistic view) */}
                  <span
                    className={`absolute -bottom-2 left-0 w-full h-0.5 bg-gold-400 transform transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100`}
                  ></span>
                </NavLink>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div
                    className={`absolute left-0 mt-2 w-64 bg-navy-900 rounded-lg shadow-xl border border-slate-700 overflow-hidden transition-all duration-300 origin-top-left ${activeDropdown === item.label ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                      }`}
                  >
                    <div className="py-2">
                      {item.dropdown.map((subItem) => (
                        <NavLink
                          key={subItem.path}
                          to={subItem.path}
                          className={({ isActive }) => `block px-4 py-3 text-sm transition-colors ${isActive ? 'text-gold-400 bg-navy-800' : 'text-slate-300 hover:text-white hover:bg-navy-800'
                            }`}
                          onClick={() => setActiveDropdown(null)}
                        >
                          {subItem.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
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
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out glass ${mobileMenuOpen ? 'max-h-[800px] opacity-100 border-t border-slate-700' : 'max-h-0 opacity-0 border-t-0 border-transparent'
          }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 overflow-y-auto max-h-[80vh]">
          {navItems.map((item) => (
            <div key={item.path}>
              <NavLink
                to={item.path}
                onClick={() => !item.dropdown && setMobileMenuOpen(false)}
                className={({ isActive }) => `block w-full text-left px-3 py-3 text-base font-medium rounded-r-md transition-all duration-200 border-l-4 ${isActive
                  ? 'bg-gold-400/10 text-gold-400 border-gold-400'
                  : 'text-slate-300 border-transparent hover:bg-slate-800 hover:text-white'
                  }`}
              >
                {item.label}
              </NavLink>

              {/* Mobile Submenu */}
              {item.dropdown && (
                <div className="pl-6 space-y-1 bg-black/20 pb-2">
                  {item.dropdown.map((subItem) => (
                    <NavLink
                      key={subItem.path}
                      to={subItem.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) => `block w-full text-left px-3 py-2 text-sm font-medium border-l-2 transition-colors ${isActive ? 'border-gold-400 text-gold-400 pl-4' : 'border-slate-700 text-slate-400 hover:text-white pl-3 hover:pl-4 hover:border-slate-500'
                        }`}
                    >
                      {subItem.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
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