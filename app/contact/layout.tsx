import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with Drizzl Café. Visit us at Marina Mall, Egattur, OMR Road, Chennai or reach us at drizzlcafe@gmail.com.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
