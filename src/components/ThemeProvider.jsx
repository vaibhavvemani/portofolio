"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({ theme: "dark", toggleTheme: () => { } });

export function useTheme() {
    return useContext(ThemeContext);
}

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("dark");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("theme") || "dark";
        setTheme(saved);
        if (saved === "light") {
            document.documentElement.classList.add("light");
        }
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        localStorage.setItem("theme", next);
        if (next === "light") {
            document.documentElement.classList.add("light");
        } else {
            document.documentElement.classList.remove("light");
        }
    };

    // Prevent flash of wrong theme
    if (!mounted) return <>{children}</>;

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
