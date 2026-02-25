'use client';

import { motion } from 'framer-motion';

export default function PrivacyPage() {
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
                        <span className="text-gold-500 text-[10px] md:text-sm font-bold tracking-[0.5em] uppercase">Security & Trust</span>
                        <span className="h-[1px] w-12 bg-gold-500"></span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none text-coffee-900 uppercase"
                    >
                        Privacy <br />
                        <span className="text-gold-500 italic font-light">Policy</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-coffee-600/60 max-w-xl mx-auto text-lg italic"
                    >
                        Your trust is our most valuable ingredient. Here is how we protect your information.
                    </motion.p>
                </header>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="prose prose-lg prose-coffee max-w-none space-y-12"
                >
                    <section className="space-y-4">
                        <h2 className="font-serif text-3xl text-coffee-900 border-b border-gold-500/20 pb-4 uppercase tracking-tight">1. Information Collection</h2>
                        <p className="text-coffee-800/70 leading-relaxed">
                            At DRIZZL CAFÉ, we collect information to provide better services to all our customers. This includes information you give us (like name, email, and phone number when you contact us) and information we get from your use of our services (like device information and cookies).
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="font-serif text-3xl text-coffee-900 border-b border-gold-500/20 pb-4 uppercase tracking-tight">2. Use of Information</h2>
                        <p className="text-coffee-800/70 leading-relaxed">
                            We use the information we collect to provide, maintain, protect and improve our services, and to develop new ones. We also use this information to offer you tailored content – like giving you more relevant search results.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="font-serif text-3xl text-coffee-900 border-b border-gold-500/20 pb-4 uppercase tracking-tight">3. Data Protection</h2>
                        <p className="text-coffee-800/70 leading-relaxed">
                            We work hard to protect DRIZZL CAFÉ and our users from unauthorized access to or unauthorized alteration, disclosure or destruction of information we hold. In particular, we encrypt many of our services and review our information collection, storage and processing practices.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="font-serif text-3xl text-coffee-900 border-b border-gold-500/20 pb-4 uppercase tracking-tight">4. Your Choice</h2>
                        <p className="text-coffee-800/70 leading-relaxed">
                            People have different privacy concerns. Our goal is to be clear about what information we collect, so that you can make meaningful choices about how it is used. You can always contact us to request the deletion of your data.
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
