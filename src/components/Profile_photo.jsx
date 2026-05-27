import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";

export default function Profile_photo() {
  // HUD telemetry chips that frame the driver portrait
  const cornerStats = [
    { label: "DRIVER", value: "VAIBHAV", pos: "top-2 left-2 items-start", color: "var(--color-accent)" },
    { label: "TEAM", value: "SOLO DEV", pos: "top-2 right-2 items-end text-right", color: "var(--color-accent-blue)" },
    { label: "BASE", value: "BLR · IN", pos: "bottom-2 left-2 items-start", color: "var(--color-accent-yellow)" },
    { label: "STATUS", value: "ACTIVE", pos: "bottom-2 right-2 items-end text-right", color: "var(--color-accent)" },
  ];

  return (
    <motion.div
      className="relative w-[20rem] h-[20rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Animated grid background */}
      <div className="absolute -inset-8 grid-bg opacity-50 rounded-full" />

      {/* Race number #44 badge */}
      <motion.div
        className="absolute -top-4 -right-2 z-30 flex flex-col items-center select-none pointer-events-none"
        initial={{ opacity: 0, scale: 0.5, rotate: 12 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 16, delay: 0.9 }}
      >
        <span
          className="text-[2.75rem] font-black font-orbitron leading-none text-accent glow-green-text"
          style={{ WebkitTextStroke: "1px var(--color-accent)" }}
        >
          44
        </span>
        <span className="text-[0.55rem] tracking-[0.25em] text-[var(--color-text-muted)] -mt-1">
          CAR NO.
        </span>
      </motion.div>

      {/* Outer ring decoration */}
      <motion.div
        className="absolute -inset-3 rounded-full border border-accent/20"
        initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      {/* Telemetry tick ring — conic gauge marks rotating slowly */}
      <motion.div
        className="absolute -inset-1 rounded-full pointer-events-none"
        style={{
          background:
            "repeating-conic-gradient(from 0deg, var(--color-accent) 0deg 1.2deg, transparent 1.2deg 9deg)",
          WebkitMask:
            "radial-gradient(farthest-side, transparent calc(100% - 6px), #000 calc(100% - 6px))",
          mask: "radial-gradient(farthest-side, transparent calc(100% - 6px), #000 calc(100% - 6px))",
          opacity: 0.25,
        }}
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 0.25, rotate: -360 }}
        transition={{
          opacity: { duration: 0.5, delay: 0.6 },
          rotate: { duration: 120, repeat: Infinity, ease: "linear" },
        }}
      />

      {/* Dashed orbit ring */}
      <motion.div
        className="absolute -inset-6 rounded-full border border-dashed border-accent/10"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 360 }}
        transition={{
          opacity: { duration: 0.5, delay: 0.5 },
          rotate: { duration: 60, repeat: Infinity, ease: "linear" },
        }}
      />

      {/* Main photo */}
      <motion.div
        className="group relative w-[20rem] h-[20rem] overflow-hidden rounded-full border border-accent/40 shadow-[0_0_40px_10px] shadow-accent/10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.5,
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      >
        <Image
          className="absolute inset-0 opacity-85 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
          src="/vaibhav4.jpg"
          alt="Vaibhav Vemani"
          fill
          style={{ objectFit: "cover" }}
        />

        {/* Vignette for HUD legibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 45%, transparent 45%, var(--color-overlay) 100%)",
          }}
        />

        {/* Scanline overlay */}
        <div className="absolute inset-0 scanline pointer-events-none" />

        {/* Corner HUD telemetry chips */}
        {cornerStats.map((s, i) => (
          <motion.div
            key={s.label}
            className={`absolute z-20 flex flex-col leading-none pointer-events-none ${s.pos}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0 + i * 0.08, type: "spring", stiffness: 260, damping: 18 }}
          >
            <span
              className="text-[0.5rem] tracking-[0.2em] text-[var(--color-text-muted)]"
            >
              {s.label}
            </span>
            <span
              className="text-[0.7rem] font-bold font-orbitron tracking-wide"
              style={{ color: s.color }}
            >
              {s.value}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Live "ONLINE" beacon on the ring */}
      <motion.div
        className="absolute top-1/2 -right-3 -translate-y-1/2 z-30 flex items-center gap-1.5 px-2 py-1 rounded-full border border-accent/40 bg-card/80 backdrop-blur-sm"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, type: "spring", stiffness: 200, damping: 18 }}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        <span className="text-[0.55rem] font-orbitron tracking-[0.15em] text-accent">
          ONLINE
        </span>
      </motion.div>
    </motion.div>
  );
}
