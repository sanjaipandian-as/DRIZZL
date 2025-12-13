import { NavigationItem } from "@/types";

export const NAVIGATION_ITEMS: NavigationItem[] = [
    { label: "HOME", href: "/" },
    { label: "PRODUCTS", href: "#products" },
    { label: "ABOUT", href: "#about" },
    { label: "CONTACT-US", href: "#contact" },
];

// Countdown target date (17 days, 03 hours, 14 minutes from now as shown in design)
export const COUNTDOWN_TARGET = new Date(Date.now() + (17 * 24 * 60 * 60 * 1000) + (3 * 60 * 60 * 1000) + (14 * 60 * 1000));
