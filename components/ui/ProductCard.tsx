'use client';

import Button from './Button';

interface ProductCardProps {
    name: string;
    price: string;
    description: string;
    image: string;
    category: string;
}

export default function ProductCard({ name, price, description, image, category }: ProductCardProps) {
    return (
        <div className="group relative bg-cream-100/80 backdrop-blur-md rounded-[40px] p-8 pb-10 shadow-xl shadow-forest-900/5 border border-forest-900/5 transition-all duration-500 hover:shadow-2xl hover:shadow-forest-900/10">
            {/* Image Container - Top Down Circle */}
            <div className="relative -mt-20 mb-8 flex justify-center">
                <div className="w-56 h-56 rounded-full overflow-hidden shadow-2xl border-8 border-cream-50 group-hover:scale-105 transition-transform duration-700">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
                <div className="space-y-1">
                    <span className="text-rust-600 text-[10px] font-bold tracking-[0.2em] uppercase">
                        {category}
                    </span>
                    <h3 className="text-3xl font-display text-forest-900 drop-shadow-sm">
                        {name}
                    </h3>
                </div>

                <p className="text-forest-700 text-sm leading-relaxed line-clamp-3 italic font-light">
                    {description}
                </p>

                <div className="space-y-2 pt-2">
                    <span className="text-[10px] font-bold text-forest-500 uppercase tracking-widest">Total Price</span>
                    <div className="flex items-center justify-between">
                        {/* Price Pill */}
                        <div className="bg-cream-50 px-6 py-2 rounded-full border border-forest-900/5 shadow-inner">
                            <span className="text-forest-900 font-bold text-lg leading-none">
                                {price}
                            </span>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-3">
                            {/* Wishlist Button */}
                            <button className="w-12 h-12 rounded-2xl bg-rust-50 flex items-center justify-center text-rust-700 hover:bg-rust-600 hover:text-cream-50 transition-all duration-300 border border-rust-100">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </button>

                            {/* Add to Cart Button */}
                            <button className="flex items-center gap-3 bg-forest-900 text-cream-50 px-6 py-3 rounded-2xl hover:bg-forest-800 transition-all duration-300 group/btn shadow-lg shadow-forest-900/20">
                                <span className="text-xs font-bold tracking-widest">ADD TO CART</span>
                                <div className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center group-hover/btn:bg-rust-500 transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}