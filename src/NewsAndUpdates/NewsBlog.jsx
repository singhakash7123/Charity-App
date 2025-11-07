import React from 'react'
import { Link } from 'react-router-dom'
import background from '../assets/background.jpg'
import { CiClock2 } from "react-icons/ci";
import { IoMdPerson } from "react-icons/io";
import { FaTag } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import info from '../BlogInfo'
import NewsBlogComponent from './NewsBlogComponent';

const NewsBlog = () => {
  const Bloginfo = info
  console.log(Bloginfo);
  const BlogCom = Bloginfo.map((item)=>{
   return <NewsBlogComponent image = {item.image} key={item.id} heading={item.heading} description={item.description} tag={item.tag} />
    
  })
  return (
    <section >
      <div className='w-screen bg-cover bg-center min-h-[60vh] text-white flex flex-col items-center justify-center relative mt-15 xl:mt-0 pb-10 ' style={{backgroundImage:`url(${background})`}}>
           <h1 className='text-4xl md:text-5xl xl:text-7xl font-extrabold' >Blog</h1>
           <h2 className=' text-2xl xl:text-3xl font-semibold text-center mt-6 xl:mt-13 mb-5 xl:mb-13 text-purple-300'>Caption aligned here </h2>
      </div>
      <div className=' max-w-[600px] md:max-w-[1550px] w-full bg-gray-100  mx-auto mt-20 flex flex-col md:flex-row items-center md:items-stretch md:justify-between gap-x-5  ' >
        <div className=' max-w-[1000px] w-full  ' >
      {BlogCom}
        </div>
        <div className=' max-w-[380px] xl:max-w-[480px] w-full py-5 px-5 xl:px-0 '>
          <h4 className='text-gray-600 font-bold text-lg '>TEXT WIDGET</h4>
          <p className='mt-10 text-[17px] xl:text-xl' >Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Etiam porta sem malesuada.</p>
        <div className='bg-gray-100  mt-10  ' >
            <h3 className='font-bold text-xl lg:text-2xl text-gray-900 '>Urgent Causes</h3>
            <div className='flex items-center gap-x-3 mt-5'>
                <div className=' w-18  h-18 shrink-0 bg-red-400' ><img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1521493959102-bdd6677fdd81?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" alt="" /></div>
                <div className='w-full' >
                    <h4 className='text-gray-900 font-medium text-[15px] lg:text-[16px] xl:text-[22px] ' >Second Hand Goods Donation</h4>
                    <div className='h-2 bg-green-300 mt-2 mb-2'></div>
                    <p className='text-[14px] xl:text-[15px] font-bold text-gray-900'>30% Donated</p>
                </div>
            </div>
            <div className='flex items-center gap-x-3 mt-5'>
                <div className='w-18 h-18 shrink-0 bg-red-400' ><img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" alt="" /></div>
                <div className='w-full' >
                    <h4 className='text-gray-900 font-medium  text-[15px] lg:text-[16px] xl:text-[22px] ' >Education Needed</h4>
                    <div className='h-2 bg-green-300 mt-2 mb-2'></div>
                    <p className='text-[14px] xl:text-[15px] font-bold text-gray-900 '>92% Donated</p>
                </div>
            </div>
            <div className='flex items-center gap-x-3 mt-5'>
                <div className='w-18 h-18  shrink-0 bg-red-400' ><img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhcml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600" alt="" /></div>
                <div className='w-full' >
                    <h4 className='text-gray-900 font-medium  text-[15px] lg:text-[16px] xl:text-[22px] ' >Save Child Africa</h4>
                    <div className='h-2 bg-green-300 mt-2 mb-2'></div>
                    <p className='text-[14px] xl:text-[15px] font-bold text-gray-900 '>51% Donated</p>
                </div>
            </div>
        </div>
        <div className='mt-15'>
          <h4 className='text-gray-600 font-bold text-lg  ' >TAG CLOUD</h4>
          <div className='flex flex-wrap gap-5 mt-10 ' >
            <button className='py-1 xl:py-2 px-3 xl:px-5 text-xs xl:text-[15px] border-1 text-gray-700 border-gray-300 font-semibold tracking-wider' >ANIMAL</button>
            <button className='py-1 xl:py-2 px-3 xl:px-5 text-xs xl:text-[15px] border-1 text-gray-700 border-gray-300 font-semibold tracking-wider' >FOOD</button>
            <button className='py-1 xl:py-2 px-3 xl:px-5 text-xs xl:text-[15px] border-1 text-gray-700 border-gray-300 font-semibold tracking-wider' >FUNDS</button>
            <button className='py-1 xl:py-2 px-3 xl:px-5 text-xs xl:text-[15px] border-1 text-gray-700 border-gray-300 font-semibold tracking-wider' >GLOBAL</button>
            <button className='py-1 xl:py-2 px-3 xl:px-5 text-xs xl:text-[15px] border-1 text-gray-700 border-gray-300 font-semibold tracking-wider' >HOME</button>
            <button className='py-1 xl:py-2 px-3 xl:px-5 text-xs xl:text-[15px] border-1 text-gray-700 border-gray-300 font-semibold tracking-wider' >HUNGRY</button>
            <button className='py-1 xl:py-2 px-3 xl:px-5 text-xs xl:text-[15px] border-1 text-gray-700 border-gray-300 font-semibold tracking-wider' >KIDS</button>
            <button className='py-1 xl:py-2 px-3 xl:px-5 text-xs xl:text-[15px] border-1 text-gray-700 border-gray-300 font-semibold tracking-wider' >POVERTY</button>
            <button className='py-1 xl:py-2 px-3 xl:px-5 text-xs xl:text-[15px] border-1 text-gray-700 border-gray-300 font-semibold tracking-wider' >SCHOOL</button>
          </div>
        </div>
        <div className='flex-1  mt-15  ' >
                    <h3 className=' text-xl  font-bold text-gray-600'>POST CATEGORY</h3>
                    <ul className=' text-gray-600 mt-8' >
                        <li className='flex items-center text-[14px] lg:text-[15px] xl:text-[19px] font-semibold gap-x-4 border-b-1 border-gray-300 py-4'><span><IoIosArrowForward /></span>Blog</li>
                        <li className='flex items-center text-[14px] lg:text-[15px] xl:text-[19px] font-semibold gap-x-4 border-b-1 border-gray-300 py-4'><span><IoIosArrowForward /></span>Food</li>
                        <li className='flex items-center text-[14px] lg:text-[15px] xl:text-[19px] font-semibold gap-x-4 border-b-1 border-gray-300 py-4'><span><IoIosArrowForward /></span>Peace</li>
                        <li className='flex items-center text-[14px] lg:text-[15px] xl:text-[19px] font-semibold gap-x-4 border-b-1 border-gray-300 py-4'><span><IoIosArrowForward /></span>Post Format</li>
                        <li className='flex items-center text-[14px] lg:text-[15px] xl:text-[19px] font-semibold gap-x-4 border-b-1 border-gray-300 py-4'><span><IoIosArrowForward /></span>Water</li>
                    </ul>
                </div>
        </div>
      </div>
    </section>
  )
}

export default  NewsBlog