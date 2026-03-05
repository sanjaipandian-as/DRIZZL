import dynamic from "next/dynamic";
import HeroSection from "@/components/hero/HeroSection";
import { Suspense } from "react";

// Lazy load below-the-fold sections
const StorySection = dynamic(() => import("@/components/story/StorySection"));
const GallerySection = dynamic(() => import("@/components/ui/GallerySection"));
const ReviewSection = dynamic(() => import("@/components/ui/ReviewSection"));

export default function Home() {
    return (
        <div className="flex flex-col w-full overflow-hidden">
            <HeroSection />
            <Suspense fallback={<div className="h-96 bg-[#FDFBF7]" />}>
                <StorySection />
                <GallerySection />
                <ReviewSection />
            </Suspense>
        </div>
    );
}