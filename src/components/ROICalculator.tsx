import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ROICalculator = () => {
  const [salary, setSalary] = useState(8000);
  const [months, setMonths] = useState(6);
  const [loss, setLoss] = useState(48000);
  const navigate = useNavigate();

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
              <button onClick={() => navigate('/pricing')} className="block mt-6 text-gold-400 text-sm font-bold hover:underline w-full text-center">Stop Losing Money &rarr;</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;