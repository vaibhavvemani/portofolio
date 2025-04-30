
export default function Projects() {
  const projects = [
    {
      name: "Word Lens",
      desc: "A reading tool that provides readers the ability to retrieve definitions of words in real time. Point to the word with a pen and find the definition of the word in real-time."
    },
    {
      name: "Bee Safe",
      desc: "Automated Bee threat detection tool that helps increase and monitor bee colony health. This tool will allert the user when a threat to the colony is detected. It will also predict colony health using bee acoustics."
    },
    {
      name: "Grounded",
      desc: "A developer tool that is used to quickly parse a code and generate test cases for the user, significantly reducing developemnt time. Also support for website and document related queries using RAG."
    },
    {
      name: "Revlift",
      desc: "A comprehensive car wiki, built for enthusiasts. A one stop for everything you need learn about your faviorite car."
    }


  ]
  return (
    <section 
      className="relative w-320 mt-20 p-10 flex flex-col gap-5 rounded-2xl text-white "
      id="Projects"
    >
      <h1 className="text-7xl font-bold">Projects</h1>

      <div className="flex gap-5 flex-wrap justify-between items-start">
        {projects.map((project, index) => {
          return (
            <div key={index} className="w-90 h-80 p-4 bg-card rounded-2xl">
              <h1 className="font-bold text-4xl">{project.name}</h1>
              <h2 className="text-lg">Assistive Reading Tool</h2>
              <hr className="w-20 self-center text-accent" />
              <p className="font-light text-sm mt-5">{project.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  );
}
