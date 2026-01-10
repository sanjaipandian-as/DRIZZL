'use client';

const REVIEWS = [
    {
        name: "James Wilson",
        role: "Coffee Enthusiast",
        text: "The best Turkish espresso I've had outside of Istanbul. The atmosphere is perfect for getting work done or just relaxing.",
        avatar: "https://i.pravatar.cc/150?u=james"
    },
    {
        name: "Sarah Chen",
        role: "Graphic Designer",
        text: "Nexen Media Cafe is my daily go-to. The Wi-Fi is reliable, the staff is friendly, and the hazelnut flat white is to die for!",
        avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
        name: "Michael Ross",
        role: "Entrepreneur",
        text: "Finally a place where 'meeting' and 'cafe' actually work together. The private rooms are a game changer for my client pitches.",
        avatar: "https://i.pravatar.cc/150?u=michael"
    }
];

export default function ReviewSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30 L60 0 M0 60 L30 30' stroke='%232D1F16' stroke-width='2' fill='none'/%3E%3C/svg%3E")` }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <h2 className="text-gold-500 font-bold tracking-widest uppercase text-sm">
                        Customer Feedback
                    </h2>
                    <h3 className="font-display text-5xl md:text-7xl text-coffee-900 leading-tight">
                        WHAT THEY <span className="text-gold-500">SAY</span>
                    </h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {REVIEWS.map((review, i) => (
                        <div key={review.name} className="p-10 bg-cream-50 rounded-[40px] shadow-sm border border-coffee-100/50 hover:shadow-xl transition-all duration-500 group">
                            <div className="mb-6 flex gap-1">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <svg key={s} className="w-5 h-5 text-gold-500 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-coffee-700 italic text-lg leading-relaxed mb-8">
                                "{review.text}"
                            </p>
                            <div className="flex items-center gap-4 pt-6 border-t border-coffee-200/50">
                                <img
                                    src={review.avatar}
                                    alt={review.name}
                                    className="w-14 h-14 rounded-full border-2 border-gold-500 grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                                <div>
                                    <h4 className="font-display text-xl text-coffee-900 tracking-wider font-bold">
                                        {review.name}
                                    </h4>
                                    <p className="text-gold-600 text-xs font-bold uppercase tracking-widest leading-none">
                                        {review.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
