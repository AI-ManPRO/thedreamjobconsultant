import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';

// TYPE DEFINITION
interface EvidenceItem {
  type: string;
  label: string;
  desc: string;
  image?: string; // Optional image path
}

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
    // UPDATED: Flexible Evidence Array with Image Paths
    // NOTE: Paths are simple relative filenames, expecting files in the root directory.
    evidence: [
      {
        type: 'linkedin',
        label: 'Opportunity #1: Cairo Lead',
        desc: 'Recruitment Consultant "Hossam" reaching out for a PHP-Laravel full-stack role in Cairo.',
        image: './screenshots/islam/evidence-islam-1.png'
      },
      {
        type: 'linkedin',
        label: 'Opportunity #2: Germany (€100k)',
        desc: 'Recruiter "Reece" offering Senior PHP role in Munich. Package: €75k-€100k + Relocation & Visa.',
        image: './screenshots/islam/evidence-islam-2.png'
      },
      {
        type: 'linkedin',
        label: 'Opportunity #3: Contract Role',
        desc: 'Founder "Tamer" discussing a contract-to-hire Lead Developer role for a marketing platform.',
        image: './screenshots/islam/evidence-islam-3.png'
      },
      {
        type: 'linkedin',
        label: 'Opportunity #4: HR Inquiry',
        desc: 'HR Executive "Prabu" requesting CV and WhatsApp details for immediate submission.',
        image: './screenshots/islam/evidence-islam-4.png'
      },
      {
        type: 'linkedin',
        label: 'Opportunity #5: Noida/Remote',
        desc: 'HR Executive "Jagriti" offering React/Vue profile. Islam negotiated for full remote options.',
        image: './screenshots/islam/evidence-islam-5.png'
      },
      {
        type: 'linkedin',
        label: 'Opportunity #6: UK Lead Role',
        desc: 'Recruitment Manager "Karen" discussing a London-based role. Salary negotiation around £4,000/month.',
        image: './screenshots/islam/evidence-islam-6.png'
      },
      {
        type: 'linkedin',
        label: 'Opportunity #7: Mumbai Senior',
        desc: 'IT Recruiter "Basavaraj" seeking Senior Backend Developer. Islam positioned for remote work.',
        image: './screenshots/islam/evidence-islam-7.png'
      },
      {
        type: 'linkedin',
        label: 'Opportunity #8: CEO Outreach',
        desc: 'CEO "Matthias" reached out directly: "Your tech stack is a great fit." Encouraged application.',
        image: './screenshots/islam/evidence-islam-8.png'
      },
      {
        type: 'email',
        label: 'Opportunity #9: Saudi Remote',
        desc: 'Managing Director "Soha" offering a Senior Full Stack role for a Saudi company, working remotely from Egypt.',
        image: './screenshots/islam/evidence-islam-9.png'
      },

      // Original Evidence Items (Placeholders)
      { type: 'email', label: 'Salary Negotiation Email', desc: 'Counter-offer email thread securing an additional €15k.', image: './evidence-placeholder.png' },
      { type: 'stats', label: 'LinkedIn Optimization', desc: 'Profile views increased by 400% in 2 weeks.', image: './evidence-placeholder.png' },
      { type: 'document', label: 'Offer Letter', desc: 'The final signed offer with relocation optionality.', image: './evidence-placeholder.png' }
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
    evidence: [
      { type: 'linkedin', label: 'NEOM Director Connection', desc: 'Accepted connection request and follow-up chat with a Project Director.', image: './evidence-placeholder.png' },
      { type: 'email', label: 'Interview Confirmation', desc: 'Calendar invite for a panel interview with the executive board.', image: './evidence-placeholder.png' },
      { type: 'stats', label: 'Network Growth', desc: 'Connected with key decision makers at NEOM.', image: './evidence-placeholder.png' },
      { type: 'linkedin', label: 'Interview Invite', desc: 'Direct message invitation for an interview.', image: './evidence-placeholder.png' }
    ]
  }
};

const CaseStudyDetail = () => {
  const { id } = useParams();
  const [selectedEvidence, setSelectedEvidence] = useState<EvidenceItem | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const study = caseDetails[id as keyof typeof caseDetails];

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

  // Lock body scroll when modal is open
  React.useEffect(() => {
    if (selectedEvidence) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedEvidence]);

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
                  <div
                    key={idx}
                    onClick={() => setSelectedEvidence(item)}
                    className="group cursor-pointer"
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

      {/* LIGHTBOX MODAL */}
      {selectedEvidence && (
        <div
          className="fixed inset-0 z-[100] bg-navy-900/95 backdrop-blur-md flex items-center justify-center p-4 transition-all"
          onClick={() => { setSelectedEvidence(null); setIsZoomed(false); }}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-slate-400 hover:text-white text-3xl focus:outline-none z-[110]"
            onClick={() => { setSelectedEvidence(null); setIsZoomed(false); }}
          >
            <i className="fas fa-times"></i>
          </button>

          <div
            className={`flex-1 w-full h-full flex flex-col relative transition-all duration-300 overflow-hidden pt-24 ${isZoomed ? '' : 'p-4 items-center justify-center'}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Caption & Controls (Always Visible) */}
            <div className="text-center mb-6 bg-navy-900/80 p-4 rounded-xl backdrop-blur-sm border border-slate-800/50 shrink-0 z-10 px-8 mx-4">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-2">{selectedEvidence.label}</h3>
              <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">{selectedEvidence.desc}</p>
              <div className="mt-3 text-gold-400 text-xs uppercase tracking-widest flex items-center justify-center gap-2">
                <i className="fas fa-search-plus"></i> {isZoomed ? 'Scroll to Pan • Click to Exit' : 'Click image to Zoom'}
              </div>
            </div>

            {/* Image Scroll Container */}
            <div
              className={`transition-all duration-300 flex 
                   ${isZoomed
                  ? 'w-full h-full overflow-auto cursor-zoom-out'
                  : 'w-full max-w-5xl max-h-[80vh] items-center justify-center cursor-zoom-in overflow-hidden'
                }`}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <img
                src={selectedEvidence.image || 'https://via.placeholder.com/800x600?text=Screenshot+Not+Available'}
                alt={selectedEvidence.label}
                className={`object-contain transition-all duration-300 
                     ${isZoomed
                    ? 'm-auto min-w-full min-h-full max-w-none'
                    : 'w-full h-full rounded-lg shadow-2xl border border-slate-700 bg-navy-800'
                  }`}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  const fileName = selectedEvidence.image?.split('/').pop() || 'unknown';
                  target.src = `https://placehold.co/800x400/1e293b/ef4444?text=Missing+File%0A${fileName}`;
                }}
              />
            </div>

            {/* Floating Zoom Hints if Zoomed */}
            {isZoomed && (
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-xs font-medium backdrop-blur-md pointer-events-none z-20">
                <i className="fas fa-arrows-alt mr-2"></i> Scroll to pan • Click to exit zoom
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudyDetail;