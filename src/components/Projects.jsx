"use client";
import React, { useState, useEffect } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

const projects = [
  {
    name: "Word Lens",
    category: "COMPUTER VISION",
    desc: "A reading tool that provides readers the ability to retrieve definitions of words in real time. Point to the word with a pen and find the definition of the word in real-time.",
    longDesc: "Word Lens uses computer vision and OCR to detect words pointed at by a pen in real-time. The system processes video frames, identifies the pointed word using contour detection and geometric analysis, then queries a dictionary API to display the definition instantly. Built to make reading more accessible and interactive.",
    tech: ["Python", "OpenCV", "OCR", "Flask"],
    github: "https://github.com/vaibhavvemani",
    accent: "border-accent",
    accentColor: "#00FF66",
    status: "COMPLETED",
  },
  {
    name: "Bee Safe",
    category: "ML / IoT",
    desc: "Automated Bee threat detection tool that helps increase and monitor bee colony health. This tool will alert the user when a threat to the colony is detected. It will also predict colony health using bee acoustics.",
    longDesc: "Bee Safe combines IoT sensors with machine learning models to monitor bee colony health in real-time. The system analyzes bee acoustics using audio classification models to predict colony health status, while computer vision detects physical threats like wasps and hornets. Alerts are sent to beekeepers via a dashboard and push notifications.",
    tech: ["Python", "TensorFlow", "IoT", "Raspberry Pi", "Audio ML"],
    github: "https://github.com/vaibhavvemani",
    accent: "border-accent-yellow",
    accentColor: "#FFB800",
    status: "COMPLETED",
  },
  {
    name: "Grounded",
    category: "DEV TOOLS",
    desc: "A developer tool that is used to quickly parse a code and generate test cases for the user, significantly reducing development time. Also supports website and document related queries using RAG.",
    longDesc: "Grounded is an AI-powered developer tool that automates test case generation from source code. It parses code structure, understands function signatures and logic, then generates comprehensive unit tests. Also features a RAG-based query system that lets developers ask questions about their codebase, documentation, or any website content.",
    tech: ["LangChain", "RAG", "Python", "FastAPI", "ChromaDB"],
    github: "https://github.com/vaibhavvemani",
    accent: "border-accent-blue",
    accentColor: "#00A3FF",
    status: "COMPLETED",
  },
  {
    name: "Revlift",
    category: "WEB APP",
    desc: "A comprehensive car wiki, built for enthusiasts. A one stop for everything you need to learn about your favorite car.",
    longDesc: "Revlift is a full-stack car encyclopedia built for automotive enthusiasts. Features detailed specs, history, and comparisons for thousands of cars. The platform includes user-generated reviews, performance data, and a comparison tool. Built with a focus on beautiful UI and fast search experience.",
    tech: ["Next.js", "React", "REST API", "Tailwind CSS"],
    github: "https://github.com/vaibhavvemani",
    accent: "border-accent-red",
    accentColor: "#FF3333",
    status: "COMPLETED",
  },
];

// Additional projects shown when "View More" is expanded
const moreProjects = [
  {
    name: "Project Alpha",
    category: "FULL STACK",
    desc: "Add your next project here. This is a placeholder for additional projects you want to showcase.",
    longDesc: "Detailed description of Project Alpha. Replace this with your actual project details, including the problem it solves, the approach you took, and the results.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/vaibhavvemani",
    accent: "border-accent",
    accentColor: "#00FF66",
    status: "IN PROGRESS",
  },
  {
    name: "Project Beta",
    category: "ML / AI",
    desc: "Another placeholder project. Swap this out with your real project details.",
    longDesc: "Detailed description of Project Beta. Replace this with your actual project details.",
    tech: ["Python", "PyTorch", "FastAPI"],
    github: "https://github.com/vaibhavvemani",
    accent: "border-accent-yellow",
    accentColor: "#FFB800",
    status: "IN PROGRESS",
  },
];

// Expanded project overlay component
function ProjectOverlay({ project, onClose }) {
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
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal content */}
      <motion.div
        className={`relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#0d0d0d] border ${project.accent} border-border-subtle shadow-2xl`}
        initial={{ scale: 0.85, y: 40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent bar */}
        <div
          className="h-1 w-full rounded-t-2xl"
          style={{ background: project.accentColor }}
        />

        {/* Scanline overlay */}
        <div className="absolute inset-0 scanline pointer-events-none rounded-2xl" />

        <div className="relative p-8">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-surface border border-border-subtle flex items-center justify-center text-muted hover:text-white hover:border-accent/30 transition-all duration-300"
          >
            ✕
          </button>

          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[0.6rem] font-orbitron tracking-[0.2em] text-muted">
                {project.category}
              </span>
              <span
                className="text-[0.55rem] font-orbitron tracking-wider px-2 py-0.5 rounded-full border"
                style={{
                  color: project.accentColor,
                  borderColor: project.accentColor + "40",
                  background: project.accentColor + "10",
                }}
              >
                {project.status}
              </span>
            </div>

            <h2
              className="text-3xl font-bold font-orbitron mb-1"
              style={{ color: project.accentColor }}
            >
              {project.name}
            </h2>

            <div
              className="w-16 h-[2px] mt-3"
              style={{
                background: `linear-gradient(90deg, ${project.accentColor}, transparent)`,
              }}
            />
          </div>

          {/* Detailed description */}
          <div className="mb-6">
            <h3 className="text-[0.65rem] font-orbitron tracking-widest text-muted mb-2">
              OVERVIEW
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              {project.longDesc}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-[0.65rem] font-orbitron tracking-widest text-muted mb-3">
              TECH STACK
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[0.65rem] px-3 py-1.5 rounded-lg bg-surface border border-border-subtle text-gray-300 font-orbitron tracking-wider hover:border-accent/30 transition-colors duration-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-surface border border-border-subtle mb-6">
            <div className="text-center">
              <span
                className="text-lg font-bold font-orbitron"
                style={{ color: project.accentColor }}
              >
                {project.tech.length}
              </span>
              <p className="text-[0.55rem] text-muted tracking-widest mt-1">
                TECHNOLOGIES
              </p>
            </div>
            <div className="text-center">
              <span
                className="text-lg font-bold font-orbitron"
                style={{ color: project.accentColor }}
              >
                {project.status === "COMPLETED" ? "✓" : "⟳"}
              </span>
              <p className="text-[0.55rem] text-muted tracking-widest mt-1">
                STATUS
              </p>
            </div>
            <div className="text-center">
              <span
                className="text-lg font-bold font-orbitron"
                style={{ color: project.accentColor }}
              >
                ★
              </span>
              <p className="text-[0.55rem] text-muted tracking-widest mt-1">
                FEATURED
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 h-11 rounded-lg border flex items-center justify-center gap-2 text-sm font-orbitron tracking-wider transition-all duration-300"
              style={{
                borderColor: project.accentColor + "40",
                color: project.accentColor,
                background: project.accentColor + "08",
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: `0 0 20px ${project.accentColor}20`,
              }}
              whileTap={{ scale: 0.98 }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              VIEW SOURCE
            </motion.a>

            <motion.button
              onClick={onClose}
              className="px-6 h-11 rounded-lg bg-surface border border-border-subtle text-muted text-sm font-orbitron tracking-wider hover:text-white hover:border-accent/30 transition-all duration-300"
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

// Project card component
function ProjectCard({ project, index, onClick }) {
  return (
    <motion.div
      className={`group relative p-6 rounded-xl bg-card border-t-2 ${project.accent} border border-border-subtle hover:bg-card-hover transition-all duration-500 overflow-hidden cursor-pointer`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      onClick={onClick}
    >
      {/* Category + click hint */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-[0.6rem] font-orbitron tracking-[0.2em] text-muted">
          {project.category}
        </span>
        <span className="text-[0.55rem] text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-orbitron tracking-wider">
          CLICK TO EXPAND ↗
        </span>
      </div>

      {/* Project Name */}
      <h3 className="text-2xl font-bold text-white mt-1 mb-3 group-hover:text-accent transition-colors duration-300 font-orbitron">
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
        {project.tech.slice(0, 3).map((t) => (
          <span
            key={t}
            className="text-[0.6rem] px-2 py-1 rounded-full bg-surface border border-border-subtle text-gray-400 font-orbitron tracking-wider"
          >
            {t}
          </span>
        ))}
        {project.tech.length > 3 && (
          <span className="text-[0.6rem] px-2 py-1 rounded-full bg-surface border border-border-subtle text-muted font-orbitron tracking-wider">
            +{project.tech.length - 3}
          </span>
        )}
      </div>

      {/* Corner decoration */}
      <div className="absolute bottom-0 right-0 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-accent"
        >
          <circle cx="50" cy="50" r="40" />
          <circle cx="50" cy="50" r="25" />
          <line x1="50" y1="5" x2="50" y2="95" />
          <line x1="5" y1="50" x2="95" y2="50" />
        </svg>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const allProjects = showMore ? [...projects, ...moreProjects] : projects;

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
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="section-title">Garage</h2>
            <p className="text-muted text-sm mt-1">
              Things I&apos;ve built and shipped
            </p>
          </div>

          {/* View More toggle */}
          <motion.button
            onClick={() => setShowMore(!showMore)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border-subtle bg-card text-sm font-orbitron tracking-wider text-muted hover:text-accent hover:border-accent/30 transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {showMore ? "SHOW LESS" : "VIEW MORE"}
            <motion.span
              animate={{ rotate: showMore ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-xs"
            >
              ▼
            </motion.span>
          </motion.button>
        </div>

        <div className="w-20 h-[2px] bg-gradient-to-r from-accent to-transparent mt-3" />
      </motion.div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {allProjects.map((project, i) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={i}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Expand/Collapse indicator */}
      {!showMore && moreProjects.length > 0 && (
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => setShowMore(true)}
            className="text-[0.65rem] font-orbitron tracking-widest text-muted hover:text-accent transition-colors duration-300"
          >
            + {moreProjects.length} MORE PROJECTS IN GARAGE
          </button>
        </motion.div>
      )}

      {/* Project Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectOverlay
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
