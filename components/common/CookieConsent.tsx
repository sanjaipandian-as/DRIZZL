'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already accepted
        const consent = localStorage.getItem('drizzl-cookie-consent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('drizzl-cookie-consent', 'true');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "100%", opacity: 0 }}
                    transition={{ type: "spring", damping: 30, stiffness: 200 }}
                    className="fixed bottom-0 left-0 right-0 z-[200] w-full"
                >
                    <div className="bg-[#0C0908] border-t border-white/5 p-8 md:p-10 shadow-[0_-30px_60px_rgba(0,0,0,0.6)]">
                        <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-10">

                            {/* Text Content */}
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 flex-1">
                                <div className="w-14 h-14 rounded-2xl bg-gold-500/10 flex items-center justify-center flex-shrink-0 border border-gold-500/20">
                                    <svg className="w-7 h-7 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <div className="space-y-3 text-center md:text-left">
                                    <h3 className="text-white font-serif text-2xl md:text-3xl tracking-tight">Your Digital Privacy</h3>
                                    <p className="text-coffee-200/60 text-sm md:text-base leading-relaxed max-w-3xl">
                                        We use cookies to brew a better experience for you. By agreeing, you accept our
                                        <Link href="/privacy" className="text-gold-500 hover:text-gold-400 mx-1 underline underline-offset-4 decoration-gold-500/20">Privacy Policy</Link> and
                                        <Link href="/cookies" className="text-gold-500 hover:text-gold-400 mx-1 underline underline-offset-4 decoration-gold-500/20">Terms</Link>.
                                    </p>
                                </div>
                            </div>

                            {/* Actions - Professionally Stacked */}
                            <div className="flex flex-col gap-4 w-full md:w-auto min-w-[280px]">
                                <button
                                    onClick={handleAccept}
                                    className="w-full bg-gold-500 text-[#0C0908] font-bold text-xs tracking-[0.3em] uppercase py-5 px-10 rounded-full hover:bg-gold-400 transition-all duration-500 shadow-xl shadow-gold-500/10 active:scale-95"
                                >
                                    Accept All
                                </button>
                                <button
                                    onClick={handleAccept}
                                    className="w-full bg-transparent border border-white/20 text-white font-bold text-xs tracking-[0.3em] uppercase py-5 px-10 rounded-full hover:bg-white/5 transition-all duration-500 active:scale-95"
                                >
                                    Necessary Only
                                </button>
                            </div>

                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
