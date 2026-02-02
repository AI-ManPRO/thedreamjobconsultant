import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const NewsletterWidget = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const form = useRef<HTMLFormElement>(null);

    // Using same credentials as Contact form (from BlogSidebar.tsx)
    const SERVICE_ID = 'service_hw6byzq';
    const TEMPLATE_ID = 'template_m2gdcr9';
    const PUBLIC_KEY = 'Gonb_I1cdUYOUEXM6';

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        setErrorMessage('');

        if (form.current) {
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
                .then(() => {
                    setStatus('success');
                    setEmail('');
                    // Reset status after 5 seconds to allow another subscription if needed
                    // or just leave it as success state
                    setTimeout(() => setStatus('idle'), 5000);
                }, (error) => {
                    console.error('Newsletter Error:', error);
                    setErrorMessage(error?.text || error?.message || 'Unknown error occurred');
                    setStatus('error');
                    setTimeout(() => setStatus('idle'), 5000);
                });
        }
    };

    return (
        <div className="bg-navy-900 rounded-xl shadow-lg p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-gold-500 rounded-full opacity-10 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-32 h-32 bg-blue-500 rounded-full opacity-10 blur-2xl"></div>

            <h3 className="text-xl font-bold mb-2 relative z-10">Join 10,000+ Professionals</h3>
            <p className="text-slate-300 text-sm mb-6 relative z-10">
                Get exclusive career strategies and market insights delivered to your inbox weekly.
            </p>

            {status === 'success' ? (
                <div className="bg-green-500/20 border border-green-500 rounded-lg p-6 text-center animate-fade-in relative z-10">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <p className="text-white font-bold mb-1">Subscribed!</p>
                    <p className="text-slate-300 text-sm">Check your inbox for updates.</p>
                </div>
            ) : (
                <form ref={form} onSubmit={handleSubscribe} className="relative z-10 space-y-3">
                    <input type="hidden" name="subject" value="Newsletter Subscription" />
                    <input type="hidden" name="message" value={`New newsletter subscription from: ${email}`} />
                    <input type="hidden" name="user_name" value="Newsletter Subscriber" />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-navy-800 border border-navy-700 text-white placeholder-slate-400 focus:border-gold-500 outline-none transition-colors"
                        required
                        disabled={status === 'sending'}
                    />
                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full bg-gold-500 text-navy-900 font-bold py-3 rounded-lg hover:bg-gold-400 transition-colors shadow-lg shadow-gold-900/20 flex justify-center items-center disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                        {status === 'sending' ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-navy-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Subscribing...
                            </>
                        ) : 'Subscribe Free'}
                    </button>
                    {status === 'error' && <p className="text-xs text-red-400 text-center mt-2">Error: {errorMessage}</p>}
                </form>
            )}

            {status !== 'success' && (
                <p className="text-xs text-slate-400 mt-4 text-center relative z-10">
                    No spam. Unsubscribe anytime.
                </p>
            )}
        </div>
    );
};

export default NewsletterWidget;
