"use client";
import React from "react";
import { Sun, Moon } from "lucide-react";
import * as motion from "motion/react-client";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const isLight = theme === "light";

    return (
        <motion.button
            onClick={toggleTheme}
            className="fixed top-6 right-6 z-[60] w-11 h-11 rounded-xl border border-border-subtle bg-card/80 backdrop-blur-md flex items-center justify-center text-accent hover:border-accent/40 transition-all duration-300 shadow-lg cursor-pointer"
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(0,255,102,0.15)" }}
            whileTap={{ scale: 0.9 }}
            title={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
            aria-label={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
        >
            <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                {isLight ? <Moon size={18} /> : <Sun size={18} />}
            </motion.div>
        </motion.button>
    );
}
