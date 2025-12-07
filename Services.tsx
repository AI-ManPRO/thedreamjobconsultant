import React from 'react';

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

export default Services;