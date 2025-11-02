import React from 'react'
import { FaRegHeart } from "react-icons/fa6";
const CauseComponent = () => {
  return (
    <div className='max-w-[500px] w-full bg-white p-2 lg:p-5 flex flex-col' >
    <img src="https://images.unsplash.com/photo-1574607383476-f517f260d30b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvbmF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600" alt="" className='w-full aspect-square bg-amber-200' />
      <h3 className='mt-8 font-extrabold text-blue-800 text-[22px] lg:text-[28px]' >Give Education to africa</h3>
      <span className=' font-extrabold text-gray-300 flex mt-6 lg:text-2xl ' >$16020.00</span>
      <div className='h-2 bg-green-300 mt-2 mb-2 '></div>
      <div className='flex w-full items-center justify-between' >
        <span className='flex lg:text-xl font-extrabold text-black ' >26% Donated</span>
        <span className='flex lg:text-xl font-extrabold text-gray-300 ' >Goal:170,000.00</span>
      </div>
      <p className='mt-6 text-gray-500 font-medium text-[17px] lg:text-2xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, reprehenderit dolor, repudiandae distinctio repellat accusantium delectus voluptatibus voluptas praesentium, temporibus numquam similique sint quo inventore dicta tempore ea vel neque?</p>
     <div className='flex items-center justify-between mt-6 w-full' >
                <button className='bg-blue-700 text-bold tracking-wider text-white lg:text-xl py-2 px-4 font-bold rounded-xl'>Donate Now</button>
                <button className='text-xl' ><FaRegHeart /></button>
              </div>
     </div>
    
  )
}

export default CauseComponent