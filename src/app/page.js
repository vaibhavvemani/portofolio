import Profile_photo from "@/components/Profile_photo";
import Profile_about from "@/components/Profile_about";
import Controller from "@/components/Controller";
import About_me from "@/components/About_me";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-background w-full relative flex flex-col justify-center items-center ">
      <div className="absolute top-0 left-0 h-full shadow-[0px_0px_250px_700px] shadow-[#05653020]"></div>
      <Controller />

      <div className="relative w-320 h-[70vh] flex justify-center items-end gap-20">

        <Profile_photo />
        <Profile_about />

      </div>

      <About_me />
      <Projects />
      <Contact />

    </div>
  );
}
