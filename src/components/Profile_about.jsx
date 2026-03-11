"use client";
import React from "react";
import Image from "next/image";
import Typed from "typed.js";
import * as motion from "motion/react-client";
import { useEffect, useRef } from "react";

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

  return (
    <div className="relative h-[23rem] flex flex-col gap-5 justify-center items-start">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <span className="section-label">// DRIVER PROFILE</span>
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
          <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
          <p className="text-[var(--color-text-secondary)] text-xl">
            <span ref={typewriter_el} className="text-accent"></span>
          </p>
        </div>
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
          (refuse to design) from web apps to machine learning agents and
          anything in between.
        </p>
      </motion.div>

      {/* Social links */}
      <motion.div
        className="flex items-center gap-4"
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
      </motion.div>
    </div>
  );
}
