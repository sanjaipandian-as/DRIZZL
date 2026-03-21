'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#FDFCFB] flex items-center justify-center px-6 overflow-hidden relative">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>

            {/* Cinematic Background Elements */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-coffee-900/5 rounded-full blur-3xl"></div>

            <div className="max-w-4xl w-full relative z-10 text-center space-y-12">
                {/* Visual Anchor */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-48 h-48 md:w-64 md:h-64 mx-auto"
                >
                    <div className="absolute inset-0 border border-gold-500/20 rounded-full p-4 animate-[spin_20s_linear_infinite]">
                        <div className="w-full h-full border-t-2 border-gold-500/40 rounded-full"></div>
                    </div>
                    <div className="absolute inset-4 rounded-full overflow-hidden">
                        <Image
                            src="/LogoV1.png"
                            alt="Drizzl Logo"
                            fill
                            className="object-contain p-8 opacity-20"
                        />
                    </div>
                    {/* The Big 404 */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-serif text-[8rem] md:text-[12rem] text-coffee-900/10 leading-none select-none tracking-tighter">
                            404
                        </span>
                    </div>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="space-y-6 md:space-y-8"
                >
                    <div className="space-y-4">
                        <span className="text-gold-500 text-[10px] md:text-xs font-bold tracking-[0.6em] uppercase block">Lost in the brew</span>
                        <h1 className="font-serif text-5xl md:text-8xl text-coffee-900 uppercase leading-[0.9] tracking-tight">
                            A GAP IN <br />
                            <span className="italic text-gold-500">EXPERIENCE.</span>
                        </h1>
                    </div>
                    
                    <p className="text-coffee-900/60 text-base md:text-xl font-light leading-relaxed max-w-lg mx-auto italic font-serif">
                        "The perfect cup remains elusive. The path you followed has vanished like steam in the morning air."
                    </p>

                    <div className="pt-8">
                        <Link href="/">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-coffee-900 text-white px-10 md:px-16 py-4 md:py-6 rounded-full text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase hover:bg-gold-500 hover:text-coffee-900 transition-all shadow-2xl relative overflow-hidden group"
                            >
                                <span className="relative z-10">Return to Origin</span>
                                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>

                {/* Subtle Brand Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ delay: 1 }}
                    className="pt-20"
                >
                    <p className="text-[9px] font-bold tracking-[0.5em] uppercase text-coffee-900">
                        Sanctuary of Artisan Roasts
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
