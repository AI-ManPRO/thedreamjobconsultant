import React from 'react';

const IndustriesSection = () => {
    const industries = [
        { name: "Information Technology", icon: "fas fa-laptop-code" },
        { name: "Finance & Accounting", icon: "fas fa-chart-line" },
        { name: "Healthcare & Pharma", icon: "fas fa-heartbeat" },
        { name: "Sales & Marketing", icon: "fas fa-bullhorn" },
        { name: "Engineering & Manufacturing", icon: "fas fa-industry" },
        { name: "Operations & Logistics", icon: "fas fa-truck-loading" },
        { name: "Human Resources", icon: "fas fa-users" },
        { name: "Executive Leadership", icon: "fas fa-chess-king" }
    ];

    return (
        <section className="py-20 bg-navy-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <p className="text-gold-400 font-bold uppercase tracking-widest text-sm mb-2">Expertise Across Sectors</p>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Industries We Dominate</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {industries.map((ind, index) => (
                        <div key={index} className="glass p-6 rounded-lg text-center hover:bg-white/5 transition duration-300 group cursor-default">
                            <i className={`${ind.icon} text-4xl text-slate-500 mb-4 group-hover:text-white transition-colors`}></i>
                            <h3 className="text-slate-300 font-medium group-hover:text-gold-400 transition-colors">{ind.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;
