'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

import { AnimatePresence } from 'framer-motion';

const MenuIcon = ({ className }: { className?: string }) => (
    <svg className={`w-6 h-6 ${className || ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8h16M4 16h16" />
    </svg>
);

const SearchIcon = ({ className }: { className?: string }) => (
    <svg className={`w-5 h-5 ${className || ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
    <svg className={`w-6 h-6 ${className || ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const UserIcon = ({ className }: { className?: string }) => (
    <svg className={`w-6 h-6 ${className || ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

const CartIcon = ({ className }: { className?: string }) => (
    <svg className={`w-6 h-6 ${className || ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const SEARCH_PRODUCTS = [
    {
        id: 1,
        name: "VALENCIA ORANGE MOCHA",
        price: "$7.50",
        category: "Signature",
        description: "A bold fusion of dark cocoa and zesty Valencia oranges, topped with crystalized zest.",
        image: "/image1.png",
        tags: ["Zesty", "Dark Cocoa", "Hot"]
    },
    {
        id: 2,
        name: "KYOTO COLD DRIP",
        price: "$8.00",
        category: "Cold Brew",
        description: "Slow-dripped over 12 hours through glass towers to extract pure, floral clarity.",
        image: "/image2.png",
        tags: ["Floral", "Clear", "Drip"]
    },
    {
        id: 3,
        name: "BLACK GOLD ESPRESSO",
        price: "$4.50",
        category: "Strong",
        description: "Our darkest roast. Intense complexity with notes of smoke and black treacle.",
        image: "/image3.png",
        tags: ["Intense", "Smoky", "Short"]
    },
    {
        id: 4,
        name: "VELVET FLAT WHITE",
        price: "$5.95",
        category: "Classics",
        description: "Micro-foamed milk poured over a precision-pulled double shot of our house blend.",
        image: "/image4.png",
        tags: ["Creamy", "Balanced", "Classic"]
    },
    {
        id: 5,
        name: "TURKISH ROSE LATTE",
        price: "$6.50",
        category: "Signature",
        description: "Delicate rose water infusion with crushed pistachios and honey-drizzled foam.",
        image: "/image5.png",
        tags: ["Floral", "Sweet", "Exotic"]
    },
    {
        id: 6,
        name: "HONEYCOMB NITRO",
        price: "$7.25",
        category: "Cold Brew",
        description: "Nitro-infused cold brew served with a shard of handmade honeycomb toffee.",
        image: "/image6.png",
        tags: ["Creamy", "Sweet", "Draft"]
    }
];

export default function Header() {
    const pathname = usePathname();
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const scrollStopTimeout = useRef<NodeJS.Timeout | null>(null);
    const { scrollY } = useScroll();

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Close overlays on route change (fixes back-button bug)
    useEffect(() => {
        setIsSearchOpen(false);
        setIsMenuOpen(false);
    }, [pathname]);

    // Lock scroll when menu or search is open
    useEffect(() => {
        if ((isMenuOpen && !isDesktop) || isSearchOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen, isSearchOpen, isDesktop]);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;

        // 1. ELITE UX: Detection for Scroll Stop
        if (scrollStopTimeout.current) clearTimeout(scrollStopTimeout.current);
        scrollStopTimeout.current = setTimeout(() => {
            setIsHidden(false); // Show when user stops scrolling after 2 seconds
        }, 1000);

        // 2. ELITE UX: Show on Scroll Up, Hide on Scroll Down
        if (latest > previous && latest > 150) {
            setIsHidden(true); // Hide on Scroll Down
        } else if (latest < previous) {
            setIsHidden(false); // Show on Scroll Up
        }

        setIsScrolled(latest > 20);
    });

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (scrollStopTimeout.current) clearTimeout(scrollStopTimeout.current);
        };
    }, []);

    const navLinks = [
        { name: 'HOME', href: '/' },
        { name: 'PRODUCTS', href: '/products' },
        { name: 'ABOUT', href: '/about' },
        { name: 'CONTACT', href: '/contact' },
    ];

    return (
        <>
            <motion.header
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={isHidden || (isMenuOpen && !isDesktop) ? "hidden" : "visible"}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b border-black/5 ${isScrolled ? 'bg-[#FAF9F0]/95 backdrop-blur-md py-1.5 shadow-sm' : 'bg-[#FAF9F0] py-2'}`}
            >
                <nav className="container mx-auto px-4 md:px-6 lg:px-12">
                    <div className="flex items-center justify-between">

                        {/* Left Spacer - Hidden on mobile */}
                        <div className="hidden md:flex flex-1"></div>

                        {/* Center Section: Logo */}
                        <div className="flex md:flex-1 md:justify-center">
                            <Link href="/" className="relative group flex items-center gap-2 md:gap-3">
                                {/* Logo Image */}
                                <div className="relative w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 shrink-0">
                                    <Image
                                        src="/LogoV1.png"
                                        alt="DRIZZL CAFÉ Logo"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>

                                <div className="flex flex-col items-start">
                                    <span className="font-royal text-lg md:text-2xl lg:text-3xl font-light tracking-[0.1em] md:tracking-[0.2em] text-black leading-none uppercase">
                                        DRIZZL
                                    </span>
                                    <span className="text-[8px] md:text-[10px] tracking-[0.4em] md:tracking-[0.8em] text-black/40 font-medium uppercase">
                                        CAFÉ
                                    </span>
                                </div>
                            </Link>
                        </div>

                        {/* Right Section: Burger */}
                        <div className="flex md:flex-1 items-center justify-end">

                            {/* Burger Menu - Hidden at top, shown on scroll */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className={`text-black/80 hover:text-black transition-all duration-300 focus:outline-none flex items-center justify-center w-10 h-10 ${!isScrolled ? 'md:opacity-0 md:pointer-events-none md:scale-90' : 'md:opacity-100 md:scale-100'}`}
                                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            >
                                {isMenuOpen ? (
                                    <CloseIcon className="w-6 h-6 md:w-7 md:h-7" />
                                ) : (
                                    <MenuIcon className="w-6 h-6 md:w-7 md:h-7" />
                                )}
                            </button>
                        </div>

                    </div>
                </nav>

                {/* Navigation Links Row - Always show at top, toggleable on scroll */}
                <AnimatePresence>
                    {(isMenuOpen || (!isScrolled && isDesktop)) && (
                        <motion.div
                            initial={isDesktop ? { height: 0, opacity: 0 } : false}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="hidden md:block border-t border-black/5 mt-2 overflow-hidden"
                        >
                            <div className="container mx-auto px-6 lg:px-12 flex items-center justify-center gap-12 py-1.5">
                                {navLinks.map((link) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className={`text-[12px] font-bold tracking-[0.2em] uppercase transition-colors duration-300 py-1 relative ${isActive
                                                ? 'text-black'
                                                : 'text-black/50 hover:text-black'
                                                }`}
                                        >
                                            {link.name}
                                            {isActive && (
                                                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-black" />
                                            )}
                                        </Link>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>

            {/* Mobile Menu Overlay - Only shows on mobile */}
            <AnimatePresence>
                {isMenuOpen && !isDesktop && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-[#FAF9F0] flex flex-col"
                    >
                        {/* Mobile Menu Header */}
                        <div className="flex items-center justify-between px-6 py-5 border-b border-black/5">
                            <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3">
                                <div className="relative w-10 h-10 shrink-0">
                                    <Image src="/LogoV1.png" alt="DRIZZL CAFÉ Logo" fill className="object-contain" />
                                </div>
                                <span className="font-royal text-lg font-light tracking-[0.15em] text-black uppercase">DRIZZL</span>
                            </Link>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="text-black/80 p-2 hover:bg-black/5 rounded-full transition-all"
                            >
                                <CloseIcon className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Mobile Menu Content */}
                        <div className="flex-1 flex flex-col justify-center px-8 py-8">
                            {/* Primary Navigation */}
                            <nav className="flex flex-col space-y-6">
                                {navLinks.map((link, i) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <motion.div
                                            key={link.name}
                                            initial={{ x: -30, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.05 + i * 0.08, type: "spring", stiffness: 120, damping: 20 }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsMenuOpen(false)}
                                                className={`text-4xl font-royal font-light tracking-[0.1em] uppercase flex items-center justify-between group transition-colors duration-300 ${isActive ? 'text-black' : 'text-black/30 hover:text-black/70'}`}
                                            >
                                                <span>{link.name}</span>
                                                {isActive && (
                                                    <motion.span
                                                        layoutId="mobile-active"
                                                        className="w-2 h-2 rounded-full bg-gold-500"
                                                    />
                                                )}
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </nav>

                            {/* Quick Actions */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="mt-12 pt-8 border-t border-black/5 flex flex-col gap-4"
                            >
                                <a
                                    href="https://www.instagram.com/drizzlcafe?igsh=MXdhZ3M2NmNucGg1NQ=="
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-black/40 hover:text-black/70 transition-colors duration-300"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                    </svg>
                                    <span className="text-xs font-bold tracking-[0.2em] uppercase">@drizzlcafe</span>
                                </a>
                                <a
                                    href="tel:+916383298748"
                                    className="flex items-center gap-3 text-black/40 hover:text-black/70 transition-colors duration-300"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span className="text-xs font-bold tracking-[0.2em] uppercase">+91 63832 98748</span>
                                </a>
                            </motion.div>
                        </div>

                        {/* Mobile Menu Footer */}
                        <div className="px-8 py-6 text-center border-t border-black/5">
                            <p className="text-[9px] tracking-[0.4em] text-black/25 font-bold uppercase">
                                © 2026 DRIZZL CAFÉ • CHENNAI
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Search Overlay - Matched to Reference Image */}
            <AnimatePresence>
                {isSearchOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-[100] bg-[#FAF9F0] flex flex-col items-center overflow-y-auto"
                        style={{ paddingTop: '40px' }}
                    >
                        {/* Search Bar - Centered at top */}
                        <motion.div
                            initial={{ y: -15, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.05 }}
                            className="w-full flex items-center justify-center gap-3 px-6 mb-12"
                        >
                            <div className="flex items-center gap-3 bg-white border border-[#999]/40 px-4 py-2.5"
                                style={{ width: '100%', maxWidth: '520px' }}
                            >
                                <SearchIcon className="text-[#777] w-5 h-5 shrink-0" />
                                <input
                                    autoFocus
                                    type="text"
                                    placeholder="Search..."
                                    className="bg-transparent border-none text-base tracking-wide text-[#333] placeholder:text-[#999] focus:outline-none focus:ring-0 w-full"
                                    style={{ fontFamily: 'inherit', fontSize: '15px' }}
                                />
                            </div>
                            <button
                                onClick={() => setIsSearchOpen(false)}
                                className="text-[#555] hover:text-[#222] transition-colors p-1 shrink-0"
                                aria-label="Close search"
                            >
                                <CloseIcon className="w-6 h-6" />
                            </button>
                        </motion.div>

                        {/* Products Grid - Real products from Products page */}
                        <div className="w-full px-4 md:px-8 pb-12" style={{ maxWidth: '1100px' }}>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="text-[11px] font-bold tracking-[0.3em] text-[#4A3728]/40 uppercase mb-6"
                            >
                                Our Products
                            </motion.p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                                {SEARCH_PRODUCTS.map((product, i) => (
                                    <motion.div
                                        key={product.id}
                                        initial={{ y: 25, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.12 + (i * 0.07), duration: 0.45 }}
                                    >
                                        <Link
                                            href={`/products#product-${product.id}`}
                                            onClick={() => setIsSearchOpen(false)}
                                            className="block group bg-white rounded-lg overflow-hidden border border-[#e8e0d4] hover:border-[#b48e60] hover:shadow-lg transition-all duration-400"
                                        >
                                            {/* Product Image */}
                                            <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f0e8]">
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                                {/* Category Badge */}
                                                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[9px] font-bold tracking-[0.15em] text-[#4A3728] uppercase px-2.5 py-1 rounded-full">
                                                    {product.category}
                                                </span>
                                            </div>

                                            {/* Product Info */}
                                            <div className="p-4 space-y-2">
                                                <div className="flex items-start justify-between gap-2">
                                                    <h3 className="font-serif text-base font-semibold text-[#2a1f14] leading-tight group-hover:text-[#b48e60] transition-colors duration-300">
                                                        {product.name}
                                                    </h3>
                                                    <span className="text-sm font-bold text-[#b48e60] whitespace-nowrap mt-0.5">
                                                        {product.price}
                                                    </span>
                                                </div>
                                                <p className="text-[13px] text-[#6b5b4e]/70 leading-relaxed line-clamp-2">
                                                    {product.description}
                                                </p>
                                                {/* Tags */}
                                                <div className="flex flex-wrap gap-1.5 pt-1">
                                                    {product.tags.map((tag) => (
                                                        <span key={tag} className="text-[9px] font-semibold tracking-wider text-[#4A3728]/40 border border-[#4A3728]/10 px-2 py-0.5 rounded-full uppercase group-hover:border-[#b48e60]/30 group-hover:text-[#b48e60] transition-all duration-300">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
