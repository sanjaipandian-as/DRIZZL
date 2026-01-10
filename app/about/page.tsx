'use client';

import { useEffect, useState } from 'react';

const PROCESS_STEPS = [
    {
        number: "01",
        title: "The Selection",
        text: "We scout single-origin coffee farms globally, choosing only the top 1% of Arabica beans.",
        img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=2070&auto=format&fit=crop"
    },
    {
        number: "02",
        title: "The Roast",
        text: "Precision roasting in small batches to preserve and amplify the bean's hidden flavor profiles.",
        img: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1961&auto=format&fit=crop"
    },
    {
        number: "03",
        title: "The Brew",
        text: "Every cup is a balanced fusion of technique, temperature, and timing.",
        img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
    }
];

export default function AboutPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="min-h-screen bg-white text-coffee-950 selection:bg-gold-500 selection:text-white overflow-x-hidden">

            {/* 1. ULTRA HERO - Minimalist & Massive */}
            <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="https://images.unsplash.com/photo-1459755486867-b55449bb39ff?q=80&w=2069&auto=format&fit=crop"
                        className="w-full h-full object-cover grayscale brightness-50"
                        alt="Macro coffee"
                    />
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-4 mb-12 animate-fade-in opacity-0 [animation-fill-mode:forwards]">
                        <span className="h-[1px] w-20 bg-gold-500"></span>
                        <span className="text-gold-500 text-xs font-bold tracking-[0.8em] uppercase">The Nexen Legacy</span>
                        <span className="h-[1px] w-20 bg-gold-500"></span>
                    </div>
                    <h1 className="font-display text-[15vw] md:text-[12vw] leading-none text-white tracking-tighter uppercase mb-8">
                        BEYOND <br />
                        <span className="text-gold-500 italic block -mt-4">COFFEE.</span>
                    </h1>
                    <p className="text-zinc-400 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed animate-slide-up opacity-0 [animation-fill-mode:forwards] [animation-delay:400ms]">
                        We don't brew coffee. We engineer moments of absolute sensory perfection in the heart of Auckland's urban soul.
                    </p>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-10 flex flex-col items-center gap-6">
                    <span className="[writing-mode:vertical-lr] text-white/30 text-[10px] uppercase tracking-[0.5em] font-bold">Scroll to Explore</span>
                    <div className="h-20 w-[1px] bg-gradient-to-b from-white/50 to-transparent"></div>
                </div>
            </section>

            {/* 2. OVERLAPPING NARRATIVE - High Fashion Layout */}
            <section className="py-40 bg-[#FBF9F7] relative">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 relative group">
                            <div className="absolute -top-10 -left-10 text-[20vw] font-display text-gold-500/5 leading-none select-none z-0">12Y</div>
                            <div className="relative z-10 overflow-hidden rounded-[80px] aspect-[4/5] shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    alt="Coffee pour"
                                />
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-coffee-900 rounded-full flex items-center justify-center text-center p-8 shadow-2xl animate-float">
                                <p className="text-white text-sm font-light leading-relaxed">
                                    <span className="text-gold-500 font-display text-4xl block mb-2">GOLD</span>
                                    Standard in Roasting Excellence
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-5 space-y-12 lg:pl-12">
                            <div className="space-y-6">
                                <h2 className="text-gold-600 font-bold tracking-[0.4em] uppercase text-xs">Our Heritage</h2>
                                <h3 className="font-display text-6xl md:text-8xl text-coffee-950 leading-[0.85] uppercase tracking-tighter">
                                    THE <br /> <span className="text-gold-500 italic">PURSUIT</span> <br /> OF RARE
                                </h3>
                                <p className="text-coffee-700 text-xl font-light leading-relaxed first-letter:text-6xl first-letter:font-display first-letter:mr-3 first-letter:float-left first-letter:text-gold-600">
                                    It began with a single copper drum and an obsession for the perfect extraction. Today, Nexen Media Cafe stands as a testament to Auckland's evolving palette, where science meets the raw poetry of the bean.
                                </p>
                            </div>

                            <div className="p-10 bg-white border border-coffee-100 rounded-[40px] shadow-sm flex items-center gap-8 group hover:bg-coffee-950 hover:text-white transition-all duration-700">
                                <div className="text-6xl font-display text-gold-500 group-hover:scale-120 transition-transform">98.5</div>
                                <div className="space-y-1">
                                    <p className="text-xs font-bold tracking-widest uppercase opacity-50">CUPSCORE AVG</p>
                                    <p className="text-sm font-light italic">Reserved for the world's most elite harvests.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. THE PROCESS - Horizontal-style Visual Journey */}
            <section className="py-40 bg-zinc-950 text-white overflow-hidden">
                <div className="container mx-auto px-6 mb-24 flex flex-col items-center text-center space-y-4">
                    <span className="text-gold-500 text-xs font-bold tracking-[0.8em] uppercase">The Alchemy</span>
                    <h2 className="font-display text-6xl md:text-[8vw] leading-none uppercase tracking-tighter">FARM TO <span className="text-gold-500 italic">CUP</span></h2>
                </div>

                <div className="flex flex-col lg:flex-row">
                    {PROCESS_STEPS.map((step, i) => (
                        <div key={i} className="flex-1 group relative h-[700px] overflow-hidden border-r border-white/5 last:border-0">
                            <img
                                src={step.img}
                                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-110"
                                alt={step.title}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                            <div className="absolute inset-0 p-12 flex flex-col justify-end transform translate-y-20 group-hover:translate-y-0 transition-transform duration-700">
                                <span className="font-display text-8xl text-gold-500/20 mb-4 group-hover:text-gold-500 transition-colors">{step.number}</span>
                                <h3 className="font-display text-4xl uppercase mb-6">{step.title}</h3>
                                <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                                    {step.text}
                                </p>
                                <div className="mt-12 h-[2px] w-0 bg-gold-500 group-hover:w-full transition-all duration-1000"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. THE SHOWCASE - Modern Bento Gallery */}
            <section className="py-40 bg-white relative">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="grid lg:grid-cols-4 grid-rows-2 gap-8 h-[1000px]">
                        <div className="lg:col-span-2 lg:row-span-2 overflow-hidden rounded-[60px] relative group">
                            <img src="https://images.unsplash.com/photo-1441434199557-ca5e77227c95?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" alt="Gallery 1" />
                            <div className="absolute inset-0 bg-coffee-950/20 group-hover:bg-transparent transition-all"></div>
                            <div className="absolute top-10 left-10"><span className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white text-[10px] font-bold tracking-widest uppercase">The Atmosphere</span></div>
                        </div>
                        <div className="overflow-hidden rounded-[60px] relative group">
                            <img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" alt="Gallery 2" />
                        </div>
                        <div className="overflow-hidden rounded-[60px] relative group">
                            <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" alt="Gallery 3" />
                        </div>
                        <div className="lg:col-span-2 overflow-hidden rounded-[60px] relative group flex items-center justify-center bg-zinc-50 border border-zinc-100 p-20 text-center">
                            <div className="space-y-8 animate-float">
                                <h4 className="font-display text-5xl text-coffee-900 leading-none">JOIN OUR <br /> <span className="text-gold-500">CULTURE</span></h4>
                                <p className="text-coffee-600 font-light">Become part of the most exclusive coffee community in New Zealand.</p>
                                <button className="bg-coffee-950 text-white px-10 py-5 rounded-2xl text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-gold-500 transition-colors">Apply for Membership</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. BIG CALLOUT - Direct & Emotional */}
            <section className="py-60 bg-[#120F0E] text-white relative flex items-center justify-center text-center overflow-hidden">
                <div className="absolute bottom-[-10%] left-[-10%] font-display text-[40vw] text-white/[0.02] select-none leading-none">CRAFT</div>

                <div className="relative z-10 space-y-16 px-6">
                    <h2 className="font-display text-7xl md:text-[10vw] leading-[0.85] uppercase tracking-tighter">
                        WE AREN'T <br />
                        <span className="text-gold-500 italic">JUST ANY</span> CAFE.
                    </h2>
                    <div className="h-[2px] w-24 bg-gold-500 mx-auto"></div>
                    <p className="text-zinc-400 text-2xl md:text-3xl max-w-4xl mx-auto font-light leading-relaxed italic">
                        In a world of mass-production, we choose the slow, the rare, and the exceptional.
                        Every cup at Nexen is a quiet revolution.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <button className="bg-white text-black px-12 py-6 rounded-2xl text-xs font-bold tracking-[0.3em] uppercase hover:bg-gold-500 hover:text-white transition-all transform hover:scale-105">View Our Menu</button>
                        <button className="border border-white/20 text-white px-12 py-6 rounded-2xl text-xs font-bold tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all">Our Locations</button>
                    </div>
                </div>
            </section>
        </div>
    );
}
