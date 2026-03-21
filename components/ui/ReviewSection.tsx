'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const REVIEWS = [
    {
        name: "Sem boy",
        role: "The Aroma Architect",
        text: "A very nice comfortable cafe and best quality food and drinks served... absolute perfection in every detail.",
    },
    {
        name: "Manisankar",
        role: "The Caffeine Curator",
        text: "Great experience! The atmosphere and quality service make Drizzl Café a must-visit at Marina Mall. The ambiance is perfect.",
    },
    {
        name: "Abinash Swain",
        role: "Caffeine Connoisseur",
        text: "Excellent service and top-notch quality. Always a pleasure visiting for a quick break and a perfect cup of coffee.",
    }
];

export default function ReviewSection() {
    return (
        <section className="py-24 lg:py-32 bg-[#FDFCFB] relative overflow-hidden font-sans">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-[#E8EBDD]/20 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <span className="h-[1px] w-12 bg-gold-500"></span>
                        <span className="text-[10px] lg:text-xs font-bold tracking-[0.4em] text-gold-600 uppercase">
                            Testimonials
                        </span>
                        <span className="h-[1px] w-12 bg-gold-500"></span>
                    </motion.div>

                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="font-serif text-4xl md:text-5xl lg:text-5xl text-[#1A3C34] leading-tight"
                    >
                        WHAT THEY <span className="italic font-light text-gold-500">SAY</span>
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 items-stretch">
                    {REVIEWS.map((review, idx) => (
                        <motion.div
                            key={review.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`flex flex-col group relative bg-white border border-coffee-50 p-7 sm:p-10 md:p-12 rounded-3xl md:rounded-[2.5rem] shadow-[0_20px_50px_-15px_rgba(26,19,14,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(26,19,14,0.1)] transition-all duration-700 
                                ${idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                        >
                            {/* Quote Icon Background - Resized for mobile equilibrium */}
                            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 text-gold-500/10 transition-colors group-hover:text-gold-500/20">
                                <Quote className="w-10 h-10 sm:w-16 sm:h-16" strokeWidth={1} />
                            </div>

                            <div className="mb-6 sm:mb-8 flex gap-1">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} className="w-3.5 h-3.5 text-gold-500 fill-gold-500" />
                                ))}
                            </div>

                            <p className="text-coffee-900/60 italic text-base sm:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-10 font-light relative z-10">
                                "{review.text}"
                            </p>

                            <div className="mt-auto pt-6 sm:pt-8 border-t border-coffee-50 flex items-center gap-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-coffee-50 flex items-center justify-center text-coffee-950 font-serif font-bold text-lg sm:text-xl uppercase flex-shrink-0">
                                    {review.name[0]}
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <h4 className="text-[12px] sm:text-[13px] lg:text-[15px] font-bold text-coffee-950 uppercase tracking-[0.1em] truncate">
                                        {review.name}
                                    </h4>
                                    <p className="text-gold-600 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] mt-1 truncate">
                                        {review.role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}