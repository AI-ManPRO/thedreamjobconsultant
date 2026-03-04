import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const DoNotSellMyInfo = () => {
    const sections = [
        {
            title: "1. Your Global Privacy Rights",
            content: (
                <>
                    <p className="mb-4">
                        Under various global privacy laws, including the GDPR (Europe/UK), PIPEDA (Canada), and US State laws (such as CCPA/CPRA in California), you have the right to control how your data is used. This includes the right to opt-out of the "sale" or "sharing" of your personal information to third parties, as well as the right to opt-out of "targeted advertising."
                    </p>
                    <p className="mb-4">
                        At <strong>The Dream Job Consultant</strong>, we are committed to safeguarding your privacy and ensuring transparency in how we handle your data, especially the sensitive professional information you entrust to us for career coaching, resume writing, and reverse recruiting services.
                    </p>
                </>
            )
        },
        {
            title: "2. Do We 'Sell' or 'Share' Your Personal Information?",
            content: (
                <>
                    <p className="mb-4">
                        <strong>We do not traditionally "sell" your personal information for monetary compensation.</strong> We do not sell lists of our clients' contact information or professional data to data brokers or third-party marketers.
                    </p>
                    <p className="mb-4">
                        However, under the broad definitions of the CCPA/CPRA, the term "sell" or "share" can include using third-party analytics cookies, pixels, or trackers on our Website that share certain identifiers (like your IP address or browsing behavior) with third-party networks for cross-context behavioral advertising (Targeted Advertising) or analytics insights.
                    </p>
                    <p className="mb-4">
                        Additionally, as part of our core services (specifically Reverse Recruiting, Resume Writing, and Application Management), we fundamentally rely on transmitting your personal information (such as your resume, cover letter, and contact details) to prospective employers, recruiters, and job boards on your behalf. This is a deliberate action performed at your request to fulfill our service agreement.
                    </p>
                </>
            )
        },
        {
            title: "3. Sharing with Affiliates and Partners",
            content: (
                <>
                    <p className="mb-4">
                        To provide you with the most effective job search support, we may share your personal data with our trusted affiliates, subsidiaries, and corporate partners. Similar to other leading career platforms, this sharing serves various purposes naturally aligned with your job search, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-300">
                        <li>Recommending your profile to prospective employers and exclusive recruitment networks within our affiliate ecosystem.</li>
                        <li>Integrating your job search across partner job boards and specialized resume distribution channels.</li>
                        <li>Improving our internal operations, troubleshooting, and data analysis to provide you with better career resources and tools.</li>
                    </ul>
                    <p className="mb-4">
                        While this sharing is intended to maximize your career opportunities and streamline your success, privacy laws may classify these internal and partnered data distributions as a "sale" or "sharing" of personal information. You have the right to opt-out of these specific data-sharing practices.
                    </p>
                </>
            )
        },
        {
            title: "4. Categories of Information We Process",
            content: (
                <>
                    <p className="mb-4">
                        We may process the following categories of personal information for business purposes, which may intersect with the broad definitions of "sharing" under various privacy laws:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-300">
                        <li><strong>Identifiers:</strong> such as your name, email address, IP address, and cookie identifiers.</li>
                        <li><strong>Professional or Employment-Related Information:</strong> such as your resume, LinkedIn profile data, and employment history (shared strictly with your consent to fulfill services like Reverse Recruiting).</li>
                        <li><strong>Internet or Other Electronic Network Activity Information:</strong> such as your interactions with our Website, collected via cookies or pixels.</li>
                    </ul>
                </>
            )
        },
        {
            title: "5. How to Submit an Opt-Out Request",
            content: (
                <>
                    <p className="mb-4">
                        If you wish to exercise your privacy preferences and would like to opt-out of any potential "sale" or "sharing" of your personal information, or targeted advertising, you may do so by contacting us using the method below.
                    </p>
                    <p className="mb-4">
                        Please email us at <a href="mailto:info@thedreamjobconsultant.com" className="text-gold-400 hover:underline">info@thedreamjobconsultant.com</a> with the subject line <strong>"Do Not Sell or Share My Personal Information"</strong>.
                    </p>
                    <p className="mb-4">
                        In your email, please include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-300">
                        <li>Your full name.</li>
                        <li>The email address associated with your account or interactions with us.</li>
                        <li>A clear statement detailing whether you want to opt-out of Targeted Advertising, sharing with Affiliates, or all broad "sales/sharing" of your information.</li>
                    </ul>
                    <div className="bg-navy-700/50 p-4 rounded-lg border border-slate-600 mb-4 mt-6">
                        <p className="text-sm text-slate-300">
                            <strong>Note for Reverse Recruiting Clients:</strong> Opting out of the essential transfer of your professional information (e.g., sending your resume to employers or partner platforms) will prevent us from rendering Reverse Recruiting or application management services. By utilizing these services, you inherently direct us to purposefully disclose this information.
                        </p>
                    </div>
                </>
            )
        },
        {
            title: "6. Global Privacy Control (GPC)",
            content: (
                <>
                    <p className="mb-4">
                        We support the Global Privacy Control (GPC) signal. If you use a browser or browser extension that broadcasts the GPC signal, our website will recognize this signal as a valid request to opt out of the "sale" or "sharing" of your personal information through cookies and trackers on your device, including Targeted Advertising.
                    </p>
                </>
            )
        },
        {
            title: "7. Non-Discrimination",
            content: (
                <>
                    <p className="mb-4">
                        We respect your right to privacy. We will not discriminate against you for exercising your right to opt-out of the sale or sharing of your personal information. This means we will not deny you goods or services, charge you different prices, or provide a different level of quality, except where the refusal of data directly impairs our ability to perform the requested service (as noted for Reverse Recruiting).
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
                        Do Not Sell or Share My <span className="text-gold-400">Personal Information</span>
                    </motion.h1>
                    <p className="text-slate-400 text-lg">
                        Global Privacy Options (GDPR / PIPEDA / US State Laws)
                    </p>
                    <p className="text-slate-500 text-sm mt-2">
                        Last Updated: March 1, 2026
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

                <div className="mt-12 text-center">
                    <Link to="/privacy-policy" className="text-gold-400 hover:text-gold-300 font-medium inline-flex items-center gap-2">
                        <i className="fas fa-arrow-left"></i>
                        Return to Privacy Policy
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default DoNotSellMyInfo;
