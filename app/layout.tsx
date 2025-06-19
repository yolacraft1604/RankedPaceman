import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import '@radix-ui/themes/styles.css';
import DarkModeProvider from "@/components/radix/DarkeModeProvider";

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "RANKED PACEMAN",
    description: "MCSR RANKED PACEMAN",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body className={roboto.className}>
        <DarkModeProvider>{children}</DarkModeProvider>
        </body>
        </html>
    );
}
