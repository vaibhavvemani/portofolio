import React from "react";
import * as motion from "motion/react-client";
import {
  Trophy,
  Flag,
  Coffee,
  Gauge,
  Gamepad2,
  Wifi,
  Cpu,
  Crosshair,
} from "lucide-react";

export default function About_me() {
  const currentYear = new Date().getFullYear();

  // Telemetry-style stats — gamified, plausible
  const racingStats = [
    {
      label: "PROJECTS SHIPPED",
      value: "12+",
      icon: Flag,
      color: "var(--color-accent)",
    },
    {
      label: "HACKATHONS",
      value: "5",
      icon: Trophy,
      color: "var(--color-accent-yellow)",
    },
    {
      label: "COFFEES / DAY",
      value: "∞",
      icon: Coffee,
      color: "var(--color-accent-red)",
    },
    {
      label: "CURRENT SEASON",
      value: currentYear,
      icon: Gauge,
      color: "var(--color-accent-blue)",
    },
  ];

  // Player-card secondary stats (driver dashboard read-outs)
  const playerStats = [
    { label: "MAIN ROLE", value: "Full-Stack", color: "var(--color-accent)" },
    { label: "WIN RATE", value: "ships it", color: "var(--color-accent-blue)" },
    { label: "PLAYSTYLE", value: "Aggressive", color: "var(--color-accent-red)" },
  ];

  // Tech "loadout" — equipped gear
  const loadout = ["React", "Next.js", "Node", "Python", "Postgres"];

  return (
    <section
      className="section-container min-h-screen flex flex-col justify-center"
      id="about"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <span className="section-label">// 02</span>
        <h2 className="section-title">About Me</h2>
        <p className="text-muted text-sm mt-1">Driver profile &amp; loadout</p>
        <div className="w-20 h-[2px] bg-gradient-to-r from-accent to-transparent mt-3" />
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Bio Text */}
        <motion.div
          className="lg:w-3/5 flex flex-col gap-6"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Bio label */}
          <div className="flex items-center gap-2 text-[0.6rem] font-orbitron tracking-[0.2em] text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            DRIVER BIO
          </div>

          <p className="text-[var(--color-text-secondary)] leading-relaxed text-base">
            Hey, I'm Vaibhav Vemani — a developer from Bengaluru with a bit of a
            problem: I see something broken or missing and I have to build it.
            Not because I have to, but because I genuinely can't help it. To me,
            software feels less like engineering and more like art — taking
            nothing and turning it into something that actually works. I don't
            think I'll ever get tired of that feeling.
          </p>
          <p className="text-[var(--color-text-tertiary)] leading-relaxed text-base">
            On the AI thing — it's an incredible tool, but a tool is only as good
            as the person behind it. I'd rather be the one who truly understands
            what's being built than someone who can't tell good code from bad.
            And even if AI one day writes better systems than me — honestly, it
            might (it already can) — I'll still be writing code. Painters didn't
            stop painting when the camera was invented.
          </p>

          {/* Racing Stats / Telemetry Bar */}
          <motion.div
            className="mt-4 rounded-xl bg-card border border-border-subtle overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {/* Telemetry header strip */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-border-subtle bg-surface">
              <span className="text-[0.55rem] font-orbitron tracking-[0.2em] text-muted">
                CAREER TELEMETRY
              </span>
              <span className="text-[0.55rem] font-orbitron tracking-[0.2em] text-accent flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                LIVE
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-border-subtle">
              {racingStats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    className="flex flex-col items-center gap-1.5 text-center px-3 py-4 relative group"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <Icon
                      size={15}
                      className="opacity-70 group-hover:opacity-100 transition-opacity"
                      style={{ color: stat.color }}
                    />
                    <span
                      className="font-orbitron text-2xl font-bold leading-none"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </span>
                    <span className="text-[0.55rem] text-muted tracking-widest">
                      {stat.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Gamer / Driver Status Card */}
        <motion.div
          className="lg:w-2/5 w-full"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          whileHover={{ y: -5 }}
        >
          <div
            className="card-glow-corners group relative bg-card rounded-xl border border-border-subtle glow-green overflow-hidden"
            style={{ "--card-accent": "#00FF66" }}
          >
            {/* Glowing corner brackets */}
            <div className="corner-glow">
              <span />
              <span />
              <span />
              <span />
            </div>

            {/* Scanline overlay */}
            <div className="absolute inset-0 scanline pointer-events-none" />

            {/* Top racing-livery accent bar */}
            <div className="h-1 w-full bg-gradient-to-r from-accent via-accent-blue to-transparent" />

            <div className="relative flex flex-col gap-4 p-5">
              {/* Header — driver identity */}
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                    </span>
                    <span className="text-[0.6rem] text-accent tracking-[0.2em] font-orbitron flex items-center gap-1">
                      <Wifi size={11} /> ONLINE
                    </span>
                  </div>
                  <h1 className="font-orbitron font-bold text-2xl text-[var(--color-text-primary)] leading-tight">
                    VAIBHAV{" "}
                    <span className="text-accent glow-green-text">#44</span>
                  </h1>
                  <p className="font-light text-sm text-[var(--color-text-muted)]">
                    Trying to be a decent dev
                  </p>
                </div>

                {/* Avatar / number plate */}
                <div className="shrink-0 w-12 h-12 rounded-lg border border-accent/30 bg-surface flex flex-col items-center justify-center leading-none">
                  <span className="text-[0.45rem] text-muted tracking-widest font-orbitron">
                    DRV
                  </span>
                  <span className="font-orbitron font-bold text-accent text-lg">
                    44
                  </span>
                </div>
              </div>

              {/* Driver read-out stats */}
              <div className="grid grid-cols-3 gap-2">
                {playerStats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-lg bg-surface border border-border-subtle px-2 py-2 text-center"
                  >
                    <p
                      className="text-[0.7rem] font-orbitron font-semibold leading-tight"
                      style={{ color: s.color }}
                    >
                      {s.value}
                    </p>
                    <p className="text-[0.5rem] text-muted tracking-widest mt-1">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Currently Leveling Up — XP bar */}
              <div className="rounded-lg p-3 bg-surface border border-border-subtle">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[0.6rem] text-muted tracking-[0.2em] font-orbitron flex items-center gap-1.5">
                    <Cpu size={11} className="text-accent" />
                    CURRENTLY LEVELING UP
                  </h3>
                  <span className="text-[0.6rem] text-accent font-orbitron">
                    LVL 2
                  </span>
                </div>
                <h3 className="text-[var(--color-text-primary)] text-lg font-semibold mb-2.5 font-orbitron">
                  LangChain
                </h3>
                <div className="relative w-full h-2.5 bg-card-hover rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(0,255,102,0.6), var(--color-accent))",
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "20%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                  >
                    {/* leading-edge glow */}
                    <span className="absolute right-0 top-0 h-full w-1.5 bg-white/60 blur-[2px]" />
                  </motion.div>
                </div>
                <div className="flex justify-between mt-1.5">
                  <span className="text-[0.6rem] text-muted">200 / 1000 XP</span>
                  <span className="text-[0.6rem] text-accent">800 XP TO LVL 3</span>
                </div>
              </div>

              {/* Now Playing */}
              <div className="rounded-lg p-3 bg-surface border border-border-subtle">
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="text-[0.6rem] text-muted tracking-[0.2em] font-orbitron flex items-center gap-1.5">
                    <Gamepad2 size={11} className="text-accent-blue" />
                    NOW PLAYING
                  </h3>
                  <span className="flex items-center gap-1 text-[0.55rem] text-accent-red font-orbitron tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-red animate-pulse" />
                    REC
                  </span>
                </div>
                <h1 className="text-base font-semibold text-[var(--color-text-primary)] font-orbitron">
                  Elden Ring
                </h1>
                <p className="text-sm text-[var(--color-text-muted)] mt-0.5">
                  Losing to the same boss for 3 hours
                </p>
              </div>

              {/* Equipped loadout */}
              <div>
                <h3 className="text-[0.6rem] text-muted tracking-[0.2em] font-orbitron flex items-center gap-1.5 mb-2">
                  <Crosshair size={11} className="text-accent-yellow" />
                  EQUIPPED LOADOUT
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {loadout.map((t) => (
                    <span
                      key={t}
                      className="text-[0.6rem] px-2 py-1 rounded-full bg-card border border-border-subtle text-[var(--color-text-tertiary)] font-orbitron tracking-wider hover:border-accent/30 transition-colors duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
