'use client';

const GALLERY_IMAGES = [
    {
        url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
        title: "Artisan Brew",
        size: "large"
    },
    {
        url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2078&auto=format&fit=crop",
        title: "Atmosphere",
        size: "small"
    },
    {
        url: "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?q=80&w=2069&auto=format&fit=crop",
        title: "Fresh Beans",
        size: "small"
    },
    {
        url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop",
        title: "Espresso Art",
        size: "medium"
    },
    {
        url: "https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=2036&auto=format&fit=crop",
        title: "Morning Ritual",
        size: "medium"
    }
];

export default function GallerySection() {
    return (
        <section className="py-24 bg-cream-100 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-xl space-y-4">
                        <h2 className="text-rust-600 font-bold tracking-[0.3em] uppercase text-sm">
                            Capture the Moment
                        </h2>
                        <h3 className="font-display text-5xl md:text-7xl text-forest-900 leading-tight">
                            VISUAL <span className="text-rust-600">JOURNEY</span>
                        </h3>
                    </div>
                    <p className="text-forest-700 text-lg max-w-sm mb-2 font-light">
                        Step into our world through the lens. Every corner, every bean, every smile captured for eternity.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px] md:h-[800px]">
                    {/* Large Image */}
                    <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-sm">
                        <img
                            src={GALLERY_IMAGES[0].url}
                            alt={GALLERY_IMAGES[0].title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[10%] group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-forest-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                            <span className="text-cream-50 font-display text-3xl tracking-widest uppercase">{GALLERY_IMAGES[0].title}</span>
                        </div>
                    </div>

                    {/* Smaller Images */}
                    <div className="relative group overflow-hidden rounded-sm">
                        <img
                            src={GALLERY_IMAGES[1].url}
                            alt={GALLERY_IMAGES[1].title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[10%] group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-forest-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                            <span className="text-cream-50 font-display text-xl tracking-widest uppercase">{GALLERY_IMAGES[1].title}</span>
                        </div>
                    </div>

                    <div className="relative group overflow-hidden rounded-sm">
                        <img
                            src={GALLERY_IMAGES[2].url}
                            alt={GALLERY_IMAGES[2].title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[10%] group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-forest-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                            <span className="text-cream-50 font-display text-xl tracking-widest uppercase">{GALLERY_IMAGES[2].title}</span>
                        </div>
                    </div>

                    <div className="col-span-2 relative group overflow-hidden rounded-sm">
                        <img
                            src={GALLERY_IMAGES[3].url}
                            alt={GALLERY_IMAGES[3].title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[10%] group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-forest-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                            <span className="text-cream-50 font-display text-2xl tracking-widest uppercase">{GALLERY_IMAGES[3].title}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}