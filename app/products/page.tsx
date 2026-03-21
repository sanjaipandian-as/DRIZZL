"use client";

import { useState, useMemo, useEffect, Suspense } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams, useRouter } from 'next/navigation';

import { PRODUCTS, CATEGORIES, Product } from '@/lib/data/products';

function ProductsContent() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isLoaded, setIsLoaded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [scrollbarWidth, setScrollbarWidth] = useState(0);

    useEffect(() => {
        setIsLoaded(true);

        // Check if mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const filteredProducts = useMemo(() => {
        return selectedCategory === "All"
            ? PRODUCTS
            : PRODUCTS.filter(p => p.category === selectedCategory);
    }, [selectedCategory]);

    // 1. ELITE UX: Zero-Jitter Scrollbar Locked (CLS Prevention Logic)
    useEffect(() => {
        // Calculate scrollbar width once
        const width = window.innerWidth - document.documentElement.clientWidth;
        setScrollbarWidth(width);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <div className="relative z-10 flex flex-col lg:flex-row min-h-screen pt-16 md:pt-24">

                {/* Left Sidebar - Refined Modern Design */}
                <motion.aside
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="lg:w-[320px] xl:w-[420px] lg:h-[calc(100vh-6rem)] lg:sticky lg:top-24 pt-6 pb-6 lg:pb-12 px-6 lg:pl-12 lg:pr-6 xl:px-16 flex flex-col justify-between z-20"
                >
                    {/* Background Accents */}
                    <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-gold-500/20 to-transparent hidden lg:block" />

                    <div className="relative z-10 space-y-12 lg:space-y-16">
                        {/* Header Section */}
                        <div className="space-y-6">
                            {/* <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center gap-3"
                            >
                                <span className="h-[1px] w-8 bg-gold-500/40" />
                                <span className="text-gold-500 text-[10px] font-bold tracking-[0.5em] uppercase">Selection</span>
                            </motion.div> */}
                            <div className="space-y-4 md:space-y-6">
                            <h2 className="font-display text-4xl sm:text-6xl lg:text-5xl xl:text-8xl pt-4 lg:pt-10 text-coffee-900 leading-[0.85] tracking-tighter uppercase">
                                Curated <br className="hidden lg:block" />
                                <span className="text-gold-500/80">Roasts</span>
                            </h2>
                        </div>
                        </div>

                        {/* Category Navigation - Enhanced for Mobile Scroll */}
                        <div className="relative -mx-6 px-6 lg:mx-0 lg:px-0">
                            <nav className="flex flex-nowrap lg:flex-col gap-2 lg:gap-1 overflow-x-auto lg:overflow-visible scrollbar-hide pb-4 lg:pb-0">
                                {CATEGORIES.map((cat, index) => {
                                const count = cat === "All"
                                    ? PRODUCTS.length
                                    : PRODUCTS.filter(p => p.category === cat).length;
                                const isActive = selectedCategory === cat;

                                return (
                                    <motion.button
                                        key={cat}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`group relative flex items-center gap-3 lg:gap-4 py-2.5 px-5 lg:px-0 lg:py-4 transition-all duration-500 shrink-0 rounded-full lg:rounded-none ${
                                            isActive 
                                              ? 'bg-coffee-900 lg:bg-transparent lg:translate-x-4' 
                                              : 'bg-coffee-950/5 lg:bg-transparent hover:lg:translate-x-2'
                                        }`}
                                    >
                                        <div className="relative flex items-center justify-center">
                                            {/* Modern active indicator */}
                                            <motion.div
                                                className={`absolute -left-6 w-1 h-1 rounded-full bg-gold-500`}
                                                initial={false}
                                                animate={{
                                                    scale: isActive ? 1.5 : 0,
                                                    opacity: isActive ? 1 : 0,
                                                    x: isActive ? 0 : -10
                                                }}
                                            />

                                            <span className={`text-[10px] md:text-[12px] font-bold tracking-[0.2em] uppercase transition-all duration-500 whitespace-nowrap ${
                                                isActive 
                                                  ? 'text-gold-500 lg:text-coffee-900 scale-105 lg:scale-110' 
                                                  : 'text-coffee-950/40 lg:text-coffee-950/30 group-hover:text-coffee-900'
                                                }`}>
                                                {cat}
                                            </span>
                                        </div>

                                        {/* Count Circle */}
                                        <div className={`w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center text-[8px] md:text-[9px] font-bold transition-all duration-500 ${
                                            isActive 
                                              ? 'bg-gold-500 lg:bg-coffee-900 text-coffee-900 lg:text-gold-500 shadow-lg shadow-gold-500/20' 
                                              : 'bg-coffee-950/10 lg:bg-coffee-950/5 text-coffee-950/40 group-hover:bg-coffee-950/20'
                                        }`}>
                                            {count}
                                        </div>

                                        {/* Premium Active Background Pillar */}
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeCategory"
                                                className="absolute -bottom-1 lg:inset-y-1.5 lg:left-[-1.5rem] lg:right-[-1.5rem] lg:z-[-1] bg-gold-500/10 lg:bg-gold-500/[0.07] rounded-full"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                    </motion.button>
                                );
                            })}
                        </nav>
                        </div>
                    </div>

                    {/* Sidebar Footer with Vertical text */}
                    <div className="relative z-10 hidden lg:flex items-end justify-between">
                        <div className="space-y-1">
                            <p className="text-[10px] text-coffee-900 font-bold tracking-[0.3em] uppercase opacity-40">© 2026 DRIZZL</p>
                            <p className="text-[10px] text-gold-500 font-bold tracking-[0.3em] uppercase">Premium Crafted</p>
                        </div>

                        
                    </div>
                </motion.aside>

                {/* Main Content Area */}
                <div className="flex-1 pt-0 lg:pt-24 px-4 md:px-8 lg:px-12 xl:px-24 pb-20 md:pb-40 relative z-10">
                    {/* Hero Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mb-8 md:mb-32 space-y-6 md:space-y-10 max-w-5xl"
                    >
                        {/* <div className="flex items-center gap-4 md:gap-6">
                            <div className="h-[1px] w-12 md:w-24 bg-gold-500/50"></div>
                            <span className="text-gold-500 text-[9px] md:text-[10px] font-bold tracking-[0.4em] md:tracking-[0.5em] uppercase">The Collection</span>
                        </div> */}
                        <h1 className="font-serif text-5xl md:text-8xl lg:text-7xl xl:text-8xl 2xl:text-[9rem] tracking-tight leading-[0.8] uppercase text-coffee-900">
                            LIQUID <br />
                            <span className="text-gold-500 italic font-light">CRAFT</span>
                        </h1>
                        <p className="text-coffee-900/60 text-base md:text-xl lg:text-2xl max-w-2xl leading-relaxed italic border-l-2 border-gold-500/20 pl-6 md:pl-10">
                            "Every bean is a universe. Every roast is a revelation. Welcome to the pinnacle of artisan coffee culture."
                        </p>
                    </motion.div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-20 gap-y-16 md:gap-y-32">
                        <AnimatePresence>
                            {filteredProducts.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                        ease: [0.25, 0.1, 0.25, 1]
                                    }}
                                    className="group relative space-y-6 md:space-y-10"
                                    id={`product-${product.id}`}
                                >
                                    {/* Product Image */}
                                    <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-cream-50 shadow-sm rounded-lg md:rounded-none">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            priority={index < 2} // ELITE: Optimize LCP for first visible items
                                            loading={index < 2 ? 'eager' : 'lazy'}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-[3s] ease-out group-hover:scale-110"
                                        />                                        <div className="absolute inset-0 bg-coffee-900/5 group-hover:bg-transparent transition-colors duration-700"></div>

                                        <span className="absolute top-6 md:top-10 left-6 md:left-10 font-serif text-3xl md:text-5xl text-coffee-900/10 group-hover:text-gold-500 transition-colors duration-700">
                                            0{product.id}
                                        </span>

                                        <div className="absolute top-6 md:top-10 right-6 md:right-10 px-4 py-2 bg-coffee-900/80 backdrop-blur-md rounded-full">
                                            <span className="text-gold-500 font-bold text-xs tracking-widest">{product.price}</span>
                                        </div>

                                        {/* View Details Hint - Refined */}
                                        {/* Removed View Profile button */}
                                        {/* Removed mobile click handler */}
                                    </div>

                                    {/* Product Details */}
                                    <div className="space-y-4 md:space-y-6">
                                        <div className="flex justify-between items-start gap-3">
                                            <h3 className="font-serif text-2xl md:text-4xl tracking-tight leading-none text-coffee-900 group-hover:text-gold-500 transition-colors duration-500 uppercase">
                                                {product.name}
                                            </h3>
                                        </div>

                                        <div className="flex flex-wrap gap-2 md:gap-3">
                                            {product.tags.map(tag => (
                                                <span key={tag} className="text-[8px] md:text-[9px] font-bold tracking-[0.2em] border border-gold-500/10 px-3 md:px-4 py-1 md:py-1.5 rounded-full text-coffee-900/40 group-hover:border-gold-500 group-hover:text-gold-500 transition-all duration-700 uppercase">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <p className="text-coffee-900/50 text-sm md:text-base leading-relaxed line-clamp-2 md:line-clamp-none">
                                            {product.description}
                                        </p>

                                        {/* Removed Mobile-only CTA link */}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Bottom CTA Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "200px", amount: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mt-24 md:mt-52 bg-cream-50 p-8 md:p-16 lg:p-32 relative overflow-hidden flex flex-col items-center text-center space-y-8 md:space-y-10 border border-gold-500/10 rounded-lg md:rounded-none"
                    >
                        <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center select-none z-0">
                            <h2 className="text-[20vw] font-serif whitespace-nowrap leading-none text-coffee-900">DRIZZL CAFE</h2>
                        </div>
                        <div className="relative z-10 space-y-8 md:space-y-10">
                            {/* <div className="flex flex-col items-center gap-3 md:gap-4">
                                <span className="text-gold-500 text-[10px] md:text-xs font-bold tracking-[0.4em] md:tracking-[0.5em] uppercase">Artisan Quality</span>
                                <div className="h-12 md:h-20 w-[1px] bg-gold-500/30"></div>
                            </div> */}
                            <h3 className="font-serif text-4xl md:text-6xl lg:text-8xl max-w-4xl leading-[1.1] text-coffee-900 uppercase">
                                NOT JUST COFFEE. <br />
                                <span className="text-gold-500 italic font-light">POETRY</span> IN A CUP.
                            </h3>
                            <p className="text-coffee-900/50 max-w-2xl text-base md:text-lg lg:text-xl font-light leading-relaxed mx-auto italic px-4">
                                "Each roast is a testament to our dedication to the craft. Sourced from single-origin farms and roasted with the heart."
                            </p>
                            <button className="bg-coffee-900 text-white px-8 md:px-12 py-4 md:py-6 text-[10px] md:text-[11px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase hover:bg-gold-500 hover:text-coffee-900 transition-all duration-500 shadow-xl">
                                CONTACT US
                            </button>
                        </div>
                    </motion.section>
                </div>
            </div>        </div>
    );
}

// 10/10 Readiness: Wrap client-side search logic in Suspense boundary for App Router stability
export default function ProductsPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-white flex items-center justify-center">
                 <div className="w-12 h-12 border-4 border-gold-500/20 border-t-gold-500 rounded-full animate-spin"></div>
            </div>
        }>
            <ProductsContent />
        </Suspense>
    );
}
