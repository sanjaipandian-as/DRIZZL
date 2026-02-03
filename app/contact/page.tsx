'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

export default function ContactPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    };

    return (
        <div ref={containerRef} className="min-h-screen bg-[#FBF9F7] text-coffee-950 selection:bg-gold-500 selection:text-white overflow-hidden">

            {/* 1. CINEMATIC LIGHT HERO */}
            <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-cream-100 px-4">
                <motion.div style={{ y }} className="absolute inset-0">
                    <img
                        src="/DrizzlCafe1.jpeg"
                        className="w-full h-full object-cover scale-110 opacity-60"
                        alt="Drizzl Cafe Interior"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FBF9F7] via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#FBF9F7] via-[#FBF9F7]/50 to-transparent opacity-90 h-40"></div>
                    <div className="absolute inset-0 bg-white/5"></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative z-10 text-center space-y-4 md:space-y-8 max-w-5xl mx-auto pt-40 pb-20"
                >
                    <motion.div variants={itemVariants} className="inline-flex items-center justify-center gap-4">
                        <span className="h-[1px] w-8 md:w-16 bg-gold-500"></span>
                        <span className="text-gold-600 text-[10px] md:text-xs font-bold tracking-[0.4em] md:tracking-[0.6em] uppercase">Connect With Us</span>
                        <span className="h-[1px] w-8 md:w-16 bg-gold-500"></span>
                    </motion.div>

                    <motion.h1
                        className="font-display text-5xl sm:text-7xl md:text-[9vw] lg:text-[10vw] leading-[0.85] md:leading-[0.8] uppercase tracking-tighter text-coffee-900"
                    >
                        <motion.span variants={itemVariants} className="block">START THE</motion.span>
                        <motion.span
                            variants={itemVariants}
                            className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-500 via-gold-600 to-coffee-400 italic py-2 md:py-6"
                            style={{ textShadow: "0 10px 40px rgba(184, 134, 11, 0.15)" }}
                        >
                            CONVERSATION
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-coffee-600 text-base md:text-xl lg:text-2xl max-w-2xl mx-auto font-light leading-relaxed italic px-4"
                    >
                        "Your thoughts matter as much as our beans. Whether it's a catering inquiry or a shared love for the roast, we're here to listen."
                    </motion.p>
                </motion.div>

                {/* Background Decor */}
                <motion.div
                    style={{ y: textY }}
                    className="absolute bottom-0 right-0 font-display text-[20vw] md:text-[25vw] text-coffee-900/[0.02] select-none leading-none pointer-events-none translate-y-1/4"
                >
                    HELLO
                </motion.div>
            </section>

            <section className="relative z-20 pb-20 md:pb-40 -mt-20 md:-mt-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="grid lg:grid-cols-12 gap-8 md:gap-16 lg:gap-24">

                        {/* 2. THE BOUTIQUE LIGHT FORM */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
                            className="lg:col-span-7 bg-white/80 backdrop-blur-xl p-8 sm:p-12 md:p-16 rounded-[40px] md:rounded-[60px] shadow-2xl shadow-coffee-200/20 border border-white relative overflow-hidden group"
                        >
                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-bl-[100px] transition-transform duration-700 group-hover:scale-110"></div>

                            <form className="space-y-8 md:space-y-12 relative z-10">
                                <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
                                    <InputGroup label="Your Name" placeholder="MARCUS DRIZZL" type="text" />
                                    <InputGroup label="Email Address" placeholder="HELLO@DRIZZL.CAFE" type="email" />
                                </div>

                                <InputSelect
                                    label="Subject of Inquiry"
                                    options={[
                                        "General Inquiry",
                                        "Catering & Events",
                                        "Partnership Opportunity",
                                        "Career Inquiry"
                                    ]}
                                />

                                <div className="space-y-3 group relative">
                                    <label className="text-[10px] font-bold text-coffee-400 uppercase tracking-[0.2em] group-focus-within:text-gold-600 transition-colors duration-300">Message</label>
                                    <textarea
                                        rows={4}
                                        placeholder="TELL US MORE ABOUT YOUR VISION..."
                                        className="w-full bg-transparent border-b border-coffee-100 py-4 text-coffee-900 placeholder:text-coffee-200/50 focus:outline-none transition-all font-light text-base md:text-lg resize-none relative z-10"
                                    ></textarea>
                                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-coffee-100"></div>
                                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-500 transition-all duration-500 group-focus-within:w-full"></div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.01, backgroundColor: "#1A120B" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-5 md:py-6 bg-coffee-900 text-white font-bold tracking-[0.4em] uppercase rounded-full transition-all shadow-xl shadow-coffee-900/10 flex items-center justify-center gap-3 overflow-hidden group/btn"
                                >
                                    <span>Send Inquiry</span>
                                    <motion.span
                                        initial={{ x: -10, opacity: 0 }}
                                        whileHover={{ x: 0, opacity: 1 }}
                                        className="inline-block"
                                    >
                                        →
                                    </motion.span>
                                </motion.button>
                            </form>
                        </motion.div>

                        {/* 3. CONTACT INTELLIGENCE - LIGHT MODE */}
                        <div className="lg:col-span-5 flex flex-col justify-between py-6 md:py-10">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                                }}
                                className="space-y-12 md:space-y-16"
                            >
                                <motion.div variants={itemVariants} className="space-y-6">
                                    <h2 className="text-gold-600 font-bold tracking-[0.4em] uppercase text-xs">Headquarters</h2>
                                    <div className="space-y-4">
                                        <h3 className="font-display text-4xl sm:text-5xl uppercase tracking-tighter text-coffee-900">Auckland Central</h3>
                                        <p className="text-coffee-600 text-lg md:text-xl font-light leading-relaxed italic">
                                            123 Coffee Street, Brewery District <br />
                                            Auckland 1010, New Zealand
                                        </p>
                                    </div>
                                </motion.div>

                                <div className="grid sm:grid-cols-2 gap-8 md:gap-10 border-t border-coffee-100/50 pt-10 md:pt-12">
                                    <motion.div variants={itemVariants} className="space-y-4">
                                        <h4 className="text-gold-600 text-[10px] font-bold tracking-[0.4em] uppercase">Call Us</h4>
                                        <a href="tel:+6491234567" className="block text-coffee-900 text-lg font-bold tracking-wider hover:text-gold-600 transition-colors">+64 9 123 4567</a>
                                    </motion.div>
                                    <motion.div variants={itemVariants} className="space-y-4">
                                        <h4 className="text-gold-600 text-[10px] font-bold tracking-[0.4em] uppercase">Email</h4>
                                        <a href="mailto:hello@drizzl.cafe" className="block text-coffee-900 text-lg font-bold tracking-wider hover:text-gold-600 transition-colors">hello@drizzl.cafe</a>
                                    </motion.div>
                                </div>

                                <motion.div variants={itemVariants} className="space-y-8 border-t border-coffee-100/50 pt-10 md:pt-12">
                                    <h4 className="text-gold-600 text-[10px] font-bold tracking-[0.4em] uppercase">Hours of Operation</h4>
                                    <div className="space-y-5 font-light text-coffee-500">
                                        <div className="flex justify-between items-center group">
                                            <span className="group-hover:text-gold-600 transition-colors">Weekdays</span>
                                            <span className="h-[1px] flex-1 mx-4 bg-coffee-100/50 group-hover:bg-gold-500/20 transition-colors"></span>
                                            <span className="text-coffee-900 font-bold">07:00 — 20:00</span>
                                        </div>
                                        <div className="flex justify-between items-center group">
                                            <span className="group-hover:text-gold-600 transition-colors">Weekends</span>
                                            <span className="h-[1px] flex-1 mx-4 bg-coffee-100/50 group-hover:bg-gold-500/20 transition-colors"></span>
                                            <span className="text-coffee-900 font-bold">09:00 — 22:00</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Minimalist Map / Visual */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="mt-12 md:mt-16 relative aspect-video md:aspect-square lg:aspect-video rounded-[32px] md:rounded-[40px] overflow-hidden group border-8 border-white shadow-2xl shadow-coffee-200/20"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1974&auto=format&fit=crop"
                                    className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    alt="Urban location"
                                />
                                <div className="absolute inset-0 bg-gold-500/10 group-hover:bg-transparent transition-all"></div>
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center animate-ping opacity-75"></div>
                                    <div className="absolute w-4 h-4 bg-gold-500 rounded-full shadow-2xl border-2 border-white"></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. FOOTER CALLOUT LIGHT */}
            <section className="bg-white py-24 md:py-32 border-t border-coffee-50 relative overflow-hidden">
                <div className="container mx-auto px-6 text-center space-y-12 relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-4xl sm:text-6xl md:text-8xl uppercase tracking-tighter text-coffee-900"
                    >
                        STAY <span className="text-gold-500 italic">CONNECTED</span>
                    </motion.h2>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                        {['Instagram', 'LinkedIn', 'Twitter', 'Facebook'].map((social, index) => (
                            <motion.a
                                key={social}
                                href="#"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-coffee-400 hover:text-gold-600 font-bold tracking-[0.3em] md:tracking-[0.5em] text-[9px] md:text-[10px] uppercase transition-all duration-300 hover:tracking-[0.6em]"
                            >
                                {social}
                            </motion.a>
                        ))}
                    </div>
                </div>
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-500 via-transparent to-transparent"></div>
                </div>
            </section>
        </div>
    );
}

function InputGroup({ label, type, placeholder }: { label: string, type: string, placeholder: string }) {
    const id = label.toLowerCase().replace(/\s+/g, '-');
    return (
        <div className="space-y-3 group relative">
            <label htmlFor={id} className="text-[10px] font-bold text-coffee-400 uppercase tracking-[0.2em] group-focus-within:text-gold-600 transition-colors duration-300">{label}</label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                className="w-full bg-transparent border-b border-coffee-100 py-4 text-coffee-900 placeholder:text-coffee-200/50 focus:outline-none transition-all font-light text-base md:text-lg relative z-10"
            />
            {/* Animated Bottom Border */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-coffee-100"></div>
            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-500 transition-all duration-500 group-focus-within:w-full"></div>
        </div>
    );
}

function InputSelect({ label, options }: { label: string, options: string[] }) {
    const id = label.toLowerCase().replace(/\s+/g, '-');
    return (
        <div className="space-y-3 group relative">
            <label htmlFor={id} className="text-[10px] font-bold text-coffee-400 uppercase tracking-[0.2em] group-focus-within:text-gold-600 transition-colors duration-300">{label}</label>
            <div className="relative">
                <select id={id} className="w-full bg-transparent border-b border-coffee-100 py-4 text-coffee-900 appearance-none focus:outline-none transition-all font-light text-base md:text-lg relative z-10 cursor-pointer">
                    {options.map(opt => <option key={opt}>{opt}</option>)}
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gold-500 group-hover:translate-x-1 transition-transform">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                {/* Animated Bottom Border */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-coffee-100"></div>
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-500 transition-all duration-500 group-focus-within:w-full"></div>
            </div>
        </div>
    );
}
