'use client';

import { siteConfig } from '@/lib/constants';

const REVIEWS = [
    {
        name: "Sem boy",
        role: "The Aroma Architect",
        text: "A very nice comfortable cafe and best quality food and drinks served... 👍👍🥰🥰",
    },
    {
        name: "Manisankar's",
        role: "The Caffeine Curator",
        text: "Great experience! The 5-star atmosphere and quality service make Drizzl Café a must-visit at Marina Mall. The ambiance is perfect for a quick break.",
    },
    {
        name: "Abinash Swain",
        role: "Caffeine Connoisseur",
        text: "Excellent service and top-notch quality. Always a pleasure visiting for a quick break.",
    }
];

export default function ReviewSection() {
    return (
        <section className="py-24 bg-cream-200 relative overflow-hidden">
            {/* Background pattern - Stroke color updated to Forest Green #114232 */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30 L60 0 M0 60 L30 30' stroke='%23114232' stroke-width='2' fill='none'/%3E%3C/svg%3E")` }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <h2 className="text-rust-600 font-bold tracking-widest uppercase text-sm">
                        Customer Feedback
                    </h2>
                    <h3 className="font-display text-5xl md:text-7xl text-forest-900 leading-tight">
                        WHAT THEY <span className="text-rust-600">SAY</span>
                    </h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-stretch">
                    {REVIEWS.map((review) => (
                        <div key={review.name} className="flex flex-col h-full p-10 bg-cream-50 rounded-sm shadow-lg shadow-forest-900/5 border border-forest-900/5 hover:shadow-xl hover:shadow-forest-900/10 transition-all duration-500 group">
                            <div className="mb-6 flex gap-1">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <svg key={s} className="w-5 h-5 text-rust-500 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            
                            <p className="text-forest-700 italic text-lg leading-relaxed mb-8 font-light">
                                "{review.text}"
                            </p>

                            {/* mt-auto pushes this container to the bottom of the flex card */}
                            <div className="mt-auto pt-6 border-t border-forest-100">
                                <h4 className="font-display text-xl text-forest-900 tracking-wider font-bold">
                                    {review.name}
                                </h4>
                                <p className="text-rust-600 text-xs font-bold uppercase tracking-widest leading-none mt-1">
                                    {review.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}