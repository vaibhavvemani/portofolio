export default function Contact() {
  return (
    <div className="relative w-320 p-10 mt-20 flex justify-center items-start gap-5 text-white">
      <div className="w-1/2">
        <h1 className="text-7xl font-bold">Contact Me</h1>
      </div>
      <div className="w-1/2 h-120 p-10 rounded-2xl bg-card flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-5xl font-medium">Name</label>
          <input placeholder="Vaibhav" className="w-80 h-10 p-2 rounded-sm border-accent border-1"/>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-5xl font-medium">Email</label>
          <input placeholder="vaibhavvemani@gmail.com" className="w-80 h-10 p-2 rounded-sm border-accent border-1"/>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-5xl font-medium">Description</label>
          <textarea placeholder="I would like to hire you! You're the besttt" className="w-80 h-20 p-2 rounded-sm border-accent border-1"/>
        </div>
      </div>
    </div>
  );
}
