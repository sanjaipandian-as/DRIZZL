'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import { NAVIGATION_ITEMS } from '@/utils/constants';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-coffee-200/20">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="text-3xl font-display text-coffee-900 tracking-wider">
                            NEXEN.MEDIA
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center space-x-8">
                        {NAVIGATION_ITEMS.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className="text-coffee-800 hover:text-gold-500 transition-colors duration-300 font-medium"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Button variant="primary">
                            Order Now
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-coffee-900 focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 animate-fade-in">
                        <ul className="space-y-4">
                            {NAVIGATION_ITEMS.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className="block text-coffee-800 hover:text-gold-500 transition-colors duration-300 font-medium"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4">
                            <Button variant="primary" className="w-full">
                                Order Now
                            </Button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
