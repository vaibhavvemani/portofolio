"use client";
import React from "react";
import Image from "next/image";
import Typed from "typed.js";
import * as motion from "motion/react-client";

export default function Profile_about() {
  const typewriter_el = React.useRef(null)

  React.useEffect(() => {
    const typed = new Typed(typewriter_el.current, {
      strings: ["ML Developer.", "Backend Developer.", "Software Developer."],
      typeSpeed: 50,
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
    <div className="flex flex-col gap-5">
      <motion.div className="w-full rounded-2xl text-left "
        initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{
          duration: 0.3,
          delay: 0.8,
          ease: "easeIn",

        }}
      >
        <h1 className="text-white text-5xl leading-tight">
          Hi, I'm <span className="text-green-400">Vaibhav.</span>
        </h1>
        <p className="text-gray-300 text-2xl">
          <span ref={typewriter_el} className="text-green-400"></span>
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
        className="w-200 overflow-hidden rounded-md"
      >
        <p className="text-white">
          I'm a software engineer based in Bangalore, India. I build things
          (refuse to design) from web apps to machine learning agents and anything
          in between.
        </p>
      </motion.div>
      <div className="flex justify-start items-center gap-5">
          <Image src="/github.svg" alt="GitHub" width={40} height={40} />
          <Image src="/linkedin.svg" alt="LinkedIn" width={40} height={40} />
          <Image src="/gmail.svg" alt="Email" width={40} height={40} />
      </div>
    </div>
  );
}
