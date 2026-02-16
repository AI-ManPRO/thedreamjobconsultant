import React from 'react';
import { Link } from 'react-router-dom';

const servicesList = [
    {
        title: "Career Coaching",
        icon: "fa-compass",
        description: "Strategic guidance to define your career roadmap, role positioning, and professional goals.",
        price: 500,
        link: "#" // Placeholder
    },
    {
        title: "Job Market Research",
        icon: "fa-chart-pie",
        description: "Deep analysis of your target industries, sectors, and companies, including skills assessments.",
        price: 500,
        link: "#" // Placeholder
    },
    {
        title: "Resume & Cover Letter Optimization",
        icon: "fa-file-invoice",
        description: "Professional reviewing, writing, and rewriting of your resume and cover letter to pass ATS filters.",
        price: 500,
        link: "#" // Placeholder
    },
    {
        title: "LinkedIn Profile Optimization",
        icon: "fab fa-linkedin",
        description: "Profile creation, optimization, and continuous improvement to turn your digital presence into a recruiter magnet.",
        price: 500,
        link: "#" // Placeholder
    },
    {
        title: "Building Professional Network",
        icon: "fa-project-diagram",
        description: "Strategies for building high-quality networks with Industry Leaders, Recruiters, and Hiring Managers.",
        price: 500,
        link: "#" // Placeholder
    },
    {
        title: "Job Boards Profile Creation",
        icon: "fa-desktop",
        description: "Creation and optimization of accounts across all relevant job boards, portals, and career websites.",
        price: 500,
        link: "#" // Placeholder
    },
    {
        title: "Job Searching & Applying",
        icon: "fa-tasks",
        description: "Targeted job searching and application management assistance strategies.",
        price: 500,
        link: "#" // Placeholder
    },
    {
        title: "Interview Preparation",
        icon: "fa-comments",
        description: "Mock interviews and strategic prep to help you land the interview and articulate your value.",
        price: 500,
        link: "#" // Placeholder
    }
];

const SingleServicePurchasePage = () => {
    return (
        <section className="bg-navy-900 min-h-screen pt-32 pb-20 px-4">
            {/* Header */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <Link to="/pricing" className="inline-flex items-center text-slate-400 hover:text-gold-400 mb-8 transition-colors">
                    <i className="fas fa-arrow-left mr-2"></i> Back to Pricing Plans
                </Link>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                    Select Your <span className="text-gold-400">Individual Service</span>
                </h1>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                    Tailored solutions for your specific career needs. Choose the standalone services that fit your goals.
                </p>
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesList.map((service, index) => (
                    <div key={index} className="glass p-8 rounded-xl border border-slate-700 flex flex-col hover:border-gold-400/30 transition-all duration-300 group hover:-translate-y-1">
                        <div className="w-14 h-14 bg-navy-800 rounded-lg flex items-center justify-center text-gold-400 text-2xl mb-6 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform">
                            <i className={`fas ${service.icon} ${service.icon.includes('linkedin') ? '' : ''}`}></i>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">{service.title}</h3>
                        <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                            {service.description}
                        </p>

                        <div className="mt-auto">
                            <div className="text-3xl font-serif font-bold text-white mb-6">
                                ${service.price} <span className="text-sm text-slate-500 font-sans font-normal">/ service</span>
                            </div>

                            <a
                                href={service.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-3 border border-gold-400 text-gold-400 rounded-lg text-center font-bold hover:bg-gold-400 hover:text-navy-900 transition-all duration-300 uppercase tracking-wider text-sm"
                            >
                                Purchase Now
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer / Info */}
            <div className="max-w-4xl mx-auto mt-20 text-center">
                <div className="glass p-6 rounded-xl inline-block border border-slate-700/50">
                    <p className="text-slate-300 flex items-center justify-center gap-3">
                        <i className="fas fa-info-circle text-gold-400"></i>
                        All individual services include professional support for up to one month.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SingleServicePurchasePage;
