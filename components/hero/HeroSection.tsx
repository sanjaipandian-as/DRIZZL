"use client";
import React, { useEffect, useState } from 'react';
import { Star, MapPin } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import Image from 'next/image';

// --- Typed Count Up Component ---
const Counter = ({ from, to, suffix = "" }: { from: number; to: number; suffix?: string }) => {
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest: number) => {
        return Math.round(latest).toLocaleString() + suffix;
    });
    const [displayValue, setDisplayValue] = useState<string>(from.toString());

    useEffect(() => {
        const controls = animate(count, to, { duration: 2.5, ease: "easeOut" });
        return rounded.on("change", (latest: string) => setDisplayValue(latest));
    }, [count, to, rounded]);

    return <span>{displayValue}</span>;
};

const LandingPage = () => {
    return (
        <div className="h-screen w-full relative overflow-hidden bg-[#FDFBF7] text-[#1A3C34]">

            {/* Mobile Background Image */}
            <div className="absolute inset-0 z-0 lg:hidden">
                <Image
                    src="/imagebg2.png"
                    fill
                    className="object-cover"
                    alt="Coffee Background"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7]/95 via-[#FDFBF7]/85 to-[#FDFBF7]/95"></div>
            </div>

            {/* Organic Background Shapes */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden hidden lg:block">
                <svg className="absolute top-0 right-0 w-[60%] h-auto opacity-100" viewBox="0 0 800 600" fill="none">
                    <path d="M800 0H350C420 150 250 250 450 450C650 650 800 500 800 600V0Z" fill="#E8EBDD" />
                </svg>
                <svg className="absolute bottom-0 left-0 w-full h-auto opacity-100" viewBox="0 0 1440 320" fill="none">
                    <path d="M0 320L120 304C240 288 480 256 720 266.7C960 277 1200 331 1320 357.3L1440 384V320H1320C1200 320 960 320 720 320C480 320 240 320 120 320H0V320Z" fill="#EFE4D9" />
                </svg>
            </div>

            <main className="relative z-10 container mx-auto px-5 sm:px-6 md:px-8 lg:px-16 h-full flex flex-col justify-center pt-16 md:pt-20 pb-6 md:pb-0">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center w-full">
                    <div className="max-w-2xl relative z-20">

                        {/* Small Label */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mb-4 md:mb-6"
                        >
                            <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.4em] text-[#1A3C34]/50 uppercase font-sans">
                                Artisan Coffee Experience
                            </span>
                        </motion.div>

                        {/* Headline Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="space-y-1 md:space-y-2 mb-4 md:mb-6"
                        >
                            <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold leading-[0.9] text-[#1A3C34]">
                                BREWING THE
                            </h1>
                            <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold leading-[0.9] text-[#1A3C34]">
                                PERFECT
                            </h1>
                            <h1 className="font-royal text-[2.8rem] sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[0.05em] sm:tracking-[0.08em] md:tracking-[0.12em] text-[#1A3C34] pt-1">
                                DRIZZL
                            </h1>
                        </motion.div>

                        {/* Squiggly Decor */}
                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="mb-4 md:mb-6 origin-left"
                        >
                            <svg className="w-20 sm:w-28 md:w-36" viewBox="0 0 140 12" fill="none">
                                <path d="M1 10.5C10 10.5 15 1.5 25 1.5C35 1.5 40 10.5 50 10.5C60 10.5 65 1.5 75 1.5C85 1.5 90 10.5 100 10.5C110 10.5 115 1.5 125 1.5C135 1.5 139 10.5 139 10.5"
                                    stroke="#1A3C34" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </motion.div>

                        {/* --- STATS ROW --- */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex items-center gap-6 sm:gap-8 mb-4 md:mb-6"
                        >
                            <div className="flex flex-col">
                                <span className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#1A3C34]">
                                    <Counter from={0} to={10000} suffix="+" />
                                </span>
                                <span className="text-[10px] sm:text-xs font-medium text-[#1A3C34]/50 uppercase tracking-widest whitespace-nowrap font-sans">
                                    Happy Customers
                                </span>
                            </div>

                            <div className="w-[1px] h-10 bg-[#1A3C34]/10"></div>

                            <div className="flex flex-col">
                                <div className="flex items-center gap-1 text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#1A3C34]">
                                    <span>4.5</span>
                                    <Star size={16} className="fill-[#1A3C34] text-[#1A3C34] sm:w-5 sm:h-5" />
                                </div>
                                <span className="text-[10px] sm:text-xs font-medium text-[#1A3C34]/50 uppercase tracking-widest font-sans">
                                    Rated
                                </span>
                            </div>

                            <div className="w-[1px] h-10 bg-[#1A3C34]/10 hidden sm:block"></div>

                            {/* Find a Café Button — inline on desktop, below on mobile */}
                            <button
                                onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=DRIZZL+CAFE,+The+Marina+Mall,+Rajiv+Gandhi+Salai,+Egattur,+Chennai,+Tamil+Nadu+603103', '_blank')}
                                className="hidden sm:flex items-center gap-2 border border-[#1A3C34]/20 hover:border-[#1A3C34]/40 px-5 py-2.5 rounded-full transition-all hover:bg-white/50 active:scale-95"
                            >
                                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#1A3C34] font-sans">
                                    Find a Café
                                </span>
                                <MapPin size={14} className="text-[#1A3C34]" />
                            </button>
                        </motion.div>

                        {/* Mobile-only Find a Café Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="sm:hidden mb-6"
                        >
                            <button
                                onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=DRIZZL+CAFE,+The+Marina+Mall,+Rajiv+Gandhi+Salai,+Egattur,+Chennai,+Tamil+Nadu+603103', '_blank')}
                                className="w-full flex items-center justify-center gap-2 bg-[#1A3C34] text-white px-6 py-3.5 rounded-full active:scale-[0.98] transition-transform"
                            >
                                <MapPin size={16} />
                                <span className="text-xs font-bold uppercase tracking-[0.2em] font-sans">
                                    Find a Café
                                </span>
                            </button>
                        </motion.div>

                        {/* Subtext */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="max-w-sm sm:max-w-md text-sm sm:text-base md:text-lg leading-relaxed text-[#1A3C34]/60 font-sans"
                        >
                            Freshly brewed coffee, delicious snacks, and a
                            perfect place to relax — right here at Marina Mall.
                        </motion.p>
                    </div>

                    {/* Right Side Image */}
                    <div className="relative h-[800px] w-full hidden lg:flex items-center justify-center perspective-1000">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E8EBDD] rounded-full blur-3xl opacity-50"></div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="absolute w-[600px] h-[750px] z-10"
                        >
                            <div className="relative w-full h-full overflow-hidden">
                                <Image
                                    src="/imagebg2.png"
                                    fill
                                    className="object-cover"
                                    alt="Coffee Experience"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LandingPage;
