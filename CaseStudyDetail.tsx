import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { caseStudiesData, EvidenceItem } from './data';



const CaseStudyDetail = () => {
  const { id } = useParams();

  const study = caseStudiesData[id as keyof typeof caseStudiesData];

  if (!study) {
    return <Navigate to="/case-studies" replace />;
  }

  // Helper to render icon based on evidence type
  const renderIcon = (type: string) => {
    switch (type) {
      case 'email': return <i className="fas fa-envelope-open-text text-4xl text-slate-600 mb-3 group-hover:text-gold-400 transition-colors"></i>;
      case 'linkedin': return <i className="fab fa-linkedin-in text-4xl text-slate-600 mb-3 group-hover:text-gold-400 transition-colors"></i>;
      case 'document': return <i className="fas fa-file-contract text-4xl text-slate-600 mb-3 group-hover:text-gold-400 transition-colors"></i>;
      case 'stats': default: return <i className="fas fa-chart-line text-4xl text-slate-600 mb-3 group-hover:text-gold-400 transition-colors"></i>;
    }
  };

  return (
    <div className="bg-navy-900 min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb / Back */}
        <Link to="/case-studies" className="inline-flex items-center gap-2 text-gold-400 hover:text-white mb-8 transition">
          <i className="fas fa-arrow-left"></i> Back to Case Studies
        </Link>

        {/* Header */}
        <div className="glass rounded-2xl p-8 md:p-12 border border-slate-700 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-navy-900 px-3 py-1 rounded-full border border-slate-700 mb-6 inline-block">
            {study.role}
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            {study.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-sm md:text-base text-slate-300 border-t border-slate-800 pt-6">
            <div className="flex items-center gap-2">
              <i className="fas fa-map-marker-alt text-gold-400"></i> {study.location}
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-money-bill-wave text-gold-400"></i> <span className="font-bold text-white">{study.salary}</span>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Story */}
          <div className="md:col-span-2 space-y-12">

            {/* Challenge */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-white mb-4">The Challenge</h2>
              <p className="text-slate-400 leading-relaxed text-lg">{study.challenge}</p>
            </div>

            {/* Strategy */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-white mb-4">The Strategy</h2>
              <ul className="space-y-4">
                {study.strategy.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 bg-navy-800/50 p-4 rounded-lg border border-slate-800">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-400/10 text-gold-400 flex items-center justify-center text-xs font-bold">{idx + 1}</span>
                    <p className="text-slate-300">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-white mb-4">The Outcome</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {study.results.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-300">
                    <i className="fas fa-check-circle text-green-500 text-xl"></i>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Evidence Section */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-white mb-6">Evidence & Opportunities</h2>
              <p className="text-sm text-slate-400 mb-6 -mt-4">Click on any box below to view the actual screenshot/proof.</p>

              <div className="grid md:grid-cols-2 gap-6">
                {study.evidence.map((item, idx) => (
                  <Link
                    key={idx}
                    to={`/case-studies/${id}/evidence/${item.id}`}
                    className="group cursor-pointer block"
                  >
                    <div className="relative overflow-hidden bg-navy-800 border-2 border-dashed border-slate-700 rounded-xl h-48 flex flex-col items-center justify-center hover:border-gold-400 transition duration-300 px-4 text-center group-hover:border-solid">

                      {/* Background Thumbnail with Overlay */}
                      {item.image && (
                        <>
                          <img
                            src={item.image}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-all duration-500 group-hover:scale-105 filter blur-[1px]"
                          />
                          <div className="absolute inset-0 bg-navy-900/40"></div>
                        </>
                      )}

                      {/* Content */}
                      <div className="relative z-10 flex flex-col items-center w-full">
                        {renderIcon(item.type)}
                        <span className="text-slate-300 text-sm font-bold group-hover:text-white transition-colors block mb-1 drop-shadow-md">{item.label}</span>
                        <p className="text-xs text-slate-400 line-clamp-2 drop-shadow-sm">{item.desc}</p>
                      </div>

                      {/* Hover Overlay Button */}
                      <div className="absolute inset-0 bg-navy-900/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm z-20">
                        <span className="text-gold-400 font-bold border border-gold-400 px-4 py-2 rounded-full text-sm shadow-lg bg-navy-900/50">View Screenshot</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-xl border border-gold-400/30 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-24 h-24 bg-gold-400 blur-2xl opacity-20 rounded-full"></div>
              <i className="fas fa-quote-left text-4xl text-gold-400 mb-6 opacity-50 block mx-auto"></i>
              <p className="text-white italic leading-relaxed mb-6">"{study.testimonial}"</p>
              <div className="font-bold text-gold-400">— {study.name}</div>
            </div>

            <div className="bg-navy-800 p-6 rounded-xl border border-slate-700 text-center">
              <h3 className="font-bold text-white mb-2">Want similar results?</h3>
              <p className="text-slate-400 text-sm mb-6">Let's discuss how we can apply this strategy to your career.</p>
              <a
                href="https://calendly.com/thedreamjobconsultant/60min/"
                target="_blank"
                className="gold-btn block w-full py-3 rounded-lg text-navy-900 font-bold"
              >
                Book Strategy Call
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* LIGHTBOX MODAL - VERTICAL STACK PATTERN */}

    </div>
  );
};

export default CaseStudyDetail;