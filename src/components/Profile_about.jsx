"use client";
import React from "react";
import Image from "next/image";
import Typed from "typed.js";
import * as motion from "motion/react-client";

import { useEffect, useRef } from "react";

export default function Profile_about() {
  const svg_size = 30;
  const typewriter_el = useRef(null);

  useEffect(() => {
    const typed = new Typed(typewriter_el.current, {
      strings: ["ML Developer.", "Backend Developer.", "Software Developer."],
      typeSpeed: 25,
      startDelay: 500,
      backSpeed: 20,
      backDelay: 2000,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="h-[23rem] flex flex-col gap-5 justify-center items-start">
      <motion.div
        className="rounded-2xl text-left "
        initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{
          duration: 0.3,
          delay: 0.8,
          ease: "easeIn",
        }}
      >
        <h1 className="text-white text-5xl font-black leading-tight">
          Hi, I'm{" "}
          <span className="text-accent text-shadow-accent text-shadow-[5px_5px_10px] font-outline-1">
            Vaibhav.
          </span>
        </h1>
        <p className="text-gray-300 text-2xl">
          <span ref={typewriter_el} className="text-accent"></span>
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, clipPath: "inset(0% 100% 0% 0%)" }}
        animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{
          duration: 0.5,
          delay: 0.6,
          ease: "easeIn",
        }}
        className="overflow-hidden rounded-md"
      >
        <p className="text-white">
          I'm a software engineer based in Bangalore, India. I build things
          (refuse to design) from web apps to machine learning agents and
          anything in between.
        </p>
      </motion.div>
      <div className="flex justify-start items-center gap-5">
        <Image
          src="/github.svg"
          alt="GitHub"
          width={svg_size}
          height={svg_size}
        />
        <Image
          src="/linkedin.svg"
          alt="LinkedIn"
          width={svg_size}
          height={svg_size}
        />
        <Image
          src="/gmail.svg"
          alt="Email"
          width={svg_size}
          height={svg_size}
        />
      </div>
    </div>
  );
}
