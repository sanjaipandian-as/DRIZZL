'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '@/components/ui/Button';
import { NAVIGATION_ITEMS } from '@/utils/constants';

// Icons for Mobile Bottom Nav
const HomeIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

const CoffeeIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

const InfoIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ContactIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const getIcon = (label: string) => {
    switch (label.toLowerCase()) {
        case 'home': return <HomeIcon />;
        case 'products': return <CoffeeIcon />;
        case 'about': return <InfoIcon />;
        case 'contact': return <ContactIcon />;
        default: return <HomeIcon />;
    }
};

export default function Header() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Top Header - Logo and CTA */}
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-md py-2' : 'bg-transparent py-4'}`}>
                <nav className="container mx-auto px-6">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="text-2xl md:text-3xl font-display text-coffee-900 tracking-wider">
                                NEXEN.MEDIA
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <ul className="hidden md:flex items-center space-x-8">
                            {NAVIGATION_ITEMS.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className={`text-sm tracking-widest transition-colors duration-300 font-semibold ${pathname === item.href ? 'text-gold-500' : 'text-coffee-800 hover:text-gold-500'}`}
                                    >
                                        {item.label.toUpperCase()}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* CTA Button */}
                        <div className="flex items-center gap-4">
                            <Button variant="primary" className="scale-90 md:scale-100">
                                Order Now
                            </Button>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Mobile Bottom Navigation */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass-effect border-t border-coffee-200/20 px-6 py-3">
                <ul className="flex items-center justify-between">
                    {NAVIGATION_ITEMS.map((item) => (
                        <li key={item.label}>
                            <Link
                                href={item.href}
                                className={`flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition-all duration-300 ${pathname === item.href ? 'text-gold-500 bg-gold-500/5' : 'text-coffee-600 hover:text-gold-500'}`}
                            >
                                {getIcon(item.label)}
                                <span className="text-[10px] font-bold tracking-widest uppercase">{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Spacer for bottom nav on mobile */}
            <div className="md:hidden h-20"></div>
        </>
    );
}
