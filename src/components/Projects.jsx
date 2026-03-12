"use client";
import React, { useState, useEffect } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

const projects = [
  {
    name: "Word Lens",
    category: "COMPUTER VISION",
    desc: "Point at a word with a pen, get its definition read aloud. Built because Shakespeare shouldn't require a second browser tab.",
    longDesc: "I was reading Shakespeare — as one does when they're trying to feel cultured — and I was Googling a word every other line. At some point I thought, what if I could just point at a word and hear what it means? So I built that.\n\nWorked with a team of 3. We used YOLO and EasyOCR (tested a bunch of other models too) to detect and extract the word being pointed at, ran NLP to understand context, and then fed it to an AI to pull a context-aware definition. The whole pipeline runs in real-time, which was harder than it sounds.\n\nThe trickiest part was getting the pointing detection right — turns out pens at weird angles in bad lighting are a nightmare for computer vision. But we got it working well enough that we filed a patent for it. Still one of my favorite \"what if\" projects that actually became a real thing.",
    tech: ["Python", "YOLO", "EasyOCR", "NLP", "Flask"],
    github: "https://github.com/vaibhavvemani/Word-Lens",
    accent: "border-accent",
    accentColor: "#00FF66",
    status: "PATENTED",
  },
  {
    name: "Bee Safe",
    category: "ML / IoT",
    desc: "AI-powered bee colony guardian — detects threats, predicts health from sound, and alerts beekeepers. Got a ₹10L government grant. Published a research paper.",
    longDesc: "This one started on a college excursion. We met a team doing bee conservation work, and they painted a pretty grim picture — bee populations are plummeting and there's almost zero tech in the space. I went home, did my own research, and yeah, they were right. So we decided to do something about it.\n\nWe collaborated with apiculture professionals, visited actual beekeeping grounds, and applied for a government grant — and got ₹10 Lakh. Built our own dataset of bee threats (wasps, hornets, moths) since most images we found were unlabeled. With a 4-person team and thousands of images, we built a segmentation pipeline to auto-label bounding boxes. It worked... okay. Not perfectly, but it saved us from labeling everything by hand.\n\nAlso built a colony health prediction model using sound data from 4 hives — classifying Healthy, Moderate, Unhealthy, and Queenless colonies. The model worked almost too well at first. Turned out it was overfitting. Classic. It failed hard on real-time data, which was a humbling lesson in the gap between a Jupyter notebook and the real world.\n\nWe still shipped a working backend and edge alert system for beekeepers, and published a research paper on the whole thing. Not every piece worked perfectly, but the bees are slightly safer because of it. I'll take that.",
    tech: ["Python", "TensorFlow", "IoT", "Audio ML", "Edge Computing"],
    github: "https://github.com/vaibhavvemani/apiculture_backend",
    accent: "border-accent-yellow",
    accentColor: "#FFB800",
    status: "PUBLISHED",
  },
  {
    name: "Grounded",
    category: "DEV TOOLS",
    desc: "Upload code, get auto-generated tests. Upload docs, ask questions via RAG. Born from the pain of writing unit tests by hand.",
    longDesc: "Early in my engineering days, I was building a backend for a client and decided to be responsible and write tests for everything. Except writing tests is genuinely one of the most tedious things in software development. After the third test file, I thought: what if I just upload a function and it generates tests for me?\n\nSo I built Grounded — you upload a file or function, pick your preferred language, and it auto-generates test cases. Used a compiler-like system to parse code structure and AI APIs to generate meaningful tests. Not boilerplate filler — actual tests that understand what the code is supposed to do.\n\nI also wanted to learn RAG at the time, so I rolled that into the same project. Devs can upload documentation (PDFs or URLs) and ask questions about it using retrieval-augmented generation. Built the whole thing with LangChain, Next.js, and a bunch of AI tooling.\n\nIs it perfect? No. But it saves real time, and it taught me more about RAG pipelines than any tutorial could have.",
    tech: ["LangChain", "Next.js", "RAG", "AI APIs", "Compilers"],
    github: "https://github.com/vaibhavvemani/grounded-api",
    accent: "border-accent-blue",
    accentColor: "#00A3FF",
    status: "COMPLETED",
  },
  {
    name: "Revlift",
    category: "WEB APP",
    desc: "A clean, all-in-one car wiki that actually looks good. Because checking 5 different terrible websites for car stats is unacceptable.",
    longDesc: "I'm a car guy. And looking up car stats used to mean visiting 5 different websites, all with UIs that looked like they were designed in 2006 by someone who hated users. I wanted one place where everything — specs, comparisons, the works — was presented cleanly and at a glance.\n\nBuilt Revlift with Svelte (which I was fairly new to at the time) and Supabase. It was one of my first real end-to-end websites, and I learned a lot about what it takes to ship something complete — from database design to responsive layouts to making the UI feel fast.\n\nI'm fully aware that AI-powered browsers are slowly making this kind of project redundant. You can just ask a question and get the answer now. But honestly? The website still looks cool, the build taught me a ton, and I stand by it.",
    tech: ["Svelte", "Supabase", "REST API", "CSS"],
    github: "https://github.com/vaibhavvemani/Revlift",
    accent: "border-accent-red",
    accentColor: "#FF3333",
    status: "COMPLETED",
  },
];

// Additional projects shown when "View More" is expanded
const moreProjects = [
  {
    name: "NewsSense",
    category: "AI / FINTECH",
    desc: "Ask why a stock tanked today, get an answer backed by real news. Hackathon project. Didn't win. Still proud.",
    longDesc: "Built this at a hackathon. The problem was simple: the stock market reacts to news every single day, but nobody has time to read all of it. When someone asks \"why is QQQ down today?\" — Google gives you 47 articles. We wanted one clear answer, backed by sources.\n\nOur approach: we scraped major news sources daily, summarized the articles using AI before storing them (keeps the vector database lean and fast), then used LangChain similarity search to surface the most relevant articles for any given stock query. Type in a ticker, get a news-grounded explanation of what's moving it.\n\nWe didn't win the hackathon. But the pipeline worked, the demo was solid, and I learned a ton about building with vector databases under time pressure. Sometimes the best projects are the ones that don't win — you build them for the thrill, not the trophy.",
    tech: ["LangChain", "Vector DB", "Web Scraping", "AI APIs", "Python"],
    github: "https://github.com/vaibhavvemani",
    accent: "border-accent",
    accentColor: "#00FF66",
    status: "COMPLETED",
  },
  {
    name: "HireLens",
    category: "FULL STACK",
    desc: "A full university services platform — attendance, placements, AI insights, the works. Built it end to end. Never got deployed. The lesson stuck.",
    longDesc: "Our college had a placement portal that was… rough. Bad UI, limited features, clearly built by someone who never asked a student what they actually needed. My team and I decided to think bigger — what if we built a full university services platform?\n\nSo we did. Attendance tracking, class schedules, lecture material, practice exams, placement drives, a resume builder, AI-powered insights on interview progress, notice boards, and a college calendar. The full thing, end to end. It was probably the most ambitious project I've worked on in terms of scope.\n\nThen, right at the finish line, management changed. The new team wasn't interested. The project never got deployed. That stung.\n\nBut here's the thing — building something at that scale taught me more about infrastructure, product thinking, and teamwork than any course ever could. The code might be sitting in a repo collecting dust, but the education from it? That lives on. Sometimes you build things that never ship, and that's still worth it.",
    tech: ["React", "Node.js", "MongoDB", "AI APIs", "REST API"],
    github: "https://github.com/vaibhavvemani",
    accent: "border-accent-yellow",
    accentColor: "#FFB800",
    status: "SHELVED",
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
        className="absolute inset-0 bg-[var(--color-overlay)] backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal content */}
      <motion.div
        className={`relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-background border ${project.accent} border-border-subtle shadow-2xl`}
        initial={{ scale: 0.85, y: 40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent bar */}
        {/* <div
          className="h-1 w-full rounded-t-2xl"
          style={{ background: project.accentColor }}
        /> */}

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
            <div className="text-[var(--color-text-secondary)] leading-relaxed text-sm space-y-3">
              {project.longDesc.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
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
                  className="text-[0.65rem] px-3 py-1.5 rounded-lg bg-surface border border-border-subtle text-[var(--color-text-secondary)] font-orbitron tracking-wider hover:border-accent/30 transition-colors duration-300"
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
              className="px-6 h-11 rounded-lg bg-surface border border-border-subtle text-muted text-sm font-orbitron tracking-wider hover:text-[var(--color-text-primary)] hover:border-accent/30 transition-all duration-300"
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
      <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mt-1 mb-3 group-hover:text-accent transition-colors duration-300 font-orbitron">
        {project.name}
      </h3>

      {/* Divider */}
      <div className="w-12 h-[1px] bg-border-subtle mb-3" />

      {/* Description */}
      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
        {project.desc}
      </p>

      {/* Tech Stack */}
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
