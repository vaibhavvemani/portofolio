"use client";
import React from "react";
import Image from "next/image";
import Typed from "typed.js";
import * as motion from "motion/react-client";
import { useEffect, useRef } from "react";
import { MapPin, ChevronDown } from "lucide-react";

export default function Profile_about() {
  const svg_size = 24;
  const typewriter_el = useRef(null);

  useEffect(() => {
    const typed = new Typed(typewriter_el.current, {
      strings: [
        "ML Developer.",
        "Backend Developer.",
        "Software Developer.",
        "Problem Solver.",
      ],
      typeSpeed: 30,
      startDelay: 800,
      backSpeed: 20,
      backDelay: 2000,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const socials = [
    {
      src: "/github.svg",
      alt: "GitHub",
      url: "https://www.github.com/vaibhavvemani",
      color: "hover:shadow-[0_0_10px_rgba(255,255,255,0.3)]",
    },
    {
      src: "/linkedin.svg",
      alt: "LinkedIn",
      url: "https://www.linkedin.com/in/vaibhavvemani",
      color: "hover:shadow-[0_0_10px_rgba(0,163,255,0.3)]",
    },
    {
      src: "/gmail.svg",
      alt: "Email",
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=vaibhavvemani@gmail.com",
      color: "hover:shadow-[0_0_10px_rgba(255,51,51,0.3)]",
    },
  ];

  // HUD telemetry readouts under the headline
  const telemetry = [
    { label: "ROLE", value: "ENGINEER", color: "var(--color-accent)" },
    { label: "DISCIPLINE", value: "ML · BACKEND", color: "var(--color-accent-blue)" },
    { label: "MODE", value: "BUILD", color: "var(--color-accent-yellow)" },
  ];

  return (
    <div className="relative flex flex-col gap-5 justify-center items-start py-2">
      {/* Status row: section label + available-for-work + location */}
      <motion.div
        className="flex flex-wrap items-center gap-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <span className="section-label">// DRIVER PROFILE</span>

        {/* Available for work pill */}
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-accent/40 bg-accent/10 text-[0.65rem] tracking-wider font-orbitron text-accent">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          AVAILABLE FOR WORK
        </span>

        {/* Location chip */}
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-border-subtle bg-card/50 text-[0.65rem] tracking-wider text-[var(--color-text-tertiary)]">
          <MapPin size={11} className="text-accent-blue" />
          BENGALURU, IN
        </span>
      </motion.div>

      {/* Name */}
      <motion.div
        className="rounded-2xl text-left"
        initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{
          duration: 0.4,
          delay: 0.8,
          ease: "easeOut",
        }}
      >
        <h1 className="text-[var(--color-text-primary)] text-5xl font-black leading-tight font-orbitron">
          Hi, I&apos;m{" "}
          <span className="text-accent glow-green-text">Vaibhav.</span>
        </h1>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-accent-yellow font-orbitron text-sm select-none">&gt;</span>
          <p className="text-[var(--color-text-secondary)] text-xl">
            <span ref={typewriter_el} className="text-accent"></span>
          </p>
        </div>
      </motion.div>

      {/* Telemetry stat readouts */}
      <motion.div
        className="flex flex-wrap items-stretch gap-2.5"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.95 }}
      >
        {telemetry.map((t, i) => (
          <motion.div
            key={t.label}
            className="flex flex-col leading-none px-3 py-2 rounded-md border border-border-subtle bg-card/40 backdrop-blur-sm"
            style={{ borderLeft: `2px solid ${t.color}` }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0 + i * 0.08, type: "spring", stiffness: 260, damping: 20 }}
          >
            <span className="text-[0.5rem] tracking-[0.2em] text-[var(--color-text-muted)] mb-0.5">
              {t.label}
            </span>
            <span
              className="text-[0.8rem] font-bold font-orbitron tracking-wide"
              style={{ color: t.color }}
            >
              {t.value}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Bio */}
      <motion.div
        initial={{ opacity: 0, clipPath: "inset(0% 100% 0% 0%)" }}
        animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{
          duration: 0.5,
          delay: 1.0,
          ease: "easeOut",
        }}
        className="overflow-hidden rounded-md"
      >
        <p className="text-[var(--color-text-tertiary)] leading-relaxed max-w-lg">
          I&apos;m a software engineer based in Bangalore, India. I build things
          — web apps, ML systems, edge devices, whatever the problem calls for.
          If it&apos;s an interesting problem, I&apos;m probably already thinking
          about it.
        </p>
      </motion.div>

      {/* Social links + scroll cue */}
      <motion.div
        className="flex items-center gap-4 flex-wrap"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.2 }}
      >
        {socials.map((social, i) => (
          <motion.div
            key={social.alt}
            className={`p-2 rounded-lg border border-border-subtle bg-card/50 cursor-pointer transition-all duration-300 hover:border-accent/30 ${social.color}`}
            onClick={() => window.open(social.url, "_blank")}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 + i * 0.1 }}
          >
            <Image
              src={social.src}
              alt={social.alt}
              width={svg_size}
              height={svg_size}
              className="opacity-70 hover:opacity-100 transition-opacity"
            />
          </motion.div>
        ))}

        {/* Divider */}
        <span className="hidden sm:inline-block w-px h-8 bg-border-subtle mx-1" />

        {/* Scroll-to-start cue */}
        <motion.a
          href="#about"
          className="group inline-flex items-center gap-2 text-[0.65rem] tracking-[0.2em] font-orbitron text-[var(--color-text-muted)] hover:text-accent transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          START
          <motion.span
            className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-border-subtle group-hover:border-accent/50 transition-colors"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={13} />
          </motion.span>
        </motion.a>
      </motion.div>
    </div>
  );
}
