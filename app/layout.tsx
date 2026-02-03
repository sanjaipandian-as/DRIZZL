import type { Metadata } from "next";
import { Inter, Bebas_Neue, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContentProtection from "@/components/common/ContentProtection";
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

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

const dancingScript = Dancing_Script({
    subsets: ["latin"],
    variable: "--font-dancing",
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
        <html lang="en" className={`${inter.variable} ${bebasNeue.variable} ${playfair.variable} ${dancingScript.variable}`}>
            <body className="font-sans flex flex-col min-h-screen">
                <ContentProtection />
                <Header />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}