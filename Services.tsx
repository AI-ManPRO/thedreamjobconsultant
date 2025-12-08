import React from 'react';

const Services = () => {
  const serviceCategories = [
    {
      title: "Phase 1: Strategy & Branding",
      description: "Building the foundation for your executive positioning.",
      services: [
        {
          title: "Career Coaching",
          icon: "fa-compass",
          desc: "Strategic guidance to define your career roadmap, role positioning, and professional goals."
        },
        {
          title: "Market Research",
          icon: "fa-chart-pie",
          desc: "Deep analysis of your target industries, sectors, and companies, including skills assessments to identify gaps."
        },
        {
          title: "Resume Optimization",
          icon: "fa-file-invoice",
          desc: "Professional reviewing, writing, and rewriting of your resume to pass ATS filters and impress C-level executives."
        },
        {
          title: "Cover Letter Writing",
          icon: "fa-pen-nib",
          desc: "Crafting compelling, tailored narratives that connect your unique value proposition to the company's needs."
        },
        {
          title: "LinkedIn Branding",
          icon: "fab fa-linkedin",
          desc: "Profile creation, optimization, and continuous improvement to turn your digital presence into a recruiter magnet."
        }
      ]
    },
    {
      title: "Phase 2: Execution & Outreach",
      description: "We take over the manual labor of the job hunt.",
      services: [
        {
          title: "Hidden Job Market",
          icon: "fa-user-secret",
          desc: "Accessing the 80% of executive roles that are never publicly advertised through proprietary channels."
        },
        {
          title: "Professional Networking",
          icon: "fa-project-diagram",
          desc: "Building high-quality networks with Industry Leaders, Recruiters, and Hiring Managers on your behalf."
        },
        {
          title: "Application Management",
          icon: "fa-tasks",
          desc: "Full-service job searching, applying, and tracking. We manage the entire process so you don't have to."
        },
        {
          title: "Digital Presence",
          icon: "fa-desktop",
          desc: "Creation and optimization of accounts across all relevant job boards, portals, and career websites."
        }
      ]
    },
    {
      title: "Phase 3: Closing the Deal",
      description: "Converting interviews into high-value offers.",
      services: [
        {
          title: "Interview Preparation",
          icon: "fa-comments",
          desc: "Mock interviews and strategic prep to help you land the interview and articulate your value with confidence."
        },
        {
          title: "Salary Negotiation",
          icon: "fa-hand-holding-usd",
          desc: "Expert negotiation support to maximize your base salary, equity, and benefits package."
        }
      ]
    }
  ];

  return (
    <section className="bg-navy-900 min-h-screen pt-32 pb-20 px-4">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
          Comprehensive <span className="text-gold-400">Services</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          From defining your path to signing the contract, we handle every aspect of your executive job search.
        </p>
      </div>

      {/* Service Categories */}
      <div className="max-w-7xl mx-auto space-y-24">
        {serviceCategories.map((category, index) => (
          <div key={index} className="relative">
            {/* Category Header */}
            <div className="mb-10 flex flex-col md:flex-row md:items-end gap-4 border-b border-slate-800 pb-4">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">
                {category.title}
              </h2>
              <span className="text-slate-500 md:ml-4 pb-1">{category.description}</span>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service, sIndex) => (
                <div key={sIndex} className="glass p-6 rounded-xl hover:bg-navy-800 transition duration-300 group hover:-translate-y-1 border border-transparent hover:border-gold-400/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-navy-700 rounded-lg flex-shrink-0 flex items-center justify-center text-gold-400 text-xl group-hover:scale-110 transition shadow-lg shadow-black/20">
                      <i className={`fas ${service.icon}`}></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto mt-24 text-center glass rounded-2xl p-10 border border-gold-400/20">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to delegate your job search?</h2>
        <p className="text-slate-400 mb-8">Stop doing the heavy lifting yourself. Let us execute this strategy for you.</p>
        <a 
          href="https://calendly.com/thedreamjobconsultant/60min/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="gold-btn text-navy-900 px-8 py-3 rounded-full font-bold text-lg inline-block shadow-lg hover:shadow-gold-400/20"
        >
          Book Your Strategy Call
        </a>
      </div>
    </section>
  );
};

export default Services;