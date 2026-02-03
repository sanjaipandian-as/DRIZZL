"use client";

import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const PRODUCTS = [
    {
        id: 1,
        name: "VALENCIA ORANGE MOCHA",
        price: "$7.50",
        category: "Signature",
        description: "A bold fusion of dark cocoa and zesty Valencia oranges, topped with crystalized zest. The perfect balance of bitter and sweet.",
        image: "/image1.png",
        tags: ["Zesty", "Dark Cocoa", "Hot"]
    },
    {
        id: 2,
        name: "KYOTO COLD DRIP",
        price: "$8.00",
        category: "Cold Brew",
        description: "Slow-dripped over 12 hours through glass towers to extract pure, floral clarity. Served over hand-carved ice.",
        image: "/image2.png",
        tags: ["Floral", "Clear", "Drip"]
    },
    {
        id: 3,
        name: "BLACK GOLD ESPRESSO",
        price: "$4.50",
        category: "Strong",
        description: "Our darkest roast. Intense complexity with notes of smoke and black treacle. For those who take their coffee seriously.",
        image: "/image3.png",
        tags: ["Intense", "Smoky", "Short"]
    },
    {
        id: 4,
        name: "VELVET FLAT WHITE",
        price: "$5.95",
        category: "Classics",
        description: "Micro-foamed milk poured over a precision-pulled double shot of our house blend. Silky, smooth, and utterly comforting.",
        image: "/image4.png",
        tags: ["Creamy", "Balanced", "Classic"]
    },
    {
        id: 5,
        name: "TURKISH ROSE LATTE",
        price: "$6.50",
        category: "Signature",
        description: "Delicate rose water infusion with crushed pistachios and honey-drizzled foam. A taste of the exotic in every sip.",
        image: "/image5.png",
        tags: ["Floral", "Sweet", "Exotic"]
    },
    {
        id: 6,
        name: "HONEYCOMB NITRO",
        price: "$7.25",
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
    const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS[0] | null>(null);
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

    // Close modal on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedProduct(null);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedProduct && !isMobile) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedProduct, isMobile]);

    return (
        <div className="min-h-screen bg-white">
            <div className="relative z-10 flex flex-col lg:flex-row min-h-screen pt-16 md:pt-24">

                {/* Left Sidebar - Horizontal on Mobile, Fixed on Desktop */}
                <motion.aside
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="lg:w-96 lg:h-[calc(100vh-6rem)] lg:sticky lg:top-24 pt-8 md:pt-20 pb-6 md:pb-12 px-4 md:px-12 flex flex-col justify-between lg:border-r border-gold-500/10 bg-cream-50/30 backdrop-blur-sm"
                >
                    <div className="space-y-8 md:space-y-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-3 md:space-y-4"
                        >
                            <span className="text-gold-500 text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase">Selection</span>
                            <h2 className="font-serif text-3xl md:text-5xl text-coffee-900 leading-[0.9] tracking-tighter">CURATED<br />ROASTS</h2>
                        </motion.div>

                        {/* Grid layout on mobile, vertical list on desktop */}
                        <div className="relative">
                            <nav className="flex flex-wrap lg:flex-col gap-2 md:gap-3 lg:gap-8">
                                {CATEGORIES.map((cat, index) => {
                                    const count = cat === "All"
                                        ? PRODUCTS.length
                                        : PRODUCTS.filter(p => p.category === cat).length;
                                    const isActive = selectedCategory === cat;

                                    return (
                                        <motion.button
                                            key={cat}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                            onClick={() => setSelectedCategory(cat)}
                                            className={`relative group flex items-center justify-center lg:justify-start gap-2 lg:gap-6 transition-all duration-500 px-4 py-2 lg:p-0 rounded-full lg:rounded-none border lg:border-0 ${isActive
                                                ? 'border-gold-500 bg-gold-500/10 text-gold-500 lg:bg-transparent lg:translate-x-4'
                                                : 'border-gold-500/10 bg-white/50 text-coffee-900/40 lg:bg-transparent hover:border-gold-500/30 lg:hover:border-transparent hover:bg-gold-500/5 lg:hover:bg-transparent lg:hover:translate-x-2'
                                                }`}
                                        >
                                            {/* Desktop line indicator */}
                                            <span className={`hidden lg:block h-[1px] transition-all duration-500 bg-gold-500 ${isActive ? 'w-12' : 'w-0 group-hover:w-8'}`}></span>

                                            {/* Category content */}
                                            <div className="flex items-center gap-2 lg:gap-3">
                                                <div className="flex flex-col gap-1 items-center lg:items-start">
                                                    <span className={`text-[10px] lg:text-[11px] font-bold tracking-widest lg:tracking-[0.2em] uppercase transition-all duration-300 whitespace-nowrap ${isActive
                                                        ? 'text-gold-500'
                                                        : 'group-hover:text-coffee-900'
                                                        }`}>
                                                        {cat}
                                                    </span>

                                                    {/* Active indicator bar - Desktop only */}
                                                    <motion.div
                                                        className="hidden lg:block h-[2px] bg-gold-500 rounded-full"
                                                        initial={false}
                                                        animate={{
                                                            width: isActive ? '100%' : '0%',
                                                            opacity: isActive ? 1 : 0
                                                        }}
                                                        transition={{ duration: 0.3 }}
                                                    />
                                                </div>

                                                {/* Count badge */}
                                                <motion.span
                                                    layout
                                                    initial={false}
                                                    animate={{
                                                        backgroundColor: isActive ? 'rgb(180, 142, 96)' : 'rgba(139, 69, 19, 0.05)',
                                                        color: isActive ? '#ffffff' : 'rgba(139, 69, 19, 0.4)'
                                                    }}
                                                    className="text-[9px] font-bold px-1.5 py-0.5 min-w-[18px] text-center rounded-full transition-colors duration-300"
                                                >
                                                    {count}
                                                </motion.span>
                                            </div>
                                        </motion.button>
                                    );
                                })}
                            </nav>
                        </div>
                    </div>

                    <div className="hidden lg:block space-y-4 text-[10px] text-coffee-900/30 tracking-[0.3em] font-bold uppercase">
                        <p>© 2026 DRIZZL CAFE</p>
                        <p>PREMIUM CRAFTED</p>
                    </div>
                </motion.aside>

                {/* Main Content Area */}
                <div className="flex-1 pt-8 md:pt-20 px-4 md:px-8 lg:px-24 pb-20 md:pb-40">
                    {/* Hero Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mb-16 md:mb-32 space-y-6 md:space-y-10 max-w-5xl"
                    >
                        <div className="flex items-center gap-4 md:gap-6">
                            <div className="h-[1px] w-12 md:w-24 bg-gold-500/50"></div>
                            <span className="text-gold-500 text-[9px] md:text-[10px] font-bold tracking-[0.4em] md:tracking-[0.5em] uppercase">The Collection</span>
                        </div>
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

                                        {/* Quick View Button - Hidden on Mobile */}
                                        {!isMobile && (
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-coffee-900/10 backdrop-blur-[2px]">
                                                <button
                                                    onClick={() => setSelectedProduct(product)}
                                                    className="bg-coffee-900 text-white px-8 md:px-10 py-4 md:py-5 font-bold text-[9px] md:text-[10px] tracking-[0.3em] uppercase hover:bg-gold-500 hover:text-coffee-900 transition-all transform hover:-translate-y-1 hover:shadow-xl"
                                                >
                                                    Quick View
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                    {/* Product Details */}
                                    <div className="space-y-4 md:space-y-6">
                                        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-3 md:gap-6">
                                            <h3 className="font-serif text-2xl md:text-4xl tracking-tight leading-none text-coffee-900 group-hover:text-gold-500 transition-colors duration-500 uppercase">
                                                {product.name}
                                            </h3>
                                            <div className="hidden md:block h-[1px] flex-1 bg-gold-500/10"></div>
                                            <span className="text-base md:text-lg font-bold text-coffee-900 tracking-widest shrink-0">{product.price}</span>
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
                        className="mt-24 md:mt-52 bg-cream-50 p-8 md:p-16 lg:p-32 relative overflow-hidden flex flex-col items-center text-center space-y-8 md:space-y-10 border border-gold-500/10 rounded-lg md:rounded-none"
                    >
                        <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center select-none z-0">
                            <h2 className="text-[20vw] font-serif whitespace-nowrap leading-none text-coffee-900">DRIZZL CAFE</h2>
                        </div>
                        <div className="relative z-10 space-y-8 md:space-y-10">
                            <div className="flex flex-col items-center gap-3 md:gap-4">
                                <span className="text-gold-500 text-[10px] md:text-xs font-bold tracking-[0.4em] md:tracking-[0.5em] uppercase">Artisan Quality</span>
                                <div className="h-12 md:h-20 w-[1px] bg-gold-500/30"></div>
                            </div>
                            <h3 className="font-serif text-4xl md:text-6xl lg:text-8xl max-w-4xl leading-[1.1] text-coffee-900 uppercase">
                                NOT JUST COFFEE. <br />
                                <span className="text-gold-500 italic font-light">POETRY</span> IN A CUP.
                            </h3>
                            <p className="text-coffee-900/50 max-w-2xl text-base md:text-lg lg:text-xl font-light leading-relaxed mx-auto italic px-4">
                                "Each roast is a testament to our dedication to the craft. Sourced from single-origin farms and roasted with the heart."
                            </p>
                            <button className="bg-coffee-900 text-white px-8 md:px-12 py-4 md:py-6 text-[10px] md:text-[11px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase hover:bg-gold-500 hover:text-coffee-900 transition-all duration-500 shadow-xl">
                                DISCOVER OUR MEMBERSHIP
                            </button>
                        </div>
                    </motion.section>
                </div>
            </div>

            {/* Quick View Modal - Only on Desktop */}
            <AnimatePresence>
                {selectedProduct && !isMobile && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-coffee-900/60 backdrop-blur-md"
                        onClick={() => setSelectedProduct(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                            className="bg-white w-full max-w-5xl rounded-[30px] overflow-hidden shadow-2xl relative grid lg:grid-cols-2"
                            onClick={e => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="absolute top-4 right-4 z-20 bg-white/50 backdrop-blur-md hover:bg-white p-2 rounded-full transition-all text-coffee-900 hover:scale-110"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>

                            <div className="relative h-64 lg:h-full bg-cream-50">
                                <Image
                                    src={selectedProduct.image}
                                    alt={selectedProduct.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-8 lg:p-12 flex flex-col justify-center space-y-8">
                                <div className="space-y-4">
                                    <span className="text-gold-500 text-xs font-bold tracking-[0.4em] uppercase">{selectedProduct.category}</span>
                                    <h2 className="font-serif text-4xl md:text-5xl text-coffee-900 leading-[0.9]">{selectedProduct.name}</h2>
                                    <p className="text-2xl font-bold text-coffee-900/80">{selectedProduct.price}</p>
                                </div>

                                <p className="text-coffee-900/60 text-lg leading-relaxed">{selectedProduct.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {selectedProduct.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-bold tracking-[0.2em] bg-cream-50 text-coffee-900 px-4 py-2 rounded-full uppercase">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

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
