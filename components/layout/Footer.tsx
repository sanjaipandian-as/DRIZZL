'use client';

import Link from 'next/link';
import { NAVIGATION_ITEMS } from '@/utils/constants';

export default function Footer() {
    return (
        <footer className="bg-[#0C0908] text-white pt-40 pb-20 relative overflow-hidden">
            {/* Background Decorative Accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 font-display text-[22vw] text-white/[0.02] select-none leading-none pointer-events-none whitespace-nowrap">
                NEXEN MEDIA
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">

                    {/* Brand & Mission - 5 cols */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-display tracking-tighter text-white uppercase italic">
                                NEXEN<span className="text-gold-500">.</span>CAFE
                            </h2>
                            <p className="text-zinc-400 leading-relaxed text-xl font-light italic max-w-md">
                                "We don't just brew coffee. We curate sensory experiences that redefine the urban ritual."
                            </p>
                        </div>

                        <div className="space-y-4">
                            <span className="text-gold-500 text-[10px] font-bold tracking-[0.5em] uppercase block">Connect With the Craft</span>
                            <div className="flex gap-10">
                                {['Instagram', 'LinkedIn', 'Twitter'].map((social) => (
                                    <a
                                        key={social}
                                        href="#"
                                        className="text-white hover:text-gold-500 transition-all duration-500 text-[10px] font-bold tracking-[0.2em] uppercase relative group"
                                    >
                                        {social}
                                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-500 transition-all duration-500 group-hover:w-full"></span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Navigation - 2 cols */}
                    <div className="lg:col-span-2 space-y-10">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-gold-500">Navigation</h4>
                        <ul className="space-y-4">
                            {NAVIGATION_ITEMS.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="text-zinc-400 hover:text-white transition-all duration-300 text-xs uppercase tracking-[0.2em] font-bold flex items-center gap-3 group"
                                    >
                                        <span className="h-[1px] w-0 bg-gold-500 transition-all duration-500 group-hover:w-4"></span>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Hours - 5 cols */}
                    <div className="lg:col-span-5 space-y-10">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-gold-500">Inquiries</h4>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-4">
                                <p className="text-xs font-bold tracking-widest text-white uppercase">Auckland Central</p>
                                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                                    123 Coffee Street, Brewery District <br />
                                    Auckland 1010, NZ
                                </p>
                            </div>
                            <div className="space-y-4">
                                <p className="text-xs font-bold tracking-widest text-white uppercase">Get In Touch</p>
                                <p className="text-zinc-400 text-sm leading-relaxed font-light italic underline decoration-gold-500/30 underline-offset-4">
                                    hello@nexen.cafe <br />
                                    +64 9 123 4567
                                </p>
                            </div>
                        </div>

                        {/* Newsletter Integration */}
                        <div className="pt-10 border-t border-white/5 space-y-6">
                            <p className="text-[10px] font-bold tracking-[0.3em] text-zinc-500 uppercase">Join The Inner Circle</p>
                            <form className="relative flex items-center group">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full bg-transparent border-b border-white/10 py-4 text-sm text-white focus:outline-none focus:border-gold-500 transition-all placeholder:text-zinc-700"
                                />
                                <button className="absolute right-0 text-gold-500 hover:text-white transition-colors text-[10px] font-bold tracking-[0.4em] uppercase">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="flex items-center gap-8 text-[9px] font-bold tracking-[0.4em] text-zinc-600 uppercase">
                        <p>© 2026 NEXEN GROUP</p>
                        <span className="h-4 w-[1px] bg-white/5"></span>
                        <p>Auckland, NZ</p>
                    </div>

                    <div className="flex gap-12 text-[9px] font-bold tracking-[0.4em] text-zinc-600 uppercase">
                        <a href="#" className="hover:text-gold-500 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-gold-500 transition-colors">Terms</a>
                        <a href="#" className="hover:text-gold-500 transition-colors">Cookies</a>
                    </div>

                    {/* Back to top or small visual */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center hover:border-gold-500 hover:bg-gold-500/5 transition-all duration-700 group"
                    >
                        <svg className="w-4 h-4 text-zinc-500 group-hover:text-gold-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    );
}
