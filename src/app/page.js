"use client";
import Profile_photo from "@/components/Profile_photo";
import Profile_about from "@/components/Profile_about";
import RacingNav from "@/components/RacingNav";
import About_me from "@/components/About_me";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-background w-full relative min-h-screen">
      {/* Background grid */}
      <div className="fixed inset-0 grid-bg pointer-events-none z-0" />

      {/* Navigation */}
      <RacingNav />

      {/* Main content - offset for sidebar on desktop */}
      <main className="relative z-10 lg:ml-20">
        {/* Home Section */}
        <section
          className="section-container min-h-screen flex flex-col lg:flex-row justify-center items-center gap-16"
          id="home"
        >
          <Profile_photo />
          <Profile_about />
        </section>

        {/* About Section */}
        <About_me />

        {/* Achievements Section */}
        <Achievements />

        {/* Projects / Garage Section */}
        <Projects />

        {/* Interests / Pit Lane Section */}
        <Interests />

        {/* Contact / Pit Stop Section */}
        <Contact />
      </main>

      {/* Mobile bottom padding for nav bar */}
      <div className="lg:hidden h-20" />
    </div>
  );
}
