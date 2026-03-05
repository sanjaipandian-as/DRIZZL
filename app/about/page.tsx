'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const PROCESS_STEPS = [
    {
        number: "01",
        title: "Sourcing",
        text: "Direct trade with micro-lot farmers worldwide, selecting only the top 1% of Arabica beans.",
        img: "/drizzle2.png",
        video: "/sourcing.mp4",
        videoTitle: "Origin Journey",
        videoSub: "Direct Trade"
    },
    {
        number: "02",
        title: "Roasting",
        text: "Small-batch roasting from estates in Kodagu and Chikmagalur, preserving integrity and highlighting unique flavor notes.",
        img: "/Drizzl3Cafe3.jpeg",
        video: "/downloadfilevd.mp4",
        videoTitle: "Artisan Roast",
        videoSub: "Daily Batch"
    },
    {
        number: "03",
        title: "Brewing",
        text: "A fusion of scientific precision and artistic expression in every single pour we serve.",
        img: "/brewing.jpg",
        video: "/VideoProject.mp4",
        videoTitle: "Perfect Pour",
        videoSub: "Latte Art"
    }
];

function VideoCard({ src, title, sub }: { src: string, title?: string, sub?: string }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="w-full sm:w-80 md:w-80 lg:w-80 shrink-0 px-4 sm:px-0 mt-4 lg:mt-8 xl:mt-0 xl:ml-4">
            <div className="bg-white p-3 md:p-4 rounded-[25px] md:rounded-[30px] shadow-lg md:shadow-[0_30px_60px_rgba(0,0,0,0.15)]">
                <div className="aspect-[2/3] overflow-hidden rounded-[18px] md:rounded-[20px] relative">
                    <video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src={src} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
                </div>
                <div className="pt-4 pb-1 px-1 flex justify-between items-end text-left">
                    <div>
                        <p className="font-serif text-lg text-coffee-900 leading-none">{title}</p>
                        <p className="text-[10px] text-coffee-400 uppercase tracking-widest mt-1">{sub}</p>
                    </div>
                    <button
                        onClick={togglePlay}
                        className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-white hover:bg-gold-600 transition-colors"
                        aria-label={isPlaying ? "Pause video" : "Play video"}
                    >
                        {isPlaying ? (
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
                        ) : (
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function AboutPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const heroRef = useRef<HTMLElement>(null);

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setIsLoaded(true);
    }, []);

    return (
        <div className="min-h-screen bg-[#FDFCFB] text-coffee-950 selection:bg-gold-500 selection:text-white overflow-x-hidden font-sans">
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 mix-blend-multiply"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>

            <section ref={heroRef} className="relative pt-24 md:pt-32 lg:pt-36 pb-4 px-4 md:px-6 flex flex-col justify-center overflow-hidden lg:perspective-1000">


                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
                    <div className="lg:col-span-6 space-y-6 md:space-y-8 lg:space-y-12 order-1 text-center lg:text-left">
                        <div className={`transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <h1 className="font-serif text-[18vw] md:text-[12vw] lg:text-[9rem] leading-[0.85] tracking-tight text-black drop-shadow-sm">
                                BEYOND <br />
                                <span className="italic font-light lg:ml-8 text-black">GRAVITY.</span>
                            </h1>
                            <p className="mt-6 text-coffee-900/60 text-base md:text-xl font-light leading-relaxed max-w-lg mx-auto lg:mx-0 border-l-0 lg:border-l-2 border-gold-500/30 lg:pl-8">
                                We are not just a cafe. We are a sanctuary for the senses, engineering moments of absolute perfection in every cup.
                            </p>
                        </div>

                        <div className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4 md:pt-8 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <button className="w-full sm:w-auto bg-coffee-900 text-white px-8 md:px-12 py-4 md:py-6 rounded-full text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase hover:bg-gold-500 hover:text-coffee-900 transition-all">
                                Discover More
                            </button>

                        </div>
                    </div>

                    <div className="lg:col-span-6 relative h-[50vh] sm:h-[60vh] lg:h-[80vh] w-full order-2 lg:perspective-1000 mt-12 lg:mt-0">
                        {/* The Premium Frame Container */}
                        <div className="relative h-full w-full flex items-center justify-center">

                            {/* Decorative Gold Accent Bar */}
                            <div className="absolute top-1/2 -left-4 w-1 h-32 bg-gold-500/40 hidden lg:block -translate-y-1/2"></div>

                            {/* Main Arch Image */}
                            <motion.div
                                className={`relative w-full lg:w-[95%] h-full rounded-t-full overflow-hidden shadow-[0_60px_120px_-20px_rgba(0,0,0,0.35)] border-[12px] border-white transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 scale-95'}`}
                            >
                                <Image
                                    src="/DrizzlCafe1.jpeg"
                                    alt="Drizzl Cafe Interior"
                                    fill
                                    className="object-cover scale-110 brightness-[1.02] contrast-[1.05]"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/40 via-transparent to-transparent"></div>

                                {/* Floating Location Badge (Glassmorphism) */}
                                <div className="absolute bottom-12 left-0 right-0 flex justify-center z-20">
                                    <div className="bg-[#1a130e]/40 backdrop-blur-2xl border border-white/20 px-10 py-4 rounded-full flex items-center gap-4 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                                        <div className="relative">
                                            <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                                            <div className="absolute inset-0 w-2 h-2 rounded-full bg-gold-500 animate-ping opacity-75"></div>
                                        </div>
                                        <span className="text-white text-[11px] font-bold tracking-[0.5em] uppercase whitespace-nowrap">The Marina Sanctuary</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* EST 2024 Subtle Side Label */}
                            <div className="absolute -right-4 top-1/2 -translate-y-1/2 vertical-text text-coffee-900/20 text-[10px] font-bold tracking-[1em] uppercase hidden 2xl:block select-none pointer-events-none">
                                EST. 2024
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── THE EDITORIAL: OUR STORY ── */}
            <section className="relative pt-10 pb-20 md:pt-16 md:pb-32 overflow-x-hidden bg-white selection:bg-gold-500/30">
                {/* Texture & Ambient Depth */}
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-50 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
                <div className="absolute top-[-20%] right-[-10%] w-[100vw] h-[100vw] bg-gold-500/[0.04] rounded-full blur-[180px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 space-y-20 md:space-y-28">

                    {/* ── CHAPTER I ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        {/* Chapter header — improved premium style */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 mb-12 md:mb-16 border-b border-black/5">
                            <div className="flex items-center gap-4">
                                <span className="bg-black py-1.5 px-4 rounded-full text-white text-[9px] font-bold tracking-[0.3em] uppercase shadow-lg shadow-black/10">
                                    The Chronicle
                                </span>
                                <div className="size-1 rounded-full bg-gold-500/40" />
                                <span className="text-black/40 text-[9px] font-bold tracking-[0.2em] uppercase">Authentic Heritage</span>
                            </div>
                            <div className="flex items-center gap-3 bg-gold-500/5 px-4 py-1.5 rounded-full border border-gold-500/10">
                                <div className="w-2 h-[1px] bg-gold-500" />
                                <span className="text-gold-500 text-[9px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase">Chapter I: The Vision</span>
                            </div>
                        </div>

                        {/* Main content: THE DREAM. left | quote right — same row */}
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-14">
                            {/* Left: heading + eyebrow */}
                            <div>
                                <div className="inline-flex items-center backdrop-blur-sm bg-black/5 border border-black/5 rounded-full px-5 py-2 mb-8 md:mb-10 group hover:bg-black transition-all duration-500">
                                    <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-black group-hover:text-white transition-colors">Est. 2024</span>
                                    <div className="w-6 h-[1px] bg-gold-500/40 mx-3 group-hover:w-8 transition-all" />
                                    <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-black group-hover:text-white transition-colors">Marina Mall</span>
                                    <div className="size-1.5 rounded-full bg-gold-500 mx-3" />
                                    <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-gold-500">Café</span>
                                </div>
                                <h2 className="font-serif text-[17vw] md:text-[10vw] lg:text-[8rem] text-black leading-[0.85] tracking-tighter uppercase">
                                    OUR <br />
                                    <span className="ml-[2vw]">STORY.</span>
                                </h2>
                            </div>

                            {/* Right: quote + body + tag */}
                            <div className="space-y-7 lg:pt-6">
                                <div className="flex items-center gap-3">
                                    <div className="size-2 rounded-full bg-gold-500 animate-pulse" />
                                    <p className="text-black/80 text-xs font-bold tracking-[0.5em] uppercase">Currently Curating Excellence</p>
                                </div>
                                <p className="text-[#1a1a1a] text-2xl md:text-3xl lg:text-[2.1rem] font-serif font-light leading-[1.2] italic">
                                    &ldquo;Drizzl Café was created to bring <span className="text-gold-500">premium café experiences</span> within everyone&apos;s reach.&rdquo;
                                </p>
                                <p className="text-black/55 text-base font-light leading-relaxed pl-6 border-l-2 border-gold-500/30">
                                    Located inside Marina Mall, we offer a welcoming space where customers can enjoy freshly brewed beverages, delicious snacks, and a relaxing ambience at affordable prices.
                                </p>
                                <p className="text-black/65 text-sm font-serif italic leading-relaxed">
                                    &ldquo;Great café moments should be part of everyday life.&rdquo;
                                </p>
                            </div>
                        </div>

                        {/* Stats bar — key facts inline between text and image */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 py-5 md:py-7 border-y border-black/[0.08] mb-8 md:mb-12">
                            <div>
                                <p className="text-xl md:text-2xl font-serif text-[#1a1a1a] mb-1">2024</p>
                                <p className="text-[8px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase text-black/50">Est. · Marina Mall</p>
                            </div>
                            <div>
                                <p className="text-xl md:text-2xl font-serif text-[#1a1a1a] mb-1">1,500m</p>
                                <p className="text-[8px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase text-black/50">Bean Elevation</p>
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                <p className="text-xl md:text-2xl font-serif text-[#1a1a1a] mb-1">Single Origin</p>
                                <p className="text-[8px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase text-black/50">Arabica · Chikmagalur</p>
                            </div>
                        </div>

                        {/* Chapter I Image — wide cinematic, not overpowering */}
                        <motion.div
                            initial={{ opacity: 0, scale: 1.02 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                            className="relative aspect-[21/8] w-full rounded-sm overflow-hidden shadow-lg group"
                        >
                            <Image
                                src="/DrizzlCafe2.jpeg"
                                alt="Drizzl Atmosphere"
                                fill
                                className="object-cover brightness-85 transition-transform duration-[5s] group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-8 flex items-center gap-4">
                                <div className="h-[1px] w-10 bg-gold-500" />
                                <span className="text-white/70 text-[9px] font-bold tracking-widest uppercase">Marina Mall Sanctuary</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* ── CHAPTER II ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        {/* Chapter II header — improved premium style */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 mb-12 md:mb-16 border-b border-black/5">
                            <div className="flex items-center gap-4">
                                <span className="bg-black py-1.5 px-4 rounded-full text-white text-[9px] font-bold tracking-[0.3em] uppercase shadow-lg shadow-black/10">
                                    The Source
                                </span>
                                <div className="size-1 rounded-full bg-gold-500/40" />
                                <span className="text-black/40 text-[9px] font-bold tracking-[0.2em] uppercase">Single Origin focus</span>
                            </div>
                            <div className="flex items-center gap-3 bg-gold-500/5 px-4 py-1.5 rounded-full border border-gold-500/10">
                                <div className="w-2 h-[1px] bg-gold-500" />
                                <span className="text-gold-500 text-[9px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase">Chapter II: The Origin</span>
                            </div>
                        </div>

                        {/* Text left, image right — balanced */}
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end">
                            {/* Left: heading + story + details all together */}
                            <div className="space-y-8 order-2 lg:order-1">
                                <h3 className="font-serif text-[12vw] md:text-[7vw] lg:text-[5rem] text-black leading-[0.88] tracking-tighter uppercase">
                                    DAILY <br />
                                    <span className="text-gold-500 italic font-light">JOY.</span>
                                </h3>
                                <p className="text-black text-base font-light leading-relaxed">
                                    Our focus is simple — consistent quality, friendly service, and a comfortable environment that makes every visit enjoyable.
                                    <br /><br />
                                    We partner exclusively with micro-lot estates in <span className="text-gold-500">Kodagu and Chikmagalur</span> to ensure that every cup reflects our commitment to excellence and local heritage.
                                </p>
                                {/* Sourcing details embedded directly here */}
                                <div className="space-y-5 pt-5 border-t border-black/[0.08]">
                                    <div>
                                        <p className="text-gold-500 text-xs font-bold tracking-[0.4em] uppercase mb-1.5">Sensory Note</p>
                                        <p className="text-black text-sm font-serif italic leading-relaxed">Aromatic complexity met with a silken mouthfeel. The quintessential luxury cup.</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="size-1.5 rounded-full bg-gold-500 shadow-[0_0_8px_#C9A96E]" />
                                        <p className="text-black text-xs font-bold tracking-widest uppercase">1,500m Elevation · Single Origin Arabica</p>
                                    </div>
                                    <div>
                                        <p className="text-gold-500 text-xs font-bold tracking-[0.4em] uppercase mb-1.5">Pure Impact.</p>
                                        <p className="text-black text-[10px] font-bold tracking-[0.3em] uppercase">The Drizzl Standard</p>
                                    </div>
                                </div>

                                {/* Fill image — closes the white gap against the right image */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, delay: 0.4 }}
                                    className="relative aspect-[16/10] w-full rounded-sm overflow-hidden shadow-md group"
                                >
                                    <Image
                                        src="/Drizzle4.png"
                                        alt="Drizzl Craftsmanship"
                                        fill
                                        className="object-cover brightness-90 transition-transform duration-[4s] group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                                    <div className="absolute bottom-4 left-5 flex items-center gap-3">
                                        <div className="h-[1px] w-6 bg-gold-500" />
                                        <span className="text-white/70 text-[8px] font-bold tracking-widest uppercase">Crafted with Obsession</span>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Right: image — aspect ratio balanced with text */}
                            {/* Right: Premium Dual-Image Composition */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, delay: 0.2 }}
                                className="order-1 lg:order-2 relative"
                            >
                                {/* Background Decorative Shape */}
                                <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>

                                {/* Main Premium Image */}
                                <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] z-10">
                                    <Image
                                        src="/Drizzl3Cafe3.jpeg"
                                        alt="The Drizzl Experience"
                                        fill
                                        className="object-cover brightness-95"
                                    />
                                    <div className="absolute inset-0 border-[1px] border-white/20 m-6 rounded-sm pointer-events-none" />

                                    {/* Subtle Overlay Badge */}
                                    <div className="absolute top-10 right-10 flex flex-col items-end gap-1">
                                        <span className="text-white text-[8px] font-bold tracking-[0.5em] uppercase opacity-70">Sanctuary</span>
                                        <div className="h-[1px] w-8 bg-gold-500"></div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* ── CHAPTER III: THE IMPACT — Standalone Full-Width Section ── */}
            <section className="relative bg-[#FAFAF8] overflow-hidden selection:bg-gold-500/30">
                {/* Texture */}
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

                {/* Huge Background Number */}
                <span className="absolute right-0 bottom-0 text-[35vw] font-display font-black text-black/[0.03] select-none pointer-events-none leading-none">03</span>

                {/* Full width grid — px matches rest of page but no max-width cap */}
                <div className="relative z-20 w-full px-6 md:px-12 lg:px-20 py-16 md:py-24">
                    {/* Chapter III header — matching premium style */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 mb-12 md:mb-16 border-b border-black/5">
                        <div className="flex items-center gap-4">
                            <span className="bg-black py-1.5 px-4 rounded-full text-white text-[9px] font-bold tracking-[0.3em] uppercase shadow-lg shadow-black/10">
                                The Impact
                            </span>
                            <div className="size-1 rounded-full bg-gold-500/40" />
                            <span className="text-black/40 text-[9px] font-bold tracking-[0.2em] uppercase">Community & Craft</span>
                        </div>
                        <div className="flex items-center gap-3 bg-gold-500/5 px-4 py-1.5 rounded-full border border-gold-500/10">
                            <div className="w-2 h-[1px] bg-gold-500" />
                            <span className="text-gold-500 text-[9px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase">Chapter III: The Influence</span>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-7 space-y-8 text-left"
                        >
                            <p className="text-black text-2xl md:text-3xl lg:text-[2.75rem] font-serif font-light leading-[1.2] italic">
                                &ldquo;Luxury is not about the price point. It&apos;s about the <span className="text-gold-500 font-normal">consistency</span> of the brew and the warmth of the soul behind it.&rdquo;
                            </p>

                            <div className="flex flex-wrap gap-6 sm:gap-10 pt-4 border-t border-black/[0.07]">
                                <div className="space-y-1">
                                    <p className="text-gold-500 text-3xl md:text-4xl font-serif">10k+</p>
                                    <p className="text-black/35 text-[8px] md:text-[9px] font-bold tracking-wider md:tracking-widest uppercase">Moments Engineered</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-gold-500 text-3xl md:text-4xl font-serif">100%</p>
                                    <p className="text-black/35 text-[8px] md:text-[9px] font-bold tracking-wider md:tracking-widest uppercase">Single Origin Arabica</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Circular Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="lg:col-span-5 flex items-center justify-center"
                        >
                            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full border border-gold-500/20 p-3 flex-shrink-0">
                                <div className="absolute inset-0 bg-gold-500/5 rounded-full blur-3xl" />
                                <div className="relative h-full w-full rounded-full overflow-hidden transition-all duration-1000">
                                    <Image
                                        src="/DrizzlCafe1.jpeg"
                                        alt="The Core"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
            </section>


            {/* ── THE ALCHEMY: PROCESS ── */}
            <section className="py-16 md:py-32 bg-[#FDFCFB]">
                <div className="container mx-auto px-6">
                    <div className="w-full max-w-4xl mx-auto space-y-6 md:space-y-10 text-center mb-16 md:mb-24 lg:mb-32">
                        <div className="flex flex-col items-center gap-4">
                            <span className="text-gold-500 text-[10px] md:text-xs font-bold tracking-[0.4em] md:tracking-[0.5em] uppercase">
                                The Alchemy
                            </span>
                            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-black leading-[0.9]">
                                FROM SOIL <br className="hidden lg:block" /> TO <span className="italic text-gold-500">SIP.</span>
                            </h2>
                        </div>
                        <p className="text-coffee-900/60 text-base md:text-lg leading-relaxed font-light max-w-lg mx-auto">
                            Our process is a labor of love, obsession, and uncompromising standards.
                        </p>
                    </div>

                    <div className="w-full max-w-7xl mx-auto space-y-16 md:space-y-24 lg:space-y-32">
                        {PROCESS_STEPS.map((step, i) => (
                            <motion.div
                                key={i}
                                className="group flex flex-col gap-10 md:gap-16"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                            >
                                <div className="flex flex-col gap-8 lg:gap-20 items-center lg:flex-row">
                                    <div className="w-full lg:w-1/2 relative">
                                        <div className="aspect-[4/5] sm:aspect-[4/3] relative rounded-[30px] md:rounded-[40px] overflow-hidden shadow-xl z-10">
                                            <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full font-bold text-[9px] md:text-[10px] tracking-widest uppercase text-coffee-900 border border-white/20">
                                                Step {step.number}
                                            </div>
                                            <Image
                                                src={step.img}
                                                alt={step.title}
                                                fill
                                                className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                                            />
                                        </div>
                                    </div>

                                    <div className="w-full lg:w-1/2 flex flex-col xl:flex-row items-center xl:items-start gap-8 relative text-center lg:text-left">
                                        <div className="flex-1 space-y-4 md:space-y-6 w-full">
                                            <h3 className="font-serif text-3xl md:text-4xl lg:text-6xl text-black">{step.title}</h3>
                                            <div className="w-12 h-[2px] bg-gold-500 mx-auto lg:mx-0"></div>
                                            <p className="text-black text-base md:text-lg leading-relaxed font-light">
                                                {step.text}
                                            </p>
                                        </div>
                                        {step.video && (
                                            <VideoCard src={step.video} title={step.videoTitle} sub={step.videoSub} />
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── THE MANIFESTO ── */}
            <section className="py-20 md:py-32 relative overflow-hidden flex items-center justify-center min-h-[40vh] md:min-h-[50vh]">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop"
                        alt="Background Manifesto"
                        fill
                        className="object-cover brightness-[0.2]"
                    />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center text-white">
                    <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
                        <span className="inline-block border border-white/20 px-8 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase backdrop-blur-md">Our Manifesto</span>
                        <h2 className="font-serif text-4xl sm:text-5xl md:text-8xl lg:text-[10rem] leading-[1] md:leading-[0.85]">
                            CRAFTED FOR THE <br />
                            <span className="text-gold-500 italic">OBSESSED.</span>
                        </h2>
                        <p className="text-base sm:text-xl md:text-3xl font-light leading-relaxed text-white/60 max-w-2xl mx-auto px-4 italic font-serif">
                            &ldquo;We don't believe in shortcuts. In a world of instant gratification, we choose the slow road. Because that's where the flavor lives.&rdquo;
                        </p>
                    </div>
                </div>
            </section>

            {/* ── LIFE AT DRIZZL ── */}
            <section className="py-20 md:py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-8">
                        <div className="flex flex-col md:flex-row items-center md:items-end gap-6 text-center md:text-left">
                            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-coffee-900 leading-none tracking-tight">Life at <span className="italic text-gold-500">DRIZZL CAFÉ.</span></h2>
                            <div className="w-12 h-12 md:w-16 md:h-16 relative">
                                <Image src="/LogoV1.png" alt="Drizzl Logo" fill className="object-contain" />
                            </div>
                        </div>
                        <button className="text-[11px] font-bold tracking-[0.3em] uppercase border-b-2 border-coffee-900 pb-2 hover:text-gold-500 hover:border-gold-500 transition-all flex items-center gap-3">
                            Follow us @DRIZZLCAFE
                        </button>
                    </div>

                    {/* Mobile: simple stacked grid, Desktop: masonry-style */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 md:auto-rows-[250px]">
                        {[
                            { src: "/zex.jpg", mobileClass: "aspect-[16/9]", desktopClass: "md:col-span-2 md:row-span-1" },
                            { src: "/Drizzle6.png", mobileClass: "aspect-square", desktopClass: "md:col-span-1 md:row-span-1" },
                            { src: "/drizzle2.png", mobileClass: "aspect-[3/4]", desktopClass: "md:col-span-1 md:row-span-2" },
                            { src: "/DrizzlCafe1.jpeg", mobileClass: "aspect-[4/3] sm:aspect-[16/9]", desktopClass: "md:col-span-2 md:row-span-2" },
                            { src: "/DrizzlCafe2.jpeg", mobileClass: "aspect-square", desktopClass: "md:col-span-1 md:row-span-1" },
                            { src: "/Drizzl3Cafe3.jpeg", mobileClass: "aspect-[16/9]", desktopClass: "md:col-span-2 md:row-span-1" }
                        ].map((item, i) => (
                            <div key={i} className={`relative rounded-2xl md:rounded-[24px] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-700 hover:scale-[1.01] ${item.mobileClass} md:aspect-auto ${item.desktopClass}`}>
                                <Image src={item.src} alt="Gallery Image" fill className="object-cover transition-transform duration-[3s] group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-700"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
