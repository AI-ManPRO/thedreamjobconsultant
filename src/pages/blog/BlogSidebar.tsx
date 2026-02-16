import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const BlogSidebar = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const form = useRef<HTMLFormElement>(null);

    // Using same credentials as Contact form
    const SERVICE_ID = 'service_hw6byzq';
    const TEMPLATE_ID = 'template_m2gdcr9';
    const PUBLIC_KEY = 'Gonb_I1cdUYOUEXM6';

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Subscribe button clicked');
        setStatus('sending');

        if (form.current) {
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
                .then(() => {
                    setStatus('success');
                    setEmail('');
                    alert('Subscription successful! You will receive a confirmation email shortly.');
                    setTimeout(() => setStatus('idle'), 5000);
                }, (error) => {
                    console.error('Newsletter Error:', error);
                    setStatus('error');
                    alert('Subscription failed. Please try again or contact support.');
                    setTimeout(() => setStatus('idle'), 5000);
                });
        }
    };

    const categories = [
        { name: 'Career Advice', count: 5 },
        { name: 'LinkedIn', count: 3 },
        { name: 'Interview Prep', count: 4 },
        { name: 'Resume Tips', count: 2 },
        { name: 'Salary Negotiation', count: 1 },
    ];

    const recentPosts = [
        { title: '5 Signs You Need a Career Coach', slug: '5-signs-you-need-a-career-coach' },
        { title: 'Optimizing Your LinkedIn Profile', slug: 'optimizing-your-linkedin-profile' },
        { title: 'Mastering the Technical Interview', slug: 'mastering-the-technical-interview' },
    ];

    return (
        <aside className="space-y-8">
            {/* Search Widget */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100">
                <h3 className="text-xl font-bold text-navy-900 mb-4">Search</h3>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search articles..."
                        className="w-full pl-10 pr-4 py-2 border border-slate-300 bg-slate-50 rounded-lg focus:outline-none focus:border-gold-500 text-navy-900 placeholder:text-slate-400"
                    />
                    <svg className="w-5 h-5 text-slate-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>

            {/* Categories Widget */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100">
                <h3 className="text-xl font-bold text-navy-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                    {categories.map((cat, idx) => (
                        <li key={idx}>
                            <Link to="#" className="flex justify-between items-center text-slate-600 hover:text-gold-500 transition-colors">
                                <span>{cat.name}</span>
                                <span className="bg-slate-100 text-slate-500 text-xs py-1 px-2 rounded-full">{cat.count}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Newsletter Widget */}
            <div className="bg-navy-900 p-6 rounded-xl shadow-lg text-white">
                <h3 className="text-xl font-bold text-gold-500 mb-2">Join Our Newsletter</h3>
                <p className="text-slate-300 text-sm mb-4">Get the latest career tips and strategies delivered directly to your inbox.</p>

                {status === 'success' ? (
                    <div className="bg-green-500/20 border border-green-500 rounded-lg p-6 text-center animate-fade-in">
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="text-white font-bold mb-1">Subscribed!</p>
                        <p className="text-slate-300 text-sm">Check your inbox for updates.</p>
                    </div>
                ) : (
                    <form ref={form} onSubmit={handleSubscribe} className="space-y-3">
                        <input type="hidden" name="subject" value="Newsletter Subscription" />
                        <input type="hidden" name="message" value={`New newsletter subscription from: ${email}`} />
                        <input type="hidden" name="user_name" value="Newsletter Subscriber" />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg bg-navy-800 border border-navy-700 text-white placeholder-slate-400 focus:outline-none focus:border-gold-500"
                            required
                            disabled={status === 'sending'}
                        />
                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="w-full bg-gold-500 text-navy-900 font-bold py-2 rounded-lg hover:bg-white transition-colors disabled:opacity-75 disabled:cursor-not-allowed flex justify-center items-center"
                        >
                            {status === 'sending' ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-navy-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Subscribing...
                                </>
                            ) : 'Subscribe'}
                        </button>
                        {status === 'error' && <p className="text-xs text-red-400 text-center bg-red-500/10 p-2 rounded">Something went wrong. Please try again.</p>}
                        <p className="text-xs text-slate-500 text-center">No spam, unsubscribe anytime.</p>
                    </form>
                )}
            </div>

            {/* Recent Posts Widget */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100">
                <h3 className="text-xl font-bold text-navy-900 mb-4">Recent Posts</h3>
                <ul className="space-y-3">
                    {recentPosts.map((post, idx) => (
                        <li key={idx} className="border-b border-slate-50 last:border-0 pb-3 last:pb-0">
                            <Link to={`/blog/${post.slug}`} className="text-slate-700 hover:text-gold-500 font-medium text-sm line-clamp-2 transition-colors">
                                {post.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default BlogSidebar;
