import Profile_photo from "@/components/Profile_photo";
import Profile_about from "@/components/Profile_about";
import Controller from "@/components/Controller";
import About_me from "@/components/About_me";
import * as motion from "motion/react-client";


export default function Home() {
  return (
    <div className="w-full relative flex flex-col justify-center items-center ">

      <div className="relative w-[90vw] h-[90vh] flex flex-col justify-center items-center border-b-2 border-black">

        <div className="hidden lg:block">
          <motion.div className="absolute top-8 left-8"
            initial={{opacity: 0, x: 50, y: 50}} 
            animate={{opacity: 1, x: 0, y: 0}}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
          >
            <div className="absolute h-8 w-40 rounded-lg bg-[#8888]"></div>
            <div className="absolute h-40 w-8 rounded-lg bg-[#8888]"></div>
          </motion.div>
          <motion.div className="absolute flex justify-end items-end bottom-8 right-8"
            initial={{opacity: 0, x: -50, y: -50}} 
            animate={{opacity: 1, x: 0, y: 0}}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
          >
            <div className="absolute h-8 w-40 rounded-lg bg-[#8888]"></div>
            <div className="absolute h-40 w-8 rounded-lg bg-[#8888]"></div>
          </motion.div>
        </div>

        <Profile_photo />
        <Profile_about />
        <Controller />

      </div>

      <About_me />

    </div>
  );
}
