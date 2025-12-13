'use client';

import React from 'react';

const ChevronPattern = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 20 L20 0 L40 20" fill="none" stroke="#D6CEC8" strokeWidth="2" />
        <path d="M0 40 L20 20 L40 40" fill="none" stroke="#D6CEC8" strokeWidth="2" />
    </svg>
);

const CircularText = () => (
    <div className="absolute top-15 right-0 translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
        <div className="relative w-32 h-32 animate-spin-slow">
            <svg viewBox="0 0 100 100" width="128" height="128">
                <defs>
                    <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                </defs>
                <text fontSize="11" fontWeight="bold" fill="white" letterSpacing="2">
                    <textPath href="#circle">
                        NEXEN.CAFE * NEXEN.CAFE * NEXEN.CAFE *
                    </textPath>
                </text>
            </svg>
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

            <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row shadow-2xl z-10">

                <div className="w-full md:w-1/2 bg-[#2D2A26] text-white p-10 md:p-16 lg:p-20 relative">
                    <CircularText />

                    <div className="mb-8">
                        <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-2 font-display">The SORTD. Story</h2>
                        <h3 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-6 font-display">Who We Are</h3>
                    </div>

                    <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
                        <p>
                            A work meeting at a cafe sounds great until you actually try it. Spotty Wi-Fi, tangled wires, small tables and conversations so loud you can't focus.
                        </p>

                        <p className="font-bold text-[#D97246] uppercase">
                            Sortd. was created to fix that.
                        </p>

                        <p>
                            Private meeting rooms with seamless tech, adjustable lighting, tables built for longer, more comfortable meetings and a menu designed to serve real food! From Turkish breakfasts and eggs to comforting South and North Indian meals, all plated for ease and served hot!
                        </p>

                        <p>
                            Whether you're pitching to a client, huddling with your team, or catching up with friends this is your space.
                        </p>

                        <p className="font-bold text-[#D97246] uppercase">
                            Sortd. is where meetings get tastier
                        </p>
                    </div>

                    <div className="mt-10">
                        <button className="bg-[#D97246] hover:bg-[#c4633b] text-white font-bold py-3 px-8 transition-colors duration-300">
                            Read More
                        </button>
                    </div>
                </div>

                <div className="w-full md:w-1/2 relative min-h-[400px]">
                    <img
                        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
                        alt="Cafe Interior with glass blocks"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
