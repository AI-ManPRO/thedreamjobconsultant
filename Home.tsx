import React from 'react';
import { Link } from 'react-router-dom';
import ROICalculator from './ROICalculator';

const Home = () => (
  <>
    <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Abstract Background Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl filter animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-gold-400/10 blur-3xl filter"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-800 border border-slate-700 mb-8 animate-float">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Accepting New Executive Clients</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-serif font-extrabold text-white leading-tight mb-6">
          Stop Applying. <br/>
          <span className="gold-gradient-text">Start Interviewing.</span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 leading-relaxed">
          We are your **Personal Executive Talent Agent**. From the Hidden Job Market to Salary Negotiation, we execute 85% of the heavy lifting. You just close the deal.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/pricing"
            className="gold-btn px-8 py-4 rounded-lg text-navy-900 font-bold text-lg shadow-lg hover:shadow-gold-400/20 inline-block text-center"
          >
            Check Eligibility
          </Link>
          <Link 
            to="/services"
            className="px-8 py-4 rounded-lg border border-slate-600 text-white font-medium hover:bg-slate-800 transition inline-block text-center"
          >
            How It Works
          </Link>
        </div>

        {/* Trust Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/50">
          <p className="text-sm text-slate-500 uppercase tracking-widest mb-6">Trusted by Professionals Landing Roles In</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition duration-500">
            <div className="flex items-center gap-2"><i className="fab fa-aws text-3xl"></i> <span className="font-bold text-xl">Tech</span></div>
            <div className="flex items-center gap-2"><i className="fas fa-city text-3xl"></i> <span className="font-bold text-xl">Construction</span></div>
            <div className="flex items-center gap-2"><i className="fas fa-chart-line text-3xl"></i> <span className="font-bold text-xl">Finance</span></div>
            <div className="flex items-center gap-2"><i className="fab fa-google text-3xl"></i> <span className="font-bold text-xl">Corporate</span></div>
          </div>
        </div>
      </div>
    </header>

    <ROICalculator />
  </>
);

export default Home;