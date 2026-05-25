"use client";
import React, { useState, useEffect } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

const achievements = [
    {
        type: "GRANT",
        icon: "💰",
        title: "Government Research Grant",
        description:
            "Awarded a ₹10L (≈ €11,000) research grant by the Indian Government for our AI-powered apiculture conservation project.",
        longDesc:
            "Our project, BeeSafe, was recognized at the national level and awarded a prestigious research grant of ₹10 Lakh (approx. €11,000) by the Indian Government. This funding enabled us to collaborate with professional apiaries, design physical IoT monitoring nodes, and collect a large custom dataset of honeybee threats like wasps, hornets, and moths.",
        tags: ["Funding", "Research", "Govt of India", "IoT"],
        status: "Awarded 2024",
        accent: "border-accent",
        accentColor: "#00FF66",
        glow: "shadow-[0_0_15px_rgba(0,255,102,0.1)]",
        link: "#",
    },
    {
        type: "PATENT",
        icon: "🏆",
        title: "Bee Threat Detection Patent",
        description:
            "Patent filed for an AI-powered system that protects beehives from predators using computer vision and audio ML (App No. 202441071459 A).",
        longDesc:
            "Filed a patent with the Indian Patent Office (Application No. 202441071459 A) for a novel smart apiculture guardian. The system uses a real-time camera setup to identify external predators and a CNN-BiLSTM network to monitor internal hive acoustics, alerting keepers about hive anomalies.",
        tags: ["Patent", "Computer Vision", "Audio ML", "Apiculture"],
        status: "Filed 2024",
        accent: "border-accent-yellow",
        accentColor: "#FFB800",
        glow: "shadow-[0_0_15px_rgba(255,184,0,0.1)]",
        link: "#",
    },
    {
        type: "PATENT",
        icon: "🏆",
        title: "WordLens Reading System Patent",
        description:
            "Patent published for an AI-assisted reading aid using OCR and context-aware NLP pipelines (App No. 202561122407 A).",
        longDesc:
            "Filed and published a patent with the Indian Patent Office (Application No. 202561122407 A / 202541122407 A) for WordLens, our AI-powered reading aid. The invention covers a system that tracks a pointing device on physical text, extracts the target word using YOLO and EasyOCR, and runs NLP to read pronunciation and context-aware definitions aloud.",
        tags: ["Patent", "NLP", "OCR", "Accessibility"],
        status: "Published 2025",
        accent: "border-accent-blue",
        accentColor: "#00A3FF",
        glow: "shadow-[0_0_15px_rgba(0,163,255,0.1)]",
        link: "#",
    },
    {
        type: "RESEARCH",
        icon: "📄",
        title: "Apiculture Health Monitoring System",
        description:
            "Research paper published at IEEE 2026 detailing our machine learning based apiculture health monitoring and threat detection system.",
        longDesc:
            "Co-authored and published a research paper in IEEE (2026) presenting our work on BeeSafe. The paper details our dual-model system, the custom image dataset of hive predators, and our comparative analysis of machine learning algorithms for classifying hive audio profiles.",
        tags: ["Research", "Machine Learning", "IEEE", "IoT"],
        status: "Published 2026",
        accent: "border-accent-blue",
        accentColor: "#00A3FF",
        glow: "shadow-[0_0_15px_rgba(0,163,255,0.1)]",
        link: "#",
    },
    {
        type: "RESEARCH",
        icon: "📄",
        title: "Virtual Boundary Detection for Safety",
        description:
            "Research paper presented and published at ICICC 2025 detailing a machine learning model for virtual safety boundary enforcement.",
        longDesc:
            "Co-authored and presented a conference paper at the International Conference on Innovative Computing and Communication (ICICC 2025). The research proposes a computer vision system that monitors industrial sites in real time, detecting safety zone violations and alerting workers.",
        tags: ["Research", "Computer Vision", "Workplace Safety", "ICICC"],
        status: "Published 2025",
        accent: "border-accent-red",
        accentColor: "#FF3333",
        glow: "shadow-[0_0_15px_rgba(255,51,51,0.1)]",
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
                className={`relative w-full max-w-6xl max-h-[85vh] overflow-y-auto rounded-2xl bg-background border ${achievement.accent} border-border-subtle shadow-2xl`}
                initial={{ scale: 0.85, y: 40, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Scanline overlay */}
                <div className="absolute inset-0 scanline pointer-events-none rounded-2xl" />

                <div className="relative p-8 md:p-10">
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 w-8 h-8 rounded-lg bg-surface border border-border-subtle flex items-center justify-center text-muted hover:text-[var(--color-text-primary)] hover:border-accent/30 transition-all duration-300"
                    >
                        ✕
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        {/* Left Column: Header & Actions */}
                        <div className="md:col-span-4 flex flex-col">
                            {/* Header */}
                            <div className="mb-6">
                                <div className="flex flex-wrap items-center gap-2 mb-3">
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
                                    className="text-3xl sm:text-4xl font-bold font-orbitron mb-2 leading-tight flex items-start gap-3"
                                    style={{ color: achievement.accentColor }}
                                >
                                    <span className="mt-1">{achievement.icon}</span>
                                    <span>{achievement.title}</span>
                                </h2>

                                <div
                                    className="w-16 h-[2px] mt-4"
                                    style={{
                                        background: `linear-gradient(90deg, ${achievement.accentColor}, transparent)`,
                                    }}
                                />
                            </div>

                            {/* Action buttons Desktop */}
                            <div className="hidden md:flex flex-col gap-3 mt-auto pt-6 border-t border-border-subtle">
                                {achievement.link && achievement.link !== "#" && (
                                    <motion.a
                                        href={achievement.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full h-11 rounded-lg border flex items-center justify-center gap-2 text-sm font-orbitron tracking-wider transition-all duration-300"
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
                                    className="w-full h-11 rounded-lg bg-surface border border-border-subtle text-muted text-sm font-orbitron tracking-wider hover:text-[var(--color-text-primary)] hover:border-accent/30 transition-all duration-300"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    CLOSE
                                </motion.button>
                            </div>
                        </div>

                        {/* Right Column: Description & Tags */}
                        <div className="md:col-span-8 flex flex-col">
                            {/* Detailed description */}
                            <div className="mb-8">
                                <h3 className="text-[0.65rem] font-orbitron tracking-widest text-muted mb-3">
                                    DETAILS
                               </h3>
                                <div className="text-[var(--color-text-secondary)] leading-relaxed text-sm sm:text-base space-y-4">
                                    {(achievement.longDesc || achievement.description).split("\n\n").map((para, i) => (
                                        <p key={i}>{para}</p>
                                    ))}
                                </div>
                            </div>

                            {/* Tags */}
                            {achievement.tags && (
                                <div className="mb-0 md:mb-6">
                                    <h3 className="text-[0.65rem] font-orbitron tracking-widest text-muted mb-4">
                                        TAGS
                                    </h3>
                                    <div className="flex flex-wrap gap-2.5">
                                        {achievement.tags.map((t) => (
                                            <span
                                                key={t}
                                                className="text-[0.7rem] px-3 py-1.5 rounded-lg bg-surface border border-border-subtle text-[var(--color-text-secondary)] font-orbitron tracking-wider hover:border-accent/30 transition-colors duration-300"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Action buttons Mobile */}
                            <div className="flex md:hidden gap-3 mt-8 pt-6 border-t border-border-subtle">
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
                                        DETAILS
                                    </motion.a>
                                )}

                                <motion.button
                                    onClick={onClose}
                                    className={`h-11 rounded-lg bg-surface border border-border-subtle text-muted text-sm font-orbitron tracking-wider hover:text-[var(--color-text-primary)] hover:border-accent/30 transition-all duration-300 ${(!achievement.link || achievement.link === "#") ? "flex-1" : "px-6"}`}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    CLOSE
                                </motion.button>
                            </div>
                        </div>
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
            className={`card-glow-corners group relative p-6 rounded-xl bg-card border-b-4 ${achievement.accent} border border-border-subtle hover:border-[var(--card-accent)] transition-all duration-500 hover:bg-card-hover cursor-pointer overflow-hidden ${achievement.glow}`}
            style={{ '--card-accent': achievement.accentColor }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.01, boxShadow: `0 10px 30px -10px ${achievement.accentColor}40` }}
            onClick={onClick}
        >
            {/* Glowing corner brackets */}
            <div className="corner-glow"><span /><span /><span /><span /></div>

            {/* Type label */}
            <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{achievement.icon}</span>
                <span className="text-[0.6rem] font-orbitron tracking-[0.2em] text-muted">
                    {achievement.type}
                </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2 transition-colors duration-300 group-hover:text-[var(--card-accent)] font-orbitron">
                {achievement.title}
            </h3>

            {/* Divider */}
            <div className="w-12 h-[1px] bg-border-subtle mb-3" />

            {/* Description */}
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
                {achievement.description}
            </p>

            {/* Tags + More Details */}
            <div className="flex items-end justify-between gap-4">
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

                {/* More Details button */}
                <span
                    className="shrink-0 text-xs font-orbitron tracking-wider flex items-center gap-1.5 px-3 py-1.5 rounded-lg border opacity-60 group-hover:opacity-100 transition-all duration-300"
                    style={{
                        color: achievement.accentColor,
                        borderColor: achievement.accentColor + '40',
                        background: achievement.accentColor + '10'
                    }}
                >
                    MORE DETAILS ↗
                </span>
            </div>
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
                <span className="section-label">// 04</span>
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
