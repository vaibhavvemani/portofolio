"use client";
import React, { useState, useEffect } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

const experiences = [
  {
    season: 3,
    position: "P1",
    circuit: "CURRENT GRID",
    company: "BeyondRisX",
    role: "Software Engineering Intern",
    period: "Feb 2026 — Present",
    duration: "4 mos (Active)",
    durationPercent: 75,
    description:
      "Architecting a full-stack risk assessment platform from scratch. Designed secure client portals with session persistence, OTP authentication, and dynamic admin questionnaire builders.",
    longDesc:
      "Given complete ownership to architect and deploy a full-stack risk assessment platform from the ground up at BeyondRisX. This involved managing the entire end-to-end system design and implementation.\n\nI built a secure client portal with email OTP authentication and session management, allowing users to pause and resume multi-step assessments seamlessly. To streamline administrative workflows, I engineered an admin dashboard featuring a dynamic questionnaire creator and a shareable assessment link generator for easy test distribution.",
    accomplishments: [
      "Architected and deployed a full-stack risk assessment platform, managing end-to-end system design and implementation.",
      "Developed a secure client portal with email OTP authentication and session management, allowing users to pause/resume assessments.",
      "Engineered an admin dashboard for dynamic questionnaire creation and a shareable assessment link generator."
    ],
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "REST APIs"],
    accent: "border-accent",
    accentColor: "#00FF66",
    status: "ACTIVE",
  },
  {
    season: 2,
    position: "P2",
    circuit: "PODIUM FINISH",
    company: "GeoIQ",
    role: "Software Developer Intern - Backend",
    period: "Jul 2025 — Jan 2026",
    duration: "6 months",
    durationPercent: 100,
    description:
      "Turbocharged backend maps by reducing API latency by 93%. Integrated Razorpay subscription flows and solved throughput bottlenecks for map-rendering services.",
    longDesc:
      "Dived deep into large-scale geospatial backend engineering at GeoIQ. My primary focus was optimizing SpatialIQ—our core map-rendering microservice—which processed heavy spatial data layers.\n\nI successfully reduced API latency by 93% (from 30s to 2s) by optimizing and indexing complex PostgreSQL queries. Additionally, I built resilient payment infrastructure integrating Razorpay with idempotent webhook processing, automated subscription credit expiration logic, and resolved GeoServer bottlenecks using tile-level caching and geometry simplification.",
    accomplishments: [
      "Reduced API latency by 93% (from 30s to 2s) by optimizing complex PostgreSQL queries with spatial indexing and pagination.",
      "Built resilient Razorpay payment infrastructure with idempotent webhook processing and automated subscription credit expiration.",
      "Resolved GeoServer throughput bottlenecks in SpatialIQ map-rendering microservice via tile caching and geometry simplification."
    ],
    tech: ["Python", "PostgreSQL", "GeoServer", "Razorpay", "Redis", "Docker"],
    accent: "border-accent-yellow",
    accentColor: "#FFB800",
    status: "COMPLETED",
  },
  {
    season: 1,
    position: "P3",
    circuit: "PODIUM FINISH",
    company: "RoboDynamics",
    role: "Robotics Developer Intern",
    period: "Mar 2023 — Aug 2023",
    duration: "5 months",
    durationPercent: 100,
    description:
      "Designed interactive IoT demonstration models and integrated Machine Learning with hardware, boosting course enrollments by 30%.",
    longDesc:
      "Explored the intersection of hardware, IoT, and software. I was responsible for designing and deploying interactive demonstration models that brought IoT concepts to life, helping boost sales and course registrations by 30%.\n\nI also designed and engineered a scalable educational platform to optimize student learning curves, accelerating new customer registrations by 25%, and integrated machine learning algorithms with physical IoT hardware to simulate real-world smart automation scenarios.",
    accomplishments: [
      "Designed and deployed interactive IoT demonstration models, successfully driving a 30% increase in course enrollment and sales.",
      "Engineered a scalable educational software platform to optimize learning, accelerating student registrations by 25%.",
      "Integrated Machine Learning algorithms with IoT hardware to simulate real-world smart automation cases."
    ],
    tech: ["Python", "C++", "IoT", "Arduino", "Machine Learning", "Flask"],
    accent: "border-accent-blue",
    accentColor: "#00A3FF",
    status: "COMPLETED",
  },
];


// ────────────────────────────────────────────
// Expanded Experience Overlay
// ────────────────────────────────────────────
function ExperienceOverlay({ experience, onClose }) {
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

      {/* Modal */}
      <motion.div
        className={`relative w-full max-w-6xl max-h-[85vh] overflow-y-auto rounded-2xl bg-background border ${experience.accent} border-border-subtle shadow-2xl`}
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

          {/* Telemetry header strip */}
          <div className="relative mb-8 -mt-2 pr-10 flex items-center gap-3">
            <span className="flex items-center gap-2 text-[0.55rem] font-orbitron tracking-[0.25em] text-muted">
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: experience.accentColor }}
              />
              RACE REPORT // TELEMETRY
            </span>
            <span className="flex-1 h-px bg-border-subtle" />
            <span className="text-[0.55rem] font-orbitron tracking-[0.2em] text-muted">
              SECTORS {experience.accomplishments?.length || 0}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left Column: Header & Stats */}
            <div className="md:col-span-4 flex flex-col">
              <div className="mb-6">
                {/* Position banner */}
                <div
                  className="relative flex items-center gap-3 p-4 rounded-xl border mb-4 overflow-hidden"
                  style={{
                    borderColor: experience.accentColor + "30",
                    background: `linear-gradient(110deg, ${experience.accentColor}14, transparent)`,
                  }}
                >
                  <span
                    className="text-4xl font-black font-orbitron leading-none"
                    style={{ color: experience.accentColor }}
                  >
                    {experience.position}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[0.55rem] font-orbitron tracking-[0.25em] text-muted">
                      {experience.circuit}
                    </span>
                    <span
                      className="text-[0.6rem] font-orbitron tracking-wider mt-0.5"
                      style={{ color: experience.accentColor }}
                    >
                      {experience.status}
                    </span>
                  </div>
                </div>

                <h2
                  className="text-3xl sm:text-4xl font-bold font-orbitron mb-2 leading-tight"
                  style={{ color: experience.accentColor }}
                >
                  {experience.company}
                </h2>
                <p className="text-[var(--color-text-secondary)] text-base">
                  {experience.role}
                </p>

                <div
                  className="w-16 h-[2px] mt-4"
                  style={{
                    background: `linear-gradient(90deg, ${experience.accentColor}, transparent)`,
                  }}
                />
              </div>

              {/* Telemetry stat grid */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {[
                  { v: `S${String(experience.season).padStart(2, "0")}`, l: "SEASON" },
                  { v: experience.position, l: "FINISH" },
                  { v: `${experience.durationPercent}%`, l: "RACE" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="text-center py-3 rounded-lg bg-surface border border-border-subtle"
                  >
                    <span
                      className="block text-base font-bold font-orbitron"
                      style={{ color: experience.accentColor }}
                    >
                      {s.v}
                    </span>
                    <p className="text-[0.5rem] text-muted tracking-widest mt-1">
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tenure Progress */}
              <div className="p-4 rounded-xl bg-surface border border-border-subtle mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[0.6rem] font-orbitron tracking-widest text-muted">
                    RACE PROGRESS
                  </h3>
                  <span
                    className="text-[0.6rem] font-orbitron tracking-wider"
                    style={{ color: experience.accentColor }}
                  >
                    {experience.duration}
                  </span>
                </div>
                <div className="relative w-full h-2.5 bg-card-hover rounded-full overflow-hidden">
                  {/* Sector tick marks */}
                  <div className="absolute inset-0 flex justify-between px-[33%] pointer-events-none z-10">
                    <span className="w-px h-full bg-border-subtle opacity-60" />
                    <span className="w-px h-full bg-border-subtle opacity-60" />
                  </div>
                  <motion.div
                    className="h-full rounded-full relative"
                    style={{
                      background: `linear-gradient(90deg, ${experience.accentColor}80, ${experience.accentColor})`,
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${experience.durationPercent}%` }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                  />
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-[0.6rem] text-muted">
                    {experience.period}
                  </span>
                  <span
                    className="text-[0.6rem] font-orbitron"
                    style={{ color: experience.accentColor }}
                  >
                    {experience.durationPercent}%
                  </span>
                </div>
              </div>

              {/* Action buttons Desktop */}
              <div className="hidden md:flex flex-col gap-3 mt-auto pt-6 border-t border-border-subtle">
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

            {/* Right Column: Description & Accomplishments */}
            <div className="md:col-span-8 flex flex-col">
              {/* Detailed description */}
              <div className="mb-8">
                <h3 className="text-[0.65rem] font-orbitron tracking-widest text-muted mb-3">
                  RACE REPORT
                </h3>
                <div className="text-[var(--color-text-secondary)] leading-relaxed text-sm sm:text-base space-y-4">
                  {experience.longDesc.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Key Accomplishments — Sector breakdown */}
              {experience.accomplishments && (
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-[0.65rem] font-orbitron tracking-widest text-muted">
                      KEY WINS // FASTEST LAPS
                    </h3>
                    <span
                      className="text-[0.55rem] font-orbitron tracking-wider px-2 py-0.5 rounded border"
                      style={{
                        color: experience.accentColor,
                        borderColor: experience.accentColor + "30",
                        background: experience.accentColor + "0A",
                      }}
                    >
                      {experience.accomplishments.length} SECTORS
                    </span>
                  </div>
                  <div className="space-y-3">
                    {experience.accomplishments.map((item, i) => (
                      <motion.div
                        key={i}
                        className="group/lap relative flex items-start gap-3 p-3 pl-4 rounded-lg bg-surface border border-border-subtle overflow-hidden"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.08 }}
                      >
                        {/* Accent rail */}
                        <span
                          className="absolute left-0 top-0 bottom-0 w-0.5"
                          style={{ background: experience.accentColor }}
                        />
                        <span
                          className="mt-0.5 px-1.5 h-5 rounded flex items-center justify-center text-[0.5rem] font-orbitron font-bold tracking-wider shrink-0"
                          style={{
                            color: experience.accentColor,
                            background: experience.accentColor + "15",
                            border: `1px solid ${experience.accentColor}30`,
                          }}
                        >
                          S{i + 1}
                        </span>
                        <span className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div className="mb-0 md:mb-6">
                <h3 className="text-[0.65rem] font-orbitron tracking-widest text-muted mb-4">
                  TECH STACK
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {experience.tech.map((t) => (
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

// ────────────────────────────────────────────
// Timeline Experience Card
// ────────────────────────────────────────────
function ExperienceCard({ experience, index, isLeft, onClick }) {
  return (
    <div
      className={`relative flex items-center w-full ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-row`}
    >
      {/* Timeline connector — Desktop (position marker) */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 flex-col items-center">
        <motion.div
          className="w-8 h-8 rounded-full border-2 timeline-node flex items-center justify-center backdrop-blur-sm"
          style={{
            borderColor: experience.accentColor,
            background: experience.accentColor + "18",
            boxShadow: `0 0 14px ${experience.accentColor}50`,
          }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: index * 0.15,
          }}
        >
          <span
            className="text-[0.6rem] font-orbitron font-bold leading-none"
            style={{ color: experience.accentColor }}
          >
            {experience.position}
          </span>
        </motion.div>
      </div>

      {/* Timeline connector — Mobile (position marker) */}
      <div className="flex md:hidden absolute left-[0.3rem] z-10">
        <motion.div
          className="w-7 h-7 rounded-full border-2 timeline-node flex items-center justify-center backdrop-blur-sm"
          style={{
            borderColor: experience.accentColor,
            background: experience.accentColor + "18",
            boxShadow: `0 0 10px ${experience.accentColor}50`,
          }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: index * 0.15,
          }}
        >
          <span
            className="text-[0.5rem] font-orbitron font-bold leading-none"
            style={{ color: experience.accentColor }}
          >
            {experience.position}
          </span>
        </motion.div>
      </div>

      {/* Spacer for opposite side — Desktop */}
      <div className="hidden md:block w-1/2" />

      {/* Card */}
      <motion.div
        className={`card-glow-corners group relative p-6 rounded-xl bg-card border-b-4 ${experience.accent} border border-border-subtle hover:bg-card-hover hover:border-[var(--card-accent)] transition-all duration-500 overflow-hidden cursor-pointer w-full md:w-1/2 ml-12 md:ml-0 ${
          isLeft ? "md:mr-8" : "md:ml-8"
        }`}
        style={{ "--card-accent": experience.accentColor }}
        initial={{ opacity: 0, x: isLeft ? -40 : 40, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: index * 0.12 }}
        whileHover={{
          y: -5,
          scale: 1.01,
          boxShadow: `0 10px 30px -10px ${experience.accentColor}40`,
        }}
        onClick={onClick}
      >
        {/* Glowing corner brackets */}
        <div className="corner-glow">
          <span />
          <span />
          <span />
          <span />
        </div>

        {/* Season + Period header */}
        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span
              className="text-[0.65rem] font-orbitron font-bold tracking-wider px-1.5 py-0.5 rounded"
              style={{
                color: experience.accentColor,
                background: experience.accentColor + "18",
                border: `1px solid ${experience.accentColor}30`,
              }}
            >
              {experience.position}
            </span>
            <span
              className="text-[0.6rem] font-orbitron tracking-[0.2em] px-2 py-0.5 rounded border"
              style={{
                color: experience.accentColor,
                borderColor: experience.accentColor + "30",
                background: experience.accentColor + "08",
              }}
            >
              SEASON {String(experience.season).padStart(2, "0")}
            </span>
          </div>
          <span className="text-[0.6rem] font-orbitron tracking-wider text-muted">
            {experience.period}
          </span>
        </div>

        {/* Company Name */}
        <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-1 group-hover:text-[var(--card-accent)] transition-colors duration-300 font-orbitron">
          {experience.company}
        </h3>

        {/* Role + status */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <p
            className="text-sm font-orbitron tracking-wider"
            style={{ color: experience.accentColor + "CC" }}
          >
            {experience.role}
          </p>
          <span
            className="shrink-0 flex items-center gap-1 text-[0.5rem] font-orbitron tracking-wider px-1.5 py-0.5 rounded-full border"
            style={{
              color: experience.accentColor,
              borderColor: experience.accentColor + "30",
              background: experience.accentColor + "0A",
            }}
          >
            {experience.status === "ACTIVE" && (
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: experience.accentColor }}
              />
            )}
            {experience.status}
          </span>
        </div>

        {/* Divider */}
        <div className="w-12 h-[1px] bg-border-subtle mb-3" />

        {/* Description */}
        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
          {experience.description}
        </p>

        {/* Tenure Progress Bar — lap telemetry */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1.5">
            <span className="flex items-center gap-1.5 text-[0.55rem] font-orbitron tracking-widest text-muted">
              <span
                className="w-1 h-1 rounded-full"
                style={{ background: experience.accentColor }}
              />
              TENURE
            </span>
            <span
              className="text-[0.55rem] font-orbitron tracking-wider"
              style={{ color: experience.accentColor }}
            >
              {experience.duration}
            </span>
          </div>
          <div className="relative w-full h-1.5 bg-surface rounded-full overflow-hidden">
            {/* Sector ticks */}
            <div className="absolute inset-0 flex justify-between px-[33%] pointer-events-none z-10">
              <span className="w-px h-full bg-border-subtle opacity-70" />
              <span className="w-px h-full bg-border-subtle opacity-70" />
            </div>
            <motion.div
              className="h-full rounded-full"
              style={{
                background: `linear-gradient(90deg, ${experience.accentColor}80, ${experience.accentColor})`,
              }}
              initial={{ width: 0 }}
              whileInView={{ width: `${experience.durationPercent}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 + index * 0.1, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Tech + More Details */}
        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {experience.tech.slice(0, 3).map((t) => (
              <span
                key={t}
                className="text-[0.6rem] px-2 py-1 rounded-full bg-surface border border-border-subtle text-[var(--color-text-tertiary)] font-orbitron tracking-wider"
              >
                {t}
              </span>
            ))}
            {experience.tech.length > 3 && (
              <span className="text-[0.6rem] px-2 py-1 rounded-full bg-surface border border-border-subtle text-muted font-orbitron tracking-wider">
                +{experience.tech.length - 3}
              </span>
            )}
          </div>

          <span
            className="shrink-0 text-xs font-orbitron tracking-wider flex items-center gap-1.5 px-3 py-1.5 rounded-lg border opacity-60 group-hover:opacity-100 transition-all duration-300"
            style={{
              color: experience.accentColor,
              borderColor: experience.accentColor + "40",
              background: experience.accentColor + "10",
            }}
          >
            RACE REPORT ↗
          </span>
        </div>
      </motion.div>
    </div>
  );
}

// ────────────────────────────────────────────
// Main Experience Section
// ────────────────────────────────────────────
export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const totalSeasons = experiences.length;

  return (
    <section
      className="section-container min-h-screen flex flex-col justify-center"
      id="experience"
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
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="section-title">Race Log</h2>
            <p className="text-muted text-sm mt-1">
              Career pit stops along the circuit
            </p>
          </div>

          {/* Championship HUD */}
          <motion.div
            className="flex items-stretch divide-x divide-border-subtle rounded-lg border border-border-subtle bg-card overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex flex-col px-4 py-2">
              <span className="text-[0.55rem] font-orbitron tracking-widest text-muted">
                SEASONS RUN
              </span>
              <span className="flex items-center gap-2 text-accent font-orbitron font-bold text-lg leading-none mt-0.5">
                {totalSeasons}
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              </span>
            </div>
            <div className="flex flex-col px-4 py-2">
              <span className="text-[0.55rem] font-orbitron tracking-widest text-muted">
                PODIUMS
              </span>
              <span className="text-accent font-orbitron font-bold text-lg leading-none mt-0.5">
                {totalSeasons}
              </span>
            </div>
            <div className="flex flex-col px-4 py-2">
              <span className="text-[0.55rem] font-orbitron tracking-widest text-muted">
                BEST FINISH
              </span>
              <span className="text-accent font-orbitron font-bold text-lg leading-none mt-0.5">
                P1
              </span>
            </div>
          </motion.div>
        </div>
        <div className="w-20 h-[2px] bg-gradient-to-r from-accent to-transparent mt-3" />
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical timeline line — Desktop */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] timeline-line rounded-full" />

        {/* Vertical timeline line — Mobile */}
        <div className="block md:hidden absolute left-[1.18rem] top-0 bottom-0 w-[2px] timeline-line rounded-full" />

        {/* Start flag */}
        <motion.div
          className="hidden md:flex absolute left-1/2 -translate-x-1/2 -top-6 z-20 flex-col items-center gap-1"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-[0.5rem] font-orbitron tracking-[0.25em] text-accent whitespace-nowrap">
            LIGHTS OUT
          </span>
          <div className="w-8 h-8 rounded-full bg-card border-2 border-accent flex items-center justify-center text-sm shadow-[0_0_15px_rgba(0,255,102,0.3)]">
            🏁
          </div>
        </motion.div>

        {/* Mobile start flag */}
        <motion.div
          className="flex md:hidden absolute left-[0.55rem] -top-2 z-20 items-center justify-center"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-6 h-6 rounded-full bg-card border-2 border-accent flex items-center justify-center text-[0.6rem] shadow-[0_0_12px_rgba(0,255,102,0.3)]">
            🏁
          </div>
        </motion.div>

        {/* Experience Cards */}
        <div className="flex flex-col gap-10 pt-10 pb-6">
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={exp.season}
              experience={exp}
              index={i}
              isLeft={i % 2 === 0}
              onClick={() => setSelectedExperience(exp)}
            />
          ))}
        </div>

        {/* Finish flag */}
        <motion.div
          className="hidden md:flex absolute left-1/2 -translate-x-1/2 -bottom-6 z-20 flex-col items-center gap-1"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="w-8 h-8 rounded-full bg-card border-2 border-accent-red flex items-center justify-center text-sm shadow-[0_0_15px_rgba(255,51,51,0.3)]">
            🏆
          </div>
          <span className="text-[0.5rem] font-orbitron tracking-[0.25em] text-accent-red whitespace-nowrap">
            CHEQUERED
          </span>
        </motion.div>

        {/* Mobile finish flag */}
        <motion.div
          className="flex md:hidden absolute left-[0.55rem] -bottom-2 z-20 items-center justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="w-6 h-6 rounded-full bg-card border-2 border-accent-red flex items-center justify-center text-[0.6rem] shadow-[0_0_12px_rgba(255,51,51,0.3)]">
            🏆
          </div>
        </motion.div>
      </div>

      {/* Experience Overlay */}
      <AnimatePresence>
        {selectedExperience && (
          <ExperienceOverlay
            experience={selectedExperience}
            onClose={() => setSelectedExperience(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
