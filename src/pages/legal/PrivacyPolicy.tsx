import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    const sections = [
        {
            title: "1. Introduction",
            content: (
                <>
                    <p className="mb-4">
                        Thank you for choosing to be part of our community at <strong>The Dream Job Consultant</strong> (“Company,” “we,” “us,” or “our”). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us at info@thedreamjobconsultant.com.
                    </p>
                    <p className="mb-4">
                        This privacy notice describes how we might use your information if you visit our website <strong>www.TheDreamJobConsultant.com</strong> (the "Website"), and use our services (including Reverse Recruiting, Resume Writing, and Coaching). The purpose of this privacy notice is to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it.
                    </p>
                    <p>
                        Please read this privacy notice carefully, as it will help you understand what we do with the information that we collect.
                    </p>
                </>
            )
        },
        {
            title: "2. Information We Collect",
            content: (
                <>
                    <p className="mb-4">
                        We collect personal information that you voluntarily provide to us when you register on the Website, express an interest in obtaining information about us or our products and services, when you participate in activities on the Website, or otherwise when you contact us.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">a. Personal Information You Disclose to Us</h3>
                    <p className="mb-4">
                        The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make, and the products and features you use. The personal information we collect may include the following:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-300">
                        <li><strong>Personal Identity Data:</strong> Names, phone numbers, email addresses, mailing addresses, job titles, usernames, passwords.</li>
                        <li><strong>Professional Data:</strong> Resumes (CVs), Cover Letters, LinkedIn Profile URLs, employment history, educational background, certifications, and skills assessments.</li>
                        <li><strong>Financial Data:</strong> We collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by our payment processor.</li>
                        <li><strong>Credentials:</strong> For Reverse Recruiting services, we may collect and store login credentials for job board accounts (e.g., LinkedIn, Indeed) that you authorize us to manage on your behalf.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">b. Information Automatically Collected</h3>
                    <p className="mb-4">
                        We automatically collect certain information when you visit, use, or navigate the Website. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Website, and other technical information.
                    </p>
                    <p className="mb-4">
                        This information is primarily needed to maintain the security and operation of our Website, and for our internal analytics and reporting purposes.
                    </p>
                </>
            )
        },
        {
            title: "3. How We Use Your Information",
            content: (
                <>
                    <p className="mb-4">
                        We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                    </p>
                    <ul className="list-disc pl-6 space-y-3 mb-4 text-slate-300">
                        <li><strong>To provide and manage services:</strong> To create your Resume, optimize your LinkedIn profile, and execute Reverse Recruiting campaigns where we apply to jobs on your behalf.</li>
                        <li><strong>To facilitate account creation and logon process:</strong> If you choose to link your account with us to a third-party account (such as your Google or Facebook account), we use the information you allowed us to collect from those third parties to facilitate account creation and logon functionality.</li>
                        <li><strong>To send administrative information to you:</strong> We may use your personal information to send you product, service, and new feature information and/or information about changes to our terms, conditions, and policies.</li>
                        <li><strong>To protect our Services:</strong> We may use your information as part of our efforts to keep our Website safe and secure (for example, for fraud monitoring and prevention).</li>
                        <li><strong>To enforce our terms, conditions, and policies:</strong> For business purposes, to comply with legal and regulatory requirements or in connection with our contract.</li>
                        <li><strong>To respond to legal requests and prevent harm:</strong> If we receive a subpoena or other legal request, we may need to inspect the data we hold to determine how to respond.</li>
                    </ul>
                </>
            )
        },
        {
            title: "4. Sharing Your Information",
            content: (
                <>
                    <p className="mb-4">
                        We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may process or share your data that we hold based on the following legal basis:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 mb-4 text-slate-300">
                        <li><strong>Consent:</strong> We may process your data if you have given us specific consent to use your personal information for a specific purpose.</li>
                        <li><strong>Performance of a Contract:</strong> Where we have entered into a contract with you (e.g., for Reverse Recruiting), we send your personal information (Resume, Cover Letter) to third-party Employers and Job Boards as part of the service delivery.</li>
                        <li><strong>Vendors, Consultants and Other Third-Party Service Providers:</strong> We may share your data with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work. Examples include: payment processing, data analysis, email delivery (e.g., EmailJS), hosting services, and customer service.</li>
                        <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                    </ul>
                </>
            )
        },
        {
            title: "5. Data Security",
            content: (
                <>
                    <p className="mb-4">
                        We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security, and improperly collect, access, steal, or modify your information.
                    </p>
                    <p>
                        Especially regarding Reverse Recruiting credentials: We treat your login details for job boards with maximum confidentiality. We recommend that you use unique, temporary passwords for the duration of our service and change them immediately after the service concludes.
                    </p>
                </>
            )
        },
        {
            title: "6. Data Retention",
            content: (
                <>
                    <p className="mb-4">
                        We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
                    </p>
                    <p>
                        When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                    </p>
                </>
            )
        },
        {
            title: "7. Your Privacy Rights",
            content: (
                <>
                    <p className="mb-4">
                        Depending on your location (e.g., EEA, UK, California), you may have specific rights regarding your personal information:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 mb-4 text-slate-300">
                        <li><strong>Right to Access:</strong> You have the right to request copies of your personal data.</li>
                        <li><strong>Right to Rectification:</strong> You have the right to request that we correct any information you believe is inaccurate.</li>
                        <li><strong>Right to Erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
                        <li><strong>Right to Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                        <li><strong>Right to Object to Processing:</strong> You have the right to object to our processing of your personal data, under certain conditions.</li>
                        <li><strong>Right to Data Portability:</strong> You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                    </ul>
                    <p>
                        If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at info@thedreamjobconsultant.com.
                    </p>
                </>
            )
        },
        {
            title: "8. Controls for Do-Not-Track Features",
            content: (
                <>
                    <p className="mb-4">
                        Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.
                    </p>
                </>
            )
        },
        {
            title: "9. Contact Us",
            content: (
                <>
                    <p className="mb-4">
                        If you have questions or comments about this policy, you may email us at info@thedreamjobconsultant.com or by post to:
                    </p>
                    <p className="text-slate-300">
                        <strong>The Dream Job Consultant</strong><br />
                        Data Protection Officer<br />
                        info@thedreamjobconsultant.com
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
                        Privacy <span className="text-gold-400">Policy</span>
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

export default PrivacyPolicy;
