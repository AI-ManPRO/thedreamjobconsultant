import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../../data/blog-posts';
import SEO from '../../components/SEO';

const BlogPost = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = blogPosts.find(p => p.slug === slug);
    const [searchTerm, setSearchTerm] = useState('');

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    // Related Posts Logic (simple implementation: same category, not current post)
    const relatedPosts = blogPosts
        .filter(p => p.category === post.category && p.id !== post.id)
        .slice(0, 3);

    return (
        <div className="bg-slate-50 min-h-screen py-24">
            <SEO
                title={post.seo?.title || post.title}
                description={post.seo?.description || post.excerpt}
                keywords={post.seo?.keywords?.join(', ') || post.tags.join(', ')}
                canonical={`https://www.thedreamjobconsultant.com/blog/${slug}`}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Content Area */}
                    <article className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Link to="/blog" className="inline-flex items-center text-slate-500 hover:text-gold-500 mb-8 pt-8 transition-colors group font-medium">
                                <span className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center mr-3 group-hover:border-gold-300 transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                </span>
                                Back to Insights
                            </Link>

                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
                                <div className="h-64 sm:h-96 w-full relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent z-10"></div>
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover"
                                        style={{ objectPosition: post.imagePosition || 'center' }}
                                    />
                                    <div className="absolute bottom-0 left-0 p-8 sm:p-10 z-20 text-white w-full">
                                        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm font-bold tracking-wider uppercase">
                                            <span className="bg-gold-500 text-navy-900 px-4 py-1.5 rounded-full shadow-lg">{post.category}</span>
                                            <span className="text-slate-200 flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                                {post.date}
                                            </span>
                                            <span className="text-slate-200 flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                {Math.ceil(post.content.length / 800)} min read
                                            </span>
                                        </div>
                                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-4xl text-shadow-sm">{post.title}</h1>
                                    </div>
                                </div>

                                <div className="p-8 sm:p-12">
                                    {/* Author & Share */}
                                    <div className="flex items-center justify-between mb-12 border-b border-slate-100 pb-8">
                                        <div className="flex items-center">
                                            <div className="w-14 h-14 bg-navy-100 rounded-full flex items-center justify-center text-navy-700 font-bold text-2xl mr-4 border-2 border-white shadow-sm">
                                                {post.author.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-navy-900 font-bold text-lg">Written by {post.author}</p>
                                                <p className="text-slate-500 text-sm">Senior Career Consultant</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            {['linkedin', 'twitter', 'facebook', 'envelope'].map(icon => (
                                                <button key={icon} className="w-10 h-10 rounded-full bg-slate-50 text-slate-400 hover:bg-gold-50 hover:text-gold-500 transition-colors flex items-center justify-center">
                                                    <i className={`fab fa-${icon} ${icon === 'envelope' ? 'fas' : ''}`}></i>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div
                                        className="prose prose-lg md:prose-xl max-w-none text-slate-700 leading-relaxed
                                        prose-headings:font-bold prose-headings:text-navy-900 
                                        prose-h1:text-4xl prose-h1:mb-8
                                        prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:tracking-tight
                                        prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6
                                        prose-p:mb-8 prose-p:leading-relaxed text-lg
                                        prose-a:text-gold-600 prose-a:font-medium prose-a:no-underline prose-a:underline prose-a:decoration-2 prose-a:underline-offset-4 prose-a:decoration-gold-300 hover:prose-a:decoration-gold-500 hover:prose-a:text-gold-700 prose-a:transition-all
                                        prose-blockquote:bg-blue-50 prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:rounded-r-lg prose-blockquote:italic
                                        prose-ul:my-8 prose-li:my-4 prose-li:marker:text-gold-400
                                        prose-img:rounded-2xl prose-img:shadow-xl prose-img:my-12 prose-img:w-full
                                        prose-strong:text-navy-900 prose-strong:font-bold"
                                        dangerouslySetInnerHTML={{ __html: post.content }}
                                    />

                                    {/* Tags */}
                                    <div className="mt-16 pt-8 border-t border-slate-100">
                                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Related Topics</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {post.tags.map(tag => (
                                                <span key={tag} className="bg-slate-100 text-slate-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors cursor-pointer">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </article>

                    {/* Sidebar Area */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* Search Widget */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 mt-8">
                            <h3 className="text-lg font-bold text-navy-900 mb-4">Search Articles</h3>
                            <div className="relative mb-8">
                                <input
                                    type="text"
                                    placeholder="Search topic..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-100 outline-none transition-all"
                                />
                                <svg className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>

                            {/* CTA Widget */}
                            <div className="bg-navy-900 rounded-xl shadow-lg p-8 text-white relative overflow-hidden text-center">
                                <div className="absolute top-0 right-0 -mr-12 -mt-12 w-40 h-40 bg-gold-500 rounded-full opacity-10 blur-3xl"></div>
                                <div className="absolute bottom-0 left-0 -ml-12 -mb-12 w-40 h-40 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>

                                <h3 className="text-xl font-bold mb-4 relative z-10">Need Professional Help?</h3>
                                <p className="text-slate-300 text-sm mb-6 relative z-10">
                                    Our expert consultants can rewrite your resume and optimize your LinkedIn profile to land 3x more interviews.
                                </p>
                                <Link to="/booking" className="inline-block w-full bg-gold-500 text-navy-900 font-bold py-3 rounded-lg hover:bg-gold-400 transition-colors shadow-lg shadow-gold-900/20 relative z-10">
                                    Book Free Consultation
                                </Link>
                            </div>
                        </div>

                        {/* Affiliate Ad Placeholder */}
                        <div className="bg-slate-50 rounded-xl shadow-sm border-2 border-dashed border-slate-300 p-8 flex flex-col items-center justify-center text-center h-[300px]">
                            <span className="bg-slate-200 text-slate-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">Advertisement</span>
                            <div className="text-slate-400 font-medium">
                                <p>Affiliate Ad Space</p>
                                <p className="text-sm mt-2">Reserved for future partnerships</p>
                            </div>
                        </div>

                        {/* Recent Posts if any */}
                        {relatedPosts.length > 0 && (
                            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                                <h3 className="text-lg font-bold text-navy-900 mb-4">Related Articles</h3>
                                <div className="space-y-4">
                                    {relatedPosts.map(p => (
                                        <Link to={`/blog/${p.slug}`} key={p.id} className="flex gap-4 group">
                                            <img src={p.image} alt={p.title} className="w-20 h-20 object-cover rounded-lg" />
                                            <div>
                                                <h4 className="font-bold text-navy-900 text-sm leading-tight group-hover:text-gold-500 transition-colors line-clamp-2">{p.title}</h4>
                                                <span className="text-xs text-slate-500 mt-1 block">{p.date}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
