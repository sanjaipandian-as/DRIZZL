import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/constants";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const bebasNeue = Bebas_Neue({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-bebas",
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: siteConfig.brand.name,
        template: `%s | ${siteConfig.brand.name}`,
    },
    description: siteConfig.brand.tagline,
    keywords: ["coffee", "cafe", "organic", "bakery", "drizzl"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${bebasNeue.variable} scroll-smooth`}>
            <body className="font-sans flex flex-col min-h-screen bg-cream-200 text-forest-900 antialiased selection:bg-rust-200 selection:text-forest-900">
                <Header />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}