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
        text: "Small-batch roasting in Auckland to preserve integrity and highlight unique flavor notes.",
        img: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1961&auto=format&fit=crop",
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
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        setIsLoaded(true);

        const handleMouseMove = (e: MouseEvent) => {
            if (heroRef.current && window.innerWidth > 1024) {
                const { left, top, width, height } = heroRef.current.getBoundingClientRect();
                const x = (e.clientX - left) / width - 0.5;
                const y = (e.clientY - top) / height - 0.5;
                setMousePosition({ x, y });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="min-h-screen bg-[#FDFCFB] text-coffee-950 selection:bg-gold-500 selection:text-white overflow-x-hidden font-sans">
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 mix-blend-multiply"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>

            <section ref={heroRef} className="relative min-h-[100dvh] lg:min-h-[110vh] pt-20 lg:pt-32 pb-12 px-4 md:px-6 flex flex-col justify-center overflow-hidden lg:perspective-1000">
                <div className="absolute top-[15%] md:top-[20%] left-0 w-full opacity-[0.04] pointer-events-none select-none overflow-hidden z-0 rotate-[-5deg] scale-125 md:scale-110">
                    <div className="whitespace-nowrap animate-marquee flex gap-12 md:gap-32">
                        <div className="text-[30vw] md:text-[25vw] font-display font-black tracking-tighter uppercase text-coffee-900 flex items-center gap-6 md:gap-12">
                            DRIZZL CAFE
                            <div className="w-[25vw] h-[25vw] md:w-[20vw] md:h-[20vw] relative">
                                <Image src="/LogoV1.png" alt="Drizzl Logo" fill className="object-contain" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
                    <div className="lg:col-span-6 space-y-6 md:space-y-8 lg:space-y-12 order-1 text-center lg:text-left">
                        <div className={`transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="flex items-center justify-center lg:justify-start gap-4 mb-4 md:mb-6">
                                <span className="h-[2px] w-8 md:w-12 bg-gold-500"></span>
                                <span className="text-gold-500 text-[10px] md:text-xs font-bold tracking-[0.4em] md:tracking-[0.6em] uppercase">The Origin Story</span>
                            </div>
                            <h1 className="font-serif text-[18vw] md:text-[12vw] lg:text-[9rem] leading-[0.85] tracking-tight text-coffee-900 drop-shadow-sm">
                                BEYOND <br />
                                <span className="italic font-light lg:ml-8 text-gold-600">GRAVITY.</span>
                            </h1>
                            <p className="mt-6 text-coffee-900/60 text-base md:text-xl font-light leading-relaxed max-w-lg mx-auto lg:mx-0 border-l-0 lg:border-l-2 border-gold-500/30 lg:pl-8">
                                We are not just a cafe. We are a sanctuary for the senses, engineering moments of absolute perfection in every cup.
                            </p>
                        </div>

                        <div className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4 md:pt-8 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <button className="w-full sm:w-auto bg-coffee-900 text-white px-8 md:px-12 py-4 md:py-6 rounded-full text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase hover:bg-gold-500 hover:text-coffee-900 transition-all shadow-xl">
                                Discover More
                            </button>
                            <div className="flex -space-x-3 md:-space-x-4">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white bg-gray-200"></div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 relative h-[45vh] sm:h-[55vh] lg:h-[70vh] w-full order-2 lg:perspective-1000 px-4 md:px-0">
                        <div
                            className={`absolute inset-0 rounded-t-[150px] sm:rounded-t-[300px] lg:rounded-t-[400px] overflow-hidden shadow-2xl transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 scale-95'}`}
                            style={{
                                transform: typeof window !== 'undefined' && window.innerWidth > 1024 ? `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${mousePosition.y * -5}deg)` : 'none',
                                transition: 'transform 0.1s ease-out'
                            }}
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1978&auto=format&fit=crop"
                                alt="Main Coffee Shot"
                                fill
                                className="object-cover scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/20 to-transparent mix-blend-multiply"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-32 lg:py-40 bg-[#FDFCFB]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="container mx-auto px-4 md:px-6">
                        {/* Header Section - Centered */}
                        <div className="w-full max-w-4xl mx-auto space-y-6 md:space-y-10 text-center mb-16 md:mb-24 lg:mb-32">
                            <div className="flex flex-col items-center gap-4">
                                <span className="text-gold-500 text-[10px] md:text-xs font-bold tracking-[0.4em] md:tracking-[0.5em] uppercase">
                                    The Alchemy
                                </span>
                                <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-coffee-900 leading-[0.9]">
                                    FROM SOIL <br className="hidden lg:block" /> TO <span className="italic text-gold-500">SIP.</span>
                                </h2>
                            </div>
                            <p className="text-coffee-900/60 text-base md:text-lg leading-relaxed font-light max-w-lg mx-auto">
                                Our process is a labor of love, obsession, and uncompromising standards.
                            </p>
                        </div>

                        {/* Steps Section - Full Width Below */}
                        <div className="w-full max-w-7xl mx-auto space-y-20 md:space-y-32 lg:space-y-40">
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
                                                <h3 className="font-serif text-3xl md:text-4xl lg:text-6xl text-coffee-900">{step.title}</h3>
                                                <div className="w-12 h-[2px] bg-gold-500 mx-auto lg:mx-0"></div>
                                                <p className="text-coffee-900/70 text-base md:text-lg leading-relaxed font-light">
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
                </div>
            </section>

            <section className="py-8 md:py-12 lg:py-16 relative overflow-hidden flex items-center justify-center min-h-[30vh] md:min-h-[40vh]">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop"
                        alt="Background Manifesto"
                        fill
                        className="object-cover brightness-[0.25]"
                    />
                </div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
                    <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
                        <span className="inline-block border border-white/20 px-4 md:px-6 py-1.5 md:py-2 rounded-full text-[9px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase backdrop-blur-md">Our Manifesto</span>
                        <h2 className="font-serif text-4xl md:text-7xl lg:text-9xl leading-[1] md:leading-[0.9]">
                            CRAFTED FOR THE <br />
                            <span className="text-gold-500 italic">OBSESSED.</span>
                        </h2>
                        <p className="text-lg md:text-2xl font-light leading-relaxed text-white/70 max-w-2xl mx-auto px-4">
                            "We don't believe in shortcuts. In a world of instant gratification, we choose the slow road. Because that's where the flavor lives."
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-8 md:py-12 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-6 md:mb-8 gap-4">
                        <div className="flex flex-col md:flex-row items-center md:items-end gap-3 md:gap-4 text-center md:text-left">
                            <h2 className="font-serif text-3xl md:text-5xl text-coffee-900 leading-none">Life at <span className="italic text-gold-500">DRIZZL CAFE.</span></h2>
                            <div className="w-8 h-8 md:w-12 md:h-12 relative">
                                <Image src="/LogoV1.png" alt="Drizzl Logo" fill className="object-contain" />
                            </div>
                        </div>
                        <button className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase border-b border-coffee-900 pb-1 hover:text-gold-500 hover:border-gold-500 transition-all flex items-center gap-2">
                            Follow us @DRIZZLCAFE
                        </button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[120px] md:auto-rows-[180px]">
                        {[
                            { src: "/zex.jpg", className: "col-span-2 md:col-span-2 row-span-1" },
                            { src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop", className: "col-span-1 md:col-span-1 row-span-1" },
                            { src: "/drizzle2.png", className: "col-span-1 md:col-span-1 row-span-2" },
                            { src: "/DrizzlCafe1.jpeg", className: "col-span-2 md:col-span-2 row-span-2" },
                            { src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1961&auto=format&fit=crop", className: "col-span-1 md:col-span-1 row-span-1" },
                            { src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop", className: "col-span-2 md:col-span-2 row-span-1" }
                        ].map((item, i) => (
                            <div key={i} className={`relative rounded-[16px] overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02] ${item.className}`}>
                                <Image
                                    src={item.src}
                                    alt="Gallery Image"
                                    fill
                                    className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
                                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                                    <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest text-coffee-900 border border-white/20 shadow-lg">
                                        View
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
