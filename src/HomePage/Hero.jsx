import React from 'react'
import { LuWaves } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";
import children from '../assets/children.jpg'
const Hero = () => {
  return (
    <section className='relative z-10' >
      <div className='min-h-screen bg-gray-200 bg-cover bg-center flex flex-col items-center justify-center relative ' style={{backgroundImage:"url('https://plus.unsplash.com/premium_photo-1733266905110-eab44e3aed74?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170')"}} >
        <div className='flex justify-center text-6xl text-white font-bold ' >
          <LuWaves />
        </div>
        <h1 className='text-4xl lg:text-8xl font-bold text-white' >Home is life </h1>
        <h3 className='text-center font-bold text-xl lg:text-2xl text-white mt-8 mb-8'>We build strength, stability, and self reliance <br /> through shelter</h3>
        <div className='text-center'>
        <button className='font-bold bg-blue-700 py-2 px-5 text-white rounded-xl text-sm lg:text-xl ' >Act Now</button>
          <div className='absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-x-3 ' >
            <button className='h-4 w-4 rounded-full bg-gray-500 outline-offset-2 outline-solid outline-gray-500' ></button>
            <button className='h-4 w-4 rounded-full bg-gray-500 outline-offset-2 outline-solid outline-gray-500' ></button>
          </div>
        </div>

      </div>
      <div className='flex flex-col lg:flex-row items-stretch justify-center '>
        <div className='basis-1/5 flex flex-col items-start justify-center min-h-[300px] bg-blue-700 px-15'>
        <h3 className='text-2xl text-white font-semibold ' >The Long journey to enf poverty begins with a child</h3>
       <div className='flex items-center gap-2 mt-5' >
          <button className='font-bold text-xl  text-red-400 ' >Donate Now</button>
          <span className='text-red-400 font-bold' ><FaArrowRightLong /></span>
       </div>
        </div>



        <div className='basis-1/5 flex flex-col items-start justify-center min-h-[300px] bg-gray-700 px-15'>
        <h3 className='text-2xl text-white font-semibold ' >No one children can Thrive on an empty stomach</h3>
          <div className='flex items-center gap-2 mt-5'>
           <button className='font-bold text-xl  text-red-400 ' >Be a Volunteer</button>
        <span className='text-red-400 font-bold' ><FaArrowRightLong /></span>
          </div>
          
       
        </div>
        <div className=' basis-3/5 hidden lg:flex  items-center h-[400px] justify-center bg-green-500 '>
        <img className='w-full h-full object-cover overflow-hidden' src={children} alt="children" />
        </div>
      </div>
    </section>


  )
}

export default Hero