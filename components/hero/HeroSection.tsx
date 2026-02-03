"use client";
import React from 'react';
import { ShoppingBag, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const LandingPage = () => {

    return (
        <div className="h-screen w-full relative overflow-hidden transition-colors duration-500 bg-[#FDFBF7] text-[#1A1A1A]">

            {/* Mobile Background Image - Only visible on mobile */}
            <div className="absolute inset-0 z-0 lg:hidden">
                <img
                    src="/imagebg2.png"
                    className="w-full h-full object-cover"
                    alt="Coffee Background"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7]/95 via-[#FDFBF7]/85 to-[#FDFBF7]/95"></div>
            </div>

            {/* Organic Background Shapes - Desktop only */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden hidden lg:block">
                <svg className="absolute top-0 right-0 w-[60%] h-auto opacity-100" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M800 0H350C420 150 250 250 450 450C650 650 800 500 800 600V0Z" fill="#E8EBDD" />
                </svg>
                <svg className="absolute bottom-0 left-0 w-full h-auto opacity-100" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 320L120 304C240 288 480 256 720 266.7C960 277 1200 331 1320 357.3L1440 384V320H1320C1200 320 960 320 720 320C480 320 240 320 120 320H0V320Z" fill="#EFE4D9" />
                </svg>
            </div>

            {/* Navigation Removed */}

            {/* Main Content */}
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
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif italic font-medium leading-[0.9] text-[#4A2C1D]">
                                DRIZZLE
                            </h1>
                        </div>

                        {/* Squiggly Decor */}
                        <div className="my-6 md:my-8">
                            <svg className="w-24 sm:w-32 md:w-36" viewBox="0 0 140 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 10.5C10 10.5 15 1.5 25 1.5C35 1.5 40 10.5 50 10.5C60 10.5 65 1.5 75 1.5C85 1.5 90 10.5 100 10.5C110 10.5 115 1.5 125 1.5C135 1.5 139 10.5 139 10.5"
                                    stroke="#4A2C1D" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>

                        {/* Subtext */}
                        <p className="max-w-md text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8 lg:mb-10 text-[#1A3C34]/70">
                            Elevate your morning ritual with our signature pour-overs and artisanal roasts.
                            Crafted for those who appreciate the slower, finer moments in life.
                        </p>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch sm:items-center">
                            <button className="flex items-center justify-center gap-3 bg-[#4A2C1D] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-xl hover:bg-[#3D2418] transition-all transform hover:-translate-y-1">
                                <span className="font-medium text-sm sm:text-base">Order Online</span>
                                <ShoppingBag size={18} />
                            </button>

                            <button className="flex items-center justify-center gap-3 border px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all hover:bg-stone-100 transform hover:-translate-y-1 border-stone-300">
                                <span className="font-medium text-sm sm:text-base">Find a Café</span>
                                <MapPin size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Right Side Image - Desktop Only */}
                    <div className="relative h-[800px] w-full hidden lg:flex items-center justify-center perspective-1000">
                        {/* Abstract Composition */}
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



            {/* Custom Font Styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@300;400;500&display=swap');
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        
        body {
          font-family: 'Inter', sans-serif;
        }
      `}} />
        </div>
    );
};

export default LandingPage;
