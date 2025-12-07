import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// --- COMPONENTS ---

// Smart Logo Component that handles missing images gracefully
const Logo = ({ className = "" }) => {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    // Fallback to the original CSS/Text logo if image fails to load
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-yellow-700 rounded-lg flex items-center justify-center text-navy-900 font-bold text-xl">
            <i className="fas fa-briefcase"></i>
        </div>
        <span className="font-serif font-bold text-xl md:text-2xl text-white tracking-wide">
            The Dream Job <span className="text-gold-400">Consultant</span>
        </span>
      </div>
    );
  }

  return (
    <img 
      src="logo.png" 
      alt="The Dream Job Consultant" 
      className={`h-14 md:h-16 w-auto object-contain ${className}`}
      onError={() => setImageError(true)}
    />
  );
};

const Navigation = ({ activePage, navigate, mobileMenuOpen, setMobileMenuOpen }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'stories', label: 'Success Stories' },
    { id: 'pricing', label: 'Pricing' },
  ];

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 glass bg-navy-900/90 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer" 
            onClick={() => navigate('home')}
          >
            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.slice(1).map((item) => (
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
            {navItems.slice(1).map((item) => (
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

const Footer = ({ navigate }) => {
  return (
    <footer className="bg-navy-900 border-t border-slate-800 pt-16 pb-8 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Col 1 */}
          <div>
            <div onClick={() => navigate('home')} className="cursor-pointer mb-4 inline-block">
               <Logo />
            </div>
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
              <li><button onClick={() => navigate('home')} className="text-slate-400 hover:text-gold-400">About Ayman</button></li>
              <li><button onClick={() => navigate('stories')} className="text-slate-400 hover:text-gold-400">Case Studies</button></li>
              <li><a href="#" className="text-slate-400 hover:text-gold-400">Contact Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-gold-400">Blog / Insights</a></li>
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
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500">&copy; 2025 The Dream Job Consultant. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0 opacity-50">
            <i className="fab fa-stripe text-2xl text-white"></i>
            <i className="fab fa-paypal text-2xl text-white"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ROICalculator = () => {
  const [salary, setSalary] = useState(8000);
  const [months, setMonths] = useState(6);
  const [loss, setLoss] = useState(48000);

  useEffect(() => {
    setLoss(salary * months);
  }, [salary, months]);

  return (
    <section className="py-20 bg-navy-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">The Cost of Waiting</h2>
          <p className="text-slate-400 mt-2">Calculate how much money you lose every month by searching manually.</p>
        </div>

        <div className="glass rounded-2xl p-8 md:p-12 shadow-2xl border-t border-gold-400/20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Controls */}
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Target Monthly Salary</label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-slate-400">$</span>
                  <input 
                    type="number" 
                    value={salary}
                    onChange={(e) => setSalary(Number(e.target.value))}
                    className="w-full bg-navy-900 border border-slate-600 rounded-lg py-3 pl-8 pr-4 text-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Months Searching Alone (Avg: 6)</label>
                <div className="flex items-center gap-4">
                  <input 
                    type="range" 
                    min="1" 
                    max="12" 
                    value={months}
                    onChange={(e) => setMonths(Number(e.target.value))}
                    className="w-full" 
                  />
                  <span className="font-bold text-gold-400 w-12 text-center">{months}</span>
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="text-center bg-navy-900/50 rounded-xl p-6 border border-red-500/20">
              <p className="text-sm text-slate-400 uppercase tracking-widest">Potential Income Lost</p>
              <div className="text-5xl font-bold text-red-500 my-4">${loss.toLocaleString()}</div>
              <p className="text-xs text-slate-500">Based on standard manual job search duration vs. our 2-3 month average.</p>
              <button onClick={() => document.getElementById('pricing-link')?.click()} className="block mt-6 text-gold-400 text-sm font-bold hover:underline">Stop Losing Money &rarr;</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- PAGES ---

const Home = ({ navigate }) => (
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
          <button 
            onClick={() => navigate('pricing')}
            className="gold-btn px-8 py-4 rounded-lg text-navy-900 font-bold text-lg shadow-lg hover:shadow-gold-400/20"
          >
            Check Eligibility
          </button>
          <button 
            onClick={() => navigate('services')}
            className="px-8 py-4 rounded-lg border border-slate-600 text-white font-medium hover:bg-slate-800 transition"
          >
            How It Works
          </button>
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

const Services = () => (
  <section className="py-32 px-4 min-h-screen">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-white">We Do The Heavy Lifting</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">Most services give you advice. We give you execution. Here is what we handle for you.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="glass p-8 rounded-xl hover:bg-navy-800 transition duration-300 group">
          <div className="w-14 h-14 bg-navy-700 rounded-lg flex items-center justify-center mb-6 text-gold-400 text-2xl group-hover:scale-110 transition">
            <i className="fas fa-file-contract"></i>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Branding & Resume</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            We rewrite your resume and cover letter from scratch to pass ATS bots and hook C-level executives instantly.
          </p>
        </div>

        {/* Card 2 */}
        <div className="glass p-8 rounded-xl hover:bg-navy-800 transition duration-300 group border border-gold-400/20 relative">
          <span className="absolute top-4 right-4 text-xs bg-gold-400 text-navy-900 font-bold px-2 py-1 rounded">Most Critical</span>
          <div className="w-14 h-14 bg-navy-700 rounded-lg flex items-center justify-center mb-6 text-gold-400 text-2xl group-hover:scale-110 transition">
            <i className="fas fa-user-secret"></i>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Hidden Job Market</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            80% of executive jobs aren't posted. We network with Decision Makers, CTOs, and Hiring Managers on your behalf.
          </p>
        </div>

        {/* Card 3 */}
        <div className="glass p-8 rounded-xl hover:bg-navy-800 transition duration-300 group">
          <div className="w-14 h-14 bg-navy-700 rounded-lg flex items-center justify-center mb-6 text-gold-400 text-2xl group-hover:scale-110 transition">
            <i className="fas fa-handshake"></i>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Negotiation Agent</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            We don't just get you the offer; we advise on the salary negotiation to ensure you are paid your true market value.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const SuccessStories = () => (
  <section className="py-32 bg-navy-800 relative overflow-hidden min-h-screen">
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Real Results</h2>
          <p className="text-gold-400 font-medium">From Local Heroes to Global Executives.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Case Study 1: Islam (Tech) */}
        <div className="glass rounded-2xl overflow-hidden group hover:border-gold-400/50 transition duration-500">
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white">Senior Laravel Developer</h3>
                <p className="text-sm text-slate-400">Cairo &rarr; Europe (Remote)</p>
              </div>
              <i className="fas fa-laptop-code text-4xl text-slate-700 group-hover:text-gold-400 transition"></i>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <i className="fas fa-check-circle text-green-500"></i>
                <span>Secured €100k Annual Salary Offer</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <i className="fas fa-check-circle text-green-500"></i>
                <span>Offers from Munich, UK, & Canada</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-700">
              <p className="italic text-slate-400 text-sm">"Within days of optimizing the profile, Islam received opportunities in Germany and the UK."</p>
            </div>
          </div>
        </div>

        {/* Case Study 2: Essam (Construction) */}
        <div className="glass rounded-2xl overflow-hidden group hover:border-gold-400/50 transition duration-500">
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white">Construction Director</h3>
                <p className="text-sm text-slate-400">Qatar &rarr; Saudi Arabia (Relocation)</p>
              </div>
              <i className="fas fa-hard-hat text-4xl text-slate-700 group-hover:text-gold-400 transition"></i>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <i className="fas fa-check-circle text-green-500"></i>
                <span>Targeted Top PMC Companies in GCC</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <i className="fas fa-check-circle text-green-500"></i>
                <span>Landed Interviews for Project Director Roles</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-700">
              <p className="italic text-slate-400 text-sm">"We executed a 3-month strategy targeting the Hidden Job Market in Saudi and UAE."</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section className="py-32 px-4 min-h-screen">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Investment Models</h2>
        <p className="text-slate-400 mt-4">Choose the model that fits your risk profile.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* Plan 1: Starter */}
        <div className="glass p-8 rounded-xl border border-slate-700 flex flex-col">
          <h3 className="text-xl font-bold text-white">Tiered Services</h3>
          <div className="text-3xl font-serif font-bold text-white mt-4">$500 <span className="text-sm text-slate-500 font-sans font-normal">/ service</span></div>
          <p className="text-sm text-slate-400 mt-4">A la carte services for specific needs.</p>
          <ul className="space-y-4 mt-8 mb-8 flex-1">
            <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> Resume Writing</li>
            <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> LinkedIn Optimization</li>
            <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-times text-slate-600"></i> No Applications</li>
            <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-times text-slate-600"></i> No Networking</li>
          </ul>
          <a href="#" className="w-full py-3 border border-slate-600 rounded-lg text-center text-white font-bold hover:bg-slate-800">Select</a>
        </div>

        {/* Plan 2: The PARTNERSHIP */}
        <div className="glass p-8 rounded-xl border-2 border-gold-400 relative transform md:-translate-y-4 shadow-2xl shadow-gold-400/10 flex flex-col bg-navy-800">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gold-400 text-navy-900 px-4 py-1 text-xs font-bold uppercase rounded shadow-lg">Most Popular</div>
          <h3 className="text-xl font-bold text-white">Partnership Model</h3>
          <div className="text-3xl font-serif font-bold text-white mt-4">$1,000 <span className="text-sm text-slate-500 font-sans font-normal">+ 1 Month Salary</span></div>
          <p className="text-sm text-slate-400 mt-4">We share the risk. We only win when you win.</p>
          <ul className="space-y-4 mt-8 mb-8 flex-1">
            <li className="flex items-center gap-3 text-sm text-white font-medium"><i className="fas fa-check text-gold-400"></i> <strong>Full Exclusivity</strong></li>
            <li className="flex items-center gap-3 text-sm text-white"><i className="fas fa-check text-gold-400"></i> We Manage Your Inbox</li>
            <li className="flex items-center gap-3 text-sm text-white"><i className="fas fa-check text-gold-400"></i> Unlimited Applications</li>
            <li className="flex items-center gap-3 text-sm text-white"><i className="fas fa-check text-gold-400"></i> Networking & Negotiation</li>
          </ul>
          <a href="https://calendly.com/thedreamjobconsultant/60min/" className="w-full py-3 gold-btn rounded-lg text-center text-navy-900 font-bold">Apply for Partnership</a>
        </div>

        {/* Plan 3: Standard */}
        <div className="glass p-8 rounded-xl border border-slate-700 flex flex-col">
          <h3 className="text-xl font-bold text-white">Flat Fee</h3>
          <div className="text-3xl font-serif font-bold text-white mt-4">$3,000 <span className="text-sm text-slate-500 font-sans font-normal">/ one time</span></div>
          <p className="text-sm text-slate-400 mt-4">Full service without the salary percentage.</p>
          <ul className="space-y-4 mt-8 mb-8 flex-1">
            <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> LinkedIn Control Not Required</li>
            <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> Full Job Search</li>
            <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> Interview Prep</li>
            <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-times text-slate-600"></i> No Long Term Exclusivity</li>
          </ul>
          <a href="#" className="w-full py-3 border border-slate-600 rounded-lg text-center text-white font-bold hover:bg-slate-800">Select</a>
        </div>

      </div>
    </div>
  </section>
);

// --- MAIN APP ---

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
      case 'process': // Sharing content for now based on original HTML structure
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

const root = createRoot(document.getElementById('root'));
root.render(<App />);