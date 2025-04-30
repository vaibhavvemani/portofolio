"use client"
import React from 'react';
import Image from 'next/image';
import * as motion from 'motion/react-client';
import { useSpring } from 'motion/react';

export default function Controller() {

  return (
    // <motion.div className='hidden md:block absolute top-5 right-60 -rotate-20'
    <motion.div className='hidden md:block fixed top-5 right-0 translate-30 -translate-y-7 rotate-45'
      initial={{x: -200, y: -400}}
      animate={{x: 0, y: 0}}
      transition={{
        duration: 1,
        delay: 1.5,
        type: "spring",
        bounce: 0.60,

      }}
    >

      <div className='relative flex justify-center items-center h-60 w-110'>

        <div className='flex justify-center items-start gap-5 h-40 w-80 rounded-2xl bg-black'>

          <div className='flex justify-center items-center absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[#101010]'>

            <Image 
              src="/controller-dpad.svg"
              alt='controller dpad'
              width={80}
              height={80}
              className='transform rotate-45'
            />

          </div>

          <div className='mt-2 p-2 rounded-full border-1 border-accent text-accent bg-[#181818]'>Resume</div>

          <div className='flex flex-col justify-center items-center 
            absolute bottom-0 right-0 h-40 w-40 rounded-full bg-[#101010]'>

            <div className='flex justify-center items-center h-6 w-6 rounded-full bg-yellow-500
              hover:bg-yellow-600 hover:shadow-lg'>
              <p className='font-bold'>Y</p>
            </div>
            <div className='w-full flex justify-evenly items-center'>
              <div
                className='flex justify-center items-center h-6 w-6 rounded-full bg-blue-500
                hover:bg-blue-600 hover:shadow-lg'
                onClick={() => {
                  const section = document.getElementById("Projects")
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                <p className='font-bold'>X</p>
              </div>
              <div 
                className='flex justify-center items-center h-6 w-6 rounded-full bg-red-500
                hover:bg-red-600 hover:shadow-lg'
                onClick={() => {
                  const section = document.getElementById("home")
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                <p className='font-bold'>B</p>
              </div>
            </div>
            <div className='flex justify-center items-center h-6 w-6 rounded-full bg-green-500
              hover:bg-green-600 hover:shadow-lg'>
              <p className='font-bold'>A</p>
            </div>

          </div>

        </div>

      </div>

    </motion.div>
  )
}

