import React from "react";
import * as motion from "motion/react-client";

export default function About_me() {
  const currentYear = new Date().getFullYear();
  const racingStats = [
    { label: "PROJECTS SHIPPED", value: "12+", color: "text-accent" },
    { label: "HACKATHONS", value: "5", color: "text-accent-yellow" },
    { label: "COFFEES / DAY", value: "∞", color: "text-accent-red" },
    { label: "CURRENT SEASON", value: currentYear, color: "text-accent-blue" },
  ];

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
        <div className="w-20 h-[2px] bg-gradient-to-r from-accent to-transparent mt-2" />
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
          <p className="text-[var(--color-text-secondary)] leading-relaxed text-base">
            Hellooo! I&apos;m Vaibhav Vemani, a developer from Bengaluru, India
            with an obsession for building cool stuff. I&apos;m currently
            studying Artificial Intelligence and Machine Learning, and when
            I&apos;m not decoding neural nets or debugging web apps at 2 AM,
            I&apos;m probably learning something new—because curiosity is kinda
            my thing.
          </p>
          <p className="text-[var(--color-text-tertiary)] leading-relaxed text-base">
            If I don&apos;t know how something works, I have to figure it out.
            Why? Because I&apos;m not here to be just another dev—I&apos;m here
            to be the kind of dev who can&apos;t be replaced by an LLM.
            (Sorry, GPT 👀)
          </p>

          {/* Racing Stats Bar */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 p-4 rounded-xl bg-card border border-border-subtle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {racingStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center gap-1 text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <span className={`font-orbitron text-2xl font-bold ${stat.color}`}>
                  {stat.value}
                </span>
                <span className="text-[0.6rem] text-muted tracking-widest">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Gamer Status Card */}
        <motion.div
          className="lg:w-2/5 w-full"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="p-5 flex flex-col gap-5 bg-card rounded-xl border border-border-subtle glow-green relative overflow-hidden">
            {/* Scanline overlay */}
            <div className="absolute inset-0 scanline pointer-events-none" />

            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-[0.65rem] text-accent tracking-widest font-orbitron">
                  ONLINE
                </span>
              </div>
              <h1 className="font-orbitron font-bold text-2xl text-[var(--color-text-primary)]">
                VAIBHAV <span className="text-muted">#44</span>
              </h1>
              <p className="font-light text-sm text-[var(--color-text-muted)]">
                Trying to be a decent dev
              </p>
            </div>

            {/* Currently Leveling Up */}
            <div className="rounded-lg p-3 bg-surface">
              <h3 className="text-[0.65rem] text-muted tracking-widest mb-2">
                CURRENTLY LEVELING UP
              </h3>
              <h3 className="text-[var(--color-text-primary)] text-lg font-semibold mb-3">
                LangChain
              </h3>
              <div className="relative w-full h-2 bg-card-hover rounded-full overflow-hidden">
                <motion.div
                  className="bg-accent h-full rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "20%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                />
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-[0.65rem] text-muted">200 / 1000 XP</span>
                <span className="text-[0.65rem] text-accent">LVL 2</span>
              </div>
            </div>

            {/* Now Playing */}
            <div className="rounded-lg p-3 bg-surface">
              <h3 className="text-[0.65rem] text-muted tracking-widest mb-1">
                NOW PLAYING
              </h3>
              <h1 className="text-base font-semibold text-[var(--color-text-primary)]">
                Elden Ring
              </h1>
              <p className="text-sm text-[var(--color-text-muted)] mt-1">
                Losing to the same boss for 3 hours
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
