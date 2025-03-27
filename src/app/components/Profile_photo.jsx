"use client"

import Image from "next/image";

export default function Profile_photo() {

  return (
    <>
    <div className="relative h-100 w-120">

      <div className="relative overflow-hidden h-100 w-100 rounded-[25rem] bg-gray-500 border-4">
        <Image
          src="/mahesh-babu.png"
          alt="Picture of mahesh babu smoking from okkadu movie"
          width={100}
          height={100}
          layout="responsive"
        /> 
      </div>

      <div className="absolute top-10 right-16 flex gap-2 font-black">
          <Image 
            src="/horizontal-line.svg"
            alt="Line"
            width={30}
            height={50}
          />
          <Image 
            src="/github.svg"
            alt="Line"
            width={40}
            height={40}
          />
      </div>
      <div className="absolute top-30 right-3 flex gap-2  font-black">
          <Image 
            src="/horizontal-line.svg"
            alt="Line"
            width={30}
            height={50}
          />
          <Image 
            src="/linkedin.svg"
            alt="Line"
            width={40}
            height={40}
          />
      </div>
      <div className="absolute top-50 right-1 flex gap-2 font-black">
          <Image 
            src="/horizontal-line.svg"
            alt="Line"
            width={30}
            height={50}
          />
          <Image 
            src="/gmail.svg"
            alt="Line"
            width={40}
            height={40}
          />
      </div>
    </div>
    </>
  )
}
