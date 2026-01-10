'use client';

import { useState, useMemo, useEffect } from 'react';
import ProductCard from '@/components/ui/ProductCard';

const PRODUCTS = [
    {
        id: 1,
        name: "LATTE GRAND",
        price: "$3.50",
        category: "Signature",
        description: "Experience the smooth, velvety embrace of our house-blend espresso combined with perfectly steamed micro-foam. A timeless masterpiece of balance and aroma.",
        image: "https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=2036&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "CAPPUCCINO ART",
        price: "$4.00",
        category: "Artisan",
        description: "Rich, full-bodied espresso topped with a thick layer of creamy milk foam. Dusted with premium organic cocoa for that perfect morning ritual.",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1974&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "MOCHA HEAVEN",
        price: "$4.50",
        category: "Signature",
        description: "A decadent fusion of our hallmark espresso and artisanal dark chocolate, crowned with a swirl of vanilla-infused cream.",
        image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=1974&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "FLAT WHITE LUXE",
        price: "$4.25",
        category: "Favorites",
        description: "The pure essence of coffee. A double shot of ristretto poured over silky micro-foam, designed for the true coffee connoisseur.",
        image: "https://images.unsplash.com/photo-1534706936160-d5ee67737049?q=80&w=1974&auto=format&fit=crop"
    },
    {
        id: 5,
        name: "ROMAN ESPRESSO",
        price: "$2.95",
        category: "Strong",
        description: "Bold, intense, and uncompromising. Our Roman roast delivers a powerful kick with a surprisingly sweet finish and thick crema.",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974&auto=format&fit=crop"
    },
    {
        id: 6,
        name: "CARAMEL DRIZZLE",
        price: "$5.25",
        category: "Specialty",
        description: "A playful blend of sweet caramel, toasted hazelnuts, and our smooth medium roast. The perfect afternoon pick-me-up.",
        image: "https://images.unsplash.com/photo-1572286258217-40142c1c6a70?q=80&w=2070&auto=format&fit=crop"
    }
];

const CATEGORIES = ["All", "Signature", "Artisan", "Strong", "Specialty", "Favorites"];

export default function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const filteredProducts = useMemo(() => {
        return selectedCategory === "All"
            ? PRODUCTS
            : PRODUCTS.filter(p => p.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#E8D4B8] via-[#F5F1ED] to-[#EBE4DC] pb-40 overflow-hidden">
            {/* Header Section */}
            <section className="pt-40 pb-20 px-6 relative">
                <div className="absolute top-20 left-1/2 -translate-x-1/2 font-display text-[15vw] text-coffee-900/[0.03] whitespace-nowrap pointer-events-none select-none">
                    FRESH BREWED
                </div>
                <div className="container mx-auto text-center space-y-6 relative z-10">
                    <div className="flex items-center justify-center gap-4">
                        <span className="h-[1px] w-12 bg-coffee-400"></span>
                        <span className="text-gold-600 text-[10px] font-bold tracking-[0.4em] uppercase">Premium Menu</span>
                        <span className="h-[1px] w-12 bg-coffee-400"></span>
                    </div>
                    <h1 className="font-display text-7xl md:text-9xl text-coffee-900 leading-[0.85] uppercase tracking-tighter">
                        OUR <span className="text-gold-500">COFFEE</span> <br /> SELECTION
                    </h1>
                    <p className="text-coffee-600 max-w-2xl mx-auto text-lg italic">
                        "Curated from the world's finest beans, roasted to perfection, and served with a passion for the craft."
                    </p>
                </div>
            </section>

            {/* Filter Section */}
            <div className="container mx-auto px-6 mb-40">
                <div className="flex flex-wrap justify-center gap-4">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-10 py-4 rounded-2xl text-[10px] font-bold tracking-[0.2em] transition-all duration-500 uppercase border ${selectedCategory === cat ? "bg-coffee-900 text-white border-coffee-900 shadow-2xl scale-110" : "bg-white/40 backdrop-blur-sm text-coffee-800 border-white/50 hover:border-gold-500"}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Products Grid */}
            <div className="container mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-40">
                    {filteredProducts.map((product, index) => (
                        <div
                            key={product.id}
                            className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <ProductCard {...product} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Callout */}
            <div className="mt-40 container mx-auto px-6">
                <div className="bg-coffee-900 rounded-[60px] p-12 md:p-24 text-center relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-1000" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30 L60 0 M0 60 L30 30' stroke='%23ffffff' stroke-width='1' fill='none'/%3E%3C/svg%3E")` }}></div>
                    <div className="relative z-10 space-y-8">
                        <h2 className="font-display text-5xl md:text-7xl text-white">CAN'T FIND WHAT YOU'RE <br /> <span className="text-gold-500 italic">LOOKING FOR?</span></h2>
                        <p className="text-coffee-200 max-w-xl mx-auto">Ask our baristas for a custom creation. We love experimenting with new flavor profiles.</p>
                        <button className="bg-gold-500 text-white px-12 py-5 rounded-2xl font-bold tracking-widest hover:bg-gold-400 transition-all scale-105">
                            CHAT WITH US
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
