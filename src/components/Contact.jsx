"use client";
import React, { useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import {
  Mail,
  MapPin,
  Clock,
  Radio,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  RotateCcw,
} from "lucide-react";

const SOCIALS = [
  { label: "GITHUB", href: "https://github.com/vaibhavvemani", Icon: Github },
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/vaibhavvemani",
    Icon: Linkedin,
  },
  { label: "EMAIL", href: "mailto:vaibhavvemani@gmail.com", Icon: Mail },
];

const CONTACT_ROWS = [
  { Icon: Mail, label: "FREQUENCY", value: "vaibhavvemani@gmail.com" },
  { Icon: MapPin, label: "PIT LANE", value: "Bangalore, India" },
  { Icon: Clock, label: "RACE TIME", value: "IST (UTC +5:30)" },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const fieldValid = {
    name: formData.name.trim().length > 1,
    email: emailValid,
    message: formData.message.trim().length > 4,
  };
  const formReady = fieldValid.name && fieldValid.email && fieldValid.message;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  // Fake, client-only success animation — no backend wired up.
  const handleSend = () => {
    if (!formReady || status !== "idle") return;
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1400);
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
    setTouched({});
    setStatus("idle");
  };

  const showError = (field) => touched[field] && !fieldValid[field];

  const inputBase =
    "w-full px-3 rounded-lg bg-surface border text-[var(--color-text-primary)] text-sm placeholder:text-[var(--color-text-placeholder)] focus:outline-none transition-all duration-300";
  const inputState = (field) =>
    showError(field)
      ? "border-[var(--color-accent-red)]/60 focus:shadow-[0_0_10px_rgba(255,51,51,0.15)]"
      : fieldValid[field] && touched[field]
        ? "border-accent/50 focus:shadow-[0_0_10px_rgba(0,255,102,0.12)]"
        : "border-border-subtle focus:border-accent/50 focus:shadow-[0_0_10px_rgba(0,255,102,0.1)]";

  return (
    <section
      className="section-container min-h-screen flex flex-col justify-center"
      id="pitstop"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <span className="section-label">// 07</span>
        <h2 className="section-title">Pit Stop</h2>
        <p className="text-muted text-sm mt-1">Open channel — send a transmission</p>
        <div className="w-20 h-[2px] bg-gradient-to-r from-accent-red to-transparent mt-2" />
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left side - comms panel */}
        <motion.div
          className="lg:w-1/2 flex flex-col gap-6"
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="p-6 rounded-xl bg-card border border-border-subtle relative overflow-hidden">
            {/* Header: comms online + signal telemetry */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-[0.65rem] font-orbitron tracking-widest text-accent">
                  COMMS ONLINE
                </span>
              </div>
              {/* Signal strength bars */}
              <div className="flex items-center gap-2">
                <Radio size={12} className="text-[var(--color-text-muted)]" />
                <div className="flex items-end gap-[3px] h-4">
                  {[6, 9, 12, 16].map((h, i) => (
                    <motion.span
                      key={i}
                      className="w-[3px] rounded-sm bg-accent"
                      style={{ height: h }}
                      animate={{ opacity: [0.35, 1, 0.35] }}
                      transition={{
                        duration: 1.4,
                        repeat: Infinity,
                        delay: i * 0.18,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <p className="text-[var(--color-text-tertiary)] leading-relaxed mb-6">
              Got a project idea? Want to collaborate? Or just want to talk about
              F1 strategies and Elden Ring boss fights? My pit radio is always open.
            </p>

            {/* Contact rows */}
            <div className="flex flex-col gap-3">
              {CONTACT_ROWS.map(({ Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-3 rounded-lg bg-surface border border-border-subtle group hover:border-accent/30 transition-colors duration-300"
                >
                  <span className="w-9 h-9 shrink-0 rounded-lg bg-card flex items-center justify-center text-accent">
                    <Icon size={16} />
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[0.55rem] font-orbitron tracking-widest text-[var(--color-text-muted)]">
                      {label}
                    </span>
                    <span className="text-sm text-[var(--color-text-secondary)] truncate">
                      {value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Social channels */}
            <div className="mt-6 pt-5 border-t border-border-subtle">
              <span className="text-[0.55rem] font-orbitron tracking-widest text-[var(--color-text-muted)]">
                ALT CHANNELS
              </span>
              <div className="flex gap-3 mt-3">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex-1 flex items-center justify-center gap-2 h-10 rounded-lg bg-surface border border-border-subtle text-[var(--color-text-tertiary)] hover:text-accent hover:border-accent/40 transition-colors duration-300"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Icon size={15} />
                    <span className="text-[0.55rem] font-orbitron tracking-widest hidden sm:inline">
                      {label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right side - form / transmission */}
        <motion.div
          className="lg:w-1/2"
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="p-6 rounded-xl bg-card border border-border-subtle relative overflow-hidden min-h-[26rem] flex flex-col">
            {/* Scanline */}
            <div className="absolute inset-0 scanline pointer-events-none" />

            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="sent"
                  className="relative z-10 flex-1 flex flex-col items-center justify-center text-center gap-4 py-8"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.span
                    className="w-16 h-16 rounded-full bg-accent/10 border border-accent/40 flex items-center justify-center text-accent"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 14 }}
                  >
                    <CheckCircle2 size={30} />
                  </motion.span>
                  <div>
                    <p className="font-orbitron tracking-widest text-accent text-sm">
                      TRANSMISSION SENT
                    </p>
                    <p className="text-[var(--color-text-tertiary)] text-sm mt-2 max-w-xs">
                      Copy that — message received on my pit radio. I&apos;ll get
                      back to you on the next lap.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="flex items-center gap-2 mt-2 h-10 px-4 rounded-lg bg-surface border border-border-subtle text-[var(--color-text-tertiary)] font-orbitron text-[0.65rem] tracking-widest hover:text-accent hover:border-accent/40 transition-colors duration-300"
                  >
                    <RotateCcw size={13} />
                    SEND ANOTHER
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  className="relative z-10 flex flex-col gap-5 flex-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                >
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <label className="text-[0.65rem] font-orbitron tracking-widest text-muted">
                        CALLSIGN
                      </label>
                      {showError("name") && (
                        <span className="text-[0.55rem] tracking-wider text-[var(--color-accent-red)]">
                          ENTER A NAME
                        </span>
                      )}
                    </div>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your name"
                      className={`h-11 ${inputBase} ${inputState("name")}`}
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <label className="text-[0.65rem] font-orbitron tracking-widest text-muted">
                        FREQUENCY
                      </label>
                      {showError("email") && (
                        <span className="text-[0.55rem] tracking-wider text-[var(--color-accent-red)]">
                          INVALID FREQUENCY
                        </span>
                      )}
                    </div>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="your@email.com"
                      className={`h-11 ${inputBase} ${inputState("email")}`}
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2 flex-1">
                    <div className="flex items-center justify-between">
                      <label className="text-[0.65rem] font-orbitron tracking-widest text-muted">
                        TRANSMISSION
                      </label>
                      {showError("message") && (
                        <span className="text-[0.55rem] tracking-wider text-[var(--color-accent-red)]">
                          MESSAGE TOO SHORT
                        </span>
                      )}
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="What's on your mind?"
                      rows={4}
                      className={`py-3 resize-none flex-1 ${inputBase} ${inputState("message")}`}
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={!formReady || status === "sending"}
                    className={`w-full h-12 rounded-lg font-orbitron text-sm tracking-widest relative overflow-hidden group flex items-center justify-center gap-2 transition-all duration-300 ${
                      formReady && status !== "sending"
                        ? "bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 cursor-pointer"
                        : "bg-surface border border-border-subtle text-[var(--color-text-muted)] cursor-not-allowed"
                    }`}
                    whileHover={
                      formReady && status !== "sending"
                        ? { scale: 1.01, boxShadow: "0 0 20px rgba(0,255,102,0.2)" }
                        : {}
                    }
                    whileTap={
                      formReady && status !== "sending" ? { scale: 0.98 } : {}
                    }
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {status === "sending" ? (
                        <>
                          <motion.span
                            className="w-3 h-3 rounded-full border-2 border-accent border-t-transparent"
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 0.8,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                          TRANSMITTING…
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          SEND TRANSMISSION
                        </>
                      )}
                    </span>
                    {formReady && status !== "sending" && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        className="mt-20 pt-8 border-t border-border-subtle flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <div className="racing-stripe w-40 h-0 mb-4" />
        <p className="text-[0.65rem] font-orbitron tracking-widest text-muted">
          DESIGNED & BUILT BY VAIBHAV VEMANI
        </p>
        <p className="text-[0.55rem] text-[var(--color-text-faint)] tracking-widest">
          © {new Date().getFullYear()} VAIBHAV VEMANI — ALL RIGHTS RESERVED
        </p>
      </motion.div>
    </section>
  );
}
