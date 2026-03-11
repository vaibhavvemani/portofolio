"use client";
import React from "react";
import * as motion from "motion/react-client";

const interests = [
    {
        emoji: "🎮",
        title: "Gaming",
        subtitle: "Souls-like Enjoyer",
        description: "Elden Ring, Dark Souls, and anything that makes me rage quit then come back for more. Currently trying not to break my controller.",
        accent: "border-accent",
        bgAccent: "bg-accent/5",
    },
    {
        emoji: "🏎️",
        title: "Formula 1",
        subtitle: "Lights Out & Away We Go",
        description: "Nothing beats the thrill of watching cars go vroom at 300 km/h. Strategy, engineering, and pure speed — F1 is the ultimate sport.",
        accent: "border-accent-red",
        bgAccent: "bg-accent-red/5",
    },
    {
        emoji: "🏍️",
        title: "MotoGP",
        subtitle: "Two Wheels, No Limits",
        description: "Leaning at impossible angles at 350 km/h on two wheels. MotoGP riders are built different. Pure adrenaline on every corner.",
        accent: "border-accent-yellow",
        bgAccent: "bg-accent-yellow/5",
    },
    {
        emoji: "🤖",
        title: "AI / ML",
        subtitle: "Teaching Machines to Think",
        description: "From neural networks to LLMs, I'm fascinated by how machines learn. Currently deep-diving into LangChain and agentic AI systems.",
        accent: "border-accent-blue",
        bgAccent: "bg-accent-blue/5",
    },
    {
        emoji: "🛠️",
        title: "Building Stuff",
        subtitle: "If It Exists, I'll Try To Build It",
        description: "Web apps, CLI tools, ML models, bots — if it can be coded, I've probably tried to build it at 2 AM fueled by coffee.",
        accent: "border-accent",
        bgAccent: "bg-accent/5",
    },
    {
        emoji: "📚",
        title: "Learning",
        subtitle: "Permanent Student Mode",
        description: "Can't stop, won't stop learning new things. Currently leveling up in distributed systems, cloud architecture, and low-level programming.",
        accent: "border-accent-yellow",
        bgAccent: "bg-accent-yellow/5",
    },
];

export default function Interests() {
    return (
        <section
            className="section-container min-h-screen flex flex-col justify-center"
            id="interests"
        >
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <span className="section-label">// 05</span>
                <h2 className="section-title">Pit Lane</h2>
                <p className="text-muted text-sm mt-1">What fuels me outside of work</p>
                <div className="w-20 h-[2px] bg-gradient-to-r from-accent-yellow to-transparent mt-2" />
            </motion.div>

            {/* Interests Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {interests.map((interest, i) => (
                    <motion.div
                        key={i}
                        className={`group relative p-5 rounded-xl bg-card border border-border-subtle hover:bg-card-hover transition-all duration-500 overflow-hidden cursor-default`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        whileHover={{ y: -4 }}
                    >
                        {/* Accent bg glow */}
                        {/* <div className={`absolute inset-0 ${interest.bgAccent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`} /> */}

                        {/* Content */}
                        <div className="relative z-10">
                            {/* Emoji + Title Row */}
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-3xl">{interest.emoji}</span>
                                <div>
                                    <h3 className="font-bold text-[var(--color-text-primary)] text-lg group-hover:text-accent transition-colors duration-300">
                                        {interest.title}
                                    </h3>
                                    <span className="text-[0.6rem] font-orbitron tracking-widest text-muted">
                                        {interest.subtitle}
                                    </span>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                                {interest.description}
                            </p>
                        </div>

                        {/* Bottom accent bar */}
                        {/* <div className={`absolute bottom-0 left-0 right-0 h-[2px] ${interest.accent.replace('border-', 'bg-')} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} /> */}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
