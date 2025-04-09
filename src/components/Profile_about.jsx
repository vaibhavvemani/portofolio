import React from "react";
import * as motion from "motion/react-client";

export default function Profile_about() {
  return (
    <motion.div
      initial={{ opacity: 0, clipPath: "inset(0% 100% 0% 0%)" }}
      animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
      transition={{
        duration: 0.5,
        delay: 0.6,
        ease: "easeIn",
      }}
      className="w-200 overflow-hidden bg-[#181818] p-4 rounded-md"
    >
      <p className="text-center text-white">
        I'm a software engineer based in Bangalore, India. I build things
        (refuse to design) from web apps to machine learning agents and anything
        in between.
      </p>
    </motion.div>
  );
}
