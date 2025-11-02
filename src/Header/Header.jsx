import React, { useState } from 'react'
import { GiThreeFriends } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  const[showMenu,setShowMenu] = useState(false)
  const[showInput,setShowInput] = useState(false)
  const[color,serColor] = useState(false)
  const ChangeColor = () =>{
    if(window.scrollY>=400){
      serColor(true)
    }
    else{
      serColor(false)
    }
  }
 
   window.addEventListener('scroll',ChangeColor)

  return (
    <header className={`fixed top-0 left-0 right-0 z-15 before:absolute before:content-[""] before:w-screen before:h-screen  before:bg-black  ${showMenu||showInput?'before:z-20 before:top-0 before-left-0 before:opacity-80 ':'before:-z-100 before:-left-full before:opacity-0 '} ${color?'bg-gray-600':'bg-transparent'} transition-all duration-300 ease-in-out `}>
      <nav className='flex gap-x-5 items-center bg-gray-600 lg:bg-transparent overflow-y-auto ' >
        <div className='text-white flex flex-row lg:flex-col items-center gap-x-2 lg:bg-red-500 py-5 lg:py-2 px-5  '  >
          <a className='flex text-2xl lg:text-5xl' href="#"><GiThreeFriends /></a>
          <a className='flex text-lg lg:text-xl font-bold lg:font-semibold tracking-widest lg:tracking-[4px]' href="#">CHARITY</a> 
        </div>
        <ul className='hidden lg:flex items-center gap-x-15 font-bold text-[16px] tracking-[3px] text-white' >
          <li><a href="#">HOME</a></li>
          <li><a href="#">PAGES</a></li>
          <li><a href="#">OUR CAUSES</a></li>
          <li><a href="#">CASE STUDIES</a></li>
          <li><a href="#">BLOG</a></li>
          <li><a href="#">FEATURES</a></li>
        </ul>

       
          <ul className={`flex lg:hidden flex-col items-center mt-5 h-screen
             absolute z-100 top-full md:top-40 gap-y-5 text-xl font-semibold transition-all duration-300 ease-in-out text-white ${showMenu?'left-1/2 transform -translate-x-1/2':'-left-full'} w-4/5`} >

          <li onClick={()=>{setShowMenu(false)}} className=' w-full flex justify-center' ><a className='text-3xl' href="#"><RxCross2 /></a></li>
          <li className='border-b-2 border-gray-700 w-full flex justify-center py-1 ' ><a href="#">HOME</a></li>
          <li className='border-b-2 border-gray-700 w-full flex justify-center py-1 ' ><a href="#">PAGES</a></li>
          <li className='border-b-2 border-gray-700 w-full flex justify-center py-1 ' ><a href="#">OUR CAUSES</a></li>
          <li className='border-b-2 border-gray-700 w-full flex justify-center py-1 ' ><a href="#">CASE STUDIES</a></li>
          <li className='border-b-2 border-gray-700 w-full flex justify-center py-1 ' ><a href="#">BLOG</a></li>
          <li className='border-b-2 border-gray-700 w-full flex justify-center py-1 ' ><a href="#">FEATURES</a></li>
          </ul>
        

       <div className='flex gap-x-5 items-center ml-auto lg:ml-0 pr-6'>
         <button onClick={()=>{setShowInput(!showInput)}} className='flex items-center text-2xl lg:text-3xl font-bold text-white' ><IoSearch /></button>
         <button onClick={()=>{setShowMenu(!showMenu)}} className='flex lg:hidden text-2xl font-bold text-white'><RxHamburgerMenu /></button>
       </div>

        <div className={`flex items-center justify-center  absolute  z-20 top-full md:top-75  w-9/10  lg:w-2/5 border-b-4 border-white ${showInput?'left-1/2 transform -translate-x-1/2':'transform translate -left-full'}`}>
          <input className='w-9/10 px-4 py-3 outline-0 border-0 text-xl sm:text-3xl text-white font-semibold ' type="text" placeholder='Search...' />
          <button className='text-2xl sm:text-3xl text-white '><IoSearch /></button>
          <button onClick={()=>{
            setShowInput(!showInput);
            
          }} className='font-bold text-white text-2xl sm:text-3xl ml-5' ><RxCross2 /></button>
        </div>

        <div className='hidden xl:flex gap-x-4 items-center ml-auto px-20'>
          <button className=' py-2 px-10 rounded-xl text-white text-xl font-bold bg-blue-600' >Donate</button>
          <button className=' py-2 px-10 rounded-xl text-white text-xl font-bold bg-red-600' >Volunteer</button>
        </div>
      </nav>
    </header> 
  )
}

export default Header