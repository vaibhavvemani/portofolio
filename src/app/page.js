import Profile_photo from "@/components/Profile_photo";
import Profile_about from "@/components/Profile_about";
import Controller from "@/components/Controller";
import * as motion from "motion/react-client";


export default function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center gap-5">

      <div className="relative w-[100vw] h-[80vh] flex flex-col justify-center items-center ">

        <motion.div className="absolute top-8 left-8"
          initial={{opacity: 0, x: 50, y: 50}} 
          animate={{opacity: 1, x: 0, y: 0}}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
        >
          <div className="absolute h-10 w-40 rounded-lg bg-[#8888]"></div>
          <div className="absolute h-40 w-10 rounded-lg bg-[#8888]"></div>
        </motion.div>
        <motion.div className="absolute flex justify-end items-end bottom-8 right-8"
          initial={{opacity: 0, x: -50, y: -50}} 
          animate={{opacity: 1, x: 0, y: 0}}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
        >
          <div className="absolute h-10 w-40 rounded-lg bg-[#8888]"></div>
          <div className="absolute h-40 w-10 rounded-lg bg-[#8888]"></div>
        </motion.div>

        <Profile_photo />
        <Profile_about />
        <Controller />

      </div>


      <div className="w-[100vw] h-[100vh] bg-black"></div>


    </div>
  );
}
