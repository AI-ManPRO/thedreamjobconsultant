import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const RefundPolicy = () => {
    const sections = [
        {
            title: "1. Introduction",
            content: (
                <>
                    <p className="mb-4">
                        <strong>The Dream Job Consultant</strong> is committed to providing high-quality Reverse Recruiting and Career Coaching services. This Refund Policy outlines the terms under which refunds may be granted.
                    </p>
                    <p>
                        By purchasing any of our packages, you agree to the terms outlined in this Refund Policy.
                    </p>
                </>
            )
        },
        {
            title: "2. Reverse Recruiting Packages",
            content: (
                <>
                    <div className="bg-navy-700/50 p-6 rounded-lg border border-slate-600 mb-6">
                        <h3 className="text-xl font-bold text-gold-400 mb-2">Job Offer Guarantee</h3>
                        <p className="text-slate-200">
                            For clients purchasing our "Job Offer Guaranteed" packages, we offer a 6-month support guarantee. If you do not receive a job offer within 6 months of service commencement, and you have met all Client Responsibilities, you may be eligible for a refund of the service fee, excluding non-refundable deliverables.
                        </p>
                    </div>

                    <h3 className="text-xl font-semibold text-white mt-4 mb-3">Non-Refundable Components</h3>
                    <p className="mb-4">The following initial deliverables are labor-intensive and <strong>strictly non-refundable</strong> once delivered, regardless of the package outcome:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-300">
                        <li>Resume Writing & Optimization</li>
                        <li>Cover Letter Creation</li>
                        <li>LinkedIn Profile Optimization</li>
                        <li>Initial Strategy Consultation</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-4 mb-3">Eligibility for Refunds</h3>
                    <p className="mb-4">To be eligible for the guarantee-based refund, you must:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-300">
                        <li>Have purchased a package explicitly marked with a "Job Offer Guarantee".</li>
                        <li>Fully cooperate with our team (respond to emails within 24-48 hours).</li>
                        <li>Attend all scheduled coaching sessions and interviews.</li>
                        <li>Apply to jobs we recommend or approve within the dashboard.</li>
                        <li>Not have rejected a reasonable job offer within your specified criteria.</li>
                    </ul>
                </>
            )
        },
        {
            title: "3. Resume & LinkedIn Services",
            content: (
                <>
                    <p className="mb-4">
                        For standalone purchases of Resume, Cover Letter, or LinkedIn Optimization services:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-300">
                        <li><strong>Draft Stage:</strong> If you cancel before the first draft is delivered, a 50% cancellation fee applies to cover administrative and writer setup costs.</li>
                        <li><strong>Delivered Stage:</strong> Once the first draft has been delivered to you, the service is considered rendered and is <strong>non-refundable</strong>.</li>
                        <li><strong>Revisions:</strong> We offer unlimited revisions for 14 days after delivery to ensure your satisfaction.</li>
                    </ul>
                </>
            )
        },
        {
            title: "4. Coaching Sessions",
            content: (
                <>
                    <p className="mb-4">
                        For Career Coaching and Interview Preparation sessions:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-300">
                        <li><strong>Cancellation/Rescheduling:</strong> Must be requested at least 24 hours in advance. Less than 24 hours notice will result in forfeiture of the session.</li>
                        <li><strong>No-Shows:</strong> Failure to attend a scheduled session without notice constitutes a forfeiture of that session.</li>
                        <li><strong>Completed Sessions:</strong> Once a session has been conducted, it is non-refundable.</li>
                    </ul>
                </>
            )
        },
        {
            title: "5. Refund Request Process",
            content: (
                <>
                    <p className="mb-4">To request a refund, please follow these steps:</p>
                    <ol className="list-decimal pl-6 space-y-3 mb-6 text-slate-300">
                        <li>Submit a written request to <strong>info@thedreamjobconsultant.com</strong> with the subject line "Refund Request".</li>
                        <li>Include your order number and specific reason for the request.</li>
                        <li>For guarantee claims, attach evidence of your compliance with Client Responsibilities (e.g., interview logs).</li>
                    </ol>
                    <p>
                        We will review your request within 5 business days. Approved refunds will be processed to the original payment method within 10-14 days.
                    </p>
                </>
            )
        },
        {
            title: "6. Changes to Policy",
            content: (
                <>
                    <p>
                        The Dream Job Consultant reserves the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting to the website.
                    </p>
                </>
            )
        }
    ];

    return (
        <div className="bg-navy-900 min-h-screen pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Refund <span className="text-gold-400">Policy</span>
                    </motion.h1>
                    <p className="text-slate-400 text-lg">
                        Last Updated: January 1, 2026
                    </p>
                </div>

                {/* Content */}
                <div className="bg-navy-800 rounded-2xl p-8 md:p-12 border border-slate-700 shadow-xl">
                    <div className="prose prose-invert max-w-none">
                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="mb-12 last:mb-0"
                            >
                                <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-2">
                                    {section.title}
                                </h2>
                                <div className="text-slate-300 leading-relaxed text-base">
                                    {section.content}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RefundPolicy;
