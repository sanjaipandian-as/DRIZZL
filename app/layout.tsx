import type { Metadata } from "next";
import { Inter, Bebas_Neue, Playfair_Display, Dancing_Script, Bodoni_Moda, Syne, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContentProtection from "@/components/common/ContentProtection";
import CookieConsent from "@/components/common/CookieConsent";
import { siteConfig } from "@/lib/constants";

const bodoni = Bodoni_Moda({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
    variable: "--font-bodoni",
    display: "swap",
});

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

const syne = Syne({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-syne",
    display: "swap",
});

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    style: ["normal", "italic"],
    variable: "--font-cormorant",
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: siteConfig.brand.name,
        template: `${siteConfig.brand.name} | %s`,
    },
    description: siteConfig.brand.tagline,
    keywords: ["coffee", "cafe", "organic", "bakery", "drizzl"],
    icons: {
        icon: "/LogoV1.ico",
        shortcut: "/LogoV1.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${bebasNeue.variable} ${playfair.variable} ${dancingScript.variable} ${bodoni.variable} ${syne.variable} ${cormorant.variable}`}>
            <body className="font-sans flex flex-col min-h-screen">
                <ContentProtection />
                <Header />
                <main className="flex-grow">
                    {children}
                </main>
                <CookieConsent />
                <Footer />
            </body>
        </html>
    );
}
