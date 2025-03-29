import Profile_photo from "@/components/Profile_photo";
import Controller from "@/components/Controller";
import { Home_bar } from "@/components/Home_bar";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-start gap-15">
      <Profile_photo />
      <Controller />
      <Home_bar />
    </div>
  );
}
