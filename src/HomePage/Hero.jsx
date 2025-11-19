import React from 'react'
import background from '../assets/community.avif'
import { PiWindFill } from "react-icons/pi";

const Hero = () => {
  return (
    <section className='w-screen h-[70vh] md:h-screen text-white  relative mt-15 xl:mt-0  '>
      <img src={background}   className='object-cover h-full w-full' loading='eager' fetchPriority='high' alt="" />
       <div className='absolute inset-0  flex flex-col items-center justify-center '>
      <div className='text-7xl'>
     <PiWindFill />
     </div>
     <h1 className='text-4xl md:text-5xl xl:text-7xl font-extrabold' >Home is Life</h1>
     <h2 className=' text-2xl xl:text-3xl font-semibold text-center mt-6 xl:mt-13 mb-5 xl:mb-13'>We build Strength,stability and self reliance <br />through shelter </h2>
     <button className='bg-blue-700 font-bold px-3 xl:px-8 py-1 xl:py-3 text-lg xl:text-2xl'>Act Now</button>
     <div className='flex items-center absolute left-1/2 transform -translate-x-1/2 gap-3 bottom-3'>
      <button className='w-3 h-3 rounded-full bg-white outline-offset-2 outline-solid  '></button>
      <button className='w-3 h-3 rounded-full bg-white outline-offset-2 outline-solid  '></button>
     </div>
     </div>

    </section>


  )
}

export default Hero