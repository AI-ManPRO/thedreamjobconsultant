import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { caseStudiesData } from '../../data';

const CaseStudyEvidence = () => {
    const { id, evidenceId } = useParams();
    const [isZoomed, setIsZoomed] = useState(false);

    // Data Lookup
    const study = caseStudiesData[id as keyof typeof caseStudiesData];

    if (!study) return <Navigate to="/case-studies" replace />;

    const evidenceItem = study.evidence.find(item => item.id === evidenceId);

    if (!evidenceItem) return <Navigate to={`/case-studies/${id}`} replace />;

    return (
        <div className="bg-navy-900 min-h-screen flex flex-col pt-28 pb-10">

            {/* Header Block: Back Navigation & Caption */}
            <div className="flex-shrink-0 w-full px-4 mb-8">
                <div className="max-w-7xl mx-auto">

                    {/* Back Link - Always Visible */}
                    <div className="mb-6">
                        <Link
                            to={`/case-studies/${id}`}
                            className="inline-flex items-center gap-2 text-gold-400 hover:text-white transition-colors bg-navy-800/50 px-4 py-2 rounded-full border border-slate-700 hover:bg-navy-800"
                        >
                            <i className="fas fa-arrow-left"></i>
                            <span className="text-sm font-bold uppercase tracking-wider">Back to Case Study</span>
                        </Link>
                    </div>

                    {/* Caption Center */}
                    <div className="text-center max-w-4xl mx-auto">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 block">{study.name} Case Study</span>
                        <h1 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 leading-tight">
                            {evidenceItem.label}
                        </h1>
                        <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                            {evidenceItem.desc}
                        </p>
                    </div>
                </div>
            </div>

            {/* Body Block: Image Viewport */}
            <div
                className={`flex-1 w-full relative flex flex-col ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
                onClick={() => setIsZoomed(!isZoomed)}
            >
                {/* Image Container with spacing */}
                <div className={`w-full flex-1 flex flex-col ${isZoomed ? 'items-center justify-start overflow-auto' : 'items-center justify-center overflow-hidden'} min-h-[50vh] px-4 gap-8 py-8`}>
                    {(evidenceItem.images || [evidenceItem.image]).map((imgSrc, idx) => (
                        <img
                            key={idx}
                            src={imgSrc || 'https://via.placeholder.com/800x600?text=Screenshot+Not+Available'}
                            alt={`${evidenceItem.label} - ${idx + 1}`}
                            className={`transition-all duration-300 rounded-lg shadow-2xl border border-slate-800 ${isZoomed
                                ? 'max-w-none w-auto h-auto'
                                : 'max-w-full max-h-[70vh] object-contain'
                                }`}
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.onerror = null;
                                const fileName = imgSrc?.split('/').pop() || 'unknown';
                                target.src = `https://placehold.co/800x400/1e293b/ef4444?text=Missing+File%0A${fileName}`;
                            }}
                        />
                    ))}
                </div>

                {/* Footer Hint */}
                {!isZoomed && (
                    <div className="text-center mt-6 pointer-events-none">
                        <span className="text-slate-500 text-xs uppercase tracking-widest bg-navy-800 px-3 py-1 rounded-full border border-slate-700">
                            <i className="fas fa-search-plus mr-2 text-gold-400"></i> Click image to Zoom
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CaseStudyEvidence;
