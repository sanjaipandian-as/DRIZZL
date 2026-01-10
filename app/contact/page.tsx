'use client';

import { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';

export default function ContactPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="min-h-screen bg-[#FBF9F7] text-coffee-950 selection:bg-gold-500 selection:text-white overflow-hidden">

            {/* 1. CINEMATIC LIGHT HERO */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-cream-100">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
                        className="w-full h-full object-cover scale-110 blur-[1px] opacity-40"
                        alt="Bright Cafe Morning"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FBF9F7] via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-white/10"></div>
                </div>

                <div className={`relative z-10 text-center space-y-8 px-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center justify-center gap-4">
                        <span className="h-[1px] w-12 bg-gold-500"></span>
                        <span className="text-gold-600 text-xs font-bold tracking-[0.5em] uppercase">Connect With Us</span>
                        <span className="h-[1px] w-12 bg-gold-500"></span>
                    </div>
                    <h1 className="font-display text-7xl md:text-[10vw] leading-[0.85] uppercase tracking-tighter text-coffee-900">
                        START THE <br />
                        <span className="text-gold-500 italic">CONVERSATION</span>
                    </h1>
                    <p className="text-coffee-600 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed italic">
                        "Your thoughts matter as much as our beans. Whether it's a catering inquiry or a shared love for the roast, we're here to listen."
                    </p>
                </div>

                {/* Background Decor */}
                <div className="absolute -bottom-20 -right-20 font-display text-[25vw] text-coffee-900/[0.03] select-none leading-none pointer-events-none">
                    HELLO
                </div>
            </section>

            <section className="relative z-10 pb-40 -mt-20">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

                        {/* 2. THE BOUTIQUE LIGHT FORM */}
                        <div className="lg:col-span-7 bg-white p-10 md:p-16 rounded-[60px] shadow-2xl shadow-coffee-200/20 border border-coffee-100/50">
                            <form className="space-y-10">
                                <div className="grid md:grid-cols-2 gap-10">
                                    <div className="space-y-3 group">
                                        <label className="text-[10px] font-bold text-coffee-400 uppercase tracking-[0.2em] group-focus-within:text-gold-600 transition-colors">Your Name</label>
                                        <input
                                            type="text"
                                            placeholder="MARCUS NEXEN"
                                            className="w-full bg-transparent border-b border-coffee-100 py-4 text-coffee-900 placeholder:text-coffee-200 focus:outline-none focus:border-gold-500 transition-all font-light text-lg"
                                        />
                                    </div>
                                    <div className="space-y-3 group">
                                        <label className="text-[10px] font-bold text-coffee-400 uppercase tracking-[0.2em] group-focus-within:text-gold-600 transition-colors">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="HELLO@NEXEN.CAFE"
                                            className="w-full bg-transparent border-b border-coffee-100 py-4 text-coffee-900 placeholder:text-coffee-200 focus:outline-none focus:border-gold-500 transition-all font-light text-lg"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3 group">
                                    <label className="text-[10px] font-bold text-coffee-400 uppercase tracking-[0.2em] group-focus-within:text-gold-600 transition-colors">Subject of Inquiry</label>
                                    <div className="relative">
                                        <select className="w-full bg-transparent border-b border-coffee-100 py-4 text-coffee-900 appearance-none focus:outline-none focus:border-gold-500 transition-all font-light text-lg">
                                            <option>General Inquiry</option>
                                            <option>Catering & Events</option>
                                            <option>Partnership Opportunity</option>
                                            <option>Career Inquiry</option>
                                        </select>
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg className="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3 group">
                                    <label className="text-[10px] font-bold text-coffee-400 uppercase tracking-[0.2em] group-focus-within:text-gold-600 transition-colors">Message</label>
                                    <textarea
                                        rows={4}
                                        placeholder="TELL US MORE ABOUT YOUR VISION..."
                                        className="w-full bg-transparent border-b border-coffee-100 py-4 text-coffee-900 placeholder:text-coffee-200 focus:outline-none focus:border-gold-500 transition-all font-light text-lg resize-none"
                                    ></textarea>
                                </div>

                                <button className="w-full py-6 bg-coffee-950 text-white font-bold tracking-[0.4em] uppercase rounded-full hover:bg-gold-500 transition-all transform hover:scale-[1.02] shadow-xl shadow-coffee-900/10">
                                    Send Inquiry
                                </button>
                            </form>
                        </div>

                        {/* 3. CONTACT INTELLIGENCE - LIGHT MODE */}
                        <div className="lg:col-span-5 flex flex-col justify-between py-10">
                            <div className="space-y-16">
                                <div className="space-y-6">
                                    <h2 className="text-gold-600 font-bold tracking-[0.4em] uppercase text-xs">Headquarters</h2>
                                    <div className="space-y-4">
                                        <h3 className="font-display text-4xl uppercase tracking-tighter text-coffee-900">Auckland Central</h3>
                                        <p className="text-coffee-600 text-xl font-light leading-relaxed italic">
                                            123 Coffee Street, Brewery District <br />
                                            Auckland 1010, New Zealand
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-10 border-t border-coffee-100 pt-12">
                                    <div className="space-y-4">
                                        <h4 className="text-gold-600 text-[10px] font-bold tracking-[0.4em] uppercase">Call Us</h4>
                                        <p className="text-coffee-900 text-lg font-bold tracking-wider">+64 9 123 4567</p>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-gold-600 text-[10px] font-bold tracking-[0.4em] uppercase">Email</h4>
                                        <p className="text-coffee-900 text-lg font-bold tracking-wider">hello@nexen.cafe</p>
                                    </div>
                                </div>

                                <div className="space-y-6 border-t border-coffee-100 pt-12">
                                    <h4 className="text-gold-600 text-[10px] font-bold tracking-[0.4em] uppercase">Hours of Operation</h4>
                                    <div className="space-y-4 font-light text-coffee-500">
                                        <div className="flex justify-between items-center group">
                                            <span>Weekdays</span>
                                            <span className="h-[1px] flex-1 mx-4 bg-coffee-50 group-hover:bg-gold-500/20 transition-colors"></span>
                                            <span className="text-coffee-900 font-bold">07:00 — 20:00</span>
                                        </div>
                                        <div className="flex justify-between items-center group">
                                            <span>Weekends</span>
                                            <span className="h-[1px] flex-1 mx-4 bg-coffee-50 group-hover:bg-gold-500/20 transition-colors"></span>
                                            <span className="text-coffee-900 font-bold">09:00 — 22:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Minimalist Map / Visual */}
                            <div className="mt-16 relative aspect-video rounded-[40px] overflow-hidden group border-8 border-white shadow-2xl shadow-coffee-200/40">
                                <img
                                    src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1974&auto=format&fit=crop"
                                    className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110 grayscale"
                                    alt="Urban location"
                                />
                                <div className="absolute inset-0 bg-gold-500/10 group-hover:bg-transparent transition-all"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center animate-ping opacity-75"></div>
                                    <div className="absolute w-4 h-4 bg-gold-500 rounded-full shadow-2xl"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. FOOTER CALLOUT LIGHT */}
            <section className="bg-white py-32 border-t border-coffee-50">
                <div className="container mx-auto px-6 text-center space-y-12">
                    <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter text-coffee-900">STAY <span className="text-gold-500 italic">CONNECTED</span></h2>
                    <div className="flex flex-wrap justify-center gap-12">
                        {['Instagram', 'LinkedIn', 'Twitter', 'Facebook'].map(social => (
                            <a key={social} href="#" className="text-coffee-400 hover:text-gold-600 font-bold tracking-[0.5em] text-[10px] uppercase transition-all duration-500">
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
