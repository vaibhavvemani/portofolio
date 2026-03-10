import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";

export default function Profile_photo() {
  return (
    <div className="relative w-[20rem] h-[20rem]">
      {/* Animated grid background */}
      <div className="absolute -inset-8 grid-bg opacity-50 rounded-full" />

      {/* Outer ring decoration */}
      <motion.div
        className="absolute -inset-3 rounded-full border border-accent/20"
        initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      {/* Dashed orbit ring */}
      <motion.div
        className="absolute -inset-6 rounded-full border border-dashed border-accent/10"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 360 }}
        transition={{
          opacity: { duration: 0.5, delay: 0.5 },
          rotate: { duration: 60, repeat: Infinity, ease: "linear" }
        }}
      />

      {/* Main photo */}
      <motion.div
        className="relative w-[20rem] h-[20rem] overflow-hidden rounded-full border border-accent/40 shadow-[0_0_40px_10px] shadow-accent/10"
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
          className="absolute inset-0 opacity-85 hover:opacity-100 transition-opacity duration-500 hover:scale-105 transition-transform"
          src="/vaibhav4.jpg"
          alt="Vaibhav Vemani"
          fill
          style={{ objectFit: "cover" }}
        />

        {/* Scanline overlay */}
        <div className="absolute inset-0 scanline pointer-events-none" />
      </motion.div>
    </div>
  );
}
