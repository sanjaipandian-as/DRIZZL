'use client';

import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/constants';

const CircularText = () => (
    <div className="absolute top-15 right-0 translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
        <div className="relative w-32 h-32 animate-spin-slow">
            <svg viewBox="0 0 100 100" width="128" height="128">
                <defs>
                    <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                </defs>
                <text fontSize="11" fontWeight="bold" fill="white" letterSpacing="2">
                    <textPath href="#circle">
                        {siteConfig.brand.name.toUpperCase()} * {siteConfig.brand.name.toUpperCase()} * {siteConfig.brand.name.toUpperCase()} *
                    </textPath>
                </text>
            </svg>
        </div>
    </div>
);

export default function StorySection() {
    return (
        <section className="relative w-full bg-gradient-to-br from-cream-50 via-cream-100 to-forest-50/20 overflow-hidden py-16 px-4 md:px-12 lg:px-20">

            {/* Background Patterns - Stroke changed to Rust #7A2820 */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-30">
                <div className="w-full h-full" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 L20 0 L40 20 M0 40 L20 20 L40 40' fill='none' stroke='%237A2820' stroke-width='2'/%3E%3C/svg%3E")` }}></div>
            </div>
            <div className="absolute bottom-0 left-0 w-64 h-64 opacity-30 z-0">
                <div className="w-full h-full" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 L20 0 L40 20 M0 40 L20 20 L40 40' fill='none' stroke='%237A2820' stroke-width='2'/%3E%3C/svg%3E")` }}></div>
            </div>

            <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row shadow-2xl shadow-forest-900/20 z-10">

                {/* Left Text Content - Forest Green Background */}
                <div className="w-full md:w-1/2 bg-forest-900 text-cream-100 p-10 md:p-16 lg:p-20 relative">
                    <CircularText />

                    <div className="mb-8">
                        <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-2 font-display text-cream-50">
                            The {siteConfig.brand.logoText}. Story
                        </h2>
                        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-rust-500 mb-6 font-sans">
                            Earth to Cup
                        </h3>
                    </div>

                    <div className="space-y-6 text-forest-200 text-base md:text-lg leading-relaxed font-light">
                        <p>
                            We believe coffee should be more than just a morning routine—it should be a return to nature. At {siteConfig.brand.name}, we source only the finest organic beans from sustainable farms.
                        </p>

                        <p className="font-bold text-rust-400 uppercase tracking-wider">
                            Brewed with Patience.
                        </p>

                        <p>
                            From our slow-roasted signature blends to our artisanal pastries baked fresh every dawn, every detail is curated to provide warmth and comfort. We are not just serving coffee; we are serving a moment of peace in a busy world.
                        </p>

                        <p>
                            Whether you're here for the solitude or the community, our doors are open.
                        </p>

                        <p className="font-bold text-rust-400 uppercase tracking-wider">
                            {siteConfig.brand.tagline}
                        </p>
                    </div>

                    <div className="mt-10">
                        <Link href="/about">
                            <button className="bg-rust-700 hover:bg-rust-600 text-cream-50 font-bold py-4 px-10 transition-colors duration-300 uppercase tracking-widest text-sm shadow-lg shadow-rust-900/30">
                                Read Our Journey
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right Image */}
                <div className="w-full md:w-1/2 relative min-h-[400px]">
                    <img
                        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
                        alt="Drizzl Cafe Interior"
                        className="w-full h-full object-cover grayscale-[20%] sepia-[10%]"
                    />
                    {/* Overlay to blend image with theme */}
                    <div className="absolute inset-0 bg-forest-900/20 mix-blend-multiply"></div>
                </div>
            </div>
        </section>
    );
}