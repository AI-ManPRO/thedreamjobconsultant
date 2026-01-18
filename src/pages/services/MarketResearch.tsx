import React from 'react';
import { Link } from 'react-router-dom';

const MarketResearch = () => {
    return (
        <div className="bg-navy-900 min-h-screen pt-28 pb-20 px-4">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto mb-20">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent z-10"></div>
                    <img
                        src="/images/services/market-research.jpg"
                        alt="Market Research"
                        className="w-full h-[500px] object-cover opacity-60"
                    />
                    <div className="absolute inset-0 z-20 flex items-center px-8 md:px-16">
                        <div className="max-w-2xl">
                            <span className="text-gold-400 font-bold tracking-wider uppercase mb-4 block">Strategic Intelligence</span>
                            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                                Don't Guess. <br />
                                <span className="text-gold-400">Know.</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                We provide the deep-dive intelligence you need to target the right companies, understand their pain points, and position yourself as the only logical solution.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="https://calendly.com/thedreamjobconsultant/60min/" target="_blank" className="gold-btn text-navy-900 px-8 py-4 rounded-full font-bold text-lg text-center shadow-lg hover:shadow-gold-400/20 transition-all">
                                    Get Market Insights
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

                {/* The Why */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-white mb-6">Intelligence is Advantage</h2>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Most candidates apply blind. They know the job title and the company name, but nothing about the quarterly goals, the bleeding necks, or the cultural landmines.
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            We arm you with a dossier of actionable intelligence. We analyze industry trends, competitor movements, and internal company challenges so you can walk into the interview speaking their language—not just yours.
                        </p>
                    </div>
                    <div className="glass p-8 rounded-2xl border border-slate-700">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center border border-slate-700">
                                    <i className="fas fa-chart-line text-gold-400 text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">Industry Analysis</h4>
                                    <p className="text-sm text-slate-400">Where is the capital flowing? Who is expanding?</p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-800"></div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center border border-slate-700">
                                    <i className="fas fa-building text-gold-400 text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">Company Deep Dives</h4>
                                    <p className="text-sm text-slate-400">Financial health, leadership styles, and recent news.</p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-800"></div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center border border-slate-700">
                                    <i className="fas fa-user-check text-gold-400 text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">Decision Maker Mapping</h4>
                                    <p className="text-sm text-slate-400">Who actually holds the budget for your role?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Data Visualization Placeholder */}
                <div className="glass p-10 rounded-2xl border border-gold-400/20 text-center">
                    <h2 className="text-3xl font-serif font-bold text-white mb-6">The "Inside Scoop"</h2>
                    <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
                        We don't just Google. We use premium data sources and varied intelligence gathering methods to build your strategy.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-navy-900 p-6 rounded-xl border border-slate-700">
                            <div className="text-4xl text-gold-400 font-bold mb-2">10-K</div>
                            <div className="text-white font-bold">Report Analysis</div>
                            <p className="text-xs text-slate-500 mt-2">Uncovering strategic risks and opportunities.</p>
                        </div>
                        <div className="bg-navy-900 p-6 rounded-xl border border-slate-700">
                            <div className="text-4xl text-gold-400 font-bold mb-2">Glassdoor</div>
                            <div className="text-white font-bold">Sentiment Analysis</div>
                            <p className="text-xs text-slate-500 mt-2">Reading between the lines of employee reviews.</p>
                        </div>
                        <div className="bg-navy-900 p-6 rounded-xl border border-slate-700">
                            <div className="text-4xl text-gold-400 font-bold mb-2">Salary</div>
                            <div className="text-white font-bold">Benchmarking</div>
                            <p className="text-xs text-slate-500 mt-2">Real-time compensation data for your level.</p>
                        </div>
                    </div>
                </div>

            </section>

            {/* CTA */}
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-serif font-bold text-white mb-6">Stop Flying Blind</h2>
                <p className="text-slate-400 mb-8 text-lg">
                    Information is power. Let us give you the upper hand before you ever shake hands.
                </p>
                <a
                    href="https://calendly.com/thedreamjobconsultant/60min/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gold-btn text-navy-900 px-10 py-4 rounded-full font-bold text-lg inline-block shadow-lg hover:shadow-gold-400/20 hover:scale-105 transition-all"
                >
                    Request Intelligence Report
                </a>
            </div>
        </div>
    );
};

export default MarketResearch;
