import Profile_photo from "@/components/Profile_photo";
import Profile_about from "@/components/Profile_about";
import Controller from "@/components/Controller";


export default function Home() {
  return (
    <div className="w-screen h-screen pl-40 flex flex-col justify-center items-start gap-5">
      <Profile_photo />
      <Profile_about />
      <Controller />
    </div>
  );
}
