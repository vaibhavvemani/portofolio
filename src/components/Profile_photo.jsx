"use client";
import Image from "next/image";
import React from "react"
import Typed from "typed.js"

export default function Profile_photo() {

  const typewriter_el = React.useRef(null)

  React.useEffect(() => {
    const typed = new Typed( typewriter_el.current, {
      strings: ["Software Developer.", "Backend Developer.", "ML Developer."],
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

        <div className="relative w-[23rem] h-[23rem] overflow-hidden rounded-full border-4 border-[#181818] drop-shadow-2xl">
          <Image
            className="absolute inset-0 opacity-50"
            src="/mahesh-babu.png"
            alt="Mahesh Babu smoking from Okkadu movie"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="absolute bottom-3 left-22 w-full bg-[#80808050] rounded-2xl text-left px-5">
          <h1 className="text-white text-5xl leading-tight">
            Hi, I'm <span className="text-green-400">Vaibhav.</span>
          </h1>
          <p className="text-gray-300 text-2xl">
            <span ref={typewriter_el} className="text-green-400"></span>
          </p>
        </div>

        <div className="absolute top-0 right-37 flex items-center gap-3">
          <Image src="/horizontal-line.svg" alt="Line" width={40} height={2} />
          <Image src="/github.svg" alt="GitHub" width={50} height={50} />
        </div>
        <div className="absolute top-20 right-18 flex items-center gap-3">
          <Image src="/horizontal-line.svg" alt="Line" width={40} height={2} />
          <Image src="/linkedin.svg" alt="LinkedIn" width={50} height={50} />
        </div>
        <div className="absolute top-40 right-13 flex items-center gap-3">
          <Image src="/horizontal-line.svg" alt="Line" width={40} height={2} />
          <Image src="/gmail.svg" alt="Email" width={50} height={50} />
        </div>
      </div>

      <div className="absolute right-16 flex flex-col gap-10">
      </div>
    </div>
  );
}
