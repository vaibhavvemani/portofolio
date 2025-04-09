import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";

export default function Profile_photo() {

  return (
    <div className="relative w-[25rem] h-[25rem]">

      <motion.div className="relative w-[23rem] h-[23rem] 
        overflow-hidden rounded-full border-1 border-[#00F9EC] shadow-[0_0_40px_20px] shadow-[#045138]"
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
    </div>

  );
}
