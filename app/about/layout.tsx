import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "Discover the story behind Drizzl Café — our passion for coffee, our space, and our people at Marina Mall, Chennai.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
