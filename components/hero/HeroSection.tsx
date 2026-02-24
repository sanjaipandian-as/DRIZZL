"use client";
import React, { useEffect, useState } from 'react';
import { Star, MapPin } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

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
        <div className="h-screen w-full relative overflow-hidden transition-colors duration-500 bg-[#FDFBF7] text-[#1A1A1A]">

            {/* Mobile Background Image */}
            <div className="absolute inset-0 z-0 lg:hidden">
                <img
                    src="/imagebg2.png"
                    className="w-full h-full object-cover"
                    alt="Coffee Background"
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

            <main className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 h-full flex items-center py-24 pt-32 md:pt-28 lg:pt-20 md:py-0">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center w-full">
                    <div className="max-w-2xl relative z-20">
                        {/* Headline Section */}
                        <div className="space-y-0 md:space-y-2">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold leading-[0.9] text-[#1A3C34]">
                                BREWING THE
                            </h1>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold leading-[0.9] text-[#1A3C34]">
                                PERFECT
                            </h1>
                            <h1 className="font-luxury text-8xl font-semibold tracking-[0.12em] text-[#4a3424]">
                                DRIZZLE
                            </h1>
                        </div>

                        {/* Squiggly Decor */}
                        <div className="mt-6 mb-4">
                            <svg className="w-24 sm:w-32 md:w-36" viewBox="0 0 140 12" fill="none">
                                <path d="M1 10.5C10 10.5 15 1.5 25 1.5C35 1.5 40 10.5 50 10.5C60 10.5 65 1.5 75 1.5C85 1.5 90 10.5 100 10.5C110 10.5 115 1.5 125 1.5C135 1.5 139 10.5 139 10.5"
                                    stroke="#4A2C1D" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>

{/* --- STATS SECTION + BUTTON --- */}
<div className="flex flex-wrap items-center gap-8 mb-8">
    <div className="flex flex-col">
        <span className="text-2xl md:text-3xl font-serif font-bold text-[#1A3C34]">
            <Counter from={0} to={10000} suffix="+" />
        </span>
        <span className="text-xs font-medium text-[#1A3C34]/60 uppercase tracking-widest text-nowrap">
            Happy Customers
        </span>
    </div>
    
    <div className="flex flex-col border-l border-[#4A2C1D]/10 pl-8">
        <div className="flex items-center gap-1 text-2xl md:text-3xl font-serif font-bold text-[#1A3C34]">
            <span>4.5</span>
            <Star size={20} className="fill-[#4A2C1D] text-[#4A2C1D]" />
        </div>
        <span className="text-xs font-medium text-[#1A3C34]/60 uppercase tracking-widest">
            Rated
        </span>
    </div>

    {/* Find a Café Button - Positioned right next to the rating */}
    <button 
        onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=DRIZZL+CAFE+Marina+Mall', '_blank')}
        className="flex items-center gap-2 border border-[#4A2C1D]/20 hover:border-[#4A2C1D]/40 px-5 py-2.5 rounded-full transition-all hover:bg-white/50 active:scale-95 ml-auto sm:ml-0"
    >
        <span className="text-xs font-bold uppercase tracking-wider text-[#1A3C34]">
            Find a Café
        </span>
        <MapPin size={14} className="text-[#4A2C1D]" />
    </button>
</div>

                        {/* Subtext */}
                        <p className="max-w-md text-sm sm:text-base md:text-lg leading-relaxed text-[#1A3C34]/70">
                            Freshly brewed coffee, delicious snacks, and a
                            perfect place to relax — right here at Marina Mall.
                        </p>
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
                                <img
                                    src="/imagebg2.png"
                                    className="w-full h-full object-cover"
                                    alt="Coffee Experience"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>

            <style dangerouslySetInnerHTML={{
                __html: `
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@300;400;500;700&display=swap');
                .font-serif { font-family: 'Playfair Display', serif; }
                body { font-family: 'Inter', sans-serif; }
              `}} />
        </div>
    );
};

export default LandingPage;