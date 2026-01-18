import React from 'react';
import { Link } from 'react-router-dom';

const CoverLetterWriting = () => {
    return (
        <div className="bg-navy-900 min-h-screen pt-28 pb-20 px-4">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto mb-20">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent z-10"></div>
                    <img
                        src="/images/services/cover-letter-writing.jpg"
                        alt="Cover Letter Writing"
                        className="w-full h-[500px] object-cover opacity-60"
                    />
                    <div className="absolute inset-0 z-20 flex items-center px-8 md:px-16">
                        <div className="max-w-2xl">
                            <span className="text-gold-400 font-bold tracking-wider uppercase mb-4 block">Executive Narrative Crafting</span>
                            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                                The Art of the <br />
                                <span className="text-gold-400">Perfect Introduction.</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                Generic cover letters get deleted. Great ones get read. Exceptional ones get you hired. We write the latter.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="https://calendly.com/thedreamjobconsultant/60min/" target="_blank" className="gold-btn text-navy-900 px-8 py-4 rounded-full font-bold text-lg text-center shadow-lg hover:shadow-gold-400/20 transition-all">
                                    Get Your Story Told
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
                        <h2 className="text-3xl font-serif font-bold text-white mb-6">"Do People Still Read These?"</h2>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            It's the most common question we get. The answer is nuanced: <strong>Lazy recruiters don't read average cover letters.</strong> But decision-makers <em>always</em> read compelling ones.
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            When you are competing for a $200k+ role, the resume proves you <em>can</em> do the job. The cover letter proves you <em>want</em> to do it for <em>them</em>. It's the only place to show personality, passion, and cultural fit before the interview.
                        </p>
                    </div>
                    <div className="glass p-8 rounded-2xl border border-slate-700">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-navy-800 flex items-center justify-center border border-slate-700">
                                    <i className="fas fa-brain text-gold-400 text-2xl"></i>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">System 1 vs. System 2</h4>
                                    <p className="text-sm text-slate-400">We appeal to "Fast Thinking" (grabbing attention instantly) and "Slow Thinking" (logical persuasion).</p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-800"></div>
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-navy-800 flex items-center justify-center border border-slate-700">
                                    <i className="fas fa-bullseye text-gold-400 text-2xl"></i>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">The "Hook" Strategy</h4>
                                    <p className="text-sm text-slate-400">We never start with "I am writing to apply..." We start with a value bomb that demands attention.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Structure Visual - Document Style */}
                <div className="glass p-10 rounded-2xl border border-gold-400/20">
                    <h2 className="text-3xl font-serif font-bold text-white mb-10 text-center">Anatomy of a Winning Letter</h2>

                    <div className="max-w-3xl mx-auto bg-white text-navy-900 p-8 md:p-12 rounded-lg shadow-2xl relative">
                        {/* Decorative Envelope */}
                        <div className="absolute -top-4 -right-4 bg-gold-400 text-navy-900 px-4 py-2 font-bold transform rotate-6 shadow-lg rounded-sm text-sm">
                            EXCLUSIVE
                        </div>

                        {/* Letter Content */}
                        <div className="space-y-6 font-serif opacity-90">
                            {/* Header */}
                            <div className="flex justify-between items-end border-b-2 border-slate-200 pb-4 mb-8">
                                <div>
                                    <div className="text-2xl font-bold">YOUR NAME</div>
                                    <div className="text-sm text-slate-500">Executive Leader</div>
                                </div>
                                <div className="text-right text-sm text-slate-500">
                                    <div>[Date]</div>
                                    <div>[Hiring Manager Name]</div>
                                </div>
                            </div>

                            {/* The Hook */}
                            <div className="relative group p-4 border-l-4 border-transparent hover:border-gold-400 hover:bg-blue-50 transition cursor-help">
                                <div className="absolute -left-32 top-0 bg-navy-900 text-gold-400 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition w-28 text-right">
                                    <strong>The Hook:</strong> Immediate value proposition.
                                </div>
                                <p className="italic text-slate-600">
                                    "When I saw that [Company] was planning to expand into the APAC region, I knew my experience scaling [Previous Company] to $50M in that exact market could save you roughly 18 months of trial and error..."
                                </p>
                            </div>

                            {/* The Connection */}
                            <div className="relative group p-4 border-l-4 border-transparent hover:border-gold-400 hover:bg-blue-50 transition cursor-help">
                                <div className="absolute -left-32 top-0 bg-navy-900 text-gold-400 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition w-28 text-right">
                                    <strong>The Proof:</strong> Connecting skills to their pain points.
                                </div>
                                <p className="text-slate-800 text-sm">
                                    Your need for operational efficiency mirrors the challenge I faced at... I implemented a lean methodology that...
                                </p>
                            </div>

                            {/* The Close */}
                            <div className="relative group p-4 border-l-4 border-transparent hover:border-gold-400 hover:bg-blue-50 transition cursor-help">
                                <div className="absolute -left-32 top-0 bg-navy-900 text-gold-400 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition w-28 text-right">
                                    <strong>The CTA:</strong> Confident call to action.
                                </div>
                                <p className="text-slate-800 text-sm">
                                    I have some specific ideas about your Q3 strategy that I'd love to share. Are you open to a brief conversation next Tuesday?
                                </p>
                            </div>
                        </div>
                    </div>
                    <p className="text-center text-slate-400 mt-6 text-sm">Hover over the sections above to see our strategy.</p>
                </div>

            </section>

            {/* CTA */}
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-serif font-bold text-white mb-6">Stop Sending "To Whom It May Concern"</h2>
                <p className="text-slate-400 mb-8 text-lg">
                    Let us write a letter that opens doors, starts conversations, and sets the tone for your interview.
                </p>
                <a
                    href="https://calendly.com/thedreamjobconsultant/60min/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gold-btn text-navy-900 px-10 py-4 rounded-full font-bold text-lg inline-block shadow-lg hover:shadow-gold-400/20 hover:scale-105 transition-all"
                >
                    Get Your Cover Letter
                </a>
            </div>
        </div>
    );
};

export default CoverLetterWriting;
