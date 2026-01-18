import React from 'react';
import { Link } from 'react-router-dom';

const ResumeWriting = () => {
    return (
        <div className="bg-navy-900 min-h-screen pt-28 pb-20 px-4">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto mb-20">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent z-10"></div>
                    <img
                        src="/images/services/resume-writing.jpg"
                        alt="Resume Writing"
                        className="w-full h-[500px] object-cover opacity-60"
                    />
                    <div className="absolute inset-0 z-20 flex items-center px-8 md:px-16">
                        <div className="max-w-2xl">
                            <span className="text-gold-400 font-bold tracking-wider uppercase mb-4 block">Executive Document Preparation</span>
                            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                                Not Just a Resume. <br />
                                <span className="text-gold-400">A Business Case.</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                Your resume has 6 seconds to impress. We turn that brief glance into a long read. We craft narratives that position you not as an employee, but as an high-ROI investment.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="https://calendly.com/thedreamjobconsultant/60min/" target="_blank" className="gold-btn text-navy-900 px-8 py-4 rounded-full font-bold text-lg text-center shadow-lg hover:shadow-gold-400/20 transition-all">
                                    Claim Your Audit
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

                {/* The Problem */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 relative">
                        {/* Visual representation of resume scanning */}
                        <div className="bg-white p-6 rounded-lg shadow-xl relative transform -rotate-2 w-3/4 mx-auto opacity-80 h-64 overflow-hidden blur-[1px]">
                            <div className="h-4 bg-gray-300 w-1/3 mb-6"></div>
                            <div className="space-y-2">
                                <div className="h-2 bg-gray-200 w-full"></div>
                                <div className="h-2 bg-gray-200 w-full"></div>
                                <div className="h-2 bg-gray-200 w-5/6"></div>
                            </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-red-600 text-white font-bold text-xl px-6 py-3 rounded-full shadow-lg transform rotate-[-15deg] border-4 border-white">
                                REJECTED
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl font-serif font-bold text-white mb-6">The ATS Black Hole</h2>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            75% of resumes never see human eyes. They are filtered out by Applicant Tracking Systems (ATS) for lacking the right keywords, formatting, or structure. Even if you pass the bot, you face a tired recruiter scanning for reasons to say "no."
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            We engineer your resume to pass both tests. It satisfies the algorithms with precision formatting and SEO-rich content, while capturing the human reader with compelling storytelling and quantifiable impacts.
                        </p>
                    </div>
                </div>

                {/* The Solution - Before/After */}
                <div className="glass p-10 rounded-2xl border border-slate-700">
                    <h2 className="text-3xl font-serif font-bold text-white mb-10 text-center">The Transformation</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-navy-900/50 p-6 rounded-xl border border-red-900/30">
                            <h3 className="text-red-400 font-bold text-lg mb-4 flex items-center gap-2">
                                <i className="fas fa-minus-circle"></i> Typical Executive Resume
                            </h3>
                            <ul className="space-y-3 text-slate-400 text-sm">
                                <li className="flex items-start gap-2"><span className="text-red-500">×</span> List of responsibilities ("Responsible for sales")</li>
                                <li className="flex items-start gap-2"><span className="text-red-500">×</span> Generic buzzwords ("Team player", "Visionary")</li>
                                <li className="flex items-start gap-2"><span className="text-red-500">×</span> Passive voice & weak verbs</li>
                                <li className="flex items-start gap-2"><span className="text-red-500">×</span> Dense blocks of text (uncuttable)</li>
                            </ul>
                        </div>
                        <div className="bg-navy-900/50 p-6 rounded-xl border border-green-900/30 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-500 to-transparent opacity-10 rounded-bl-full"></div>
                            <h3 className="text-green-400 font-bold text-lg mb-4 flex items-center gap-2">
                                <i className="fas fa-check-circle"></i> The Dream Job Resume
                            </h3>
                            <ul className="space-y-3 text-slate-300 text-sm">
                                <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Outcomes & Achievements ("Grew revenue 200%")</li>
                                <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Industry-specific competencies & hard skills</li>
                                <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Active, power-driven language</li>
                                <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Skimmable, high-impact layout</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Features Graph/Infographic Idea */}
                <div className="flex flex-col md:flex-row gap-8 items-center justify-between bg-navy-800 p-8 rounded-2xl border border-slate-700">
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-bold text-white mb-4">Our "CAR" Methodology</h3>
                        <p className="text-slate-400 mb-6">
                            Every bullet point we write follows a strict psychological structure designed to prove competence.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-navy-700 flex items-center justify-center text-white font-bold border border-slate-600">C</div>
                                <div>
                                    <div className="font-bold text-white">Challenge</div>
                                    <div className="text-xs text-slate-500">What context/problem did you face?</div>
                                </div>
                            </div>
                            <div className="w-0.5 h-6 bg-slate-700 ml-6"></div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-navy-700 flex items-center justify-center text-white font-bold border border-slate-600">A</div>
                                <div>
                                    <div className="font-bold text-white">Action</div>
                                    <div className="text-xs text-slate-500">What specific steps did YOU take?</div>
                                </div>
                            </div>
                            <div className="w-0.5 h-6 bg-slate-700 ml-6"></div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gold-400 flex items-center justify-center text-navy-900 font-bold shadow-lg shadow-gold-400/20">R</div>
                                <div>
                                    <div className="font-bold text-gold-400">Result</div>
                                    <div className="text-xs text-slate-500">What was the quantifiable outcome? ($/%)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 bg-white rounded-lg p-6 shadow-xl transform rotate-1 transition hover:rotate-0 duration-500">
                        <div className="font-sans text-navy-900 border-b-2 border-slate-200 pb-2 mb-2 font-bold text-lg">JOHN DOE</div>
                        <div className="text-xs text-slate-500 mb-4">Chief Operations Officer | Scaling SaaS to $100M+</div>
                        <div className="space-y-3">
                            <div className="flex gap-2 text-xs">
                                <span className="font-bold text-navy-900">•</span>
                                <span>Spearheaded operational restructuring that reduced overhead by <strong className="bg-yellow-200 px-1">15% ($2.4M)</strong> within 12 months.</span>
                            </div>
                            <div className="flex gap-2 text-xs">
                                <span className="font-bold text-navy-900">•</span>
                                <span>Led a cross-functional team of 200+ to launch flagship product, resulting in <strong className="bg-yellow-200 px-1">45% market share</strong> gain.</span>
                            </div>
                            <div className="flex gap-2 text-xs">
                                <span className="font-bold text-navy-900">•</span>
                                <span>Negotiated strategic partnerships increasing supply chain efficiency by <strong className="bg-yellow-200 px-1">3x</strong>.</span>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* CTA */}
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-serif font-bold text-white mb-6">Invest in Your Personal Paper</h2>
                <p className="text-slate-400 mb-8 text-lg">
                    A great resume pays for itself with the first paycheck of your new role. Don't leave money on the table.
                </p>
                <a
                    href="https://calendly.com/thedreamjobconsultant/60min/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gold-btn text-navy-900 px-10 py-4 rounded-full font-bold text-lg inline-block shadow-lg hover:shadow-gold-400/20 hover:scale-105 transition-all"
                >
                    Get Your Resume Audit
                </a>
            </div>
        </div>
    );
};

export default ResumeWriting;
