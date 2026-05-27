"use client";
import React, { useState, useEffect } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

const projects = [
  {
    name: "WordLens",
    category: "COMPUTER VISION / NLP",
    desc: "AI-powered reading assistant using OCR and NLP. Point at a word with a pen to get context-aware definitions. Patent published by the India Patent Office.",
    longDesc: "WordLens is a real-time reading comprehension aid designed to assist users with text analysis. By pointing at a word (e.g., with a pen), the system extracts the text and reads the definition aloud, eliminating the need to look up words in separate tabs.\n\nWe engineered a word-level analysis pipeline using YOLO for pointing detection and EasyOCR for text extraction. It processes the context surrounding the word using NLP, offering pronunciation support and contextual definitions. Our reading aid was successfully published as a patent with the India Patent Office (App. No. 202541122407 A).",
    tech: ["Python", "PyTorch", "OpenCV", "YOLO", "EasyOCR", "NLP", "Flask"],
    github: "https://github.com/vaibhavvemani/Word-Lens",
    accent: "border-accent",
    accentColor: "#00FF66",
    status: "PATENTED",
    class: "VISION CLASS",
    tagline: "Real-time reading co-pilot",
  },
  {
    name: "BeeSafe",
    category: "ML / IOT",
    desc: "AI-powered bee colony guardian — detects wasp/hornet predators, predicts hive health from sound, and alerts beekeepers. Recognised at national level with a ₹10L government grant.",
    longDesc: "This project addresses the alarming decline of honeybee colonies, which face threats from predators like wasps, hornets, and moths. I worked with apiculture experts to build a real-time camera monitoring system that achieves 84% detection accuracy.\n\nTo automate dataset preparation, our 4-person team built a segmentation pipeline to auto-label bounding boxes for thousands of threat images. Additionally, I developed a CNN-BiLSTM model for real-time bioacoustic threat detection. The model handles continuous hive audio streams by implementing sliding window buffering and post-processing smoothing to predict hive health (Healthy, Moderate, Unhealthy, Queenless). The project was recognized nationally and awarded a ₹10 Lakh (approx. €11,000) Government Research Grant, with a patent filed for the technology.",
    tech: ["Python", "TensorFlow", "PyTorch", "CNN-BiLSTM", "OpenCV", "IoT"],
    github: "https://github.com/vaibhavvemani/apiculture_backend",
    accent: "border-accent-yellow",
    accentColor: "#FFB800",
    status: "PATENT FILED",
    class: "EDGE-ML CLASS",
    tagline: "Bioacoustic colony guardian",
  },
  {
    name: "Zen.AI",
    category: "AI / SAAS",
    desc: "SaaS placement preparation portal for universities. Features proctored testing, custom AI interviewers, calendar schedules, and peer forums.",
    longDesc: "Zen.AI is an end-to-end SaaS placement preparation portal built specifically for universities, recruitment agencies, and student partners to modernize the career readiness pipeline.\n\nThe core features include an AI-proctored test-taking module and an AI mock interview assistant that conducts real-time interviews customized to the candidate's resume and target job description. The platform includes full product infrastructure, including an automated email system, candidate calendar scheduling, course material distribution, and peer discussions.",
    tech: ["Next.js", "React", "Node.js", "MongoDB", "AI APIs", "REST API"],
    github: "https://github.com/vaibhavvemani",
    accent: "border-accent-blue",
    accentColor: "#00A3FF",
    status: "COMPLETED",
    class: "PLATFORM CLASS",
    tagline: "End-to-end placement engine",
  },
  {
    name: "Grounded",
    category: "DEV TOOLS / AI",
    desc: "Upload code, get auto-generated tests. Upload docs, ask questions via RAG. Born from the pain of writing unit tests by hand.",
    longDesc: "Early in my engineering days, I was building a backend for a client and decided to be responsible and write tests for everything. Except writing tests is genuinely one of the most tedious things in software development. After the third test file, I thought: what if I just upload a function and it generates tests for me?\n\nSo I built Grounded — you upload a file or function, pick your preferred language, and it auto-generates test cases. Used a compiler-like system to parse code structure and AI APIs to generate meaningful tests. Not boilerplate filler — actual tests that understand what the code is supposed to do.\n\nI also wanted to learn RAG at the time, so I rolled that into the same project. Devs can upload documentation (PDFs or URLs) and ask questions about it using retrieval-augmented generation. Built the whole thing with LangChain, Next.js, and a bunch of AI tooling.",
    tech: ["LangChain", "Next.js", "RAG", "AI APIs", "Compilers"],
    github: "https://github.com/vaibhavvemani/grounded-api",
    accent: "border-accent-red",
    accentColor: "#FF3333",
    status: "COMPLETED",
    class: "DEV-TOOL CLASS",
    tagline: "Tests & docs on autopilot",
  },
];

// Additional projects shown when "View More" is expanded
const moreProjects = [
  {
    name: "Revlift",
    category: "WEB APP",
    desc: "A clean, all-in-one car specs wiki that actually looks good. Built with Svelte and Supabase.",
    longDesc: "I'm a car guy. And looking up car stats used to mean visiting 5 different websites, all with UIs that looked like they were designed in 2006 by someone who hated users. I wanted one place where everything — specs, comparisons, the works — was presented cleanly and at a glance.\n\nBuilt Revlift with Svelte (which I was fairly new to at the time) and Supabase. It was one of my first real end-to-end websites, and I learned a lot about what it takes to ship something complete — from database design to responsive layouts to making the UI feel fast.",
    tech: ["Svelte", "Supabase", "REST API", "Tailwind CSS"],
    github: "https://github.com/vaibhavvemani/Revlift",
    accent: "border-accent-blue",
    accentColor: "#00A3FF",
    status: "COMPLETED",
    class: "WEB CLASS",
    tagline: "Car specs, cleanly served",
  },
  {
    name: "NewsSense",
    category: "AI / FINTECH",
    desc: "Scrapes financial news sources daily to explain stock moves on demand using LangChain vector similarity search.",
    longDesc: "Built this at a hackathon. The problem was simple: the stock market reacts to news every single day, but nobody has time to read all of it. When someone asks \"why is QQQ down today?\" — Google gives you 47 articles. We wanted one clear answer, backed by sources.\n\nOur approach: we scraped major news sources daily, summarized the articles using AI before storing them (keeps the vector database lean and fast), then used LangChain similarity search to surface the most relevant articles for any given stock query. Type in a ticker, get a news-grounded explanation of what's moving it.\n\nWe didn't win the hackathon. But the pipeline worked, the demo was solid, and I learned a ton about building with vector databases under time pressure. Sometimes the best projects are the ones that don't win — you build them for the thrill, not the trophy.",
    tech: ["LangChain", "Vector DB", "Web Scraping", "AI APIs", "Python"],
    github: "https://github.com/vaibhavvemani",
    accent: "border-accent",
    accentColor: "#00FF66",
    status: "COMPLETED",
    class: "RAPID-BUILD CLASS",
    tagline: "News-grounded market reads",
  },
];

// Build number helper — purely cosmetic spec-sheet flavor, derived from list order.
const buildNo = (i) => `B-${String(i + 1).padStart(3, "0")}`;

// Expanded project overlay component
function ProjectOverlay({ project, buildLabel, onClose }) {
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
        className={`relative w-full max-w-6xl max-h-[85vh] overflow-y-auto rounded-2xl bg-background border ${project.accent} border-border-subtle shadow-2xl`}
        initial={{ scale: 0.85, y: 40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top livery accent bar */}
        <div
          className="h-1 w-full rounded-t-2xl"
          style={{
            background: `linear-gradient(90deg, ${project.accentColor}, ${project.accentColor}30 60%, transparent)`,
          }}
        />

        {/* Scanline overlay */}
        <div className="absolute inset-0 scanline pointer-events-none rounded-2xl" />

        {/* Spec-sheet telemetry strip */}
        <div className="relative flex items-center justify-between gap-3 px-8 md:px-10 pt-5 pb-4 border-b border-border-subtle">
          <div className="flex items-center gap-3 min-w-0">
            <span
              className="text-[0.6rem] font-orbitron tracking-[0.25em] px-2 py-1 rounded-md border shrink-0"
              style={{
                color: project.accentColor,
                borderColor: project.accentColor + "40",
                background: project.accentColor + "10",
              }}
            >
              {buildLabel}
            </span>
            <span className="text-[0.6rem] font-orbitron tracking-[0.2em] text-muted truncate">
              SPEC SHEET
            </span>
          </div>
          <span className="hidden sm:inline text-[0.55rem] font-orbitron tracking-[0.3em] text-[var(--color-text-tertiary)] truncate">
            {project.class}
          </span>
        </div>

        <div className="relative p-8 md:p-10">
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-lg bg-surface border border-border-subtle flex items-center justify-center text-muted hover:text-[var(--color-text-primary)] hover:border-accent/30 transition-all duration-300"
          >
            ✕
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left Column: Header, Stats, Actions */}
            <div className="md:col-span-4 flex flex-col">
              {/* Header */}
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
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
                  className="text-3xl sm:text-4xl font-bold font-orbitron mb-2 leading-tight"
                  style={{ color: project.accentColor }}
                >
                  {project.name}
                </h2>

                <p className="text-xs text-[var(--color-text-tertiary)] tracking-wide italic">
                  {project.tagline}
                </p>

                <div
                  className="w-16 h-[2px] mt-4"
                  style={{
                    background: `linear-gradient(90deg, ${project.accentColor}, transparent)`,
                  }}
                />
              </div>

              {/* Stats bar — machine readout */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-surface border border-border-subtle mb-4">
                <div className="text-center">
                  <span
                    className="text-lg font-bold font-orbitron"
                    style={{ color: project.accentColor }}
                  >
                    {project.tech.length}
                  </span>
                  <p className="text-[0.55rem] text-muted tracking-widest mt-1">
                    SPECS
                  </p>
                </div>
                <div className="text-center border-x border-border-subtle">
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
                    {buildLabel.replace("B-", "")}
                  </span>
                  <p className="text-[0.55rem] text-muted tracking-widest mt-1">
                    BUILD
                  </p>
                </div>
              </div>

              {/* Status entry line */}
              <div className="flex items-center gap-2 mb-6 px-1">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: project.accentColor }}
                />
                <span
                  className="text-[0.55rem] font-orbitron tracking-[0.2em]"
                  style={{ color: project.accentColor }}
                >
                  {project.status}
                </span>
              </div>

              {/* Action buttons Desktop */}
              <div className="hidden md:flex flex-col gap-3 mt-auto pt-6 border-t border-border-subtle">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-11 rounded-lg border flex items-center justify-center gap-2 text-sm font-orbitron tracking-wider transition-all duration-300"
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
                  VIEW SOURCE
                </motion.a>

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

            {/* Right Column: Descriptions & Tech */}
            <div className="md:col-span-8 flex flex-col">
              {/* Detailed description */}
              <div className="mb-8">
                <h3 className="text-[0.65rem] font-orbitron tracking-widest text-muted mb-3">
                  OVERVIEW
                </h3>
                <div className="text-[var(--color-text-secondary)] leading-relaxed text-sm sm:text-base space-y-4">
                  {project.longDesc.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-0 md:mb-6">
                <h3 className="text-[0.65rem] font-orbitron tracking-widest text-muted mb-4">
                  TECH STACK
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[0.7rem] px-3 py-1.5 rounded-lg bg-surface border border-border-subtle text-[var(--color-text-secondary)] font-orbitron tracking-wider hover:border-accent/30 transition-colors duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons Mobile */}
              <div className="flex md:hidden gap-3 mt-8 pt-6 border-t border-border-subtle">
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
                  SOURCE
                </motion.a>

                <motion.button
                  onClick={onClose}
                  className="flex-1 h-11 rounded-lg bg-surface border border-border-subtle text-muted text-sm font-orbitron tracking-wider hover:text-[var(--color-text-primary)] hover:border-accent/30 transition-all duration-300"
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

// Project card component — a build in the garage bay
function ProjectCard({ project, index, buildLabel, onClick }) {
  return (
    <motion.div
      className={`card-glow-corners group relative p-6 rounded-xl bg-card border-b-4 ${project.accent} border border-border-subtle hover:bg-card-hover hover:border-[var(--card-accent)] transition-all duration-500 overflow-hidden cursor-pointer`}
      style={{ '--card-accent': project.accentColor }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.01, boxShadow: `0 10px 30px -10px ${project.accentColor}40` }}
      onClick={onClick}
    >
      {/* Glowing corner brackets */}
      <div className="corner-glow"><span /><span /><span /><span /></div>

      {/* Livery side stripe */}
      <div
        className="absolute left-0 top-0 h-full w-[3px] opacity-70 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(180deg, ${project.accentColor}, transparent)`,
        }}
      />

      {/* Header row: build number + category + status badge */}
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2 min-w-0">
          <span
            className="text-[0.55rem] font-orbitron tracking-[0.2em] tabular-nums"
            style={{ color: project.accentColor }}
          >
            {buildLabel}
          </span>
          <span className="text-[0.6rem] font-orbitron tracking-[0.2em] text-muted truncate">
            {project.category}
          </span>
        </div>
        {/* Race-entry status badge */}
        <span
          className="shrink-0 inline-flex items-center gap-1.5 text-[0.5rem] font-orbitron tracking-[0.15em] px-2 py-1 rounded-full border"
          style={{
            color: project.accentColor,
            borderColor: project.accentColor + "33",
            background: project.accentColor + "10",
          }}
        >
          <span
            className="w-1 h-1 rounded-full"
            style={{ background: project.accentColor }}
          />
          {project.status}
        </span>
      </div>

      {/* Project Name */}
      <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mt-1 mb-1 group-hover:text-[var(--card-accent)] transition-colors duration-300 font-orbitron">
        {project.name}
      </h3>

      {/* Class / tagline readout */}
      <p className="text-[0.6rem] font-orbitron tracking-[0.2em] text-[var(--color-text-tertiary)] mb-3">
        {project.class}
      </p>

      {/* Divider */}
      <div className="w-12 h-[1px] bg-border-subtle mb-3" />

      {/* Description */}
      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
        {project.desc}
      </p>

      {/* Tech Stack + Inspect */}
      <div className="flex items-end justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="text-[0.6rem] px-2 py-1 rounded-full bg-surface border border-border-subtle text-[var(--color-text-tertiary)] font-orbitron tracking-wider"
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

        {/* Inspect build button (keeps MORE DETAILS intent) */}
        <span
          className="shrink-0 text-xs font-orbitron tracking-wider flex items-center gap-1.5 px-3 py-1.5 rounded-lg border opacity-60 group-hover:opacity-100 transition-all duration-300"
          style={{
            color: project.accentColor,
            borderColor: project.accentColor + '40',
            background: project.accentColor + '10'
          }}
        >
          INSPECT BUILD ↗
        </span>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showMore, setShowMore] = useState(false);

  // Stable build number keyed by name so it never shifts when expanding.
  const fullRoster = [...projects, ...moreProjects];
  const buildLabelFor = (project) =>
    buildNo(fullRoster.findIndex((p) => p.name === project.name));

  const allProjects = showMore ? fullRoster : projects;

  // Garage header telemetry — derived from the roster, no hardcoded facts.
  const totalBuilds = fullRoster.length;
  const patentCount = fullRoster.filter((p) =>
    p.status.includes("PATENT")
  ).length;
  const shippedCount = fullRoster.filter(
    (p) => p.status === "COMPLETED"
  ).length;

  const garageStats = [
    { label: "BUILDS", value: String(totalBuilds).padStart(2, "0") },
    { label: "PATENTS", value: String(patentCount).padStart(2, "0") },
    { label: "SHIPPED", value: String(shippedCount).padStart(2, "0") },
  ];

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
        className="mb-10"
      >
        <span className="section-label">// 05</span>
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

      {/* Garage telemetry strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-10 flex flex-wrap items-stretch gap-px rounded-xl overflow-hidden border border-border-subtle bg-border-subtle"
      >
        {garageStats.map((stat) => (
          <div
            key={stat.label}
            className="flex-1 min-w-[5.5rem] bg-card px-4 py-3 flex flex-col items-center justify-center"
          >
            <span className="text-xl font-bold font-orbitron text-accent tabular-nums leading-none">
              {stat.value}
            </span>
            <span className="text-[0.5rem] font-orbitron tracking-[0.25em] text-muted mt-1.5">
              {stat.label}
            </span>
          </div>
        ))}
        <div className="hidden sm:flex flex-[2] min-w-[10rem] bg-card px-4 py-3 items-center justify-center">
          <span className="text-[0.55rem] font-orbitron tracking-[0.3em] text-[var(--color-text-tertiary)]">
            GARAGE // SELECT A BUILD
          </span>
        </div>
      </motion.div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {allProjects.map((project, i) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={i}
            buildLabel={buildLabelFor(project)}
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
            + {moreProjects.length} MORE BUILDS IN THE BAY
          </button>
        </motion.div>
      )}

      {/* Project Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectOverlay
            project={selectedProject}
            buildLabel={buildLabelFor(selectedProject)}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
