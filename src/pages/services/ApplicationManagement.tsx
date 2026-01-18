import React from 'react';
import { Link } from 'react-router-dom';

const ApplicationManagement = () => {
    return (
        <div className="bg-navy-900 min-h-screen pt-28 pb-20 px-4">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto mb-20">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent z-10"></div>
                    <img
                        src="/images/services/application-management.jpg"
                        alt="Application Management"
                        className="w-full h-[500px] object-cover opacity-60"
                    />
                    <div className="absolute inset-0 z-20 flex items-center px-8 md:px-16">
                        <div className="max-w-2xl">
                            <span className="text-gold-400 font-bold tracking-wider uppercase mb-4 block">Full-Service Execution</span>
                            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                                We Apply. <br />
                                <span className="text-gold-400">You Interview.</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                Your time is worth $500+ an hour. Why spend it filling out forms? We handle the tedious mechanics of the job search so you can focus on your current role—and your future interview.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="https://calendly.com/thedreamjobconsultant/60min/" target="_blank" className="gold-btn text-navy-900 px-8 py-4 rounded-full font-bold text-lg text-center shadow-lg hover:shadow-gold-400/20 transition-all">
                                    Delegate Your Search
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

                {/* The Workflow */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 relative">
                        <div className="bg-navy-800 p-6 rounded-2xl border border-slate-700 shadow-xl relative z-10">
                            <div className="flex items-center gap-4 mb-4 border-b border-slate-700 pb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <div className="text-xs text-slate-500 ml-auto">Dashboard.exe</div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between bg-navy-900 p-3 rounded border border-slate-800">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <span className="text-white text-sm">Applications Sent</span>
                                    </div>
                                    <span className="text-gold-400 font-bold">142</span>
                                </div>
                                <div className="flex items-center justify-between bg-navy-900 p-3 rounded border border-slate-800">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        <span className="text-white text-sm">Follow-ups Scheduled</span>
                                    </div>
                                    <span className="text-gold-400 font-bold">85</span>
                                </div>
                                <div className="flex items-center justify-between bg-navy-900 p-3 rounded border border-slate-800">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                        <span className="text-white text-sm">Interviews Booked</span>
                                    </div>
                                    <span className="text-gold-400 font-bold">12</span>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -top-4 -right-4 w-full h-full bg-gold-400/5 rounded-2xl -z-0"></div>
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl font-serif font-bold text-white mb-6">The "Reverse Recruiter" Model</h2>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Recruiters work for companies to find candidates. We work for YOU to find companies. Think of us as your personal talent agent.
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            We create a targeted list of 100-200 dream companies. We customize your resume for every single application. We hit "Submit." We track the status. We send the follow-up emails. You just check your calendar for interview invites.
                        </p>
                    </div>
                </div>

                {/* Features List */}
                <div className="glass p-10 rounded-2xl border border-slate-700">
                    <h2 className="text-3xl font-serif font-bold text-white mb-10 text-center">What We Handle</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-navy-800 flex items-center justify-center mb-4 border border-slate-700 shadow-lg">
                                <i className="fas fa-search text-gold-400 text-2xl"></i>
                            </div>
                            <h3 className="font-bold text-white mb-2">Daily Searching</h3>
                            <p className="text-sm text-slate-400">Scouring 50+ job boards everyday for new listings.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-navy-800 flex items-center justify-center mb-4 border border-slate-700 shadow-lg">
                                <i className="fas fa-edit text-gold-400 text-2xl"></i>
                            </div>
                            <h3 className="font-bold text-white mb-2">Tailoring</h3>
                            <p className="text-sm text-slate-400">Tweaking keywords and cover letters for every role.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-navy-800 flex items-center justify-center mb-4 border border-slate-700 shadow-lg">
                                <i className="fas fa-mouse-pointer text-gold-400 text-2xl"></i>
                            </div>
                            <h3 className="font-bold text-white mb-2">Submission</h3>
                            <p className="text-sm text-slate-400">Creating profiles and filling out those endless Workday forms.</p>
                        </div>
                    </div>
                </div>

            </section>

            {/* CTA */}
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-serif font-bold text-white mb-6">Reclaim Your Evenings</h2>
                <p className="text-slate-400 mb-8 text-lg">
                    Stop coming home from work just to work more. Let us grind while you rest.
                </p>
                <a
                    href="https://calendly.com/thedreamjobconsultant/60min/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gold-btn text-navy-900 px-10 py-4 rounded-full font-bold text-lg inline-block shadow-lg hover:shadow-gold-400/20 hover:scale-105 transition-all"
                >
                    Start Application Service
                </a>
            </div>
        </div>
    );
};

export default ApplicationManagement;
