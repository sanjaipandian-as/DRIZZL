'use client';

import { motion } from 'framer-motion';

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-[#FDFCFB] text-coffee-950 pt-32 pb-24 md:pt-40 md:pb-40 px-6">
            <div className="max-w-4xl mx-auto space-y-16">
                <header className="space-y-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-4"
                    >
                        <span className="h-[1px] w-12 bg-gold-500"></span>
                        <span className="text-gold-500 text-[10px] md:text-sm font-bold tracking-[0.5em] uppercase">Legal Standards</span>
                        <span className="h-[1px] w-12 bg-gold-500"></span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none text-coffee-900 uppercase"
                    >
                        Terms of <br />
                        <span className="text-gold-500 italic font-light">Service</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-coffee-600/60 max-w-xl mx-auto text-lg italic"
                    >
                        Guidelines for a seamless DRIZZL CAFÉ experience.
                    </motion.p>
                </header>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="prose prose-lg prose-coffee max-w-none space-y-12"
                >
                    <section className="space-y-4">
                        <h2 className="font-serif text-3xl text-coffee-900 border-b border-gold-500/20 pb-4 uppercase tracking-tight">1. Acceptance of Terms</h2>
                        <p className="text-coffee-800/70 leading-relaxed">
                            By accessing and using the DRIZZL CAFÉ website and services, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="font-serif text-3xl text-coffee-900 border-b border-gold-500/20 pb-4 uppercase tracking-tight">2. Use of Service</h2>
                        <p className="text-coffee-800/70 leading-relaxed">
                            The service is provided to you "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. You agree not to misuse the services or help anyone else do so.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="font-serif text-3xl text-coffee-900 border-b border-gold-500/20 pb-4 uppercase tracking-tight">3. Modification</h2>
                        <p className="text-coffee-800/70 leading-relaxed">
                            DRIZZL CAFÉ reserves the right to modify these terms from time to time at our sole discretion and without any notice. Changes to our terms become effective on the date they are posted and your continued use of DRIZZL CAFÉ after any changes to terms will signify your agreement to be bound by them.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="font-serif text-3xl text-coffee-900 border-b border-gold-500/20 pb-4 uppercase tracking-tight">4. Limitation of Liability</h2>
                        <p className="text-coffee-800/70 leading-relaxed">
                            DRIZZL CAFÉ shall not be liable for any direct, indirect, incidental, special or consequential damages resulting from the use or the inability to use the service.
                        </p>
                    </section>

                    <div className="pt-12 border-t border-gold-500/20">
                        <p className="text-coffee-900/40 text-sm font-bold tracking-[0.2em] uppercase text-center">
                            Last Updated: February 25, 2026
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
