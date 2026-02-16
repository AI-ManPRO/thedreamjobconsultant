import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../../data/blog-posts';
import SEO from '../../components/SEO';
import NewsletterWidget from '../../components/NewsletterWidget';

const POSTS_PER_PAGE = 10;

const Blog = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    // Update search term when URL param changes
    React.useEffect(() => {
        const query = searchParams.get('search');
        if (query) {
            setSearchTerm(query);
            setCurrentPage(1);
        }
    }, [searchParams]);

    // Scroll to top when page changes
    React.useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);

    // Calculate categories and counts
    const categories = blogPosts.reduce((acc, post) => {
        acc[post.category] = (acc[post.category] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    // Filter posts
    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
        return matchesSearch && matchesCategory;
    });

    // Pagination
    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
    const displayedPosts = filteredPosts.slice(
        (currentPage - 1) * POSTS_PER_PAGE,
        currentPage * POSTS_PER_PAGE
    );

    return (
        <div className="bg-slate-50 min-h-screen py-24">
            <SEO
                title="Career Advice Blog"
                description="Expert insights, data-driven strategies, and premium resources for your career growth."
                keywords="career advice, executive coaching, job search strategy, salary negotiation"
                canonical="https://www.thedreamjobconsultant.com/blog"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10 pt-6"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Expert Career Insights</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        In-depth articles, market research, and actionable strategies to help executives and professionals navigate the modern job market.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Content Area */}
                    <div className="lg:col-span-8">
                        {displayedPosts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {displayedPosts.map((post, index) => (
                                    <motion.div
                                        key={post.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
                                    >
                                        <div className="h-56 overflow-hidden relative">
                                            <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-navy-900/0 transition-colors z-10" />
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                                style={{ objectPosition: post.imagePosition || 'center' }}
                                            />
                                            <span className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm text-navy-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                                                {post.category}
                                            </span>
                                        </div>
                                        <div className="p-6 flex-1 flex flex-col">
                                            <div className="mb-3 text-sm text-slate-500 font-medium">
                                                {post.date} • {Math.ceil(post.content.length / 800)} min read
                                            </div>
                                            <h2 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-gold-500 transition-colors leading-tight">
                                                <Link to={`/blog/${post.slug}`}>
                                                    {post.title}
                                                </Link>
                                            </h2>
                                            <p className="text-slate-600 mb-6 flex-1 line-clamp-3 leading-relaxed">
                                                {post.excerpt}
                                            </p>
                                            <Link
                                                to={`/blog/${post.slug}`}
                                                className="inline-flex items-center text-navy-900 font-bold hover:text-gold-500 transition-colors uppercase text-sm tracking-wide"
                                            >
                                                Read Article
                                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-white rounded-xl border border-slate-100">
                                <h3 className="text-xl font-bold text-navy-900 mb-2">No posts found</h3>
                                <p className="text-slate-500">Try adjusting your search or category filter.</p>
                                <button
                                    onClick={() => { setSearchTerm(''); setSelectedCategory(null); }}
                                    className="mt-4 text-gold-500 font-semibold hover:text-gold-600"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="mt-16 flex justify-center gap-2 items-center flex-wrap">
                                {/* First Page */}
                                <button
                                    onClick={() => setCurrentPage(1)}
                                    disabled={currentPage === 1}
                                    className="px-3 py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium text-sm"
                                    title="First Page"
                                >
                                    « First
                                </button>

                                {/* Previous */}
                                <button
                                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                    disabled={currentPage === 1}
                                    className="px-4 py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    Previous
                                </button>

                                {/* Page Numbers */}
                                <div className="flex gap-1">
                                    {[...Array(totalPages)].map((_, i) => (
                                        <button
                                            key={i + 1}
                                            onClick={() => setCurrentPage(i + 1)}
                                            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors font-medium
                                                ${currentPage === i + 1
                                                    ? 'bg-navy-900 text-white shadow-lg'
                                                    : 'border border-slate-200 text-slate-600 hover:bg-slate-50'
                                                }`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}
                                </div>

                                {/* Next */}
                                <button
                                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                    disabled={currentPage === totalPages}
                                    className="px-4 py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    Next
                                </button>

                                {/* Last Page */}
                                <button
                                    onClick={() => setCurrentPage(totalPages)}
                                    disabled={currentPage === totalPages}
                                    className="px-3 py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium text-sm"
                                    title="Last Page"
                                >
                                    Last »
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Sidebar Area */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* Search Widget */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                            <h3 className="text-lg font-bold text-navy-900 mb-4">Search Articles</h3>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search topic..."
                                    value={searchTerm}
                                    onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 bg-slate-50 text-navy-900 focus:border-gold-400 focus:ring-2 focus:ring-gold-100 outline-none transition-all placeholder:text-slate-400"
                                />
                                <svg className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>




                        {/* Newsletter Widget */}
                        <div className="mb-8">
                            <NewsletterWidget />
                        </div>

                        {/* Affiliate Ad Placeholder */}
                        <div className="bg-slate-50 rounded-xl shadow-sm border-2 border-dashed border-slate-300 p-8 flex flex-col items-center justify-center text-center h-[300px]">
                            <span className="bg-slate-200 text-slate-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">Advertisement</span>
                            <div className="text-slate-400 font-medium">
                                <p>Affiliate Ad Space</p>
                                <p className="text-sm mt-2">Reserved for future partnerships</p>
                            </div>
                        </div>

                        {/* Categories Widget */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                            <h3 className="text-lg font-bold text-navy-900 mb-4">Categories</h3>
                            <ul className="space-y-2">
                                <li>
                                    <button
                                        onClick={() => { setSelectedCategory(null); setCurrentPage(1); }}
                                        className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors text-sm font-medium
                                            ${!selectedCategory ? 'bg-gold-50 text-gold-600' : 'text-slate-600 hover:bg-slate-50'}`}
                                    >
                                        <span>All Posts</span>
                                        <span className="bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full text-xs border border-slate-200">
                                            {blogPosts.length}
                                        </span>
                                    </button>
                                </li>
                                {Object.entries(categories).map(([category, count]) => (
                                    <li key={category}>
                                        <button
                                            onClick={() => { setSelectedCategory(category); setCurrentPage(1); }}
                                            className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors text-sm font-medium
                                                ${selectedCategory === category ? 'bg-gold-50 text-gold-600' : 'text-slate-600 hover:bg-slate-50'}`}
                                        >
                                            <span>{category}</span>
                                            <span className="bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full text-xs border border-slate-200">
                                                {count}
                                            </span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
