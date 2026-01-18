import React from 'react';
import { Link } from 'react-router-dom';

const InterviewPreparation = () => {
    return (
        <div className="bg-navy-900 min-h-screen pt-28 pb-20 px-4">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto mb-20">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent z-10"></div>
                    <img
                        src="/images/services/interview-preparation.jpg"
                        alt="Interview Preparation"
                        className="w-full h-[500px] object-cover opacity-60"
                    />
                    <div className="absolute inset-0 z-20 flex items-center px-8 md:px-16">
                        <div className="max-w-2xl">
                            <span className="text-gold-400 font-bold tracking-wider uppercase mb-4 block">Executive Presence Coaching</span>
                            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                                Win the Room. <br />
                                <span className="text-gold-400">Own the Outcome.</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                At the executive level, they already know you can do the job. The interview is about trust, vision, and cultural command. We help you project all three.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="https://calendly.com/thedreamjobconsultant/60min/" target="_blank" className="gold-btn text-navy-900 px-8 py-4 rounded-full font-bold text-lg text-center shadow-lg hover:shadow-gold-400/20 transition-all">
                                    Book Mock Interview
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
                        <h2 className="text-3xl font-serif font-bold text-white mb-6">Confidence is Currency</h2>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            The #1 reason executives fail interviews isn't lack of skill—it's lack of concise, compelling storytelling. Rambling answers, missed cues, and "imposter syndrome" kill opportunities faster than a bad resume ever could.
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            We put you through rigorous mock simulations tailored to your specific industry and role. We grill you harder than they will, so when the real moment comes, you're not just ready—you're relaxed.
                        </p>
                    </div>
                    <div className="glass p-8 rounded-2xl border border-slate-700">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                            <div className="text-white font-mono uppercase tracking-widest text-sm">Recording in progress</div>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-navy-800 p-4 rounded-lg rounded-tl-none border border-slate-700 ml-4 relative">
                                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-slate-600 border-2 border-navy-900 flex items-center justify-center text-xs text-white">Q</div>
                                <p className="text-slate-300 italic">"Tell me about a time you failed."</p>
                            </div>

                            <div className="flex justify-end">
                                <div className="bg-gold-400/10 p-4 rounded-lg rounded-tr-none border border-gold-400/30 mr-4 relative max-w-md text-right">
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gold-400 border-2 border-navy-900 flex items-center justify-center text-xs text-navy-900 font-bold">A</div>
                                    <p className="text-white text-sm">
                                        [The STAR Method Framework]<br />
                                        S: Situation ($5M deficit)<br />
                                        T: Task (Turnaround needed)<br />
                                        A: Action (Restructured team)<br />
                                        R: Result (Profit in Q4)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Timeline/Prep Steps */}
                <div className="glass p-10 rounded-2xl border border-slate-700">
                    <h2 className="text-3xl font-serif font-bold text-white mb-10 text-center">360° Preparation Protocol</h2>

                    <div className="relative">
                        {/* Center Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-700 hidden md:block"></div>

                        <div className="space-y-8">
                            {/* Step 1 */}
                            <div className="flex flex-col md:flex-row items-center justify-between group">
                                <div className="md:w-5/12 order-2 md:order-1 text-center md:text-right p-4 bg-navy-800 rounded-xl border border-slate-700 group-hover:border-gold-400 transition">
                                    <h4 className="font-bold text-white text-lg">Company Deep Dives</h4>
                                    <p className="text-slate-400 text-sm">Analyzing current challenges, stock performance, and recent press releases to ask intelligent questions.</p>
                                </div>
                                <div className="order-1 md:order-2 w-10 h-10 bg-navy-900 border-4 border-slate-600 rounded-full z-10 flex items-center justify-center group-hover:border-gold-400 transition">
                                    <span className="text-white font-bold text-xs">01</span>
                                </div>
                                <div className="md:w-5/12 order-3 bg-transparent p-4"></div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex flex-col md:flex-row items-center justify-between group">
                                <div className="md:w-5/12 order-3 md:order-1 bg-transparent p-4"></div>
                                <div className="order-1 md:order-2 w-10 h-10 bg-navy-900 border-4 border-slate-600 rounded-full z-10 flex items-center justify-center group-hover:border-gold-400 transition">
                                    <span className="text-white font-bold text-xs">02</span>
                                </div>
                                <div className="md:w-5/12 order-2 md:order-3 text-center md:text-left p-4 bg-navy-800 rounded-xl border border-slate-700 group-hover:border-gold-400 transition">
                                    <h4 className="font-bold text-white text-lg">STAR Implementation</h4>
                                    <p className="text-slate-400 text-sm">Structuring every answer with Situation, Task, Action, and Result to ensure clarity and impact.</p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex flex-col md:flex-row items-center justify-between group">
                                <div className="md:w-5/12 order-2 md:order-1 text-center md:text-right p-4 bg-navy-800 rounded-xl border border-slate-700 group-hover:border-gold-400 transition">
                                    <h4 className="font-bold text-white text-lg">Mock Simulations</h4>
                                    <p className="text-slate-400 text-sm">Real-time practice with tough questions ("Why should we hire you?", "What's your biggest weakness?")</p>
                                </div>
                                <div className="order-1 md:order-2 w-10 h-10 bg-navy-900 border-4 border-slate-600 rounded-full z-10 flex items-center justify-center group-hover:border-gold-400 transition">
                                    <span className="text-white font-bold text-xs">03</span>
                                </div>
                                <div className="md:w-5/12 order-3 bg-transparent p-4"></div>
                            </div>

                            {/* Step 4 */}
                            <div className="flex flex-col md:flex-row items-center justify-between group">
                                <div className="md:w-5/12 order-3 md:order-1 bg-transparent p-4"></div>
                                <div className="order-1 md:order-2 w-10 h-10 bg-navy-900 border-4 border-slate-600 rounded-full z-10 flex items-center justify-center group-hover:border-gold-400 transition">
                                    <span className="text-white font-bold text-xs">04</span>
                                </div>
                                <div className="md:w-5/12 order-2 md:order-3 text-center md:text-left p-4 bg-navy-800 rounded-xl border border-slate-700 group-hover:border-gold-400 transition">
                                    <h4 className="font-bold text-white text-lg">Body Language & Tone</h4>
                                    <p className="text-slate-400 text-sm">Optimizing non-verbal cues for both Zoom/Teams and in-person executive presence.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* CTA */}
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-serif font-bold text-white mb-6">Don't Practice on the Opportunity</h2>
                <p className="text-slate-400 mb-8 text-lg">
                    The interview isn't the time to figure out what you want to say. Walk in prepared, walk out hired.
                </p>
                <a
                    href="https://calendly.com/thedreamjobconsultant/60min/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gold-btn text-navy-900 px-10 py-4 rounded-full font-bold text-lg inline-block shadow-lg hover:shadow-gold-400/20 hover:scale-105 transition-all"
                >
                    Schedule Prep Session
                </a>
            </div>
        </div>
    );
};

export default InterviewPreparation;
