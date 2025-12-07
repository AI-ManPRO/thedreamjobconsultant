import React from 'react';

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

export default Pricing;