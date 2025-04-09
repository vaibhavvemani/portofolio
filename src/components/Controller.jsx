import React from 'react';
import Image from 'next/image';
import * as motion from 'motion/react-client';


export default function Controller() {
  return (
    <motion.div className='hidden md:block fixed top-5 right-0 -rotate-25'
      initial={{opacity: 0, scale: 0}}
      animate={{opacity: 1, scale: 1}}
      transition={{
        duration: 0.5,
        delay: 1.5,
        type: "spring",
        bounce: 0.25,

      }}
    >

      <div className='relative flex justify-center items-center h-60 w-110'>

        <div className='flex justify-center items-center gap-5 h-40 w-80 rounded-2xl bg-[#181818]'>

          <div className='flex justify-center items-center absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[#101010]'>

            <Image 
              src="/controller-dpad.svg"
              alt='controller dpad'
              width={80}
              height={80}
              className='transform rotate-45'
            />

          </div>

          <div className='h-5 w-10 bg-[#323232]'></div>
          <div className='h-5 w-10 bg-[#323232]'></div>

          <div className='flex flex-col justify-center items-center 
            absolute bottom-0 right-0 h-40 w-40 rounded-full bg-[#101010]'>

            <div className='flex justify-center items-center h-6 w-6 rounded-full bg-yellow-500
              hover:bg-yellow-600 hover:shadow-lg'>
              <p className='font-bold'>Y</p>
            </div>
            <div className='w-full flex justify-evenly items-center'>
              <div className='flex justify-center items-center h-6 w-6 rounded-full bg-blue-500
                hover:bg-blue-600 hover:shadow-lg'>
                <p className='font-bold'>X</p>
              </div>
              <div className='flex justify-center items-center h-6 w-6 rounded-full bg-red-500
                hover:bg-red-600 hover:shadow-lg'>
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

