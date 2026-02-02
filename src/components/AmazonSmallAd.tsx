import React from 'react';
import { SmallAd } from '../data/blog-posts';

interface AmazonSmallAdProps {
    ad: SmallAd;
    className?: string;
}

const AmazonSmallAd: React.FC<AmazonSmallAdProps> = ({ ad, className = '' }) => {
    if (ad.type === 'placeholder' || !ad.title) {
        return (
            <div className={`my-8 p-4 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 flex flex-col items-center justify-center text-center max-w-2xl mx-auto ${className}`}>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Ad Space Available</span>
                <p className="text-xs text-slate-400">Reserved for future recommendation</p>
            </div>
        );
    }

    return (
        <div className={`my-8 not-prose ${className}`}>
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 max-w-3xl mx-auto overflow-hidden">
                <div className="flex items-center p-4">
                    {/* Image Section */}
                    <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-slate-50 rounded-lg overflow-hidden border border-slate-100 flex items-center justify-center mr-4">
                        {ad.image ? (
                            <img
                                src={ad.image}
                                alt={ad.title}
                                className="w-full h-full object-contain"
                            />
                        ) : (
                            <i className="fas fa-book text-slate-300 text-2xl"></i>
                        )}
                    </div>

                    {/* Content Section */}
                    <div className="flex-grow min-w-0 mr-4">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide flex items-center gap-1">
                                <i className="fas fa-thumbtack text-slate-400 text-[9px]"></i>
                                Recommended
                            </span>
                            <span className="text-[10px] text-slate-400">via amazon</span>
                        </div>

                        <h4 className="font-bold text-navy-900 text-sm sm:text-base leading-tight truncate mb-1">
                            {ad.title}
                        </h4>

                        <div className="flex items-center gap-3">
                            {ad.price && (
                                <span className="text-blue-600 font-bold text-sm">{ad.price}</span>
                            )}

                            {ad.rating && (
                                <div className="flex items-center gap-5">
                                    <div className="flex text-yellow-400 text-xs">
                                        <i className="fas fa-star"></i>
                                        <span className="text-slate-600 font-semibold ml-1">{ad.rating}</span>
                                    </div>
                                    {ad.reviews && (
                                        <span className="text-[10px] text-slate-400">({ad.reviews})</span>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Action Section */}
                    <div className="flex-shrink-0">
                        <a
                            href={ad.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white border border-slate-200 text-navy-900 font-bold text-sm py-2 px-4 rounded-lg hover:bg-slate-50 transition-colors"
                        >
                            <i className="fab fa-amazon"></i>
                            <span className="hidden sm:inline">View</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AmazonSmallAd;
