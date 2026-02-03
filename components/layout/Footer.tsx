'use client';

import Link from 'next/link';
import { siteConfig } from '@/lib/constants';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0C0908] text-white pt-24 pb-12 relative overflow-hidden">
            {/* Background Decorative Accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 font-display text-[22vw] text-white/[0.02] select-none leading-none pointer-events-none whitespace-nowrap">
                DRIZZL MEDIA
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 mb-20">

                    {/* Brand & Mission - 5 cols */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-display tracking-tighter text-white uppercase italic">
                                DRIZZL<span className="text-gold-500">.</span>CAFE
                            </h2>
                            <p className="text-coffee-200 leading-relaxed text-xl font-light italic max-w-md">
                                "{siteConfig.brand.tagline}"
                            </p>
                        </div>

                        <div className="space-y-4">
                            <span className="text-gold-500 text-[10px] font-bold tracking-[0.5em] uppercase block">Connect With the Craft</span>
                            <div className="flex gap-10">
                                {Object.entries(siteConfig.socials).map(([platform, url]) => (
                                    <a
                                        key={platform}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-coffee-100 hover:text-gold-400 transition-all duration-500 text-[10px] font-bold tracking-[0.2em] uppercase relative group"
                                    >
                                        {platform}
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
                            {siteConfig.nav.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-coffee-200 hover:text-coffee-50 transition-all duration-300 text-xs uppercase tracking-[0.2em] font-bold flex items-center gap-3 group"
                                    >
                                        <span className="h-[1px] w-0 bg-gold-500 transition-all duration-500 group-hover:w-4"></span>
                                        {item.name}
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
                                <p className="text-xs font-bold tracking-widest text-coffee-100 uppercase">Find Us</p>
                                <p className="text-coffee-200 text-sm leading-relaxed font-light">
                                    {siteConfig.contact.address}
                                </p>
                            </div>
                            <div className="space-y-4">
                                <p className="text-xs font-bold tracking-widest text-white uppercase">Get In Touch</p>
                                <p className="text-coffee-300 text-sm leading-relaxed font-light italic underline decoration-gold-500/30 underline-offset-4">
                                    hello@drizzl.cafe <br />
                                    +64 9 123 4567
                                </p>
                            </div>
                        </div>

                        {/* Newsletter Integration */}
                        <div className="pt-10 border-t border-cream-100/5 space-y-6">
                            <p className="text-[10px] font-bold tracking-[0.3em] text-coffee-300 uppercase">Join The Inner Circle</p>
                            <form className="relative flex items-center group">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full bg-transparent border-b border-cream-100/10 py-4 text-sm text-cream-100 focus:outline-none focus:border-gold-500 transition-all placeholder:text-coffee-400"
                                />
                                <button className="absolute right-0 text-gold-500 hover:text-cream-100 transition-colors text-[10px] font-bold tracking-[0.4em] uppercase">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="flex items-center gap-8 text-[9px] font-bold tracking-[0.4em] text-coffee-400 uppercase">
                        <p>© 2026 DRIZZL GROUP</p>
                        <span className="h-4 w-[1px] bg-white/5"></span>
                        <p>Auckland, NZ</p>
                    </div>

                    <div className="flex gap-12 text-[9px] font-bold tracking-[0.4em] text-coffee-400 uppercase">
                        <a href="#" className="hover:text-gold-500 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-gold-500 transition-colors">Terms</a>
                        <a href="#" className="hover:text-gold-500 transition-colors">Cookies</a>
                    </div>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="w-12 h-12 rounded-full border border-cream-100/5 flex items-center justify-center hover:border-gold-500 hover:bg-gold-500/10 transition-all duration-700 group"
                    >
                        <svg className="w-4 h-4 text-coffee-300 group-hover:text-gold-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    );
}
