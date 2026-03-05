"use client";

import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const PRODUCTS = [
    {
        id: 1,
        name: "VALENCIA ORANGE MOCHA",
        category: "Signature",
        description: "A bold fusion of dark cocoa and zesty Valencia oranges, topped with crystalized zest. The perfect balance of bitter and sweet.",
        image: "/image1.png",
        tags: ["Zesty", "Dark Cocoa", "Hot"]
    },
    {
        id: 2,
        name: "KYOTO COLD DRIP",
        category: "Cold Brew",
        description: "Slow-dripped over 12 hours through glass towers to extract pure, floral clarity. Served over hand-carved ice.",
        image: "/image2.png",
        tags: ["Floral", "Clear", "Drip"]
    },
    {
        id: 3,
        name: "BLACK GOLD ESPRESSO",
        category: "Strong",
        description: "Our darkest roast. Intense complexity with notes of smoke and black treacle. For those who take their coffee seriously.",
        image: "/image3.png",
        tags: ["Intense", "Smoky", "Short"]
    },
    {
        id: 4,
        name: "VELVET FLAT WHITE",
        category: "Classics",
        description: "Micro-foamed milk poured over a precision-pulled double shot of our house blend. Silky, smooth, and utterly comforting.",
        image: "/image4.png",
        tags: ["Creamy", "Balanced", "Classic"]
    },
    {
        id: 5,
        name: "TURKISH ROSE LATTE",
        category: "Signature",
        description: "Delicate rose water infusion with crushed pistachios and honey-drizzled foam. A taste of the exotic in every sip.",
        image: "/image5.png",
        tags: ["Floral", "Sweet", "Exotic"]
    },
    {
        id: 6,
        name: "HONEYCOMB NITRO",
        category: "Cold Brew",
        description: "Nitro-infused cold brew served with a shard of handmade honeycomb toffee. Creamy texture without the cream.",
        image: "/image6.png",
        tags: ["Creamy", "Sweet", "Draft"]
    }
];

const CATEGORIES = ["All", "Signature", "Classics", "Cold Brew", "Strong"];

export default function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isLoaded, setIsLoaded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

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

    return (
        <div className="min-h-screen bg-white">
            <div className="relative z-10 flex flex-col lg:flex-row min-h-screen pt-16 md:pt-24">

                {/* Left Sidebar - Horizontal on Mobile, Fixed on Desktop */}
                <motion.aside
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="lg:w-96 lg:h-[calc(100vh-6rem)] lg:sticky lg:top-24 pt-12 md:pt-20 lg:pt-28 pb-6 md:pb-12 px-4 md:px-12 flex flex-col justify-between lg:border-r border-gold-500/10 bg-cream-50/30 backdrop-blur-sm"
                >
                    <div className="space-y-8 md:space-y-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-3 md:space-y-4"
                        >
                            <h2 className="font-serif text-3xl md:text-5xl text-coffee-900 leading-[0.9] tracking-tighter">CURATED<br />ROASTS</h2>
                        </motion.div>

                        {/* Grid layout on mobile, vertical list on desktop */}
                        <div className="relative">
                            <motion.nav
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="flex flex-wrap lg:flex-col gap-3 md:gap-4 lg:gap-2"
                            >
                                {CATEGORIES.map((cat, index) => {
                                    const count = cat === "All"
                                        ? PRODUCTS.length
                                        : PRODUCTS.filter(p => p.category === cat).length;
                                    const isActive = selectedCategory === cat;

                                    return (
                                        <motion.button
                                            key={cat}
                                            onClick={() => setSelectedCategory(cat)}
                                            className="relative group px-6 py-3 lg:py-4 lg:px-8 flex items-center justify-between w-auto lg:w-full transition-all duration-300 outline-none"
                                        >
                                            {/* Active Background Pill */}
                                            {isActive && (
                                                <motion.div
                                                    layoutId="activeCategory"
                                                    className="absolute inset-0 bg-coffee-900 rounded-full lg:rounded-xl shadow-lg shadow-coffee-900/20"
                                                    initial={false}
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 400,
                                                        damping: 35
                                                    }}
                                                />
                                            )}

                                            {/* Category Content */}
                                            <div className="relative z-10 flex items-center justify-between w-full gap-4">
                                                <div className="flex flex-col items-start">
                                                    <span className={`text-[10px] lg:text-[12px] font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${isActive
                                                        ? 'text-white'
                                                        : 'text-coffee-900/40 group-hover:text-coffee-900'
                                                        }`}>
                                                        {cat}
                                                    </span>
                                                </div>

                                                <motion.span
                                                    layout
                                                    className={`text-[9px] font-bold px-2 py-0.5 rounded-full transition-colors duration-300 ${isActive
                                                        ? 'bg-white/10 text-white'
                                                        : 'bg-coffee-900/5 text-coffee-900/40 group-hover:bg-coffee-900/10'
                                                        }`}
                                                >
                                                    {count}
                                                </motion.span>
                                            </div>

                                            {/* Hover indicator (Desktop only) */}
                                            {!isActive && (
                                                <div className="hidden lg:block absolute left-0 w-1 h-0 bg-coffee-900/20 rounded-full transition-all duration-300 group-hover:h-1/2 group-hover:left-2" />
                                            )}
                                        </motion.button>
                                    );
                                })}
                            </motion.nav>
                        </div>
                    </div>

                    <div className="hidden lg:block space-y-4 text-[10px] text-coffee-900/30 tracking-[0.3em] font-bold uppercase">
                        <p>© 2026 DRIZZL CAFE</p>
                        <p>PREMIUM CRAFTED</p>
                    </div>
                </motion.aside>

                {/* Main Content Area */}
                <div className="flex-1 pt-20 md:pt-24 px-4 md:px-8 lg:px-24 pb-20 md:pb-40">
                    {/* Hero Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mb-16 md:mb-32 space-y-6 md:space-y-10 max-w-5xl"
                    >
                        <h1 className="font-serif text-5xl md:text-8xl lg:text-[10rem] tracking-tight leading-[0.8] uppercase text-coffee-900">
                            LIQUID <br />
                            <span className="text-gold-500 italic font-light">CRAFT</span>
                        </h1>
                        <p className="text-coffee-900/60 text-base md:text-xl lg:text-2xl max-w-2xl leading-relaxed italic border-l-2 border-gold-500/20 pl-6 md:pl-10">
                            "Every bean is a universe. Every roast is a revelation. Welcome to the pinnacle of artisan coffee culture."
                        </p>
                    </motion.div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-20 gap-y-16 md:gap-y-32">
                        <AnimatePresence mode="popLayout">
                            {filteredProducts.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{
                                        duration: 0.4,
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
                                            className="object-cover transition-transform duration-[3s] ease-out group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-coffee-900/5 group-hover:bg-transparent transition-colors duration-700"></div>

                                        <span className="absolute top-6 md:top-10 left-6 md:left-10 font-serif text-3xl md:text-5xl text-coffee-900/10 group-hover:text-gold-500 transition-colors duration-700">
                                            0{product.id}
                                        </span>
                                    </div>

                                    {/* Product Details */}
                                    <div className="space-y-4 md:space-y-6">
                                        <div className="flex flex-col gap-3">
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

                                        <p className="text-coffee-900/50 text-sm md:text-base leading-relaxed">
                                            {product.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Bottom CTA Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="mt-16 md:mt-32 bg-cream-50 py-12 md:py-20 lg:py-24 px-0 relative overflow-hidden flex flex-col items-center text-center space-y-8 md:space-y-10 border-y border-gold-500/10"
                    >
                        <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center select-none z-0">
                            <h2 className="text-[20vw] font-serif whitespace-nowrap leading-none text-coffee-900">DRIZZL CAFE</h2>
                        </div>
                        <div className="relative z-10 space-y-8 md:space-y-10 w-full px-4 md:px-8">
                            <div className="flex flex-col items-center gap-3 md:gap-4">
                                <span className="text-gold-500 text-[10px] md:text-xs font-bold tracking-[0.4em] md:tracking-[0.5em] uppercase">Artisan Quality</span>
                                <div className="h-12 md:h-16 w-[1px] bg-gold-500/30"></div>
                            </div>
                            <h3 className="font-serif text-4xl md:text-6xl lg:text-8xl max-w-4xl leading-[1.1] text-coffee-900 uppercase">
                                NOT JUST COFFEE. <br />
                                <span className="text-gold-500 italic font-light">POETRY</span> IN A CUP.
                            </h3>
                            <p className="text-coffee-900/50 max-w-2xl text-base md:text-lg lg:text-xl font-light leading-relaxed mx-auto italic px-4">
                                "Each roast is a testament to our dedication to the craft. Sourced from single-origin farms and roasted with the heart."
                            </p>
                            <Link href="/contact" className="w-full flex justify-center">
                                <button className="bg-coffee-900 text-white px-8 md:px-12 py-4 md:py-6 text-[10px] md:text-[11px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase hover:bg-gold-500 hover:text-coffee-900 transition-all duration-500 shadow-xl">
                                    CONTACT US
                                </button>
                            </Link>
                        </div>
                    </motion.section>
                </div>
            </div>

            <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
}
