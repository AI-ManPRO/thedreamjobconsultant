import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './Logo';
import nbeIcon from './nbe-logo.png';

const Footer = () => {
  return (
    <footer className="bg-navy-900 border-t border-slate-800 pt-16 pb-8 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Col 1 */}
          <div>
            <Link to="/" className="cursor-pointer mb-4 inline-block">
              <Logo />
            </Link>
            <p className="text-slate-400 mt-4 leading-relaxed">
              The only Reverse Recruiting service that executes 85% of your job search. Specialized for Executives and Tech Professionals globally.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-slate-400 hover:text-white"><i className="fab fa-linkedin text-xl"></i></a>
              <a href="#" className="text-slate-400 hover:text-white"><i className="fab fa-reddit text-xl"></i></a>
              <a href="#" className="text-slate-400 hover:text-white"><i className="fab fa-twitter text-xl"></i></a>
              <a href="#" className="text-slate-400 hover:text-white"><i className="fab fa-facebook text-xl"></i></a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-400 hover:text-gold-400">About Ayman</Link></li>
              <li><Link to="/case-studies" className="text-slate-400 hover:text-gold-400">Case Studies</Link></li>
              <li><Link to="/faq" className="text-slate-400 hover:text-gold-400">FAQ</Link></li>
              <li><a href="#" className="text-slate-400 hover:text-gold-400">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-gold-400">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-gold-400">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-gold-400">Refund Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-gold-400">Competitor Comparison</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-400">
                <i className="fas fa-envelope mt-1 text-gold-400"></i>
                info@thedreamjobconsultant.com
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <i className="fab fa-whatsapp mt-1 text-gold-400"></i>
                +2 010 2364 2127
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-center relative gap-4">
          <p className="text-slate-500 md:absolute md:left-0">&copy; 2025 The Dream Job Consultant. All Rights Reserved.</p>
          <div className="flex gap-6 transition-all duration-300">
            <img src="https://cdn.simpleicons.org/stripe" alt="Stripe" className="h-6 object-contain" title="Stripe" />
            <img src="https://cdn.simpleicons.org/paypal" alt="PayPal" className="h-6 object-contain" title="PayPal" />
            <img src="https://cdn.brandfetch.io/payoneer.com/icon" alt="Payoneer" className="h-6 object-contain" title="Payoneer" />
            <img src={nbeIcon} alt="National Bank of Egypt" className="h-6 object-contain" title="National Bank of Egypt" />
            <img src="https://cdn.simpleicons.org/westernunion" alt="Western Union" className="h-6 object-contain" title="Western Union" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;