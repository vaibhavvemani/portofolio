import React from 'react'
import Image from 'next/image'

export default function Controller() {
  return (
    <div className='fixed top-25 right-0 transform rotate-45'>

      <div className='relative flex justify-center items-center h-60 w-110'>

        <div className='h-50 w-100 rounded-2xl bg-black'>

          <div className='flex justify-center items-center absolute bottom-0 left-0 h-40 w-40 rounded-full bg-green-500'>

            <Image 
              src="/controller-dpad.svg"
              alt='controller dpad'
              width={100}
              height={100}
              className='transform rotate-45'
            />

          </div>

          <div className='absolute bottom-0 right-0 h-40 w-40 rounded-full bg-green-500'>

          </div>

        </div>

      </div>

    </div>
  )
}

