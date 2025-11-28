import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
    title: "viethqb",
    description: "Resume portfolio",
    icons: {
        icon: "/favicon1.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="font-primary">{children}</body>
        </html>
    );
}
