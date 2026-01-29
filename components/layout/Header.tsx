'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/lib/constants';

// Icons for Mobile Bottom Nav
const HomeIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

const MenuIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
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

const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
        case 'home': return <HomeIcon />;
        case 'menu': return <MenuIcon />;
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
                        <Link href="/" className="flex items-center space-x-2 group">
                            <div className="text-3xl md:text-4xl font-display text-forest-900 group-hover:text-rust-700 transition-colors duration-300 tracking-widest">
                                {siteConfig.brand.logoText}
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <ul className="hidden md:flex items-center space-x-8">
                            {siteConfig.nav.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className={`text-sm tracking-widest transition-colors duration-300 font-semibold uppercase ${
                                            pathname === item.href 
                                            ? 'text-rust-600' 
                                            : 'text-forest-800 hover:text-rust-600'
                                        }`}
                                    >
                                        {item.name}
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
            <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass-effect border-t border-forest-200/20 px-6 py-3">
                <ul className="flex items-center justify-between">
                    {siteConfig.nav.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className={`flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition-all duration-300 ${
                                    pathname === item.href 
                                    ? 'text-rust-600 bg-rust-500/10' 
                                    : 'text-forest-600 hover:text-rust-600'
                                }`}
                            >
                                {getIcon(item.name)}
                                <span className="text-[10px] font-bold tracking-widest uppercase">{item.name}</span>
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