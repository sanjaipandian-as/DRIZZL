import Header from "@/components/layout/Header";
import HeroSection from "@/components/hero/HeroSection";
import StorySection from "@/components/story/StorySection";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <HeroSection />
            <StorySection />
        </main>
    );
}
