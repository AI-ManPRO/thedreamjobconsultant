import React from 'react';

const TrustedBy = () => {
    // Using FontAwesome icons to represent industries/companies with colors as requested by the user
    const companies = [
        { name: "Tech Giants", icon: "fab fa-google", color: "text-red-500" },
        { name: "Finance", icon: "fas fa-landmark", color: "text-green-500" },
        { name: "Global", icon: "fas fa-globe-americas", color: "text-blue-500" },
        {/*{ name: "Aerospace", icon: "fas fa-plane-departure", color: "text-sky-400" },*/},
        { name: "Consulting", icon: "fas fa-briefcase", color: "text-indigo-400" },
        { name: "Pharma", icon: "fas fa-prescription-bottle-alt", color: "text-pink-500" },
        { name: "Energy", icon: "fas fa-bolt", color: "text-yellow-400" },
        { name: "Retail", icon: "fas fa-shopping-bag", color: "text-orange-500" },
        { name: "Oil & Gas", icon: "fas fa-oil-well", color: "text-slate-400" },
        { name: "Hospitality", icon: "fas fa-concierge-bell", color: "text-purple-400" },
        { name: "Hotels", icon: "fas fa-hotel", color: "text-indigo-500" },
        { name: "Tourism", icon: "fas fa-plane", color: "text-cyan-400" },
        { name: "Construction", icon: "fas fa-hard-hat", color: "text-orange-600" },
        { name: "Start-Ups", icon: "fas fa-rocket", color: "text-rose-500" },
        { name: "SaaS", icon: "fas fa-cloud", color: "text-blue-300" },
        { name: "IT", icon: "fas fa-laptop-code", color: "text-emerald-400" },
        { name: "Telecom", icon: "fas fa-satellite-dish", color: "text-blue-600" },
        { name: "Business", icon: "fas fa-building", color: "text-slate-300" },
        { name: "Real Estate", icon: "fas fa-home", color: "text-green-600" },
    ];

    // Duplicate list for seamless loop (2 sets allow 50% translation to work perfectly)
    const displayList = [...companies, ...companies];

    return (
        <section className="py-12 bg-navy-800 border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
                <p className="text-sm md:text-base text-slate-400 font-medium uppercase tracking-[0.2em]">
                    Trusted by Executives Landing Roles At
                </p>
            </div>

            <div className="marquee-container w-full">
                <div className="marquee-content flex items-center gap-16 px-4 min-w-max">
                    {displayList.map((company, index) => (
                        <div key={index} className="flex items-center gap-3 group min-w-max">
                            <i className={`${company.icon} text-3xl md:text-4xl ${company.color} opacity-80 group-hover:opacity-100 transition-opacity`}></i>
                            <span className="text-xl font-bold text-slate-300 hidden md:block">{company.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
