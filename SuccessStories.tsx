import React from 'react';

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

export default SuccessStories;