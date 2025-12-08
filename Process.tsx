import React from 'react';

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery, Goals & Strategy",
      description: "We start by deep-diving into your career history and aspirations. We identify your next dream role and map out the precise strategic path to get there, including target company lists.",
      icon: "fa-compass",
      phase: "Foundation"
    },
    {
      number: "02",
      title: "Market Research",
      description: "We conduct a comprehensive analysis of the current job market to identify your specific niche, target industries, and validate the feasibility of your salary expectations.",
      icon: "fa-search-dollar",
      phase: "Foundation"
    },
    {
      number: "03",
      title: "Boost Resume/CV",
      description: "We re-engineer your CV to highlight unique strengths and quantifiable achievements, ensuring it passes ATS filters and hooks human readers instantly.",
      icon: "fa-file-alt",
      phase: "Preparation"
    },
    {
      number: "04",
      title: "Boost LinkedIn",
      description: "We optimize your LinkedIn profile to rank highly in recruiter searches and impress decision makers who visit your profile.",
      icon: "fab fa-linkedin",
      phase: "Preparation"
    },
    {
      number: "05",
      title: "Build Network",
      description: "We search for the decision makers who can advance your career. We don't just find them; we facilitate powerful introductions to get their attention.",
      icon: "fa-network-wired",
      phase: "Execution"
    },
    {
      number: "06",
      title: "Job Searching & Applying",
      description: "Full-service job searching, applying, and tracking. We manage the entire process so you don't have to.",
      icon: "fa-briefcase",
      phase: "Execution"
    },
    {
      number: "07",
      title: "Interview Rehearsal",
      description: "Shine during the interview. We improve your elevator pitch, conduct mock interviews, and practice answers to the toughest questions.",
      icon: "fa-microphone-alt",
      phase: "Closing"
    },
    {
      number: "08",
      title: "Salary Negotiation",
      description: "We formulate a clear negotiation strategy. You practice before the offer to ensure you extract the maximum market value for your skills.",
      icon: "fa-hand-holding-usd",
      phase: "Closing"
    }
  ];

  return (
    <div className="bg-navy-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
        <div className="absolute top-0 right-1/2 translate-x-1/2 -mt-20 w-96 h-96 rounded-full bg-gold-400/10 blur-3xl filter animate-pulse"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Our <span className="text-gold-400">Methodology</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A scientifically proven 8-step process to take you from "Open to Work" to "Signed Offer".
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="pb-24 px-4 relative">
        <div className="max-w-5xl mx-auto">
          {/* Vertical Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-gold-400 via-gold-600 to-transparent opacity-30 top-0"></div>

          <div className="space-y-12 md:space-y-0 relative">
            {steps.map((step, index) => (
              // Logic: Start Left.
              // Index 0 (Step 1) -> 0%2=0 -> False -> No class -> Content is first (Left).
              // Index 1 (Step 2) -> 1%2=1 -> True -> Flex-Reverse -> Content is last (Right).
              <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12 md:mb-0 relative group`}>
                
                {/* Content Side */}
                <div className="w-full md:w-1/2 px-4 md:px-12 py-4">
                  <div className="glass p-8 rounded-xl border border-slate-700 hover:border-gold-400/50 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                    {/* Number Watermark */}
                    <span className="absolute -right-4 -top-4 text-8xl font-serif font-bold text-white opacity-5 select-none">{step.number}</span>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-gold-400 bg-navy-900 px-2 py-1 rounded border border-gold-400/20">{step.phase}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center Icon/Marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-navy-900 border-2 border-gold-400 z-20 shadow-lg shadow-gold-400/20 group-hover:scale-110 transition duration-300">
                   <i className={`fas ${step.icon} text-gold-400 text-lg`}></i>
                </div>

                {/* Spacer Side */}
                <div className="w-full md:w-1/2 hidden md:block"></div>
              </div>
            ))}
          </div>

          {/* Final Goal: 10x Opportunities */}
          <div className="mt-20 flex justify-center relative z-10">
            <div className="glass bg-gradient-to-r from-gold-400/20 to-gold-600/20 p-10 rounded-2xl border border-gold-400 text-center max-w-2xl transform hover:scale-105 transition duration-500 shadow-[0_0_50px_rgba(212,175,55,0.2)]">
              <div className="w-20 h-20 bg-gold-400 rounded-full flex items-center justify-center mx-auto mb-6 text-navy-900 text-4xl shadow-lg animate-float">
                <i className="fas fa-trophy"></i>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                10x Career Opportunities
              </h2>
              <p className="text-slate-300">
                By following this rigorous process, you stop chasing jobs and start attracting offers. The result is not just a new job, but a career upgrade.
              </p>
              <div className="mt-8">
                 <a 
                  href="https://calendly.com/thedreamjobconsultant/60min/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="gold-btn text-navy-900 px-8 py-3 rounded-full font-bold text-lg inline-block hover:shadow-lg hover:shadow-gold-400/50"
                >
                  Start The Process
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;