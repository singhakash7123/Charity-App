import { useEffect, useState } from 'react'
import { GiThreeFriends } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Header = () => {
  const[showMenu,setShowMenu] = useState(false)
  const[showInput,setShowInput] = useState(false)
  const[visible,setVisible] = useState(false)
  const[color,setColor] = useState(false)
  const[join,setJoin] = useState(false)
  const ChangeColor = () =>{
    if(window.scrollY>=400){
      setColor(true)
     setVisible(true)
    }
    else{
      setColor(false)
      setVisible(false)
    }
  }

  useEffect(()=>{
    if(showMenu){
      document.body.style.overflow = 'hidden'
    }
    else{
      document.body.style.overflow = 'auto'
    }
  },[showMenu])
 
  
   window.addEventListener('scroll',ChangeColor)

  return (
    <header className={`fixed top-0 left-0 right-0 transition-all z-50 duration-300 ease-in-out after:w-full after:h-screen after:absolute after:top-0 after:-left-full after:bg-black after:opacity-70 ${showMenu||showInput?'after:left-0':''}  ${color?'bg-gray-600 ':'bg-transparent'}  `}>
      <nav className={`flex  items-center gap-x-10 pr-5 xl:pr-15 py-1 bg-gray-700 xl:bg-transparent  `} >
              <div className='flex gap-2 xl:flex-col items-center justify-center text-white p-3 xl:p-5 xl:bg-red-500 '>
                <div className=' text-3xl xl:text-4xl'><GiThreeFriends /></div>
                <h1 className='tracking-[5px] font-normal '>SAMARTHAN</h1>
              </div>
              <ul className=' hidden lg:flex items-center gap-x-5 lg:gap-x-10  xl:gap-x-15 text-lg font-bold text-white '>
                <li ><Link to={'/'} >HOME</Link></li> 
                <li ><Link  >PAGES</Link></li>
                <li ><Link to={'/causes'} >OUR CAUSES</Link></li>
                <li ><Link to={'/casestudies'} >CASE STUDIES</Link></li>
                <li ><Link to={'/news'} >BLOG</Link></li>
                <li ><Link to={'/Login'} >REGISTER</Link></li>
              </ul>
              <ul className={`lg:hidden flex flex-col items-center gap-5   text-lg font-bold overflow-y-auto text-white absolute top-full -left-full w-full py-5 px-5 transition-all duration-300 ease-in-out z-50   ${showMenu?'left-0 max-h-[75vh]':'-left-full max-h-0 '}`}>
                <button onClick={()=>{setShowMenu(false)}} className='text-2xl'><RxCross1 /></button>
                <li onClick={()=>{setShowMenu(false)}} className='border-b-white border-b-2  text-center  '><Link to={'/'}>HOME</Link></li>
                <li onClick={()=>{setShowMenu(false)}} className='border-b-white border-b-2  text-center  '><Link>PAGES</Link></li>
                <li onClick={()=>{setShowMenu(false)}} className='border-b-white border-b-2  text-center  '><Link to={'/causes'}>OUR CAUSES</Link></li>
                <li onClick={()=>{setShowMenu(false)}} className='border-b-white border-b-2  text-center  '><Link to={'/casestudies'}>CASE STUDIES</Link></li>
                <li onClick={()=>{setShowMenu(false)}} className='border-b-white border-b-2  text-center  '><Link to={'/news'}>BLOG</Link></li>
                <li onClick={()=>{setShowMenu(false)}} className='border-b-white border-b-2  text-center  '><Link to={'/Login'}>REGISTER</Link></li>
              </ul>
      
              <button onClick={()=>{setShowInput(true)}} className='text-2xl text-white ml-auto lg:ml-0'>
                <IoSearch />
              </button>
              <button onClick={()=>{setShowMenu(!showMenu)}} className='flex lg:hidden text-2xl text-white'>
                <RxHamburgerMenu />
              </button>

                <div className={`flex items-center justify-center text-white text-2xl absolute  z-50 transform  top-0 gap-x-3 max-w-[768px] w-9/10 h-screen ${showInput?'left-1/2 -translate-x-1/2 ':'-left-full'} transition-all ease-in-out duration-300 `}>
                  <input className='w-4/5 border-b-2 border-b-white text-white outline-0 ' type="text" placeholder='Search' />
                  <button><IoSearch /></button>
                  <button onClick={()=>{setShowInput(false)}} ><RxCross1 /></button>
                </div>
              
              <div className=' hidden xl:flex items-center gap-3 ml-auto  ' > 
               <Link to={'/payment'} className='font-bold py-3 px-6 text-white text-xl bg-red-500'>Donate</Link>
               <Link to={'/Login'}  className='font-bold py-3 px-6 text-white text-xl bg-blue-800'>Volunteer</Link>
              </div>

              

            </nav>
    </header>
  )
}

export default Header