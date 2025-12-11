import React from 'react';
import aymanProfile from './ayman-profile.png';

const AboutUs = () => {
  return (
    <div className="bg-navy-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-gold-400/5 blur-3xl filter"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            The Agent for <span className="text-gold-400">Talent</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            In a world where companies have recruiters, headhunters, and HR departments fighting for their interests... who is fighting for yours?
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-2xl p-8 md:p-16 border-t border-gold-400/20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-white mb-6">Our Mission</h2>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  The traditional job search model is broken. Highly qualified executives spend hours tweaking resumes and filling out portals, only to be ghosted by automated systems.
                </p>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  **The Dream Job Consultant** flips the script. We are a Premium Reverse Recruiting firm. We don't recruit you for a company; we recruit companies for you.
                </p>
                <p className="text-gold-400 font-bold italic">
                  "Our goal is to ensure you never apply for a job again. You interview, you negotiate, you accept."
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gold-400 blur-[100px] opacity-20"></div>
                <div className="relative bg-navy-800 p-8 rounded-xl border border-slate-700">
                  <div className="flex items-start gap-4 mb-6">
                    <i className="fas fa-bullseye text-3xl text-gold-400"></i>
                    <div>
                      <h3 className="text-xl font-bold text-white">Precision Targeting</h3>
                      <p className="text-sm text-slate-400 mt-2">We bypass HR gatekeepers and go straight to the C-Suite and Decision Makers.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <i className="fas fa-shield-alt text-3xl text-gold-400"></i>
                    <div>
                      <h3 className="text-xl font-bold text-white">Executive Advocacy</h3>
                      <p className="text-sm text-slate-400 mt-2">We negotiate your salary, benefits, and equity as your dedicated agent.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-4 bg-navy-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 border-2 border-gold-400 rounded-full animate-spin-slow opacity-20"></div>
                <div className="absolute inset-2 border border-slate-600 rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center bg-navy-700 rounded-full overflow-hidden shadow-2xl">
                  <img src={aymanProfile} alt="Ayman - Founder" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-4 right-4 bg-gold-400 text-navy-900 px-4 py-1 rounded-full font-bold text-sm shadow-lg">
                  Founder
                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Meet <span className="text-gold-400">Ayman</span></h2>
              <h3 className="text-xl text-slate-300 mb-6 font-medium">Executive Career Strategist & Negotiation Expert</h3>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  With years of experience in the recruitment landscape, Ayman realized that the most talented professionals were often the worst at selling themselves—or simply didn't have the time to treat job hunting as a full-time job.
                </p>
                <p>
                  He founded The Dream Job Consultant with a singular vision: to bring the "Sports Agent" model to the corporate world. Just as athletes have agents to handle contracts and team placement, executives deserve an expert to handle their career trajectory.
                </p>
                <p>
                  Ayman specializes in the **Hidden Job Market**, placing professionals in roles that are never advertised publicly, and has successfully negotiated salary increases ranging from 20% to 50% for his clients.
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-gold-400 text-2xl transition">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="mailto:info@thedreamjobconsultant.com" className="text-slate-300 hover:text-gold-400 text-2xl transition">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-white">Our Core Values</h2>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { title: "Transparency", icon: "fa-search", desc: "We provide real-time updates on every application sent and every network connection made. You never have to guess what we are doing." },
            { title: "Quality over Quantity", icon: "fa-gem", desc: "We don't spam your resume. We curate high-value opportunities that match your salary expectations and culture fit." },
            { title: "Results Driven", icon: "fa-chart-line", desc: "We don't charge for advice; we charge for results. Our partnership models are designed so we win when you win." }
          ].map((value, idx) => (
            <div key={idx} className="glass p-8 rounded-xl text-center hover:bg-navy-800 transition">
              <div className="w-16 h-16 bg-navy-700 rounded-full flex items-center justify-center mx-auto mb-6 text-gold-400 text-2xl">
                <i className={`fas ${value.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;