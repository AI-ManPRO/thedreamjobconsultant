import React from 'react';
import { Link } from 'react-router-dom';

// Centralized data for Case Studies (exported so Detail page can use it or similar structure)
export const cases = [
  {
    id: 'islam-tech',
    name: 'Islam',
    role: 'Senior Laravel Developer',
    route: 'Cairo → Europe (Remote)',
    icon: 'fas fa-laptop-code',
    salaryIncrease: 'Secured €100k Annual Salary Offer',
    offers: 'Offers from Munich, UK, & Canada',
    quote: '"Within days of optimizing the profile, Islam received opportunities in Germany and the UK."',
    shortDesc: 'A strategic pivot from local freelance work to high-paying remote European contracts.'
  },
  {
    id: 'essam-construction',
    name: 'Essam',
    role: 'Construction Director',
    route: 'Qatar → Saudi Arabia (Relocation)',
    icon: 'fas fa-hard-hat',
    salaryIncrease: 'Targeted Top PMC Companies in GCC',
    offers: 'Landed Interviews for Project Director Roles',
    quote: '"We executed a 3-month strategy targeting the Hidden Job Market in Saudi and UAE."',
    shortDesc: 'Relocating a senior executive to the booming Saudi construction market through hidden networks.'
  }
];

const CaseStudies = () => (
  <section className="py-32 bg-navy-800 relative overflow-hidden min-h-screen">
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Case Studies</h2>
          <p className="text-gold-400 font-medium">Real Results. From Local Heroes to Global Executives.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">

        {cases.map((study) => (
          <Link
            to={`/case-studies/${study.id}`}
            key={study.id}
            className="block h-full"
          >
            <div className="glass h-full rounded-2xl overflow-hidden group hover:border-gold-400/50 transition duration-500 relative">

              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{study.role}</h3>
                    <p className="text-sm text-slate-400">{study.route}</p>
                  </div>
                  <i className={`${study.icon} text-4xl text-slate-700 group-hover:text-gold-400 transition`}></i>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <i className="fas fa-check-circle text-green-500"></i>
                    <span>{study.salaryIncrease}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <i className="fas fa-check-circle text-green-500"></i>
                    <span>{study.offers}</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-700">
                  <p className="italic text-slate-400 text-sm">{study.quote}</p>
                </div>
              </div>

              {/* Read Full Story - Bottom Right */}
              <div className="absolute bottom-8 right-8 text-xs font-bold text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                Read Full Story <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </Link>
        ))}

      </div>
    </div>
  </section>
);

export default CaseStudies;