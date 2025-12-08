import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';

// Data strictly for the details view (mocking a database)
const caseDetails = {
  'islam-tech': {
    name: 'Islam',
    title: 'From Cairo Freelancer to Senior European Tech Lead',
    role: 'Senior Laravel Developer',
    location: 'Cairo → Remote (Germany/UK)',
    salary: '€100k+ Total Compensation',
    challenge: 'Islam was a highly skilled developer stuck in the local market salary cap. Despite having senior-level skills, his resume was cluttered with freelance projects that didn\'t communicate "Enterprise Leader" to European recruiters.',
    strategy: [
      'Reframed freelance history as "Consultancy Leadership" to show ownership and scale.',
      'Optimized LinkedIn for "Remote" and "Laravel" keywords in the DACH (Germany/Austria/Switzerland) region.',
      'Targeted CTOs directly using cold outreach scripts focusing on immediate value delivery.'
    ],
    results: [
      '3 Interviews in the first week.',
      'Offers from a Munich startup and a UK Fintech.',
      'Accepted a fully remote role with a €100k package.'
    ],
    testimonial: "I never thought a remote role in Europe was possible without relocating. The strategy changed how I viewed my own career. I'm not just a coder anymore; I'm a consultant.",
    screenshots: [
        { label: 'LinkedIn Optimization', desc: 'Profile views increased by 400% in 2 weeks.' },
        { label: 'Offer Letter', desc: 'The final signed offer with relocation optionality.' }
    ]
  },
  'essam-construction': {
    name: 'Essam',
    title: 'Relocating a Construction Director to the Saudi Boom',
    role: 'Construction Director',
    location: 'Qatar → Saudi Arabia (KSA)',
    salary: '35% Salary Increase + Relocation Package',
    challenge: 'Essam wanted to capitalize on the massive construction boom in Saudi Arabia (NEOM, Red Sea). However, his network was isolated to Qatar, and applying online to KSA giants was resulting in zero callbacks due to high competition.',
    strategy: [
      'Mapped out the top 20 PMC (Project Management Consultancy) firms involved in Giga-Projects.',
      'Revamped the CV to highlight "Mega-Project Delivery" and "Stakeholder Management" rather than just technical engineering.',
      'Initiated a networking campaign with Project Directors already on the ground in KSA.'
    ],
    results: [
      'Connected with 15 Hiring Managers on LinkedIn.',
      'Secured 4 high-level interviews bypassing the HR portal entirely.',
      'Landed a Director role with a top-tier firm in Riyadh.'
    ],
    testimonial: "The Hidden Job Market is real. I spent months applying with no luck. One week of networking changed everything.",
    screenshots: [
        { label: 'Network Growth', desc: 'Connected with key decision makers at NEOM.' },
        { label: 'Interview Invite', desc: 'Direct message invitation for an interview.' }
    ]
  }
};

const CaseStudyDetail = () => {
  const { id } = useParams();
  const study = caseDetails[id as keyof typeof caseDetails];

  if (!study) {
    return <Navigate to="/case-studies" replace />;
  }

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

            {/* Screenshots / Visuals Placeholder */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-white mb-6">Evidence</h2>
              <div className="grid md:grid-cols-2 gap-6">
                 {study.screenshots.map((shot, idx) => (
                   <div key={idx} className="group cursor-pointer">
                     <div className="bg-navy-800 border-2 border-dashed border-slate-700 rounded-xl h-48 flex flex-col items-center justify-center hover:border-gold-400 transition duration-300">
                        <i className="fas fa-image text-4xl text-slate-600 mb-3 group-hover:text-gold-400"></i>
                        <span className="text-slate-500 text-sm">{shot.label}</span>
                     </div>
                     <p className="text-xs text-center text-slate-500 mt-2">{shot.desc}</p>
                   </div>
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
    </div>
  );
};

export default CaseStudyDetail;