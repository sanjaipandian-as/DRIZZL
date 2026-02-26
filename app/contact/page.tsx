'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import Image from 'next/image';

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
                    <Image
                        src="/DrizzlCafe1.avif"
                        fill
                        className="object-cover scale-110 opacity-50"
                        alt="Drizzl Cafe Interior"
                    />
                    <div className="absolute inset-0 bg-[#FBF9F7]/40"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FBF9F7] via-[#FBF9F7]/30 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#FBF9F7] via-[#FBF9F7]/60 to-transparent opacity-90 h-40"></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative z-10 text-center space-y-4 md:space-y-8 max-w-5xl mx-auto pt-20 md:pt-24 pb-32 md:pb-40"
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
                            className="lg:col-span-7 bg-white/80 backdrop-blur-xl p-8 sm:p-10 md:p-12 rounded-[40px] md:rounded-[60px] shadow-2xl shadow-coffee-200/20 border border-white relative overflow-hidden group"
                        >
                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-bl-[100px] transition-transform duration-700 group-hover:scale-110"></div>

                            <form className="space-y-6 md:space-y-8 relative z-10">
                                <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
                                    <InputGroup label="Your Name" placeholder="" type="text" />
                                    <InputGroup label="Email Address" placeholder="" type="email" />
                                </div>

                                <InputSelect
                                    label="Subject of Inquiry"
                                    options={[
                                        "General Inquiry",
                                        "Catering & Events",
                                        "Franchise Enquiry",
                                        "Career Inquiry"
                                    ]}
                                />

                                <div className="space-y-3 group relative">
                                    <label className="text-[10px] font-bold text-coffee-400 uppercase tracking-[0.2em] group-focus-within:text-gold-600 transition-colors duration-300">Message</label>
                                    <textarea
                                        rows={3}
                                        placeholder="Tell us what's on your mind..."
                                        className="w-full bg-transparent border-b border-coffee-100 py-3 text-coffee-900 placeholder:text-coffee-200/50 focus:outline-none transition-all font-light text-base md:text-lg resize-none relative z-10"
                                    ></textarea>
                                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-coffee-100"></div>
                                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-500 transition-all duration-500 group-focus-within:w-full"></div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.01, backgroundColor: "#1A120B" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-4 md:py-5 bg-coffee-900 text-white font-bold tracking-[0.4em] uppercase rounded-full transition-all shadow-xl shadow-coffee-900/10 flex items-center justify-center gap-3 overflow-hidden group/btn"
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
                                    <h2 className="text-gold-600 font-bold tracking-[0.4em] uppercase text-xs">Our Address</h2>
                                    <div className="space-y-4">
                                        <h3 className="font-display text-4xl sm:text-5xl uppercase tracking-tighter text-coffee-900">The Marina Mall</h3>
                                        <p className="text-coffee-600 text-lg md:text-xl font-light leading-relaxed italic">
                                            First Floor, The Marina Mall, Rajiv Gandhi Salai <br />
                                            Egattur, Chennai, Tamil Nadu 603103
                                        </p>
                                    </div>
                                </motion.div>

                                <div className="grid sm:grid-cols-2 gap-8 md:gap-10 border-t border-coffee-100/50 pt-10 md:pt-12">
                                    <motion.div variants={itemVariants} className="space-y-4">
                                        <h4 className="text-gold-600 text-[10px] font-bold tracking-[0.4em] uppercase">Call Us</h4>
                                        <a href="tel:+916383298748" className="block text-coffee-900 text-lg font-bold tracking-wider hover:text-gold-600 transition-colors">+91 63832 98748</a>
                                    </motion.div>
                                    <motion.div variants={itemVariants} className="space-y-4">
                                        <h4 className="text-gold-600 text-[10px] font-bold tracking-[0.4em] uppercase">Email</h4>
                                        <a href="mailto:drizzlcafe@gmail.com" className="block text-coffee-900 text-lg font-bold tracking-wider hover:text-gold-600 transition-colors">drizzlcafe@gmail.com</a>
                                    </motion.div>
                                </div>

                                <motion.div variants={itemVariants} className="space-y-8 border-t border-coffee-100/50 pt-10 md:pt-12">
                                    <h4 className="text-gold-600 text-[10px] font-bold tracking-[0.4em] uppercase">Hours of Operation</h4>
                                    <div className="space-y-5 font-light text-coffee-500">
                                        <div className="flex justify-between items-center group">
                                            <span className="group-hover:text-gold-600 transition-colors">All Days</span>
                                            <span className="h-[1px] flex-1 mx-4 bg-coffee-100/50 group-hover:bg-gold-500/20 transition-colors"></span>
                                            <span className="text-coffee-900 font-bold">10:00 AM — 10:30 PM</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Google Maps Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="container mx-auto px-4 sm:px-6 lg:px-20 mt-16 md:mt-24"
                >
                    <div className="text-center mb-8">
                        <h2 className="text-gold-600 font-bold tracking-[0.4em] uppercase text-xs mb-3">Find Us Here</h2>
                        <p className="text-coffee-500 font-light text-base">Tap the map to get directions to our café</p>
                    </div>
                    <a
                        href="https://www.google.com/maps/dir/?api=1&destination=DRIZZL+CAFE,+The+Marina+Mall,+Rajiv+Gandhi+Salai,+Egattur,+Chennai,+Tamil+Nadu+603103"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative rounded-[32px] md:rounded-[40px] overflow-hidden border-4 border-white shadow-2xl shadow-coffee-200/20 group cursor-pointer"
                    >
                        <div className="relative aspect-[16/9] md:aspect-[21/9]">
                            <iframe
                                src="https://www.google.com/maps?q=DRIZZL+CAFE,+The+Marina+Mall,+Rajiv+Gandhi+Salai,+Egattur,+Chennai,+Tamil+Nadu+603103&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0 w-full h-full pointer-events-none"
                            ></iframe>
                            {/* Clickable overlay */}
                            <div className="absolute inset-0 bg-transparent group-hover:bg-gold-500/5 transition-all duration-500 z-10"></div>
                        </div>
                        {/* Direction CTA */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-coffee-900/90 backdrop-blur-md text-white px-6 py-3 rounded-full flex items-center gap-3 shadow-xl group-hover:bg-coffee-900 transition-all duration-300 group-hover:scale-105">
                            <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-sm font-bold tracking-[0.2em] uppercase">Get Directions</span>
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </a>
                </motion.div>
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
                    <motion.a
                        href="https://www.instagram.com/drizzlcafe?igsh=MXdhZ3M2NmNucGg1NQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="inline-flex items-center gap-4 text-coffee-400 hover:text-gold-600 font-bold tracking-[0.4em] text-xs uppercase transition-all duration-500 group"
                    >
                        <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                        <span>Follow us on Instagram</span>
                        <span className="h-[1px] w-0 bg-gold-500 transition-all duration-500 group-hover:w-8"></span>
                    </motion.a>
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
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(options[0]);
    const dropdownRef = useRef<HTMLDivElement>(null);

    return (
        <div className="space-y-3 relative" ref={dropdownRef}>
            <label className="text-[10px] font-bold text-coffee-400 uppercase tracking-[0.2em]">{label}</label>
            <div className="relative">
                {/* Trigger */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full bg-transparent border-b border-coffee-100 py-3 text-coffee-900 text-left focus:outline-none transition-all font-light text-base md:text-lg cursor-pointer flex items-center justify-between"
                >
                    <span>{selected}</span>
                    <svg
                        className={`w-4 h-4 text-gold-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {/* Animated Bottom Border */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-coffee-100"></div>
                <div className={`absolute bottom-0 left-0 h-[1.5px] bg-gold-500 transition-all duration-500 ${isOpen ? 'w-full' : 'w-0'}`}></div>

                {/* Custom Dropdown Menu */}
                {isOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl shadow-coffee-200/30 border border-coffee-50 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        {options.map((opt, i) => (
                            <button
                                key={opt}
                                type="button"
                                onClick={() => {
                                    setSelected(opt);
                                    setIsOpen(false);
                                }}
                                className={`w-full text-left px-5 py-3.5 text-sm md:text-base font-light transition-all duration-200 flex items-center gap-3 ${selected === opt
                                    ? 'bg-gold-500/10 text-gold-700 font-medium'
                                    : 'text-coffee-700 hover:bg-coffee-50 hover:text-coffee-900'
                                    } ${i !== options.length - 1 ? 'border-b border-coffee-50' : ''}`}
                            >
                                <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${selected === opt ? 'bg-gold-500 scale-100' : 'bg-transparent scale-0'}`}></span>
                                {opt}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Click outside to close */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
}
