import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

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
    title: "CAFENA - Best Template for Coffee Shop",
    description: "Premium coffee shop template with modern design and smooth animations",
    keywords: ["coffee", "cafe", "template", "coffee shop", "cafena"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
            <body className="font-sans">
                {children}
            </body>
        </html>
    );
}
