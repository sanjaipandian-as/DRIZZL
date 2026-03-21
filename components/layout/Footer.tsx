'use client';

import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/constants';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0C0908] text-white pt-10 pb-6 relative overflow-hidden border-t border-white/[0.03]">
            {/* Background Decorative Accent */}
            <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 font-display text-[20vw] lg:text-[15vw] text-white/[0.012] select-none leading-none pointer-events-none whitespace-nowrap">
                DRIZZL CAFÉ
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-10 gap-x-6 mb-8">

                    {/* Brand & Mission - Centered on mobile & tablet */}
                    <div className="col-span-2 md:col-span-4 lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 lg:space-y-6">
                        <Link href="/" className="inline-block group">
                            <div className="flex items-center gap-3">
                                <div className="relative w-10 h-10 lg:w-14 lg:h-14 bg-white/5 p-2 rounded-xl border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500 shrink-0">
                                    <Image
                                        src="/LogoV1.png"
                                        alt="Drizzl Logo"
                                        fill
                                        className="object-contain p-1.5"
                                    />
                                </div>
                                <h2 className="text-xl md:text-2xl lg:text-3xl font-royal font-light tracking-[0.2em] text-white uppercase leading-none">
                                    DRIZZL<span className="text-gold-500 italic">.</span>CAFÉ
                                </h2>
                            </div>
                        </Link>
                        <p className="text-coffee-200/60 leading-relaxed text-[12px] lg:text-[15px] font-light italic max-w-xs lg:max-w-md">
                            "{siteConfig.brand.tagline}"
                        </p>
                        <div className="flex items-center justify-center lg:justify-start gap-4 pt-1 font-bold text-[9px] lg:text-[11px] tracking-[0.3em] uppercase text-coffee-100/40">
                            <a href="https://www.instagram.com/drizzlcafe" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors flex items-center gap-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                                Instagram
                            </a>
                            <span className="opacity-20">·</span>
                            <a href="https://wa.me/916383298748" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors flex items-center gap-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="col-span-1 lg:col-span-2 space-y-4 lg:space-y-6">
                        <h4 className="text-[10px] lg:text-[12px] font-bold uppercase tracking-[0.4em] text-gold-500/40">Explore</h4>
                        <ul className="flex flex-col gap-3 lg:gap-4">
                            {siteConfig.nav.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-coffee-200/80 hover:text-gold-400 transition-all duration-300 text-[10px] lg:text-[13px] uppercase tracking-[0.15em] font-bold"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Visit */}
                    <div className="col-span-1 lg:col-span-3 space-y-4 lg:space-y-6">
                        <h4 className="text-[10px] lg:text-[12px] font-bold uppercase tracking-[0.4em] text-gold-500/40">Visit</h4>
                        <p className="text-coffee-200/80 text-[11px] lg:text-[14px] leading-relaxed font-light">
                            Marina Mall, 1st Floor,<br />
                            Egattur, OMR Road,<br />
                            Chennai, TN
                        </p>
                        <a
                            href="https://www.google.com/maps/dir/?api=1&destination=DRIZZL+CAFE"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[10px] lg:text-[12px] font-bold tracking-widest uppercase text-gold-400 hover:text-gold-300 transition-colors"
                        >
                            <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Map
                        </a>
                    </div>

                    {/* Contact Column - Perfectly Stacked & Aligned */}
                    <div className="col-span-2 md:col-span-2 lg:col-span-3 space-y-4 lg:space-y-6 pt-6 md:pt-0 border-t border-white/5 md:border-none flex flex-col items-center lg:items-start text-center lg:text-left">
                        <h4 className="text-[10px] lg:text-[12px] font-bold uppercase tracking-[0.4em] text-gold-500/40">Contact</h4>
                        <div className="flex flex-col gap-6 items-center lg:items-start w-full">
                            <div className="space-y-2 lg:space-y-3 shrink-0">
                                <a href="mailto:drizzlcafe@gmail.com" className="block text-coffee-300/90 text-[11px] lg:text-[14px] font-light hover:text-gold-400 transition-colors">
                                    drizzlcafe@gmail.com
                                </a>
                                <a href="tel:+916383298748" className="block text-coffee-300/90 text-[11px] lg:text-[14px] font-light hover:text-gold-400 transition-colors">
                                    +91 6383298748
                                </a>
                            </div>

                            <a
                                href="https://wa.me/916383298748"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex items-center bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.08] hover:border-gold-500/50 transition-all duration-500 max-w-[240px] w-full text-left"
                            >
                                <div className="p-4 lg:p-5 bg-gold-500/10 flex items-center justify-center border-r border-white/10 group-hover:bg-gold-500/20 transition-colors">
                                    <svg className="w-6 h-6 lg:w-8 lg:h-8 text-[#25D366] group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </div>
                                <div className="px-5 py-3 lg:py-4 flex flex-col justify-center">
                                    <span className="text-[10px] lg:text-[11px] font-bold tracking-[0.2em] text-white/90 uppercase leading-tight">WhatsApp</span>
                                    <span className="text-[11px] lg:text-[13px] font-bold tracking-[0.1em] text-gold-500 uppercase leading-tight">Inquiry</span>
                                </div>
                                <div className="absolute top-0 right-0 h-full w-1 bg-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-y-6">
                    <div className="flex items-center gap-5 text-[9px] lg:text-[12px] font-bold tracking-[0.2em] text-coffee-500/80 uppercase">
                        <p>© {currentYear} DRIZZL CAFÉ</p>
                        <span className="h-3 w-[1px] bg-white/10"></span>
                        <p>India</p>
                    </div>

                    <div className="flex gap-8 lg:gap-12 text-[9px] lg:text-[12px] font-bold tracking-[0.2em] text-coffee-500/80 uppercase">
                        <Link href="/privacy" className="hover:text-gold-500 transition-colors underline decoration-white/5 underline-offset-4">Privacy</Link>
                        <Link href="/terms" className="hover:text-gold-500 transition-colors underline decoration-white/5 underline-offset-4">Terms</Link>
                    </div>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl border border-white/5 flex items-center justify-center hover:border-gold-500 hover:bg-gold-500/5 transition-all group shrink-0"
                        aria-label="Scroll to top"
                    >
                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-coffee-400 group-hover:text-gold-500 transition-transform group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    );
}
