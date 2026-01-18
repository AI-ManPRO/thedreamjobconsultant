import React from 'react';
import { Link } from 'react-router-dom';

const FAQTeaser = () => {
    const faqs = [
        {
            question: "How is this different from a headhunter?",
            answer: "Headhunters work for companies to fill specific roles. We work exclusively for YOU, the candidate. We proactively find roles that match your criteria, rather than waiting for you to fit a job description."
        },
        {
            question: "Do you only work with C-Suite executives?",
            answer: "While we specialize in executive placements (Director, VP, C-Level), we also support high-potential professionals and senior managers aiming for the next level."
        },
        {
            question: "Can you help me access the Hidden Job Market?",
            answer: "Absolutely. This is our core expertise. We use proprietary networking strategies to uncover unadvertised roles, which account for over 70% of executive hires."
        }
    ];

    return (
        <section className="py-20 bg-navy-900 border-t border-slate-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white text-center mb-12">
                    Common Questions
                </h2>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="glass rounded-lg p-6">
                            <h3 className="text-xl font-bold text-white mb-2">{faq.question}</h3>
                            <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <Link to="/faq" className="text-gold-400 font-bold hover:text-white transition underline decoration-gold-400 underline-offset-4">
                        View All Frequently Asked Questions
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FAQTeaser;
