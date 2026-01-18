import React from 'react';
import { Link } from 'react-router-dom';

const CareerCoaching = () => {
    return (
        <div className="bg-navy-900 min-h-screen pt-28 pb-20 px-4">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto mb-20">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent z-10"></div>
                    <img
                        src="/images/services/career-coaching.jpg"
                        alt="Strategic Career Coaching Session"
                        className="w-full h-[500px] object-cover opacity-60"
                    />
                    <div className="absolute inset-0 z-20 flex items-center px-8 md:px-16">
                        <div className="max-w-2xl">
                            <span className="text-gold-400 font-bold tracking-wider uppercase mb-4 block">Strategic Executive Planning</span>
                            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                                Define Your Legacy. <br />
                                <span className="text-gold-400">Architect Your Future.</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                Stop reacting to the market. Start dictating your terms. Our executive career coaching isn't about finding a job—it's about designing your next masterclass in leadership.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="https://calendly.com/thedreamjobconsultant/60min/" target="_blank" className="gold-btn text-navy-900 px-8 py-4 rounded-full font-bold text-lg text-center shadow-lg hover:shadow-gold-400/20 transition-all">
                                    Book Strategy Session
                                </a>
                                <Link to="/services" className="px-8 py-4 rounded-full font-bold text-lg text-white border border-slate-500 hover:bg-slate-800 transition-all text-center">
                                    View All Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Authority Content Block */}
            <section className="max-w-5xl mx-auto mb-20 space-y-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-white mb-6">The "Accidental Executive" Trap</h2>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Most senior leaders reached their position through exceptional performance, not deliberate career architecture. But what got you here won't get you there. The C-suite requires a different playbook—one based on personal brand equity, strategic positioning, and network leverage.
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            We move you from being a "candidate" to being a "solution." We analyze your career DNA, identify the unique value proposition that only you can offer, and map it to the market gaps that are desperate for your leadership.
                        </p>
                    </div>
                    <div className="glass p-8 rounded-2xl border border-slate-700 relative">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <i className="fas fa-chess-king text-9xl text-white"></i>
                        </div>
                        <h3 className="text-xl font-bold text-gold-400 mb-6 border-b border-slate-700 pb-2">The Strategic Shift</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <i className="fas fa-times-circle text-red-500 mt-1"></i>
                                <div className="text-slate-400"><strong className="text-slate-300">Reactive:</strong> Waiting for recruiters to call.</div>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fas fa-check-circle text-green-500 mt-1"></i>
                                <div className="text-slate-300"><strong className="text-white">Proactive:</strong> Targeting roles before they exist.</div>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fas fa-times-circle text-red-500 mt-1"></i>
                                <div className="text-slate-400"><strong className="text-slate-300">Generic:</strong> "I'm a good leader."</div>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fas fa-check-circle text-green-500 mt-1"></i>
                                <div className="text-slate-300"><strong className="text-white">Specific:</strong> "I scale $50M turnarounds."</div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Methodology Visual */}
                <div className="glass p-10 rounded-2xl border border-gold-400/20 text-center">
                    <h2 className="text-3xl font-serif font-bold text-white mb-12">Our Coaching Framework</h2>
                    <div className="grid md:grid-cols-4 gap-8 relative">
                        {/* Connector Line */}
                        <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-600 to-transparent -z-10"></div>

                        {[
                            { icon: "fa-microscope", title: "Discovery", desc: "Unearthing your core values and unique zones of genius." },
                            { icon: "fa-compass", title: "Direction", desc: "Defining the exact role, industry, and culture you need." },
                            { icon: "fa-chess", title: "Strategy", desc: "Building the roadmap to bridge the gap from Now to Next." },
                            { icon: "fa-trophy", title: "Execution", desc: "Tactical support to land the role and succeed in the first 90 days." }
                        ].map((step, idx) => (
                            <div key={idx} className="relative bg-navy-900/80 p-6 rounded-xl border border-slate-700 hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-20 h-20 mx-auto bg-navy-800 rounded-full border-4 border-navy-900 flex items-center justify-center mb-6 shadow-xl relative z-10">
                                    <i className={`fas ${step.icon} text-3xl text-gold-400`}></i>
                                </div>
                                <h4 className="text-lg font-bold text-white mb-3">{step.title}</h4>
                                <p className="text-sm text-slate-400">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Rich Text & Stats */}
            <section className="max-w-4xl mx-auto mb-20 bg-gradient-to-br from-navy-800 to-navy-900 p-10 rounded-2xl border border-slate-700 shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <i className="fas fa-chart-line text-gold-400"></i>
                    Why Strategy Matters
                </h2>
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <p className="text-slate-300 leading-relaxed mb-4">
                            Executives who engage in strategic career planning earn, on average, <strong>28% more</strong> than their peers who rely on organic growth. More importantly, they report 40% higher job satisfaction.
                        </p>
                        <p className="text-slate-300 leading-relaxed">
                            We don't just help you get a job. We help you build a career that serves your life, rather than a life that serves your career.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-navy-900 p-4 rounded-lg flex items-center justify-between border border-slate-700">
                            <span className="text-slate-400">Avg. Salary Increase</span>
                            <span className="text-green-400 font-bold text-xl">+35%</span>
                        </div>
                        <div className="bg-navy-900 p-4 rounded-lg flex items-center justify-between border border-slate-700">
                            <span className="text-slate-400">Time to Offer</span>
                            <span className="text-gold-400 font-bold text-xl">-4 Weeks</span>
                        </div>
                        <div className="bg-navy-900 p-4 rounded-lg flex items-center justify-between border border-slate-700">
                            <span className="text-slate-400">Retention Rate</span>
                            <span className="text-blue-400 font-bold text-xl">92%</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-serif font-bold text-white mb-6">Clarify Your Vision</h2>
                <p className="text-slate-400 mb-8 text-lg">
                    The first step to getting what you want is knowing exactly what it is. Let's find out together.
                </p>
                <a
                    href="https://calendly.com/thedreamjobconsultant/60min/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gold-btn text-navy-900 px-10 py-4 rounded-full font-bold text-lg inline-block shadow-lg hover:shadow-gold-400/20 hover:scale-105 transition-all"
                >
                    Begin Your Journey
                </a>
            </div>
        </div>
    );
};

export default CareerCoaching;
