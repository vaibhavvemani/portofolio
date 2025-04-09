import React from "react";

export default function About_me() {
  return (
    <div
      className="relative w-320 h-100 m-10 flex justify-center 
      items-center rounded-2xl text-white"
    >
      <div className="w-2/3 h-2/3 p-10 flex flex-col justify-center items-start gap-5 border-r-4 border-green-500">
        <h1 className="text-7xl font-bold">About me</h1>
        <p>
          Hellooo! I’m Vaibhav Vemani, a developer from Bengaluru, India with an
          obession for building cool stuff. I’m currently studying Artificial
          Intelligence and Machine Learning, and when I’m not decoding neural
          nets or debugging web apps at 2 AM, I’m probably learning something
          new—because curiosity is kinda my thing. If I don’t know how something
          works, I have to figure it out. Why? Because I’m not here to be just
          another dev—I’m here to be the kind of dev who can’t be replaced by an
          LLM. (Sorry, GPT 👀)
        </p>
      </div>

      <div className="w-1/3 flex justify-center items-center">
        {/* <div className="relative flex size-full items-center justify-center overflow-hidden"> */}
        {/*   <IconCloud images={images} /> */}
        {/* </div> */}

        <div className="w-80 h-80 p-4 flex flex-col gap-5 bg-[#101010] rounded-xl">
          <div>
            <h1 className="font-bold text-3xl">VAIBHAV #0044</h1>
            <p className="font-light text-sm">Trying to be a decent dev</p>
          </div>

          <div>
            <div className="w-full rounded-xl shadow-md">
              <h1 className="text-sm font-light text-gray-400">
                CURRENTLY LEVELING UP:{" "}
              </h1>
              <h3 className="text-white text-lg font-semibold mb-2">
                LangChain
              </h3>

              <div className="relative w-full h-3 bg-[#181818] rounded-full overflow-hidden">
                <div
                  className="bg-green-500 h-full rounded-full transition-all duration-300"
                  style={{ width: "20%" }}
                ></div>
              </div>

              <div className="text-left text-sm text-gray-400 mt-1">
                200 / 1000 XP
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-light text-gray-400 ">NOW PLAYING:</h2>
            <h1 className="text-lg font-semibold">
              Elden Ring - Losing to the same boss for 3 hours
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
