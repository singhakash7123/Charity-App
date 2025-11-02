import React from 'react'
import Heading from '../Headings/Heading'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlinePlayCircle } from "react-icons/md";
import causeImage from '../assets/causesimage.jpg'
import CauseComponent from './CauseComponent';
const Causes = () => {
  return (
    <section className='mt-10'>
        <div className='lg:max-w-9/10 lg:ml-auto'>
        
       <div className='flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 justify-between 
       lg:pr-50 items-center px-5 '>
         <Heading content='Our Causes' />
        <div className='flex gap-x-2  items-center  self-end ' >
            <button className='text-red-400 font-bold text-xl lg:text-2xl  flex items-center' >View All Causes</button>
            <span  className='text-red-400 font-bold text-2xl flex items-center justify-center' ><FaArrowRightLong /></span>
        </div>
       </div>
       <div className='mt-10 flex flex-col lg:flex-row items-center lg:items-stretch  '>
        <div className=' min-h-[300px] lg:min-h-[436px] bg-red-400 w-9/10 lg:basis-9/20 relative before:h-full  before:w-full before:absolute before:left-0 before:top-0 before:bg-black before:opacity-40 before:content-[""] bg-center bg-cover ' style={{backgroundImage:`url(${causeImage})`}} >
        
        <button className='text-9xl text-white font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' ><MdOutlinePlayCircle /></button>
        
        </div>
         <div className='min-h-[400px] bg-gradient-to-tr from-blue-800 to-blue-500 w-full
        lg:basis-11/20 p-[32px]
        lg:p-[48px] text-white ' >
        <h2 className='text-4xl font-bold' >Providing access to safe water,sanitation, and hygiene </h2>
        <span className=' flex font-bold text-red-500 mt-6'>$45,278.00</span>
        <div className='w-full h-2 bg-red-500 mt-2' ></div>
        <div className='flex items-center justify-between mt-3 font-bold tracking-wide '>
          <span>150% Donation</span>
          <span>Goal:$30,000.00</span>
        </div>
        <p className='text-white mt-6 font-light lg:text-2xl' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates architecto quae iusto nemo amet minima, impedit provident fugiat adipisci aut quibusdam enim unde eligendi dignissimos nulla accusamus expedita tenetur excepturi odio culpa! Voluptate laudantium aspernatur eum delectus iste, aperiam culpa.</p>
        <div className='flex items-center justify-between mt-6' >
          <button className='bg-orange-600 text-bold tracking-wider text-white py-2 px-4 font-bold lg:text-xl rounded-xl'>Donate Now</button>
          <button className='text-xl' ><FaRegHeart /></button>
        </div>
        </div>
       
       </div>
       <div className='flex justify-center items-center flex-wrap mt-20 gap-x-8' >
        <CauseComponent/>
        <CauseComponent/>
        <CauseComponent/>
        
       </div>
      
        </div>
    </section>
  )
}

export default Causes