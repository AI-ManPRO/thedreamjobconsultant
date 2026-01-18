import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../../data/blog-posts';

const BlogTeaser = () => {
    // Get the latest 3 posts
    const latestPosts = blogPosts.slice(0, 3);

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gold-500 font-semibold tracking-wider uppercase mb-3"
                    >
                        Success Strategies
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-serif font-bold text-navy-900 mb-6"
                    >
                        Latest From The Blog
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600"
                    >
                        Expert insights on executive job search, personal branding, interview prep, salary negotiation, and many more...
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {latestPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-slate-100 flex flex-col h-full"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-navy-900/0 transition-colors z-10" />
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <span className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm text-navy-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                                    {post.category}
                                </span>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <div className="mb-3 text-xs text-slate-400 font-medium">
                                    {post.date} • {Math.ceil(post.content.length / 800)} min read
                                </div>
                                <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-gold-500 transition-colors line-clamp-2 leading-tight">
                                    <Link to={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="text-slate-600 mb-6 flex-1 line-clamp-3 text-sm leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <Link
                                    to={`/blog/${post.slug}`}
                                    className="inline-flex items-center text-navy-900 font-bold hover:text-gold-500 transition-colors text-sm uppercase tracking-wide group/link"
                                >
                                    Read Article
                                    <i className="fas fa-arrow-right ml-2 group-hover/link:translate-x-1 transition-transform"></i>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center"
                >
                    <Link
                        to="/blog"
                        className="inline-flex items-center justify-center px-8 py-4 bg-navy-900 text-white font-bold rounded-full hover:bg-navy-800 transition-all duration-300 shadow-lg hover:shadow-navy-900/20 group"
                    >
                        View More Articles
                        <i className="fas fa-long-arrow-alt-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default BlogTeaser;
