"use client";
import Image from "next/image";
import React from "react";
import Typed from "typed.js";
import * as motion from "motion/react-client";

export default function Profile_photo() {

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
    <div className="relative w-[32rem] h-[25rem] ">
      <div className="relative w-[32rem] h-[25rem]">

        <motion.div className="relative w-[23rem] h-[23rem] 
          overflow-hidden rounded-full border-4 border-[#181818] drop-shadow-2xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.5,
            ease: "easeIn"
          }}
        >
          <Image
            className="absolute inset-0 opacity-80 "
            src="/vaibhav4.jpg"
            alt="Mahesh Babu smoking from Okkadu movie"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>

        <motion.div className="absolute bottom-3 left-22 w-full bg-[#80808050] rounded-2xl text-left px-5"
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

        <motion.div className="absolute top-0 right-37 flex items-center gap-1"
          initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{
            duration: 0.3,
            delay: 0.8,
            ease: "easeIn",
          }}

        >
          <Image src="/horizontal-line.svg" alt="Line" width={40} height={2} />
          <Image src="/github.svg" alt="GitHub" width={50} height={50} />
        </motion.div>
        <motion.div className="absolute top-20 right-18 flex items-center gap-1"
          initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{
            duration: 0.3,
            delay: 0.8,
            ease: "easeIn",

          }}
        >
          <Image src="/horizontal-line.svg" alt="Line" width={40} height={2} />
          <Image src="/linkedin.svg" alt="LinkedIn" width={50} height={50} />
        </motion.div>
        <motion.div className="absolute top-40 right-13 flex items-center gap-1"
          initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{
            duration: 0.3,
            delay: 0.8,
            ease: "easeIn",

          }}
        >
          <Image src="/horizontal-line.svg" alt="Line" width={40} height={2} />
          <Image src="/gmail.svg" alt="Email" width={50} height={50} />
        </motion.div>
      </div>

      <div className="absolute right-16 flex flex-col gap-10">
      </div>
    </div>
  );
}
