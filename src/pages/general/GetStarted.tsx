import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

const GetStarted = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        linkedin: '',
        country: '',
        city: '',
        jobTitle: '',
        yearsExp: '',
        function: '', // Added function
        industry: '',
        sector: '', // Added sector
        currentSalary: '',
        targetSalary: '',
        employmentStatus: '',
        searchDuration: '',
        workPreference: [] as string[],
        serviceInterest: '',
        careerStage: '',
        REFERRAL_SOURCE: '', // "How Did You Find Us?"
        startPreference: '', // "How Fast Are You Interested To Get Starting"
        message: '',
    });

    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    // EmailJS Keys from ContactPage.tsx
    const YOUR_SERVICE_ID = 'service_hw6byzq';
    const YOUR_TEMPLATE_ID = 'template_8miroh6';
    const YOUR_PUBLIC_KEY = 'Gonb_I1cdUYOUEXM6';

    const employmentOptions = ['Employed', 'Unemployed', 'Self-Employed', 'Laidoff', 'Student', 'Freelancer', 'Retired', 'Other'];
    const searchDurationOptions = ['Just started', '1-3 months', '4-6 months', '7-12 months', 'Over a year'];
    const serviceOptions = [
        'Reverse Recruiting (All)',
        'Career Coaching',
        'Resume Writing',
        'LinkedIn Profile Optimization',
        'Networking On LinkedIn',
        'Job Boards Profiles Creation & Optimization',
        'Job Searching & Applying',
        'Interview Preparation',
        'Salary Negotiation',
        'Outplacement Services',
        'Other'
    ];
    const sourceOptions = ['LinkedIn', 'Reddit', 'Google Search', 'Referral / Word of Mouth', 'MeetUp', 'Discord', 'GitHub', 'Skool', 'Facebook', 'Instagram', 'YouTube', 'TikTok', 'Other'];
    const startPreferenceOptions = ['Urgent', 'Next Month', '2-3 Months', '4-5 Months', 'Over 6 Months'];
    const careerStageOptions = ['Early Career (0-2 years)', 'Mid-Level (3-6 years)', 'Senior (7-9 years)', 'Manager (10-14 years)', 'Executive / C-Suite (15+ years)'];
    const functionOptions = [
        "Accounting / Auditing", "Administrative", "Advertising", "Analyst", "Art / Creative",
        "Business Development", "Consulting", "Customer Service", "Distribution", "Design",
        "Education", "Engineering", "Finance", "General Business", "HealthCare Provider",
        "Human Resources", "Information Technology", "Legal", "Management", "Manufacturing",
        "Marketing", "Other", "Public Relations", "Purchasing", "Product Management",
        "Project Management", "Production", "Quality Assurance", "Research", "Sales",
        "Science", "Strategy / Planning", "Supply Chain", "Training", "Writing / Editing"
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setFormData(prev => {
            const prefs = checked
                ? [...prev.workPreference, value]
                : prev.workPreference.filter(p => p !== value);
            return { ...prev, workPreference: prefs };
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setResumeFile(e.target.files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Construct the formatted message
        const formattedMessage = `
New Get Started Inquiry

-- PERSONAL INFORMATION --
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
LinkedIn: ${formData.linkedin}
Location: ${formData.city}, ${formData.country}

-- PROFESSIONAL BACKGROUND --
Current Job Title: ${formData.jobTitle}
Experience Level: ${formData.yearsExp} years
Employment Status: ${formData.employmentStatus}
Function: ${formData.function}
Industry: ${formData.industry}
Sector: ${formData.sector}
Current Salary: ${formData.currentSalary}
Target Salary: ${formData.targetSalary}
Searching For: ${formData.searchDuration}
Work Preference: ${formData.workPreference.join(', ')}

-- SERVICE INTEREST --
Service: ${formData.serviceInterest}
Career Stage: ${formData.careerStage}
How Found Us: ${formData.REFERRAL_SOURCE}
Start Preference: ${formData.startPreference}

-- USER MESSAGE --
${formData.message}
    `;

        // Create a temporary hidden input for the "message" field expected by EmailJS template
        if (formRef.current) {
            // Create or update hidden message input
            let hiddenMsgInput = formRef.current.querySelector('input[name="message"]') as HTMLInputElement;
            if (!hiddenMsgInput) {
                hiddenMsgInput = document.createElement('input');
                hiddenMsgInput.type = 'hidden';
                hiddenMsgInput.name = 'message';
                formRef.current.appendChild(hiddenMsgInput);
            }
            hiddenMsgInput.value = formattedMessage;

            // Also ensure user_name and subject are set correctly for the template
            let hiddenNameInput = formRef.current.querySelector('input[name="user_name"]') as HTMLInputElement;
            if (!hiddenNameInput) {
                hiddenNameInput = document.createElement('input');
                hiddenNameInput.type = 'hidden';
                hiddenNameInput.name = 'user_name';
                formRef.current.appendChild(hiddenNameInput);
            }
            hiddenNameInput.value = `${formData.firstName} ${formData.lastName}`;

            let hiddenSubjectInput = formRef.current.querySelector('input[name="subject"]') as HTMLInputElement;
            if (!hiddenSubjectInput) {
                hiddenSubjectInput = document.createElement('input');
                hiddenSubjectInput.type = 'hidden';
                hiddenSubjectInput.name = 'subject';
                formRef.current.appendChild(hiddenSubjectInput);
            }
            hiddenSubjectInput.value = `New Inquiry: ${formData.serviceInterest} - ${formData.firstName} ${formData.lastName}`;

            emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, formRef.current, YOUR_PUBLIC_KEY)
                .then((result) => {
                    console.log(result.text);
                    setStatus('success');
                    // Reset form
                    setFormData({
                        firstName: '', lastName: '', email: '', phone: '', linkedin: '',
                        country: '', city: '', jobTitle: '', yearsExp: '', industry: '', sector: '', function: '',
                        currentSalary: '', targetSalary: '', employmentStatus: '', searchDuration: '',
                        workPreference: [], serviceInterest: '', careerStage: '', REFERRAL_SOURCE: '', startPreference: '', message: ''
                    });
                    setResumeFile(null);
                    if (formRef.current) formRef.current.reset();
                }, (error) => {
                    console.log(error.text);
                    setStatus('error');
                    setErrorMessage(`Failed to send inquiry: ${error.text || 'Unknown error'}`);
                });
        }
    };

    return (
        <div className="pt-24 min-h-screen bg-navy-900 text-slate-300 selection:bg-gold-400 selection:text-navy-900 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        Get Started with <span className="text-gold-400">The Dream Job Consultant</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-400 max-w-2xl mx-auto"
                    >
                        Please fill out the form below so we can understand your improved career journey.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-navy-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 md:p-10 shadow-xl"
                >
                    <AnimatePresence>
                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mb-8 bg-green-500/10 border border-green-500/50 rounded-xl p-6 text-center"
                            >
                                <i className="fas fa-check-circle text-4xl text-green-400 mb-2"></i>
                                <h3 className="text-xl font-bold text-white mb-2">Information Received!</h3>
                                <p className="text-green-300">Thank you for reaching out. We will review your details and get back to you shortly.</p>
                                <Link to="/" className="inline-block mt-4 text-gold-400 hover:text-gold-300 underline">Return to Home</Link>
                            </motion.div>
                        )}
                        {status === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mb-8 bg-red-500/10 border border-red-500/50 rounded-xl p-6 text-center"
                            >
                                <i className="fas fa-exclamation-circle text-4xl text-red-400 mb-2"></i>
                                <h3 className="text-xl font-bold text-white mb-2">Submission Failed</h3>
                                <p className="text-red-300">{errorMessage}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {status !== 'success' && (
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                            {/* Personal Information */}
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-4 border-b border-slate-700 pb-2">Personal Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-1">First Name *</label>
                                        <input type="text" name="firstName" required value={formData.firstName} onChange={handleInputChange} className="w-full bg-navy-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-colors" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-1">Last Name *</label>
                                        <input type="text" name="lastName" required value={formData.lastName} onChange={handleInputChange} className="w-full bg-navy-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-colors" placeholder="Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-1">Email Address *</label>
                                        <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full bg-navy-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-colors" placeholder="john@example.com" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-1">Phone Number *</label>
                                        <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} className="w-full bg-navy-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-colors" placeholder="+1 (555) 000-0000" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-1">LinkedIn Profile URL *</label>
                                        <input type="url" name="linkedin" required value={formData.linkedin} onChange={handleInputChange} className="w-full bg-navy-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-colors" placeholder="https://linkedin.com/in/johndoe" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-1">Upload Resume/CV          in (PDF/Doc) *</label>
                                        <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="w-full text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-navy-700 file:text-gold-400 hover:file:bg-navy-600 cursor-pointer" />
                                        <p className="text-xs text-slate-500 mt-1">Note: Large files may not attach correctly. PDF preferred.</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-1">Country *</label>
                                        <input type="text" name="country" required value={formData.country} onChange={handleInputChange} className="w-full bg-navy-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-colors" placeholder="United States" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-1">City *</label>
                                        <input type="text" name="city" required value={formData.city} onChange={handleInputChange} className="w-full bg-navy-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-colors" placeholder="New York" />
                                    </div>
                                </div>
                            </div>

                            {/* Professional Details */}
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-4 border-b border-slate-700 pb-2">Professional Details</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-1">Current/Most Recent Job Title *</label>
                                        <input type="text" name="jobTitle" required value={formData.jobTitle} onChange={handleInputChange} className="w-full bg-navy-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-colors" placeholder="Senior Project Manager" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-1">Years of Experience (Level) *</label>
                                        <input type="number" name="yearsExp" required min="0" value={formData.yearsExp} onChange={handleInputChange} className="w-full bg-navy-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-colors" placeholder="8" />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-1">Employment Status *</label>
                                        <select name="employmentStatus" required value={formData.employmentStatus} onChange={handleInputChange} className="w-full bg-navy-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-colors">
                                            <option value="">Select Status</option>
                                            {employmentOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-1">Function *</label>
                                        <select name="function" required value={formData.function} onChange={handleInputChange} className="w-full bg-navy-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-colors">
                                            <option value="">Select Function</option>
                                            {functionOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-1">Industry *</label>
                                        <input type="text" name="industry" required value={formData.industry} onChange={handleInputChange} className="w-full bg-navy-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-colors" placeholder="e.g. Technology" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-1">Sector *</label>
                                        <input type="text" name="sector" required value={formData.sector} onChange={handleInputChange} className="w-full bg-navy-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-colors" placeholder="e.g. Software Development" />
                                    </div>

                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-1">Current/Last Salary</label>
                                        <input type="text" name="currentSalary" value={formData.currentSalary} onChange={handleInputChange} className="w-full bg-navy-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-colors" placeholder="e.g. $120,000" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-1">Target Salary</label>
                                        <input type="text" name="targetSalary" value={formData.targetSalary} onChange={handleInputChange} className="w-full bg-navy-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-colors" placeholder="e.g. $150,000+" />
                                    </div>
                                </div>
                            </div>

                            {/* Preferences */}
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-4 border-b border-slate-700 pb-2">Preferences & Goals</h3>

                                {/* Row 1: How Did You Find Us / Start Preference - SIDE BY SIDE */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-1">How Did You Find Us? *</label>
                                        <select name="REFERRAL_SOURCE" required value={formData.REFERRAL_SOURCE} onChange={handleInputChange} className="w-full bg-navy-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-colors">
                                            <option value="">Select Source</option>
                                            {sourceOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-1">How Fast Are You Interested To Start</label>
                                        <select name="startPreference" value={formData.startPreference} onChange={handleInputChange} className="w-full bg-navy-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-colors">
                                            <option value="">Select Option</option>
                                            {startPreferenceOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                        </select>
                                    </div>
                                </div>

                                {/* Row 2: Search Duration / Career Stage - SIDE BY SIDE */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-1">How long have you been searching for a job?</label>
                                        <select name="searchDuration" value={formData.searchDuration} onChange={handleInputChange} className="w-full bg-navy-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-colors">
                                            <option value="">Select Duration</option>
                                            {searchDurationOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-1">Current Career Stage *</label>
                                        <select name="careerStage" required value={formData.careerStage} onChange={handleInputChange} className="w-full bg-navy-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-colors">
                                            <option value="">Select Stage</option>
                                            {careerStageOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                        </select>
                                    </div>
                                </div>

                                {/* Row 3: Service Interest / Work Preference - SIDE BY SIDE */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-1">Service Interested In *</label>
                                        <select name="serviceInterest" required value={formData.serviceInterest} onChange={handleInputChange} className="w-full bg-navy-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-colors">
                                            <option value="">Select Service</option>
                                            {serviceOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-3">Work Preference (Select all that apply)</label>
                                        <div className="flex flex-wrap gap-4">
                                            {['On-Site', 'Remote', 'Hybrid'].map(pref => (
                                                <label key={pref} className="flex items-center space-x-2 cursor-pointer">
                                                    <input type="checkbox" name="workPreference" value={pref} checked={formData.workPreference.includes(pref)} onChange={handleCheckboxChange} className="form-checkbox h-5 w-5 text-gold-400 rounded focus:ring-gold-400 bg-navy-700 border-slate-600" />
                                                    <span className="text-slate-300">{pref}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-1">Additional Message / Notes</label>
                                <textarea name="message" rows={4} value={formData.message} onChange={handleInputChange} className="w-full bg-navy-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-colors" placeholder="Tell us more about your career goals..."></textarea>
                            </div>

                            {/* Consent Checkboxes */}
                            <div className="space-y-4 pt-2">
                                <label className="flex items-start gap-3 cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input type="checkbox" required className="peer sr-only" />
                                        <div className="w-5 h-5 border-2 border-slate-500 rounded peer-checked:bg-gold-400 peer-checked:border-gold-400 transition-all"></div>
                                        <i className="fas fa-check text-navy-900 text-xs absolute top-1 left-1 opacity-0 peer-checked:opacity-100 transition-opacity"></i>
                                    </div>
                                    <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                                        I agree to receive communications via email, WhatsApp, SMS, and phone calls. <span className="text-red-400">*</span>
                                    </span>
                                </label>

                                <label className="flex items-start gap-3 cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input type="checkbox" required className="peer sr-only" />
                                        <div className="w-5 h-5 border-2 border-slate-500 rounded peer-checked:bg-gold-400 peer-checked:border-gold-400 transition-all"></div>
                                        <i className="fas fa-check text-navy-900 text-xs absolute top-1 left-1 opacity-0 peer-checked:opacity-100 transition-opacity"></i>
                                    </div>
                                    <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                                        I agree with <Link to="/terms-and-conditions" target="_blank" className="text-gold-400 hover:underline">terms & conditions</Link>. <span className="text-red-400">*</span>
                                    </span>
                                </label>
                            </div>

                            <div className="pt-4">
                                <button type="submit" disabled={status === 'submitting'} className="w-full md:w-auto md:px-12 py-4 bg-gold-400 text-navy-900 font-bold rounded-xl hover:bg-gold-300 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-lg">
                                    {status === 'submitting' ? 'Submitting...' : 'Get Started Now'}
                                </button>
                            </div>
                        </form>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default GetStarted;
