import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // EmailJS Keys provided by user
  const YOUR_SERVICE_ID = 'service_hw6byzq';
  const YOUR_TEMPLATE_ID = 'template_8miroh6';
  const YOUR_PUBLIC_KEY = 'Gonb_I1cdUYOUEXM6';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    if (form.current) {
      emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
        .then((result) => {
          console.log(result.text);
          setStatus('success');
          setFormData({ user_name: '', user_email: '', phone: '', subject: '', message: '' });
        }, (error) => {
          console.log(error.text);
          setStatus('error');
          setErrorMessage('Failed to send message. Please try again or contact us via email.');
        });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-24 min-h-screen bg-navy-900 text-slate-300 selection:bg-gold-400 selection:text-navy-900">
      {/* Header Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-6xl font-extrabold text-white tracking-tight mb-6"
          >
            Connect with <span className="text-gold-400">Executive Career Experts</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to reclaim your time and accelerate your job search? Whether you have questions about our Reverse Recruiting methodology or are ready to get started, we are here to guide you.
          </motion.p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                We work exclusively with senior professionals and executives. Our team is available to discuss your career goals and how our tailored strategies can secure your next role efficiently.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gold-400/10 p-4 rounded-xl">
                    <i className="fas fa-envelope text-gold-400 text-2xl"></i>
                  </div>
                  <div className="ml-6">
                    <p className="text-sm font-medium text-gold-400 mb-1">Email Us</p>
                    <a href="mailto:info@thedreamjobconsultant.com" className="text-xl font-semibold text-white hover:text-gold-400 transition-colors">
                      info@thedreamjobconsultant.com
                    </a>
                    <p className="text-sm text-slate-500 mt-1">Response within 24 hours.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-500/10 p-4 rounded-xl">
                    <i className="fab fa-whatsapp text-green-500 text-2xl"></i>
                  </div>
                  <div className="ml-6">
                    <p className="text-sm font-medium text-gold-400 mb-1">WhatsApp Direct</p>
                    <a href="https://wa.me/201023642127?text=Hello%20Ayman,%20I%20am%20interested%20in%20Reverse%20Recruiting%20Services" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-white hover:text-green-500 transition-colors">
                      +2 010 2364 2127
                    </a>
                    <p className="text-sm text-slate-500 mt-1">Instant support for quick queries.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-2xl border border-slate-700/50 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 rounded-full filter blur-2xl group-hover:bg-gold-400/10 transition-all duration-500"></div>
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Move Forward?</h3>
              <p className="text-slate-400 mb-6">
                The most effective way to evaluate your eligibility for our program is through a direct consultation.
              </p>
              <a
                href="https://calendly.com/thedreamjobconsultant/60min/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-navy-900 transition duration-150 ease-in-out bg-gold-400 border border-transparent rounded-xl hover:bg-gold-300 focus:outline-none focus:border-gold-500 focus:shadow-outline-gold md:py-4 md:text-lg md:px-10 shadow-lg glow"
              >
                Book Your Free Strategy Call
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-3xl p-8 lg:p-12 border border-slate-700/50 shadow-2xl relative"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-6 bg-green-500/10 border border-green-500/50 rounded-xl p-4 flex items-center gap-3"
                >
                  <div className="bg-green-500 rounded-full p-1"><i className="fas fa-check text-navy-900 text-xs"></i></div>
                  <p className="text-green-400 text-sm font-medium">Message sent successfully! We will get back to you shortly.</p>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-6 bg-red-500/10 border border-red-500/50 rounded-xl p-4 flex items-center gap-3"
                >
                  <div className="bg-red-500 rounded-full w-5 h-5 flex items-center justify-center"><i className="fas fa-times text-white text-xs"></i></div>
                  <p className="text-red-400 text-sm font-medium">{errorMessage}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="user_name" className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    required
                    value={formData.user_name}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    className="block w-full px-4 py-4 bg-navy-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="user_email" className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    required
                    value={formData.user_email}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    className="block w-full px-4 py-4 bg-navy-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    className="block w-full px-4 py-4 bg-navy-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    className="block w-full px-4 py-4 bg-navy-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Inquiry about Services"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    className="block w-full px-4 py-4 bg-navy-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex justify-center items-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-navy-700 hover:bg-navy-600 border-slate-500 hover:border-gold-400 transition-all duration-300 shadow-lg disabled:opacity-75 disabled:cursor-wait"
              >
                {status === 'submitting' ? (
                  <>
                    <i className="fas fa-circle-notch fa-spin mr-2"></i> Sending...
                  </>
                ) : 'Send Message'}
              </button>
            </form>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
