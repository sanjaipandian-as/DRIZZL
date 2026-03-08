'use client';

import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/constants';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0C0908] text-white pt-12 pb-8 md:pt-24 md:pb-12 relative overflow-hidden">
            {/* Background Decorative Accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 font-display text-[22vw] text-white/[0.02] select-none leading-none pointer-events-none whitespace-nowrap">
                DRIZZL CAFÉ
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-24 mb-10 md:mb-20">

                    {/* Brand & Mission - 5 cols */}
                    <div className="lg:col-span-5 space-y-8 md:space-y-12">
                        <div className="space-y-6 md:space-y-8">
                            <Link href="/" className="inline-block group">
                                <div className="flex items-center gap-4 md:gap-5">
                                    <div className="relative w-14 h-14 md:w-20 md:h-20 bg-white/5 p-2 md:p-3 rounded-2xl border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500 shrink-0">
                                        <Image
                                            src="/LogoV1.png"
                                            alt="Drizzl Logo"
                                            fill
                                            className="object-contain p-2"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-royal font-light tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.3em] text-white uppercase leading-none">
                                            DRIZZL<span className="text-gold-500 italic">.</span>CAFÉ
                                        </h2>
                                    </div>
                                </div>
                            </Link>
                            <p className="text-coffee-200 leading-relaxed text-xl font-light italic max-w-md">
                                "{siteConfig.brand.tagline}"
                            </p>
                        </div>

                        <div className="space-y-4">
                            <span className="text-gold-500 text-[10px] font-bold tracking-[0.5em] uppercase block">Follow Us</span>
                            <a
                                href="https://www.instagram.com/drizzlcafe?igsh=MXdhZ3M2NmNucGg1NQ=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 text-coffee-100 hover:text-gold-400 transition-all duration-500 group"
                            >
                                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">@drizzlcafe</span>
                                <div className="relative w-0 group-hover:w-6 transition-all duration-500 ease-out overflow-hidden flex items-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500 shadow-[0_0_8px_rgba(200,153,104,0.6)] ml-2"></div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Navigation - 2 cols */}
                    <div className="lg:col-span-2 space-y-6 md:space-y-10">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-gold-500">Navigation</h4>
                        <ul className="space-y-6">
                            {siteConfig.nav.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-coffee-200 hover:text-white transition-all duration-500 text-[10px] uppercase tracking-[0.3em] font-bold flex items-center gap-0 group"
                                    >
                                        <div className="relative w-0 group-hover:w-6 transition-all duration-500 ease-out overflow-hidden flex items-center">
                                            <div className="w-2 h-2 rounded-full bg-gold-500 shadow-[0_0_12px_rgba(200,153,104,0.8)]"></div>
                                            <div className="absolute inset-0 w-2 h-2 rounded-full bg-gold-500 animate-ping opacity-0 group-hover:opacity-30"></div>
                                        </div>
                                        <span className="transition-all duration-500 group-hover:text-gold-500">
                                            {item.name}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Hours - 5 cols */}
                    <div className="lg:col-span-5 space-y-6 md:space-y-10">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-gold-500">Inquiries</h4>
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                            <div className="space-y-4">
                                <p className="text-xs font-bold tracking-widest text-coffee-100 uppercase">Find Us</p>
                                <p className="text-coffee-200 text-sm leading-relaxed font-light">
                                    Drizzl Cafe, The Marina Mall,<br />
                                    First Floor, Egattur,<br />
                                    OMR Road, Chennai 603103
                                </p>
                            </div>
                            <div className="space-y-4">
                                <p className="text-xs font-bold tracking-widest text-white uppercase">Get In Touch</p>
                                <div className="space-y-1">
                                    <a href="mailto:drizzlcafe@gmail.com" className="block text-coffee-300 text-sm font-light italic underline decoration-gold-500/30 underline-offset-4 hover:text-gold-400 transition-colors">
                                        drizzlcafe@gmail.com
                                    </a>
                                    <a href="tel:+916383298748" className="block text-coffee-300 text-sm font-light italic underline decoration-gold-500/30 underline-offset-4 hover:text-gold-400 transition-colors">
                                        +91 6383298748
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="pt-8 md:pt-10 border-t border-cream-100/5 space-y-4">
                            <p className="text-[10px] font-bold tracking-[0.3em] text-coffee-300 uppercase">Reach Us Instantly</p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                {/* WhatsApp CTA */}
                                <a
                                    href="https://wa.me/916383298748?text=Hi%20Drizzl%20Cafe!%20I'd%20love%20to%20know%20more."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-3 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 hover:border-[#25D366]/60 transition-all duration-300 text-[10px] font-bold tracking-[0.3em] uppercase rounded-sm group"
                                >
                                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Chat on WhatsApp
                                </a>
                                {/* Google Maps CTA */}
                                <a
                                    href="https://www.google.com/maps/dir/?api=1&destination=DRIZZL+CAFE,+The+Marina+Mall,+Rajiv+Gandhi+Salai,+Egattur,+Chennai,+Tamil+Nadu+603103"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-3 bg-gold-500/10 border border-gold-500/30 text-gold-400 hover:bg-gold-500/20 hover:border-gold-500/60 transition-all duration-300 text-[10px] font-bold tracking-[0.3em] uppercase rounded-sm group"
                                >
                                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Get Directions
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">
                    <div className="flex items-center gap-8 text-[9px] font-bold tracking-[0.4em] text-coffee-400 uppercase">
                        <p>© 2026 DRIZZL GROUP</p>
                        <span className="h-4 w-[1px] bg-white/5"></span>
                        <p>Chennai, IN</p>
                    </div>

                    <div className="flex gap-12 text-[9px] font-bold tracking-[0.4em] text-coffee-400 uppercase">
                        <Link href="/privacy" className="hover:text-gold-500 transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-gold-500 transition-colors">Terms</Link>
                        <Link href="/cookies" className="hover:text-gold-500 transition-colors">Cookies</Link>
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
