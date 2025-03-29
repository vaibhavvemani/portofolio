import Profile_photo from "../components/Profile_photo";
import Profile_about from "../components/Profile_about";

export default function Home() {
  return (
    <div className="h-screen w-screen p-10 flex flex-col justify-center items-start gap-15">
      <Profile_photo />
      <Profile_about />
    </div>
  );
}
