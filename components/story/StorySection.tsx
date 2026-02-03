'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ChevronPattern = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 20 L20 0 L40 20" fill="none" stroke="#D6CEC8" strokeWidth="2" />
        <path d="M0 40 L20 20 L40 40" fill="none" stroke="#D6CEC8" strokeWidth="2" />
    </svg>
);

const CircularText = () => (
    <div className="absolute top-15 right-0 translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
        <div className="relative w-32 h-32">
            <div className="absolute inset-0 animate-spin-slow">
                <svg viewBox="0 0 100 100" width="128" height="128">
                    <defs>
                        <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                    </defs>
                    <text fontSize="11" fontWeight="bold" fill="white" letterSpacing="2" style={{ fontFamily: 'var(--font-bebas)' }}>
                        <textPath href="#circle">
                            DRIZZL CAFE * DRIZZL CAFE * DRIZZL CAFE *
                        </textPath>
                    </text>
                </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center p-3">
                <Image
                    src="/LogoV1.png"
                    alt="Drizzl Cafe Logo"
                    width={100}
                    height={100}
                    className="object-contain w-full h-full"
                />
            </div>
        </div>
    </div>
);

export default function StorySection() {
    return (
        <section className="relative w-full bg-gradient-to-br from-cream-50 via-cream-100 to-coffee-50 overflow-hidden py-16 px-4 md:px-12 lg:px-20">

            <div className="absolute top-0 right-0 w-64 h-64 opacity-60">
                <div className="w-full h-full" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 L20 0 L40 20 M0 40 L20 20 L40 40' fill='none' stroke='%23D9C9BE' stroke-width='4'/%3E%3C/svg%3E")` }}></div>
            </div>
            <div className="absolute bottom-0 left-0 w-64 h-64 opacity-60 z-0">
                <div className="w-full h-full" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 L20 0 L40 20 M0 40 L20 20 L40 40' fill='none' stroke='%23D9C9BE' stroke-width='4'/%3E%3C/svg%3E")` }}></div>
            </div>

            <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row shadow-2xl z-10 min-h-[600px] md:min-h-[700px] lg:min-h-[800px]">

                <div className="w-full md:w-1/2 bg-[#2D2A26] text-white p-8 md:p-12 lg:p-16 xl:p-20 relative flex flex-col justify-center">
                    <CircularText />

                    <div className="mb-6">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-2 font-display text-white">The <span className="font-script text-[#D97246] text-4xl md:text-5xl lg:text-6xl capitalize">Drizzl Cafe</span> Story</h2>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-white font-display tracking-widest">Who We Are</h3>
                    </div>

                    <div className="space-y-4 md:space-y-6 text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed">
                        <p>
                            A work meeting at a cafe sounds great until you actually try it. Spotty Wi-Fi, tangled wires, small tables and conversations so loud you can't focus.
                        </p>

                        <p className="font-bold text-[#D97246] uppercase">
                            <span className="font-script text-[#D97246] text-2xl md:text-3xl lg:text-4xl capitalize">Drizzl Cafe</span> was created to fix that.
                        </p>

                        <p>
                            Private meeting rooms with seamless tech, adjustable lighting, tables built for longer, more comfortable meetings and a menu designed to serve real food! From Turkish breakfasts and eggs to comforting South and North Indian meals, all plated for ease and served hot!
                        </p>

                        <p>
                            Whether you're pitching to a client, huddling with your team, or catching up with friends this is your space.
                        </p>

                        <p className="font-bold text-[#D97246] uppercase">
                            <span className="font-script text-[#D97246] text-2xl md:text-3xl lg:text-4xl capitalize">Drizzl Cafe</span> is where meetings get tastier
                        </p>
                    </div>

                    <div className="mt-8 md:mt-10">
                        <Link href="/about">
                            <button className="bg-[#E8926E] hover:bg-[#D97246] text-white font-bold py-3 md:py-4 px-8 md:px-10 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-sm md:text-base">
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="w-full md:w-1/2 relative min-h-[500px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden group">
                    <img
                        src="/DrizzlCafe1.jpeg"
                        alt="Drizzl Cafe Interior"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Subtle overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
            </div>
        </section>
    );
}