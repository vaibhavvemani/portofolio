import React from 'react'
import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export default function About_me() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );
  return (
    <div className="relative h-100 border-3 border-black p-10 mt-10 bg-[#101010] flex justify-center items-center rounded-2xl text-white">
      <div className="w-200 h-full pr-10 flex flex-col justify-center items-start border-r-4 border-green-500">
        <h1 className='text-8xl font-bold'>About me</h1>
        <p>
          Hellooo! I’m Vaibhav Vemani, a developer from Bengaluru, India with an obession for building cool stuff.
          I’m currently studying Artificial Intelligence and Machine Learning, and when I’m not decoding neural nets or debugging 
          web apps at 2 AM, I’m probably learning something new—because curiosity is kinda my thing.
          If I don’t know how something works, I have to figure it out.
          Why?
          Because I’m not here to be just another dev—I’m here to be the kind of dev who can’t be replaced by an LLM. (Sorry, GPT 👀)
        </p>
      </div>

      <div className='w-100 flex justify-center items-center'>
        <div className="relative flex size-full items-center justify-center overflow-hidden">
          <IconCloud images={images} />
        </div>
      </div>
    </div>
  )
}

