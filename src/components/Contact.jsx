"use client";
import React, { useState } from "react";
import * as motion from "motion/react-client";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
        <span className="section-label">// 06</span>
        <h2 className="section-title">Pit Stop</h2>
        <p className="text-muted text-sm mt-1">Open channel — send a transmission</p>
        <div className="w-20 h-[2px] bg-gradient-to-r from-accent-red to-transparent mt-2" />
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left side - info */}
        <motion.div
          className="lg:w-1/2 flex flex-col gap-6"
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="p-6 rounded-xl bg-card border border-border-subtle">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[0.65rem] font-orbitron tracking-widest text-accent">
                COMMS ONLINE
              </span>
            </div>
            <p className="text-[var(--color-text-tertiary)] leading-relaxed mb-6">
              Got a project idea? Want to collaborate? Or just want to talk about
              F1 strategies and Elden Ring boss fights? My pit radio is always open.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-sm">
                <span className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center text-accent">
                  📧
                </span>
                <span className="text-[var(--color-text-tertiary)]">vaibhavvemani@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center text-accent">
                  📍
                </span>
                <span className="text-[var(--color-text-tertiary)]">Bangalore, India</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center text-accent">
                  ⏱️
                </span>
                <span className="text-[var(--color-text-tertiary)]">IST (UTC +5:30)</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right side - form */}
        <motion.div
          className="lg:w-1/2"
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="p-6 rounded-xl bg-card border border-border-subtle relative overflow-hidden">
            {/* Scanline */}
            <div className="absolute inset-0 scanline pointer-events-none" />

            <form className="relative z-10 flex flex-col gap-5">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-[0.65rem] font-orbitron tracking-widest text-muted">
                  CALLSIGN
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full h-11 px-3 rounded-lg bg-surface border border-border-subtle text-[var(--color-text-primary)] text-sm placeholder:text-[var(--color-text-placeholder)] focus:border-accent/50 focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,102,0.1)] transition-all duration-300"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-[0.65rem] font-orbitron tracking-widest text-muted">
                  FREQUENCY
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full h-11 px-3 rounded-lg bg-surface border border-border-subtle text-[var(--color-text-primary)] text-sm placeholder:text-[var(--color-text-placeholder)] focus:border-accent/50 focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,102,0.1)] transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-[0.65rem] font-orbitron tracking-widest text-muted">
                  TRANSMISSION
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What's on your mind?"
                  rows={4}
                  className="w-full px-3 py-3 rounded-lg bg-surface border border-border-subtle text-[var(--color-text-primary)] text-sm placeholder:text-[var(--color-text-placeholder)] focus:border-accent/50 focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,102,0.1)] transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="button"
                className="w-full h-12 rounded-lg bg-accent/10 border border-accent/30 text-accent font-orbitron text-sm tracking-widest hover:bg-accent/20 transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.01, boxShadow: "0 0 20px rgba(0,255,102,0.2)" }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">SEND TRANSMISSION</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </motion.button>
            </form>
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
          © 2025 — ALL RIGHTS RESERVED
        </p>
      </motion.div>
    </section>
  );
}
