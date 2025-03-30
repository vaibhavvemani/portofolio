import React from 'react'
import Image from 'next/image'

export default function Controller() {
  return (
    <div className='fixed top-25 right-0 transform rotate-45 -translate-y-30 translate-x-30'>

      <div className='relative flex justify-center items-center h-80 w-130'>

        <div className='flex justify-center items-center gap-5 h-50 w-100 rounded-2xl bg-[#181818]'>

          <div className='flex justify-center items-center absolute bottom-0 left-0 h-50 w-50 rounded-full bg-[#101010]'>

            <Image 
              src="/controller-dpad.svg"
              alt='controller dpad'
              width={100}
              height={100}
              className='transform rotate-45'
            />

          </div>

          <div className='h-5 w-10 bg-[#323232]'></div>
          <div className='h-5 w-10 bg-[#323232]'></div>

          <div className='flex flex-col justify-center items-center 
            absolute bottom-0 right-0 h-50 w-50 rounded-full bg-[#101010]'>

            <div className='flex justify-center items-center h-8 w-8 rounded-full bg-yellow-500'>
              <p className='font-bold'>Y</p>
            </div>
            <div className='w-full flex justify-evenly items-center'>
              <div className='flex justify-center items-center h-8 w-8 rounded-full bg-blue-500
                hover:bg-blue-600 hover:shadow-lg'>
                <p className='font-bold'>X</p>
              </div>
              <div className='flex justify-center items-center h-8 w-8 rounded-full bg-red-500'>
                <p className='font-bold'>B</p>
              </div>
            </div>
            <div className='flex justify-center items-center h-8 w-8 rounded-full bg-green-500'>
              <p className='font-bold'>A</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

