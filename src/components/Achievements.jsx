"use client";
import React from "react";
import * as motion from "motion/react-client";

const achievements = [
    {
        type: "PATENT",
        icon: "🏆",
        title: "Patent Title Here",
        description:
            "Brief description of the patent and the problem it solves. Update this with your actual patent details.",
        status: "Filed 2025",
        accent: "border-accent-yellow",
        glow: "shadow-[0_0_15px_rgba(255,184,0,0.1)]",
    },
    {
        type: "RESEARCH",
        icon: "📄",
        title: "Research Paper Title",
        description:
            "Description of your research paper, methodology, and key findings. Update with actual details.",
        status: "Published",
        accent: "border-accent-blue",
        glow: "shadow-[0_0_15px_rgba(0,163,255,0.1)]",
    },
    {
        type: "GRANT",
        icon: "💰",
        title: "Grant / Award Title",
        description:
            "Description of the grant or award you received and its significance. Update with actual details.",
        status: "2024",
        accent: "border-accent",
        glow: "shadow-[0_0_15px_rgba(0,255,102,0.1)]",
    },
    {
        type: "PATENT",
        icon: "🏆",
        title: "Another Patent Title",
        description:
            "Brief description of your second patent. Update this with actual patent details.",
        status: "Pending",
        accent: "border-accent-red",
        glow: "shadow-[0_0_15px_rgba(255,51,51,0.1)]",
    },
];

export default function Achievements() {
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
                    <motion.div
                        key={i}
                        className={`group relative p-6 rounded-xl bg-card border-l-4 ${achievement.accent} border border-border-subtle hover:border-opacity-50 transition-all duration-500 ${achievement.glow} hover:bg-card-hover`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        whileHover={{ y: -4 }}
                    >
                        {/* Type Badge */}
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">{achievement.icon}</span>
                                <span className="text-[0.65rem] font-orbitron tracking-widest text-muted">
                                    {achievement.type}
                                </span>
                            </div>
                            <span className="text-[0.65rem] text-accent font-orbitron tracking-wider px-2 py-1 rounded-full bg-accent/10 border border-accent/20">
                                {achievement.status}
                            </span>
                        </div>

                        {/* Title & Description */}
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                            {achievement.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            {achievement.description}
                        </p>

                        {/* Corner decoration */}
                        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-border-subtle rounded-tr-xl opacity-30 group-hover:opacity-60 group-hover:border-accent/30 transition-all duration-300" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
