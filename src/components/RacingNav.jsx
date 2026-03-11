"use client";
import React, { useState, useEffect } from "react";
import * as motion from "motion/react-client";

const sections = [
  { id: "home", label: "HOME", icon: "⌂" },
  { id: "about", label: "ABOUT", icon: "◈" },
  { id: "achievements", label: "TROPHIES", icon: "◆" },
  { id: "garage", label: "GARAGE", icon: "▣" },
  { id: "interests", label: "PIT LANE", icon: "◉" },
  { id: "pitstop", label: "PIT STOP", icon: "▶" },
];

export default function RacingNav() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  const currentLap = sections.findIndex((s) => s.id === activeSection) + 1;

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.nav
        className="hidden lg:flex fixed left-0 top-0 h-screen w-20 flex-col items-center justify-between py-8 z-50 border-r border-border-subtle bg-[var(--color-nav-bg)] backdrop-blur-md"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
      >
        {/* Logo */}
        <motion.div
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => scrollTo("home")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
            <span className="font-orbitron text-accent text-lg font-black">
              V
            </span>
          </div>
          <span className="text-[0.5rem] text-muted font-orbitron tracking-widest">
            #44
          </span>
        </motion.div>

        {/* Nav Items */}
        <div className="flex flex-col items-center gap-6">
          {sections.map((section, i) => {
            const isActive = activeSection === section.id;
            return (
              <motion.button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className="relative group flex flex-col items-center gap-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {/* Active indicator line */}
                {isActive && (
                  <motion.div
                    className="absolute -left-[1.85rem] top-1/2 -translate-y-1/2 w-[3px] h-6 bg-accent rounded-r-full"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                {/* Dot */}
                <div
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${isActive
                    ? "bg-accent border-accent shadow-[0_0_8px_rgba(0,255,102,0.6)]"
                    : "bg-transparent border-muted group-hover:border-accent/50"
                    }`}
                />

                {/* Label tooltip */}
                <span
                  className={`text-[0.5rem] tracking-wider transition-colors duration-300 ${isActive
                    ? "text-accent font-bold"
                    : "text-muted group-hover:text-[var(--color-text-primary)]"
                    }`}
                >
                  {section.label}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Bottom section: Lap counter + Resume */}
        <div className="flex flex-col items-center gap-4">
          {/* Lap Counter */}
          <div className="flex flex-col items-center">
            <span className="text-[0.5rem] text-muted tracking-widest font-orbitron">
              LAP
            </span>
            <span className="text-sm text-accent font-orbitron font-bold">
              {currentLap}/{sections.length}
            </span>
          </div>

          {/* Racing stripe separator */}
          <div className="w-8 h-[2px] bg-gradient-to-r from-accent via-accent-red to-accent-yellow rounded-full" />

          {/* Resume button */}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            className="w-10 h-10 rounded-lg border border-accent/30 bg-accent/5 flex items-center justify-center text-accent text-xs font-orbitron hover:bg-accent/20 transition-all duration-300"
            whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(0,255,102,0.3)" }}
            whileTap={{ scale: 0.95 }}
            title="Resume"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </motion.a>
        </div>
      </motion.nav>

      {/* Mobile Bottom Bar */}
      <motion.nav
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[var(--color-nav-bg)] backdrop-blur-md border-t border-border-subtle"
        initial={{ y: 80 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <div className="flex items-center justify-around py-3 px-4">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className="flex flex-col items-center gap-1"
              >
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${isActive
                    ? "bg-accent shadow-[0_0_6px_rgba(0,255,102,0.6)]"
                    : "bg-muted"
                    }`}
                />
                <span
                  className={`text-[0.55rem] tracking-wider ${isActive ? "text-accent font-bold" : "text-muted"
                    }`}
                >
                  {section.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Racing stripe at top of mobile bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-accent-red to-accent-yellow" />
      </motion.nav>
    </>
  );
}
