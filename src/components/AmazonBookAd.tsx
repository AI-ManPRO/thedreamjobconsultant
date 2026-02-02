import React, { useState } from 'react';

// Define the book interface here or import if shared (but local definition is fine for component props usually)
interface BookData {
    title: string;
    author: string;
    description: string;
    image: string;
    link: string;
    rating?: number;
    reviews?: number;
}

interface AmazonBookAdProps {
    book: BookData;
}

const AmazonBookAd: React.FC<AmazonBookAdProps> = ({ book }) => {
    const [imageError, setImageError] = useState(false);

    return (
        <div className="my-12 not-prose">
            <div className="bg-white border rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 max-w-2xl mx-auto border-blue-100">
                <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-1/3 bg-slate-50 flex items-center justify-center p-6 border-b sm:border-b-0 sm:border-r border-slate-100">
                        <div className="relative shadow-lg transform transition-transform hover:scale-105 duration-300 bg-white">
                            {/* Book cover with fallback */}
                            <img
                                src={imageError ? 'https://placehold.co/150x220/e2e8f0/475569?text=Book+Cover' : book.image}
                                alt={`Cover of ${book.title}`}
                                className="w-32 h-auto object-cover rounded-sm"
                                onError={() => setImageError(true)}
                            />
                        </div>
                    </div>
                    <div className="sm:w-2/3 p-6 flex flex-col justify-center">
                        <div className="text-xs font-bold text-gold-500 uppercase tracking-wider mb-2">
                            Recommended Read
                        </div>
                        <h4 className="text-xl font-bold text-navy-900 leading-tight mb-1">
                            {book.title}
                        </h4>
                        <p className="text-slate-500 text-sm mb-3">by {book.author}</p>

                        <div className="flex items-center mb-4">
                            <span className="text-gold-500 font-bold mr-2 text-sm">{book.rating || 5}</span>
                            <div className="flex text-yellow-400 text-sm">
                                {[...Array(5)].map((_, i) => {
                                    const rating = book.rating || 5;
                                    const fullBox = i + 1;
                                    const halfBox = i + 0.5;

                                    if (rating >= fullBox) {
                                        return <i key={i} className="fas fa-star"></i>;
                                    } else if (rating >= halfBox) {
                                        return <i key={i} className="fas fa-star-half-alt"></i>;
                                    } else {
                                        return <i key={i} className="fas fa-star text-slate-200"></i>;
                                    }
                                })}
                            </div>
                            <span className="text-xs text-slate-400 ml-2">({book.reviews || 100}+ reviews)</span>
                        </div>

                        <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                            {book.description}
                        </p>

                        <a
                            href={book.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-[#FF9900] text-white font-bold py-2.5 px-6 rounded-lg hover:bg-[#ffad33] transition-colors shadow-sm self-start w-full sm:w-auto text-sm"
                        >
                            <i className="fab fa-amazon"></i>
                            Buy on Amazon
                        </a>
                        <p className="text-[10px] text-slate-400 mt-3 text-center sm:text-left">
                            As an Amazon Associate I earn from qualifying purchases.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AmazonBookAd;
