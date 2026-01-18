import React from 'react';
import { Link } from 'react-router-dom';

const SalaryNegotiation = () => {
    return (
        <div className="bg-navy-900 min-h-screen pt-28 pb-20 px-4">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto mb-20">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent z-10"></div>
                    <img
                        src="/images/services/salary-negotiation.jpg"
                        alt="Salary Negotiation"
                        className="w-full h-[500px] object-cover opacity-60"
                    />
                    <div className="absolute inset-0 z-20 flex items-center px-8 md:px-16">
                        <div className="max-w-2xl">
                            <span className="text-gold-400 font-bold tracking-wider uppercase mb-4 block">Compensation Maximization</span>
                            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                                Know Your Worth. <br />
                                <span className="text-gold-400">Then Charge Tax.</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                You don't get what you deserve; you get what you negotiate. We provide the data, script, and spine to add five to six figures to your package.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="https://calendly.com/thedreamjobconsultant/60min/" target="_blank" className="gold-btn text-navy-900 px-8 py-4 rounded-full font-bold text-lg text-center shadow-lg hover:shadow-gold-400/20 transition-all">
                                    Maximize My Offer
                                </a>
                                <Link to="/services" className="px-8 py-4 rounded-full font-bold text-lg text-white border border-slate-500 hover:bg-slate-800 transition-all text-center">
                                    View All Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="max-w-5xl mx-auto mb-20 space-y-16">

                {/* The Why - Money Visual */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 glass p-8 rounded-2xl border border-gold-400/20">
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                                <div className="text-slate-400">Initial Offer</div>
                                <div className="text-white font-bold text-lg">$220,000</div>
                            </div>
                            <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                                <div className="text-slate-400">Our Counter</div>
                                <div className="text-gold-400 font-bold text-lg">$265,000</div>
                            </div>
                            <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                                <div className="text-slate-400">Signing Bonus</div>
                                <div className="text-green-500 font-bold text-lg">+ $30,000</div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="text-slate-400">Total Gain</div>
                                <div className="text-white font-bold text-2xl p-2 bg-green-500/20 rounded-lg text-green-400">+$75,000</div>
                            </div>
                            <div className="text-xs text-slate-500 text-center uppercase tracking-widest mt-2">Example ROI based on recent client</div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl font-serif font-bold text-white mb-6">The "Silence" Strategy</h2>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Most executives leave money on the table because they fear losing the offer. But an offer isn't the end of the process; it's the beginning of the business relationship.
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            We act as your "Shadow Negotiator." We analyze the offer, benchmark it against real-time market data, and script your exact email and phone responses. We tell you when to push, when to pause, and when to sign.
                        </p>
                    </div>
                </div>

                {/* Levers Visual */}
                <div className="glass p-10 rounded-2xl border border-slate-700">
                    <h2 className="text-3xl font-serif font-bold text-white mb-10 text-center">It's Not Just About Base Salary</h2>
                    <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
                        We look at the Total Compensation (TC) picture. Often, the flexibility lies in the details that HR forgets to mention.
                    </p>

                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { label: "Equity / Stock", val: "High Impact" },
                            { label: "Signing Bonus", val: "Cash Flow" },
                            { label: "Remote Days", val: "Lifestyle" },
                            { label: "Relocation", val: "One-Time" },
                            { label: "Vacation Time", val: "Wellbeing" },
                            { label: "Title", val: "Prestige" },
                            { label: "Severance", val: "Safety Net" },
                            { label: "Education", val: "Growth" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-navy-800 p-4 rounded-xl border border-slate-700 text-center hover:border-gold-400 transition hover:-translate-y-1">
                                <div className="text-white font-bold mb-1">{item.label}</div>
                                <div className="text-xs text-gold-400 uppercase tracking-wider">{item.val}</div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>

            {/* CTA */}
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-serif font-bold text-white mb-6">One Conversation. 50x ROI.</h2>
                <p className="text-slate-400 mb-8 text-lg">
                    Our fee is a fraction of the increase we typically secure for our clients. It's the smartest investment you'll make all year.
                </p>
                <a
                    href="https://calendly.com/thedreamjobconsultant/60min/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gold-btn text-navy-900 px-10 py-4 rounded-full font-bold text-lg inline-block shadow-lg hover:shadow-gold-400/20 hover:scale-105 transition-all"
                >
                    Get Negotiation Support
                </a>
            </div>
        </div>
    );
};

export default SalaryNegotiation;
