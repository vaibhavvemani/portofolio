export default function Projects() {
  return (
    <div className="relative w-320 mt-20 p-10 flex flex-col gap-5 rounded-2xl text-white ">
      <h1 className="text-7xl font-bold">Projects</h1>

      <div className="flex gap-5 flex-wrap justify-between items-start">
        <div className="w-90 h-80 p-4 bg-card rounded-2xl">
          <h1 className="font-bold text-4xl">Word Lens</h1>
          <h2 className="text-lg">Assistive Reading Tool</h2>
          <hr className="w-20 self-center text-accent" />
          <p className="font-light text-sm mt-5">
            A reading tool that provides readers the ability to retrieve
            definitions of words in real time. Point to the word with a pen and
            find the definition of the word in real-time.
          </p>
        </div>
        <div className="w-90 h-80 p-4 bg-card rounded-2xl">
          <h1 className="font-bold text-4xl">Bee Safe</h1>
          <h2 className="text-lg">Bee Threat Detection</h2>
          <hr className="w-20 self-center text-accent" />
          <p className="font-light text-sm mt-5">
            Automated Bee threat detection tool that helps increase and monitor
            bee colony health. This tool will allert the user when a threat to
            the colony is detected. It will also predict colony health using bee
            acoustics.
          </p>
        </div>
        <div className="w-90 h-80 p-4 bg-card rounded-2xl">
          <h1 className="font-bold text-4xl">Grounded</h1>
          <h2 className="text-lg">Automated Test Case Generation</h2>
          <hr className="w-20 self-center text-accent" />
          <p className="font-light text-sm mt-5">
            A developer tool that is used to quickly parse a code and generate
            test cases for the user, significantly reducing developemnt time.
            Also support for website and document related queries using RAG.
          </p>
        </div>
      </div>
    </div>
  );
}
