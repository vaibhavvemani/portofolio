"use client";
import React from "react";
import * as motion from "motion/react-client";

const projects = [
  {
    name: "Word Lens",
    category: "COMPUTER VISION",
    desc: "A reading tool that provides readers the ability to retrieve definitions of words in real time. Point to the word with a pen and find the definition of the word in real-time.",
    tech: ["Python", "OpenCV", "OCR"],
    accent: "border-accent",
  },
  {
    name: "Bee Safe",
    category: "ML / IoT",
    desc: "Automated Bee threat detection tool that helps increase and monitor bee colony health. This tool will alert the user when a threat to the colony is detected. It will also predict colony health using bee acoustics.",
    tech: ["Python", "TensorFlow", "IoT"],
    accent: "border-accent-yellow",
  },
  {
    name: "Grounded",
    category: "DEV TOOLS",
    desc: "A developer tool that is used to quickly parse a code and generate test cases for the user, significantly reducing development time. Also supports website and document related queries using RAG.",
    tech: ["LangChain", "RAG", "Python"],
    accent: "border-accent-blue",
  },
  {
    name: "Revlift",
    category: "WEB APP",
    desc: "A comprehensive car wiki, built for enthusiasts. A one stop for everything you need to learn about your favorite car.",
    tech: ["Next.js", "React", "API"],
    accent: "border-accent-red",
  },
];

export default function Projects() {
  return (
    <section
      className="section-container min-h-screen flex flex-col justify-center"
      id="garage"
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
        <h2 className="section-title">Garage</h2>
        <p className="text-muted text-sm mt-1">Things I&apos;ve built and shipped</p>
        <div className="w-20 h-[2px] bg-gradient-to-r from-accent to-transparent mt-2" />
      </motion.div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className={`group relative p-6 rounded-xl bg-card border-t-2 ${project.accent} border border-border-subtle hover:bg-card-hover transition-all duration-500 overflow-hidden`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
          >
            {/* Category */}
            <span className="text-[0.6rem] font-orbitron tracking-[0.2em] text-muted">
              {project.category}
            </span>

            {/* Project Name */}
            <h3 className="text-2xl font-bold text-white mt-2 mb-3 group-hover:text-accent transition-colors duration-300 font-orbitron">
              {project.name}
            </h3>

            {/* Divider */}
            <div className="w-12 h-[1px] bg-border-subtle mb-3" />

            {/* Description */}
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              {project.desc}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[0.6rem] px-2 py-1 rounded-full bg-surface border border-border-subtle text-gray-400 font-orbitron tracking-wider"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Corner decoration */}
            <div className="absolute bottom-0 right-0 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent">
                <circle cx="50" cy="50" r="40" />
                <circle cx="50" cy="50" r="25" />
                <line x1="50" y1="5" x2="50" y2="95" />
                <line x1="5" y1="50" x2="95" y2="50" />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
