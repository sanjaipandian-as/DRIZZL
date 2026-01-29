'use client';

import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import cafebg from '@/components/assets/cafebg.png';
import { siteConfig } from '@/lib/constants';

export default function HeroSection() {
    return (
        // UPDATED: Background now fades into a subtle green (forest-50) at the bottom right to bring out the theme
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream-100 via-cream-50 to-forest-100/50">
            
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* UPDATED: Made blobs stronger green so they are visible */}
                <div className="absolute top-20 left-10 w-64 h-64 bg-forest-300/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-forest-700/10 rounded-full blur-3xl animate-splash"></div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 animate-slide-up">
                        <div className="space-y-4">
                            {/* UPDATED: Accent text is now Rust Red */}
                            <p className="text-rust-600 font-bold tracking-widest uppercase text-sm">
                                Welcome to {siteConfig.brand.name}
                            </p>
                            
                            {/* UPDATED: H1 is now 'text-forest-700' (#114232) - The exact Logo Green */}
                            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-forest-700 leading-tight text-shadow">
                                PURE BREW
                                <br />
                                <span className="text-rust-600">PURE SOUL</span>
                            </h1>
                            
                            {/* UPDATED: Subtext is forest-800 for readability but clearly green-toned */}
                            <p className="text-forest-800 text-lg md:text-xl max-w-lg leading-relaxed font-light">
                                Experience the earthy warmth of organic blends, roasted to perfection. 
                                {siteConfig.brand.tagline}.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link href="/menu">
                                <Button variant="primary">
                                    View Menu
                                </Button>
                            </Link>
                            <Link href="/about">
                                <Button variant="outline">
                                    Our Story
                                </Button>
                            </Link>
                        </div>

                        {/* Stats */}
                        {/* UPDATED: Borders and text updated to Forest Green */}
                        <div className="flex gap-8 pt-8 border-t border-forest-200">
                            <div>
                                <div className="font-display text-4xl text-forest-700">100%</div>
                                <p className="text-forest-600 text-xs font-bold uppercase tracking-wider">Organic</p>
                            </div>
                            <div>
                                <div className="font-display text-4xl text-forest-700">20+</div>
                                <p className="text-forest-600 text-xs font-bold uppercase tracking-wider">Blends</p>
                            </div>
                            <div>
                                <div className="font-display text-4xl text-forest-700">4.9</div>
                                <p className="text-forest-600 text-xs font-bold uppercase tracking-wider">Rating</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Coffee Image */}
                    <div className="relative animate-fade-in">
                        <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <div className="relative z-10 group">
                                <Image
                                    src={cafebg}
                                    alt="Drizzl Cafe Signature Blend"
                                    width={850}
                                    height={850}
                                    className="transition-transform duration-700 group-hover:scale-105 drop-shadow-2xl"
                                    priority
                                />

                                {/* Decorative Orbs - Rust and Green mix */}
                                <div className="absolute -top-6 -right-6 w-24 h-24 bg-rust-500/60 rounded-full blur-xl animate-float"></div>
                                <div
                                    className="absolute -bottom-6 -left-6 w-32 h-32 bg-forest-600/30 rounded-full blur-xl animate-float"
                                    style={{ animationDelay: "1s" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}