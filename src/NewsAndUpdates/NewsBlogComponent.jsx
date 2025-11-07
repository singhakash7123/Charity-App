import React from 'react'
import { Link } from 'react-router-dom'
import { CiClock2 } from "react-icons/ci";
import { IoMdPerson } from "react-icons/io";
import { FaTag } from "react-icons/fa6";
const NewsBlogComponent = ({image,heading,description,tag}) => {
  return (
    <div className='bg-white px-5 md:px-0 ' >
            <img className='w-full aspect-2/1 bg-blue-400' src={image} alt="" />
            <div className='p-15' >
            <Link className='font-bold text-3xl xl:text-4xl tracking-wide ' >{heading}</Link>
            <div className='flex gap-x-8 flex-wrap text-blue-800 mt-6'>
              <span className='flex gap-x-3 items-center text-[13px] xl:text-[17px] font-bold tracking-wider'><span className='text-2xl'><CiClock2 /></span> APRIL 9, 2019</span>
              <span className='flex gap-x-3 items-center text-[13px] xl:text-[17px] font-bold tracking-wider'><span className='text-xl'><IoMdPerson /></span> JAMES SMITH</span>
              <span className='flex gap-x-3 items-center text-[13px] xl:text-[17px] font-bold tracking-wider'><span className='text-xl'><FaTag /></span> {tag}</span>
            </div>
            <p className='text-gray-500 text-[17px] xl:text-[23px] mt-10 ' >{description}</p>
            </div>
          </div>
  )
}

export default NewsBlogComponent