export default function Projects() {
  return (
    <div className="relative w-320 p-10 flex flex-col gap-5 rounded-2xl text-white ">
      <h1 className="text-7xl font-bold">Projects</h1>

      <div className="flex flex-wrap gap-5 justify-between items-start">
        <div className="w-100 h-80 p-4 bg-[#101010] rounded-2xl">
          <h1 className="font-bold text-4xl">Word Lens</h1>
          <h2 className="text-lg">Assistive Reading Tool</h2>
          <hr className="w-20 self-center"/>
          <p className="font-light text-sm mt-5">
            A reading tool that provides readers the ability to retrieve
            definitions of words in real time. Point to the word with a pen
            and find the definition of the word in real-time.
            
          </p>

          {/* <div className="flex flex-wrap justify-evenly items-center"> */}
          {/*   <div className="p-3 bg-black rounded-full">Computer Vision</div> */}
          {/*   <div className="p-3 bg-black rounded-full">OCR</div> */}
          {/*   <div className="p-3 bg-black rounded-full">YOLO</div> */}
          {/* </div> */}
        </div>
        <div className="w-100 h-80 p-4 bg-[#101010] rounded-2xl">
          <h1 className="font-bold text-4xl">Bee Safe</h1>
          <h2 className="text-lg">Bee Threat Detection</h2>
          <hr className="w-20 self-center"/>
          <p className="font-light text-sm mt-5">
            Automated Bee threat detection tool that helps increase and
            monitor bee colony health. This tool will allert the user when
            a threat to the colony is detected. It will also predict colony health
            using bee acoustics.
          </p>

          {/* <div className="flex flex-wrap justify-evenly items-center"> */}
          {/*   <div className="p-3 bg-black rounded-full">Computer Vision</div> */}
          {/*   <div className="p-3 bg-black rounded-full">YOLO</div> */}
          {/*   <div className="p-3 bg-black rounded-full">Segmentation</div> */}
          {/* </div> */}
        </div>
        <div className="w-90 h-80 p-4 bg-[#101010] rounded-2xl">
          <h1 className="font-bold text-4xl">Grounded</h1>
          <h2 className="text-lg">Automated Test Case Generation</h2>
          <hr className="w-20 self-center"/>
          <p className="font-light text-sm mt-5">
            A developer tool that is used to quickly parse a code and generate
            test cases for the user, significantly reducing developemnt time.
            Also support for website and document related queries using RAG.
          </p>

          {/* <div className="flex flex-wrap justify-evenly items-center"> */}
          {/*   <div className="p-3 bg-black rounded-full">RAG</div> */}
          {/*   <div className="p-3 bg-black rounded-full">LangChain</div> */}
          {/*   <div className="p-3 bg-black rounded-full">NEXT.js</div> */}
          {/*   <div className="p-3 bg-black rounded-full">FLASK</div> */}
          {/* </div> */}
        </div>

      </div>
    </div>
  );
}
