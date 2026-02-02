import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './Logo';
import nbeIcon from '../assets/nbe-logo.png';

const Footer = () => {
  return (
    <footer className="bg-navy-900 border-t border-slate-800 pt-16 pb-8 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-2 mb-12">
          {/* Col 1 */}
          <div>
            <Link to="/" className="cursor-pointer mb-4 inline-block">
              <Logo />
            </Link>
            <p className="text-slate-400 mt-4 leading-relaxed">
              The only Reverse Recruiting service that executes almost &gt; 85% of your job search. Specialized for Executives and Tech Professionals globally.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://www.linkedin.com/company/thedreamjobconsultant" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white"><i className="fab fa-linkedin text-xl"></i></a>
              <a href="https://www.reddit.com/user/DreamJobConsultant/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white"><i className="fab fa-reddit text-xl"></i></a>
              <a href="#" className="text-slate-400 hover:text-white"><i className="fab fa-twitter text-xl"></i></a>
              <a href="#" className="text-slate-400 hover:text-white"><i className="fab fa-facebook text-xl"></i></a>
            </div>
          </div>

          {/* Col 2 - Services (New) */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Services</h4>
            <ul className="space-y-3">
              {/*<li><Link to="/blog" className="text-slate-400 hover:text-gold-400">Blog</Link></li>*/}
              <li><Link to="/services/career-coaching" className="text-slate-400 hover:text-gold-400">Career Coaching</Link></li>
              <li><Link to="/services/resume-writing" className="text-slate-400 hover:text-gold-400">Resume Writing</Link></li>
              <li><Link to="/services/linkedin-profile" className="text-slate-400 hover:text-gold-400">LinkedIn Optimization</Link></li>
              <li><Link to="/services/networking" className="text-slate-400 hover:text-gold-400">Professional Network</Link></li>
              <li><Link to="/services/application-management" className="text-slate-400 hover:text-gold-400">Application Management</Link></li>
              <li><Link to="/services/interview-prep" className="text-slate-400 hover:text-gold-400">Interview Preparation</Link></li>
            </ul>
          </div>

          {/* Col 3 - Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/blog" className="text-slate-400 hover:text-gold-400">Blog</Link></li>
              <li><Link to="/tools-resources" className="text-slate-400 hover:text-gold-400">Tools & Resources</Link></li>
              <li><Link to="/outplacement" className="text-slate-400 hover:text-gold-400">Outplacement Services</Link></li>
              <li><Link to="/competitors-comparison" className="text-slate-400 hover:text-gold-400">Competitors Comparison</Link></li>
              {/*<li><Link to="/reviews" className="text-slate-400 hover:text-gold-400">Reviews</Link></li>*/}
              {/*<li><Link to="/testimonials" className="text-slate-400 hover:text-gold-400">Testimonials</Link></li>*/}
              <li><Link to="/sitemap" className="text-slate-400 hover:text-gold-400">Sitemap</Link></li>
              {/*<li><Link to="/affiliate-program" className="text-slate-400 hover:text-gold-400">Affiliate Program</Link></li>*/}
              {/*<li><Link to="/get-started" className="text-slate-400 hover:text-gold-400">Get Started</Link></li>*/}
              <li><Link to="/login" className="text-slate-400 hover:text-gold-400">Login</Link></li>
            </ul>
          </div>

          {/* Col 3 - Company */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-400 hover:text-gold-400">About Us</Link></li>
              <li><Link to="/case-studies" className="text-slate-400 hover:text-gold-400">Case Studies</Link></li>
              <li><Link to="/faq" className="text-slate-400 hover:text-gold-400">FAQ</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-gold-400">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 4 - Legal */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/terms-and-conditions" className="text-slate-400 hover:text-gold-400">Terms of Service</Link></li>
              <li><Link to="/privacy-policy" className="text-slate-400 hover:text-gold-400">Privacy Policy</Link></li>
              <li><Link to="/refund-policy" className="text-slate-400 hover:text-gold-400">Refund Policy</Link></li>
              <li><Link to="/cookies-policy" className="text-slate-400 hover:text-gold-400">Cookies Policy</Link></li>
            </ul>
          </div>

          {/* Col 5 - Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-1 text-slate-400">
                <i className="fas fa-envelope mt-1 text-gold-400"></i>
                info@thedreamjobconsultant.com
              </li>
              <li className="flex items-start gap-1 text-slate-400">
                <i className="fab fa-whatsapp mt-1 text-gold-400"></i>
                +2 010 2364 2127
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-center relative gap-4">
          <p className="text-slate-500 md:absolute md:left-0">&copy; 2026 The Dream Job Consultant. All Rights Reserved.</p>
          <div className="flex gap-6 transition-all duration-300">
            <img src="https://cdn.simpleicons.org/westernunion" alt="Western Union" className="h-6 object-contain" title="Western Union" />
            <img src={nbeIcon} alt="National Bank of Egypt" className="h-6 object-contain" title="National Bank of Egypt" />
            <img src="https://cdn.simpleicons.org/paypal" alt="PayPal" className="h-6 object-contain" title="PayPal" />
            <img src="https://cdn.brandfetch.io/payoneer.com/icon" alt="Payoneer" className="h-6 object-contain" title="Payoneer" />
            <img src="https://cdn.simpleicons.org/stripe" alt="Stripe" className="h-6 object-contain" title="Stripe" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;