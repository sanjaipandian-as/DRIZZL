import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Products",
    description: "Explore our curated selection of artisan coffees and beverages at Drizzl Café, Marina Mall, Chennai.",
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
