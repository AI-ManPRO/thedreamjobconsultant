import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const CancellationPage = () => {
  return (
    <>
      <Helmet>
        <title>Order Cancelled | The Dream Job Consultant</title>
        <meta name="description" content="Your order or subscription has been cancelled. We're sorry to see you go." />
      </Helmet>

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 px-4 pt-28">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-navy-900/90 pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl w-full"
        >
          <div className="glass border border-slate-500/30 p-8 md:p-12 rounded-2xl text-center shadow-2xl shadow-slate-500/10 backdrop-blur-xl">
            
            {/* Info/Sad Icon */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="w-24 h-24 mx-auto mb-8 bg-slate-500/20 rounded-full flex items-center justify-center border-2 border-slate-400"
            >
              <i className="fas fa-info text-4xl text-slate-300"></i>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-3xl md:text-5xl font-serif font-bold text-white mb-4"
            >
              Order Cancelled
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-slate-300 mb-8 font-light"
            >
              We're sorry to see you go. Your transaction has been cancelled and no charges were made.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-navy-800/50 p-6 rounded-lg border border-slate-700 mb-8"
            >
              <h3 className="text-slate-300 font-bold mb-2 uppercase tracking-widest text-sm">Did you change your mind?</h3>
              <p className="text-slate-400">
                If this was a mistake, or if you're ready to proceed with boosting your career, our services are always available. We're here to help whenever you're ready.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link 
                to="/" 
                className="inline-block px-8 py-4 bg-slate-600 text-white font-bold rounded-lg hover:bg-slate-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-slate-500/20"
              >
                Return to Home
              </Link>
              
              <Link 
                to="/services" 
                className="inline-block px-8 py-4 border border-gold-400 text-gold-400 font-bold rounded-lg hover:bg-gold-400 hover:text-navy-900 transition-all duration-300 transform hover:scale-105"
              >
                View Services
              </Link>
            </motion.div>

          </div>
        </motion.div>
      </section>
    </>
  );
};

export default CancellationPage;
