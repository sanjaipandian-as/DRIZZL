import HeroSection from "@/components/hero/HeroSection";
import StorySection from "@/components/story/StorySection";
import GallerySection from "@/components/ui/GallerySection";
import ReviewSection from "@/components/ui/ReviewSection";

export default function Home() {
    return (
        <div className="flex flex-col w-full overflow-hidden">
            <HeroSection />
            <StorySection />
            <GallerySection />
            <ReviewSection />
        </div>
    );
}