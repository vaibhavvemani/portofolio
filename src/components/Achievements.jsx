"use client";
import React, { useState, useEffect } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

const achievements = [
    {
        type: "PATENT",
        icon: "🏆",
        title: "Enhanced Apiculture Threat Detection System",
        description:
            "Indian patent filed for an AI-powered system that protects beehives from predators using machine learning.",
        longDesc:
            "A comprehensive overview of the patent, including the background of the invention, the specific technical problem it addresses, the novel methodologies proposed, and the potential impact on the industry. This section provides an in-depth look at the IP generated.",
        tags: ["Innovation", "Hardware", "Algorithm", "Pending"],
        status: "Filed 2025",
        accent: "border-accent-yellow",
        accentColor: "#FFB800",
        glow: "shadow-[0_0_15px_rgba(255,184,0,0.1)]",
        link: "#",
    },
    {
        type: "RESEARCH",
        icon: "📄",
        title: "Apiculture Threat Detection and Health Monitoring System",
        description:
            "Research paper published at IEEE 2026 - a machine learning based apiculture threat and health monitoring system",
        longDesc:
            "Detailed summary covering the research thesis, experimental setup, data collection methodologies, and the final results. This includes the comparative analysis with existing solutions and the theoretical implications of the work.",
        tags: ["Machine Learning", "Data Science", "Published", "IEEE"],
        status: "Published",
        accent: "border-accent-blue",
        accentColor: "#00A3FF",
        glow: "shadow-[0_0_15px_rgba(0,163,255,0.1)]",
        link: "#",
    },
    {
        type: "GRANT",
        icon: "💰",
        title: "Government Research Grant",
        description:
            "Received a government research grant for the development of an AI-powered system that protects beehives from predators using machine learning.",
        longDesc:
            "An outline of the funding received, the purpose of the grant, and the expected milestones. Details the selection process, the competitive nature of the award, and the future work it enables.",
        tags: ["Funding", "Research", "Excellence"],
        status: "2024",
        accent: "border-accent",
        accentColor: "#00FF66",
        glow: "shadow-[0_0_15px_rgba(0,255,102,0.1)]",
        link: "#",
    },
    {
        type: "RESEARCH",
        icon: "📄",
        title: "Virtual Boundary Detection for Industrial Safety",
        description:
            "Conference paper presented at ICICC 2025 - a machine learning based safety zone enforement",
        longDesc:
            "Detailed summary covering the research thesis, experimental setup, data collection methodologies, and the final results. This includes the comparative analysis with existing solutions and the theoretical implications of the work.",
        tags: ["Machine Learning", "Data Science", "Published", "IEEE"],
        status: "Published",
        accent: "border-accent-blue",
        accentColor: "#00A3FF",
        glow: "shadow-[0_0_15px_rgba(0,163,255,0.1)]",
        link: "#",
    },
];

// Expanded achievement overlay component
function AchievementOverlay({ achievement, onClose }) {
    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            {/* Backdrop */}
            <motion.div
                className="absolute inset-0 bg-[var(--color-overlay)] backdrop-blur-sm"
                onClick={onClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            />

            {/* Modal content */}
            <motion.div
                className={`relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-background border ${achievement.accent} border-border-subtle shadow-2xl`}
                initial={{ scale: 0.85, y: 40, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Scanline overlay */}
                <div className="absolute inset-0 scanline pointer-events-none rounded-2xl" />

                <div className="relative p-8">
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-surface border border-border-subtle flex items-center justify-center text-muted hover:text-[var(--color-text-primary)] hover:border-accent/30 transition-all duration-300"
                    >
                        ✕
                    </button>

                    {/* Header */}
                    <div className="mb-6">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-[0.6rem] font-orbitron tracking-[0.2em] text-muted">
                                {achievement.type}
                            </span>
                            <span
                                className="text-[0.55rem] font-orbitron tracking-wider px-2 py-0.5 rounded-full border"
                                style={{
                                    color: achievement.accentColor,
                                    borderColor: achievement.accentColor + "40",
                                    background: achievement.accentColor + "10",
                                }}
                            >
                                {achievement.status}
                            </span>
                        </div>

                        <h2
                            className="text-3xl font-bold font-orbitron mb-1 flex items-center gap-3"
                            style={{ color: achievement.accentColor }}
                        >
                            <span>{achievement.icon}</span>
                            {achievement.title}
                        </h2>

                        <div
                            className="w-16 h-[2px] mt-3"
                            style={{
                                background: `linear-gradient(90deg, ${achievement.accentColor}, transparent)`,
                            }}
                        />
                    </div>

                    {/* Detailed description */}
                    <div className="mb-6">
                        <h3 className="text-[0.65rem] font-orbitron tracking-widest text-muted mb-2">
                            DETAILS
                        </h3>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
                            {achievement.longDesc || achievement.description}
                        </p>
                    </div>

                    {/* Tags */}
                    {achievement.tags && (
                        <div className="mb-6">
                            <h3 className="text-[0.65rem] font-orbitron tracking-widest text-muted mb-3">
                                TAGS
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {achievement.tags.map((t) => (
                                    <span
                                        key={t}
                                        className="text-[0.65rem] px-3 py-1.5 rounded-lg bg-surface border border-border-subtle text-[var(--color-text-secondary)] font-orbitron tracking-wider hover:border-accent/30 transition-colors duration-300"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Action buttons */}
                    <div className="flex gap-3 mt-8">
                        {achievement.link && achievement.link !== "#" && (
                            <motion.a
                                href={achievement.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 h-11 rounded-lg border flex items-center justify-center gap-2 text-sm font-orbitron tracking-wider transition-all duration-300"
                                style={{
                                    borderColor: achievement.accentColor + "40",
                                    color: achievement.accentColor,
                                    background: achievement.accentColor + "08",
                                }}
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: `0 0 20px ${achievement.accentColor}20`,
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                VIEW DETAILS
                            </motion.a>
                        )}

                        <motion.button
                            onClick={onClose}
                            className={`px-6 h-11 rounded-lg bg-surface border border-border-subtle text-muted text-sm font-orbitron tracking-wider hover:text-[var(--color-text-primary)] hover:border-accent/30 transition-all duration-300 ${(!achievement.link || achievement.link === "#") ? "flex-1" : ""}`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            CLOSE
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

// AchievementCard Component
function AchievementCard({ achievement, index, onClick }) {
    return (
        <motion.div
            className={`group relative p-6 rounded-xl bg-card border-l-4 ${achievement.accent} border border-border-subtle hover:border-opacity-50 transition-all duration-500 ${achievement.glow} hover:bg-card-hover cursor-pointer overflow-hidden`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            onClick={onClick}
        >
            {/* Type Badge & Click hint */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <span className="text-2xl">{achievement.icon}</span>
                    <span className="text-[0.65rem] font-orbitron tracking-widest text-muted">
                        {achievement.type}
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-[0.45rem] sm:text-[0.55rem] text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-orbitron tracking-wider flex items-center">
                        EXPAND <span className="ml-[2px] opacity-70">↗</span>
                    </span>
                    <span className="text-[0.65rem] font-orbitron tracking-wider px-2 py-1 rounded-full border"
                        style={{
                            color: achievement.accentColor,
                            borderColor: achievement.accentColor + "40",
                            background: achievement.accentColor + "10",
                        }}>
                        {achievement.status}
                    </span>
                </div>
            </div>

            {/* Title & Description */}
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2 transition-colors duration-300 group-hover:text-opacity-80">
                {achievement.title}
            </h3>

            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
                {achievement.description}
            </p>

            {/* Tags preview */}
            {achievement.tags && (
                <div className="flex flex-wrap gap-2">
                    {achievement.tags.slice(0, 3).map((t) => (
                        <span
                            key={t}
                            className="text-[0.6rem] px-2 py-1 rounded-full bg-surface border border-border-subtle text-[var(--color-text-tertiary)] font-orbitron tracking-wider"
                        >
                            {t}
                        </span>
                    ))}
                    {achievement.tags.length > 3 && (
                        <span className="text-[0.6rem] px-2 py-1 rounded-full bg-surface border border-border-subtle text-muted font-orbitron tracking-wider">
                            +{achievement.tags.length - 3}
                        </span>
                    )}
                </div>
            )}

            {/* Corner decoration */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-border-subtle rounded-tr-xl opacity-30 group-hover:opacity-60 transition-all duration-300" />
            <div className="absolute top-0 right-0 w-8 h-8 rounded-tr-xl transition-all duration-300 group-hover:bg-gradient-to-bl opacity-0 group-hover:opacity-20"
                style={{ backgroundImage: `linear-gradient(to bottom left, ${achievement.accentColor}, transparent)` }} />
        </motion.div>
    );
}

export default function Achievements() {
    const [selectedAchievement, setSelectedAchievement] = useState(null);

    return (
        <section
            className="section-container min-h-screen flex flex-col justify-center"
            id="achievements"
        >
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <span className="section-label">// 03</span>
                <h2 className="section-title">Trophy Cabinet</h2>
                <div className="w-20 h-[2px] bg-gradient-to-r from-accent-yellow to-transparent mt-2" />
            </motion.div>

            {/* Achievement Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, i) => (
                    <AchievementCard
                        key={i}
                        achievement={achievement}
                        index={i}
                        onClick={() => setSelectedAchievement(achievement)}
                    />
                ))}
            </div>

            {/* Achievement Overlay */}
            <AnimatePresence>
                {selectedAchievement && (
                    <AchievementOverlay
                        achievement={selectedAchievement}
                        onClose={() => setSelectedAchievement(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}
