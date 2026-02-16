import React from 'react';
import { Link } from 'react-router-dom';

const servicesList = [
    {
        title: "Career Coaching",
        icon: "fa-compass",
        description: "Strategic guidance to define your career roadmap, role positioning, and professional goals.",
        price: 600,
        link: "https://www.paypal.com/ncp/payment/9FXGKYY7M37V8"
    },
    {
        title: "Job Market Research",
        icon: "fa-chart-pie",
        description: "Deep analysis of your target industries, sectors, and companies, including skills assessments.",
        price: 600,
        link: "https://www.paypal.com/ncp/payment/D4F3YL2VGEQTN"
    },
    {
        title: "Resume & Cover Letter Optimization",
        icon: "fa-file-invoice",
        description: "Professional reviewing, writing, and rewriting of your resume and cover letter to pass ATS filters.",
        price: 600,
        link: "https://www.paypal.com/ncp/payment/HQKRHP59WV3KW"
    },
    {
        title: "LinkedIn Profile Optimization",
        icon: "fab fa-linkedin",
        description: "Profile creation, optimization, and continuous improvement to turn it into a recruiter magnet.",
        price: 600,
        link: "https://www.paypal.com/ncp/payment/9MPC8BEXAUQEA"
    },
    {
        title: "Building Professional Network",
        icon: "fa-project-diagram",
        description: "Strategies for building high-quality networks with Industry Leaders, Recruiters, and Hiring Managers.",
        price: 600,
        link: "https://www.paypal.com/ncp/payment/AA2R9PTVHBGTW"
    },
    {
        title: "Job Boards Profile Creation",
        icon: "fa-desktop",
        description: "Creation and optimization of accounts across all relevant job boards, portals, and career websites.",
        price: 600,
        link: "https://www.paypal.com/ncp/payment/GEM6F2Z36CUKY"
    },
    {
        title: "Job Searching & Applying",
        icon: "fa-tasks",
        description: "Targeted job searching and application management assistance strategies.",
        price: 600,
        link: "https://www.paypal.com/ncp/payment/G9WRPKA683P64"
    },
    {
        title: "Interview Preparation",
        icon: "fa-comments",
        description: "Mock interviews and strategic prep to help you land the interview and articulate your value.",
        price: 600,
        link: "https://www.paypal.com/ncp/payment/M9W49TZNFJSC4"
    }
];

const SingleServicePurchasePage = () => {
    return (
        <section className="bg-navy-900 min-h-screen pt-32 pb-20 px-4">
            {/* Header */}
            <div className="max-w-7xl mx-auto text-center mb-6">
                <Link to="/pricing" className="inline-flex items-center text-slate-400 hover:text-gold-400 mb-4 transition-colors">
                    <i className="fas fa-arrow-left mr-2"></i> Back to Pricing Plans
                </Link>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                    Select Your <span className="text-gold-400">Individual Service</span>
                </h1>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                    Tailored solutions for your specific career needs. Choose the standalone services that fit your goals.
                </p>
            </div>

            {/* Services List */}
            <div className="max-w-5xl mx-auto space-y-2">
                {servicesList.map((service, index) => (
                    <div key={index} className="glass p-4 rounded-xl border border-slate-700 flex flex-col md:flex-row items-center gap-4 hover:border-gold-400/30 transition-all duration-300 group hover:-translate-y-1">

                        {/* Icon */}
                        <div className="w-12 h-12 bg-navy-800 rounded-lg flex-shrink-0 flex items-center justify-center text-gold-400 text-xl shadow-lg shadow-black/20 group-hover:scale-110 transition-transform">
                            <i className={`fas ${service.icon}`}></i>
                        </div>

                        {/* Content */}
                        <div className="flex-grow text-center md:text-left">
                            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-gold-400 transition-colors">{service.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                                {service.description}
                            </p>
                        </div>

                        {/* Price & Action */}
                        <div className="flex-shrink-0 flex flex-col items-center md:items-end min-w-[150px]">
                            <div className="text-2xl font-serif font-bold text-white mb-2">
                                ${service.price}
                            </div>

                            <a
                                href={service.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full md:w-auto px-6 py-2 border border-gold-400 text-gold-400 rounded-lg text-center font-bold hover:bg-gold-400 hover:text-navy-900 transition-all duration-300 uppercase tracking-wider text-xs"
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
                        All individual services include 2-5 virtual meetings, professional activities and support for up to one month.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SingleServicePurchasePage;
