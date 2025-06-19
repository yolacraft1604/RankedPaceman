"use client";

import { useEffect, useState } from "react";
import { Theme } from "@radix-ui/themes";

export default function DarkModeProvider({ children }: { children: React.ReactNode }) {
    const [appearance, setAppearance] = useState<"light" | "dark">("light");

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        setAppearance(mediaQuery.matches ? "dark" : "light");

        const handler = (e: MediaQueryListEvent) => {
            setAppearance(e.matches ? "dark" : "light");
        };

        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    return (
        <Theme appearance={appearance} accentColor="purple" grayColor="mauve" radius="medium" scaling="100%">
            {children}
        </Theme>
    );
}
