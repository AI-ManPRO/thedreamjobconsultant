import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    const sections = [
        {
            id: "introduction",
            title: "1. Introduction",
            content: (
                <>
                    <p className="mb-4">
                        Welcome to <strong>The Dream Job Consultant</strong> (“Company,” “we,” “us,” or “our”). These Terms of Service (“Terms”) constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and The Dream Job Consultant, concerning your access to and use of the <strong>www.TheDreamJobConsultant.com</strong> website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).
                    </p>
                    <p className="mb-4">
                        We provide a range of career consulting services, including but not limited to Reverse Recruiting, Resume Writing, LinkedIn Profile Optimization, and Career Coaching (the "Services"). By accessing the Site, you acknowledge that you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the Site and must discontinue use immediately.
                    </p>
                    <p>
                        Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Service at any time and for any reason. We will alert you about any changes by updating the “Last updated” date of these Terms of Service, and you waive any right to receive specific notice of each such change.
                    </p>
                </>
            )
        },
        {
            id: "services",
            title: "2. Description of Services",
            content: (
                <>
                    <p className="mb-4">
                        The Dream Job Consultant offers professional career advancement services designed to assist job seekers in finding employment opportunities. Our key service offerings include:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 mb-4 text-slate-300">
                        <li>
                            <strong>Reverse Recruiting:</strong> A comprehensive service where a dedicated account manager handles job searches, applications, and networking on your behalf. This involves accessing third-party job boards and platforms using credentials authorized by you.
                        </li>
                        <li>
                            <strong>Document Optimization:</strong> Drafting, editing, and formatting professional documents including Resumes, Cover Letters, and LinkedIn profiles to adhere to current industry standards and Applicant Tracking System (ATS) best practices.
                        </li>
                        <li>
                            <strong>Career Coaching:</strong> One-on-one advisory sessions covering interview preparation, salary negotiation strategies, and career path planning.
                        </li>
                        <li>
                            <strong>Outplacement Services:</strong> Corporate solutions designed to support employees transitioning out of an organization.
                        </li>
                    </ul>
                    <p>
                        We strive to provide the most accurate and up-to-date information and strategies; however, the job market is dynamic. We do not guarantee employment, specific job offers, or specific salary outcomes unless explicitly stated in a "Job Offer Guarantee" package, which is subject to its own specific terms and conditions outlined in our Refund Policy.
                    </p>
                </>
            )
        },
        {
            id: "eligibility",
            title: "3. Eligibility and Account Registration",
            content: (
                <>
                    <p className="mb-4">
                        The Site is intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Site. By using the Site, you represent and warrant that:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 mb-4 text-slate-300">
                        <li>All registration information you submit will be true, accurate, current, and complete.</li>
                        <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                        <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                        <li>You are not a minor in the jurisdiction in which you reside.</li>
                        <li>You will not access the Site through automated or non-human means, whether through a bot, script or otherwise.</li>
                        <li>You will not use the Site for any illegal or unauthorized purpose.</li>
                    </ul>
                    <p>
                        If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site (or any portion thereof).
                    </p>
                </>
            )
        },
        {
            id: "responsibilities",
            title: "4. User Responsibilities and Conduct",
            content: (
                <>
                    <p className="mb-4">
                        As a user of the Site, you agree specifically to:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 mb-4 text-slate-300">
                        <li>
                            <strong>Cooperation:</strong> Provide timely feedback and responses to our team. For Reverse Recruiting clients, failure to respond to interview requests or urgent application queries within 48 hours may impact the success of the campaign and is your sole responsibility.
                        </li>
                        <li>
                            <strong>Accuracy:</strong> Ensure that all professional history, education, certifications, and skills provided to us for the creation of your documents are factual and verifiable. The Dream Job Consultant is not liable for any false claims made in your resume or applications.
                        </li>
                        <li>
                            <strong>Authorization:</strong> Grant The Dream Job Consultant permission to act as your agent in the job application process. This includes creating accounts on job boards (e.g., LinkedIn, Indeed, Glassdoor) in your name and submitting applications on your behalf.
                        </li>
                        <li>
                            <strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your account credentials. You agree to accept responsibility for all activities that occur under your account.
                        </li>
                    </ul>
                    <p>
                        <strong>Prohibited Activities:</strong> You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                    </p>
                </>
            )
        },
        {
            id: "payment",
            title: "5. Payment Terms and Cancellation",
            content: (
                <>
                    <p className="mb-4">
                        <strong>Fees:</strong> You agree to pay all fees and charges associated with your account on the terms valid at the time a fee or charge is due and payable. All prices are in US Dollars unless stated otherwise.
                    </p>
                    <p className="mb-4">
                        <strong>Billing:</strong> By providing a credit card or other payment method, you represent and warrant that you are authorized to use the designated payment method and that you authorize us (or our third-party payment processor) to charge your payment method for the total amount of your purchase (including any applicable taxes and other charges).
                    </p>
                    <p className="mb-4">
                        <strong>Refunds:</strong> Our refund policy is strictly limited due to the nature of our services, which involve significant time and labor. Generally, services utilizing intellectual property (Resumes, Strategies) are non-refundable once the drafting process has commenced. Please review our full <Link to="/refund-policy" className="text-gold-400 hover:underline">Refund Policy</Link> for detailed terms regarding specific packages and the Job Offer Guarantee.
                    </p>
                </>
            )
        },
        {
            id: "intellectual-property",
            title: "6. Intellectual Property Rights",
            content: (
                <>
                    <p className="mb-4">
                        Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
                    </p>
                    <p className="mb-4">
                        <strong>Client Deliverables:</strong> Upon full payment of all fees, The Dream Job Consultant assigns to you a perpetual, non-exclusive, non-transferable license to use, reproduce, and display the Resume, Cover Letter, and LinkedIn Profile content created for you for your personal career advancement. You acknowledge that the methodology, formatting styles, and underlying strategies remain the intellectual property of The Dream Job Consultant.
                    </p>
                    <p>
                        You are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use.
                    </p>
                </>
            )
        },
        {
            id: "liability",
            title: "7. Limitations of Liability",
            content: (
                <>
                    <p className="mb-4">
                        IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE OR SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                    </p>
                    <p className="mb-4">
                        SPECIFICALLY, WE ARE NOT LIABLE FOR:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 mb-4 text-slate-300">
                        <li>Any failure to secure employment or a job offer, regardless of the quality of services provided.</li>
                        <li>Rejection of your application by any employer or Applicant Tracking System.</li>
                        <li>Any negative outcome resulting from false or inaccurate information you provided to us.</li>
                        <li>Any unauthorized access to your accounts on third-party job boards, although we take reasonable security precautions.</li>
                    </ul>
                    <p>
                        NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING.
                    </p>
                </>
            )
        },
        {
            id: "indemnification",
            title: "8. Indemnification",
            content: (
                <>
                    <p className="mb-4">
                        You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) your use of the Site; (2) breach of these Terms of Service; (3) any breach of your representations and warranties set forth in these Terms of Service; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Site with whom you connected via the Site.
                    </p>
                </>
            )
        },
        {
            id: "termination",
            title: "9. Termination",
            content: (
                <>
                    <p className="mb-4">
                        These Terms of Service shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF SERVICE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF SERVICE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SITE OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
                    </p>
                </>
            )
        },
        {
            id: "governing-law",
            title: "10. Governing Law",
            content: (
                <>
                    <p className="mb-4">
                        These Terms shall be governed by and defined following the laws of Delaware. The Dream Job Consultant and yourself irrevocably consent that the courts of Delaware shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                    </p>
                </>
            )
        },
        {
            id: "contact",
            title: "11. Contact Us",
            content: (
                <>
                    <p className="mb-4">In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:</p>
                    <p className="text-slate-300">
                        <strong>The Dream Job Consultant</strong><br />
                        <strong>Email:</strong> info@thedreamjobconsultant.com<br />
                        <strong>Website:</strong> www.TheDreamJobConsultant.com
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
                        Terms of <span className="text-gold-400">Service</span>
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
                                key={section.id}
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

export default TermsAndConditions;
