import React from 'react'
import background from '../assets/background.jpg'
import { FaRegHeart } from "react-icons/fa6";
const OurCauses = () => {
  return (
    <section>
         <div className='w-screen bg-cover bg-center min-h-[60vh] text-white flex flex-col items-center justify-center relative mt-15 xl:mt-0 pb-10 ' style={{backgroundImage:`url(${background})`}}>
         <div className='text-7xl'>
         
         </div>
         <h1 className='text-4xl md:text-5xl xl:text-7xl font-extrabold' >Cause List - Thumbnail Overlay</h1>
         <h2 className=' text-xl xl:text-2xl font-semibold text-center mt-6 xl:mt-13 mb-5 xl:mb-13 tracking-widest text-violet-300'>EXAMPLE OF CAUSE LIST </h2>
        
        </div>
        <div className='w-screen flex items-center gap-12 justify-center flex-wrap py-20 ' >
            <div className='w-full max-w-[500px] aspect-3/4 bg-yellow-400 px-12 pb-15 flex flex-col items-center justify-end'>
            <div>
                <h2 className='text-4xl font-extrabold text-white tracking-wide '>Second Hand Goods Donation</h2>
                <div className='text-white text-[22px] flex items-center justify-between mt-6'>
                    <span>$8,273.00</span>
                    <button>
                       <FaRegHeart />
                    </button>
                </div>
                <div className='w-full h-2 rounded-2xl bg-emerald-400 mt-2'></div>
                <div className='text-[22px] font-extrabold text-white flex justify-between items-center mt-2'>
                    <span>30% Donated</span>
                    <span>Goal:$27,000.00</span>
                </div>
            </div>
            </div>
            <div className='w-full max-w-[500px] aspect-3/4 bg-yellow-400 px-12 pb-15 flex flex-col items-center justify-end '>
             <div>
                <h2 className='text-4xl font-extrabold text-white tracking-wide '>Education Needed</h2>
                <div className='text-white text-[22px] flex items-center justify-between mt-6'>
                    <span>$27,660.00</span>
                    <button>
                       <FaRegHeart />
                    </button>
                </div>
                <div className='w-full h-2 rounded-2xl bg-emerald-400 mt-2'></div>
                <div className='text-[22px] font-extrabold text-white flex justify-between items-center mt-2'>
                    <span>92% Donated</span>
                    <span>Goal:$30,000.00</span>
                </div>
            </div>
            </div>
            <div className='w-full max-w-[500px] aspect-3/4 bg-yellow-400 px-12 pb-15 flex flex-col items-center justify-end '>
             <div>
                <h2 className='text-4xl font-extrabold text-white tracking-wide '>Save Child Africa</h2>
                <div className='text-white text-[22px] flex items-center justify-between mt-6'>
                    <span>$102,523.00</span>
                    <button>
                       <FaRegHeart />
                    </button>
                </div>
                <div className='w-full h-2 rounded-2xl bg-emerald-400 mt-2'></div>
                <div className='text-[22px] font-extrabold text-white flex justify-between items-center mt-2'>
                    <span>51% Donated</span>
                    <span>Goal:$200,000.00</span>
                </div>
            </div>
            </div>
            <div className='w-full max-w-[500px] aspect-3/4 bg-yellow-400 px-12 pb-15 flex flex-col items-center justify-end '>
             <div>
                <h2 className='text-4xl font-extrabold text-white tracking-wide '>Volunteer Funding</h2>
                <div className='text-white text-[22px] flex items-center justify-between mt-6'>
                    <span>$56,149.00</span>
                    <button>
                       <FaRegHeart />
                    </button>
                </div>
                <div className='w-full h-2 rounded-2xl bg-emerald-400 mt-2'></div>
                <div className='text-[22px] font-extrabold text-white flex justify-between items-center mt-2'>
                    <span>56% Donated</span>
                    <span>Goal:$100,000.00</span>
                </div>
            </div>
            </div>
            <div className='w-full max-w-[500px] aspect-3/4 bg-yellow-400 px-12 pb-15 flex flex-col items-center justify-end '>
             <div>
                <h2 className='text-4xl font-extrabold text-white tracking-wide '>Give Education To Africa</h2>
                <div className='text-white text-[22px] flex items-center justify-between mt-6'>
                    <span>$16,020.00</span>
                    <button>
                       <FaRegHeart />
                    </button>
                </div>
                <div className='w-full h-2 rounded-2xl bg-emerald-400 mt-2'></div>
                <div className='text-[22px] font-extrabold text-white flex justify-between items-center mt-2'>
                    <span>26% Donated</span>
                    <span>Goal:$60,000.00</span>
                </div>
            </div>
            </div>
            <div className='w-full max-w-[500px] aspect-3/4 bg-yellow-400 px-12 pb-15 flex flex-col items-center justify-end '>
             <div>
                <h2 className='text-4xl font-extrabold text-white tracking-wide '>Give Them Home</h2>
                <div className='text-white text-[22px] flex items-center justify-between mt-6'>
                    <span>$3,930.00</span>
                    <button>
                       <FaRegHeart />
                    </button>
                </div>
                <div className='w-full h-2 rounded-2xl bg-emerald-400 mt-2'></div>
                <div className='text-[22px] font-extrabold text-white flex justify-between items-center mt-2'>
                    <span>2% Donated</span>
                    <span>Goal:$170,000.00</span>
                </div>
            </div>
            </div>
        </div>
    </section>
    
  )
}

export default OurCauses