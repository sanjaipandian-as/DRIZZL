'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

const NAVIGATION_ITEMS = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'About', href: '/about' },
];

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
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${isScrolled ? 'bg-white/30 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-b border-white/20 py-3 supports-[backdrop-filter]:bg-white/20' : 'bg-transparent py-5'}`}>
                <nav className="container mx-auto px-6 md:px-12">
                    <div className="flex items-center justify-between w-full">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <Image
                                src="/LogoV1.png"
                                alt="Drizzl Cafe"
                                width={140}
                                height={48}
                                className="h-12 w-auto object-contain group-hover:opacity-80 transition-opacity"
                            />
                            <div className="flex items-baseline gap-2">
                                <span className="text-2xl md:text-3xl font-display font-black tracking-tight text-[#4A3424] italic -skew-x-6 transform">
                                    DRIZZL
                                </span>
                                <span className="text-xl md:text-2xl font-display font-bold tracking-wider text-[#4A3424]">
                                    CAFE
                                </span>
                            </div>
                        </Link>

                        {/* Right Side: Navigation + Contact Button */}
                        <div className="flex items-center gap-6 md:gap-8">
                            {/* Desktop Navigation */}
                            <ul className="hidden md:flex items-center gap-8 lg:gap-10">
                                {NAVIGATION_ITEMS.map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            href={item.href}
                                            className={`relative text-base font-semibold tracking-wide transition-colors duration-300 py-2
                                                ${pathname === item.href ? 'text-[#4A3424]' : 'text-[#6B4E35] hover:text-[#4A3424]'}
                                                after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#4A3424] after:transition-all after:duration-300 hover:after:w-full
                                                ${pathname === item.href ? 'after:w-full' : ''}
                                            `}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <Link href="/contact">
                                <Button variant="primary" className="px-6 py-2.5 text-sm font-bold tracking-wide shadow-lg hover:shadow-xl bg-[#4A3424] hover:bg-[#3E2b1F] text-white transition-all duration-300 rounded-lg">
                                    Contact
                                </Button>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Mobile Bottom Navigation */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-t border-coffee-200/20 px-6 py-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                <ul className="flex items-center justify-between">
                    {siteConfig.nav.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-300 ${pathname === item.href ? 'text-[#A67C52] bg-[#A67C52]/10' : 'text-coffee-600 hover:text-[#A67C52]'}`}
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