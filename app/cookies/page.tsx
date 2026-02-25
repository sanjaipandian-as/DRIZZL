'use client';

import { motion } from 'framer-motion';

export default function CookiesPage() {
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
                        <span className="text-gold-500 text-[10px] md:text-sm font-bold tracking-[0.5em] uppercase">Digital Experience</span>
                        <span className="h-[1px] w-12 bg-gold-500"></span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none text-coffee-900 uppercase"
                    >
                        Cookie <br />
                        <span className="text-gold-500 italic font-light">Policy</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-coffee-600/60 max-w-xl mx-auto text-lg italic"
                    >
                        How we use digital footprints to brew a better experience.
                    </motion.p>
                </header>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="prose prose-lg prose-coffee max-w-none space-y-12"
                >
                    <section className="space-y-4">
                        <h2 className="font-serif text-3xl text-coffee-900 border-b border-gold-500/20 pb-4 uppercase tracking-tight">1. What are Cookies?</h2>
                        <p className="text-coffee-800/70 leading-relaxed">
                            Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="font-serif text-3xl text-coffee-900 border-b border-gold-500/20 pb-4 uppercase tracking-tight">2. How we use Cookies</h2>
                        <p className="text-coffee-800/70 leading-relaxed">
                            DRIZZL CAFÉ uses cookies to understand how you interact with our website, to remember your preferences, and to provide you with a more personalized experience. We also use third-party cookies for analytics and marketing purposes.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="font-serif text-3xl text-coffee-900 border-b border-gold-500/20 pb-4 uppercase tracking-tight">3. Types of Cookies</h2>
                        <ul className="list-disc pl-6 text-coffee-800/70 space-y-2">
                            <li><strong>Essential Cookies:</strong> Necessary for the website to function properly.</li>
                            <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with the site.</li>
                            <li><strong>Functional Cookies:</strong> Remember your choices and settings.</li>
                            <li><strong>Targeting Cookies:</strong> Used to deliver relevant advertisements.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="font-serif text-3xl text-coffee-900 border-b border-gold-500/20 pb-4 uppercase tracking-tight">4. Managing Cookies</h2>
                        <p className="text-coffee-800/70 leading-relaxed">
                            Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit allaboutcookies.org.
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
