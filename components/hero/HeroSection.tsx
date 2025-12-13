'use client';

import Image from 'next/image';
import Button from '@/components/ui/Button';
import Cafe from '@/components/assets/Cafe.jpg';
import cafebg from '@/components/assets/cafebg.png';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream-50 via-cream-100 to-coffee-50">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-coffee-200/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl animate-splash"></div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 animate-slide-up">
                        <div className="space-y-4">
                            <p className="text-gold-500 font-semibold tracking-wider uppercase text-sm">
                                Welcome to NEXEN.MEDIA
                            </p>
                            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-coffee-900 leading-tight text-shadow">
                                BEST COFFEE
                                <br />
                                <span className="text-gold-500">IN TOWN</span>
                            </h1>
                            <p className="text-coffee-700 text-lg md:text-xl max-w-lg leading-relaxed">
                                Experience the perfect blend of premium beans, expertly roasted and brewed to perfection.
                                Every cup tells a story of passion and craftsmanship.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Button variant="primary">
                                Explore Menu
                            </Button>
                            <Button variant="outline">
                                Our Story
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-8 pt-8 border-t border-coffee-200">
                            <div>
                                <div className="font-display text-4xl text-coffee-900">500+</div>
                                <p className="text-coffee-600 text-sm">Happy Customers</p>
                            </div>
                            <div>
                                <div className="font-display text-4xl text-coffee-900">50+</div>
                                <p className="text-coffee-600 text-sm">Coffee Varieties</p>
                            </div>
                            <div>
                                <div className="font-display text-4xl text-coffee-900">10+</div>
                                <p className="text-coffee-600 text-sm">Years Experience</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Coffee Image */}
                    <div className="relative animate-fade-in">
                        <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <div className="relative z-10 group">
                                <Image
                                    src={cafebg}
                                    alt="Premium Coffee"
                                    width={850}
                                    height={850}
                                    className="transition-transform "
                                    priority
                                />

                                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold-500/80 rounded-full blur-xl animate-float"></div>
                                <div
                                    className="absolute -bottom-6 -left-6 w-32 h-32 bg-coffee-400/60 rounded-full blur-xl animate-float"
                                    style={{ animationDelay: "1s" }}
                                ></div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            {/* Scroll Indicator */}

        </section>
    );
}
