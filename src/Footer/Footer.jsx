import React from 'react'
import { GiThreeFriends } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { SlEnvelopeOpen } from "react-icons/sl";
import { IoIosArrowForward } from "react-icons/io";
import footerimg1 from '../assets/footerimg1.avif'
import footerimg2 from '../assets/footerimg2.avif'
import footerimg3 from '../assets/blogimg4.avif'
const Footer = () => {
  return (
    <footer className='min-h-[700px] bg-gray-800 relative flex lg:flex-row flex-col px-20 xl:px-30 pb-[160px] lg:pb-[120px] pt-20 gap-x-9 gap-y-15 lg:gap-y-0 w-screen '>
        <div className='flex-1 bg-gray-800 text-white flex flex-col items-start  ' >
           
                <div className='flex flex-col items-center gap-y-2'>
            <a className='text-2xl xl:text-4xl ' href="#"><GiThreeFriends /></a>
            <a className='text-2xl xl:text-4xl tracking-wider ' href="#">CHARITY</a>
            </div>
            
            
           <p className='mt-8 mb-10 text-[14px] lg:text-[16px] xl:text-xl px-2 max-w-[520px] '>Towards The end of 19th century, with the advent of new Liberalism and the innovation</p>
           <div className='xl:w-4/5  flex gap-x-10 flex-wrap text-white justify-center '>
            <a className='text-lg lg:text-2xl xl:text-[28px] ' href="#"><FaFacebook /></a>
            <a className='text-lg lg:text-2xl xl:text-[28px] ' href="#"><FaLinkedin /></a>
            <a className='text-lg lg:text-2xl xl:text-[28px] ' href="#"><FaXTwitter /></a>
            <a className='text-lg lg:text-2xl xl:text-[28px] ' href="#"><FaInstagram /></a>
           </div>
        </div>
        <div className='flex-1  bg-gray-800  ' >
            <h3 className='text-white font-bold text-xl
            lg:text-2xl' >Contact Info</h3>
            <p className=' text-[14px] lg:text-[16px] xl:text-xl mt-8 mb-10 text-white'>Box 3233 <br />1810 Kings Way <br />King Street, 5th Avenue,New York</p>
            <p className='text-white text-[14px] lg:text-[16px] xl:text-xl mt-5 flex gap-2 items-center '><span className='text-violet-600 text-[22px]'><IoCallOutline /></span><span className='font-bold'>New York</span>:1800-2355-2356</p>
            <p className='text-white text-[14px] lg:text-[16px] xl:text-xl mt-5 flex gap-2 items-center '><span className='text-violet-600 text-[22px]'><IoCallOutline /></span><span className='font-bold'>London</span>:020-1455-236-34</p>
            <p className='text-white text-[14px] lg:text-[16px] xl:text-xl mt-5 flex gap-2 items-center '><span className='text-violet-600 text-[22px]'><SlEnvelopeOpen /></span>Contact@Chariti.theme</p>
        </div>
        <div className='flex-1  bg-gray-800  ' >
            <h3 className=' text-xl lg:text-2xl font-bold text-white'>Quick Links</h3>
            <ul className='text-white mt-8' >
                <li className='flex items-center text-[14px] lg:text-[15px] xl:text-[19px] font-semibold gap-x-4 border-b-2 border-gray-700 py-4'><span><IoIosArrowForward /></span>About The Organisation</li>
                <li className='flex items-center text-[14px] lg:text-[15px] xl:text-[19px] font-semibold gap-x-4 border-b-2 border-gray-700 py-4'><span><IoIosArrowForward /></span>Become a Volunteer</li>
                <li className='flex items-center text-[14px] lg:text-[15px] xl:text-[19px] font-semibold gap-x-4 border-b-2 border-gray-700 py-4'><span><IoIosArrowForward /></span>Case Studies</li>
                <li className='flex items-center text-[14px] lg:text-[15px] xl:text-[19px] font-semibold gap-x-4 border-b-2 border-gray-700 py-4'><span><IoIosArrowForward /></span>Sponsers</li>
                <li className='flex items-center text-[14px] lg:text-[15px] xl:text-[19px] font-semibold gap-x-4 border-b-2 border-gray-700 py-4'><span><IoIosArrowForward /></span>FAQ</li>
            </ul>
        </div>
        <div className='flex-1  bg-gray-800  ' >
            <h3 className='font-bold text-xl lg:text-2xl text-white '>Urgent Causes</h3>
            <div className='flex items-center gap-x-3 mt-5'>
                <div className='w-25 lg:w-18 xl:w-24 xl:h-24 h-25 lg:h-18 shrink-0 bg-red-400' ><img className='w-full h-full object-cover' src={footerimg1} alt="" /></div>
                <div className='w-full' >
                    <h4 className='text-white font-medium text-[15px] lg:text-[16px] xl:text-[22px] ' >Second Hand Goods Donation</h4>
                    <div className='h-2 bg-green-300 mt-2 mb-2'></div>
                    <p className='text-[14px] xl:text-[15px] font-bold text-white '>30% Donated</p>
                </div>
            </div>
            <div className='flex items-center gap-x-3 mt-5'>
                <div className='w-25 lg:w-18 h-25 lg:h-18 xl:w-24 xl:h-24 shrink-0 bg-red-400' ><img className='w-full h-full object-cover' src={footerimg2} alt="" /></div>
                <div className='w-full' >
                    <h4 className='text-white font-medium  text-[15px] lg:text-[16px] xl:text-[22px] ' >Education Needed</h4>
                    <div className='h-2 bg-green-300 mt-2 mb-2'></div>
                    <p className='text-[14px] xl:text-[15px] font-bold text-white '>92% Donated</p>
                </div>
            </div>
            <div className='flex items-center gap-x-3 mt-5'>
                <div className='w-25 lg:w-18 h-25 lg:h-18 xl:w-24 xl:h-24 shrink-0 bg-red-400' ><img className='w-full h-full object-cover' src={footerimg3} alt="" /></div>
                <div className='w-full' >
                    <h4 className='text-white font-medium  text-[15px] lg:text-[16px] xl:text-[22px] ' >Save Child Africa</h4>
                    <div className='h-2 bg-green-300 mt-2 mb-2'></div>
                    <p className='text-[14px] xl:text-[15px] font-bold text-white '>51% Donated</p>
                </div>
            </div>
        </div>
        <div className='bg-black absolute bottom-0 left-0 right-0 py-8 md:py-10 flex md:flex-row flex-col items-center md:justify-between px-10 '>
            <span className='text-white text-lg lg:text-xl' >Privacy Policy | Terms Of Use</span>
            <span className='text-gray-400 text-lg lg:text-xl' >Copyright 2025 Chariti Theme, All Rights Reserved</span>
        </div>
    </footer>
  )
}

export default Footer