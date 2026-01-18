import React, { useState } from 'react';

const NewsletterSignup = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission - in a real app this would call an API
        if (email) {
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 3000);
            setEmail('');
        }
    };

    return (
        <section className="py-20 bg-gradient-to-br from-indigo-900 to-navy-900 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold-500 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-3xl mx-auto px-4 relative z-10">
                <i className="fas fa-paper-plane text-4xl text-gold-400 mb-6 block"></i>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                    Join 10,000+ Executives
                </h2>
                <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                    Get weekly insights on the hidden job market, salary negotiation tactics, and executive branding tips delivered to your inbox.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Your corporate email address"
                        className="flex-1 px-6 py-4 rounded-lg bg-navy-800 border border-slate-600 text-white focus:outline-none focus:border-gold-400 transition"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold rounded-lg shadow-lg hover:shadow-gold-500/20 transition duration-300"
                    >
                        {submitted ? 'Subscribed!' : 'Subscribe Free'}
                    </button>
                </form>
                <p className="text-xs text-slate-500 mt-4">No spam. Unsubscribe anytime.</p>
            </div>
        </section>
    );
};

export default NewsletterSignup;
