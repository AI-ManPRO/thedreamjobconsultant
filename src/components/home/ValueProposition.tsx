import React from 'react';
import { motion } from 'framer-motion';

const ValueProposition = () => {
    const benefits = [
        {
            title: "Executive Personal Branding",
            description: "We rewrite your resume, cover letter, and LinkedIn profile to tell a compelling leadership story that passes crucial ATS filters and impresses board members.",
            icon: "fas fa-fingerprint"
        },
        {
            title: "Done-For-You Job Search",
            description: "Your time is your most valuable asset. We handle the searching, applications, networking, and scheduling. You only step in when it's time to interview.",
            icon: "fas fa-clock"
        },
        {
            title: "Tap Into the Hidden Job Market",
            description: "80% of executive roles are never posted. We leverage our network and proactive outreach to get you interviews before the competition even knows the role exists.",
            icon: "fas fa-mask"
        },
        {
            title: "Strategic Network Building",
            description: "We don't just apply, but we also connect. We build your valuable professional network by directly engaging with decision-makers and industry leaders to uncover unadvertised opportunities.",
            icon: "fas fa-network-wired"
        }
    ];

    return (
        <section className="py-24 bg-navy-900 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Why Partner With Us?</h2>
                    <p className="text-lg text-slate-400">
                        Traditional recruiting is broken for executives. We flip the model. We don't work for companies; <span className="text-gold-400 font-semibold">we work exclusively for you.</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="glass p-8 rounded-xl hover:bg-navy-800/50 transition duration-300 border-t border-transparent hover:border-gold-500/30 group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="w-14 h-14 rounded-full bg-navy-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-700 group-hover:border-gold-500">
                                <i className={`${benefit.icon} text-2xl text-gold-400`}></i>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gold-400 transition-colors">{benefit.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValueProposition;
