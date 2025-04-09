import Profile_photo from "@/components/Profile_photo";
import Profile_about from "@/components/Profile_about";
import Controller from "@/components/Controller";
import About_me from "@/components/About_me";
import Projects from "@/components/Projects";
import * as motion from "motion/react-client";


export default function Home() {
  return (
    <div className="w-full relative flex flex-col justify-center items-center ">
      <div className="absolute top-0 left-0 h-full shadow-[0px_0px_250px_700px] shadow-[#05653020]"></div>
      <Controller />

      <div className="relative w-[90vw] h-[85vh] flex justify-center items-end
        gap-5 border-b-2 border-black">

        <Profile_photo />
        <Profile_about />

      </div>

      <About_me />
      <Projects />

    </div>
  );
}
