import Profile_photo from "@/components/Profile_photo";
import Controller from "@/components/Controller";

export default function Home() {
  return (
    <div className="w-screen h-screen pl-10 pt-10 flex flex-col justify-start items-start gap-15">
      <Profile_photo />
      <Controller />
    </div>
  );
}
