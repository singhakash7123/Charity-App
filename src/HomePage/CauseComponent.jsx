import React from 'react'
import { FaRegHeart } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const CauseComponent = ({heading,donated,percentage,goal,image}) => {
 
 
  return (
    <div className=' lg:max-w-1/3 w-full bg-white px-5 pb-15 pt-2 lg:p-5 flex flex-col rounded-lg' >
    <img src={image} alt="" className='w-full aspect-16/9 lg:aspect-square bg-amber-200 object-cover ' />
      <h3 className='mt-8 font-extrabold text-blue-800 text-[22px] lg:text-[28px]'>{heading}</h3>
      <span className=' font-bold text-gray-300 flex mt-6 text-[17px] '>{donated.toLocaleString('fr-FR', {
  style: 'currency',
  currency: 'USD'
})}</span>
      <div className='h-2 bg-green-300 mt-2 mb-2 '></div>
      <div className='flex w-full items-center justify-between' >
        <span className='flex text-[17px] font-bold text-black '>{percentage}% Donated</span>
        <span className='flex text-[17px] font-bold text-gray-300 '>{goal.toLocaleString('fr-FR', {
  style: 'currency',
  currency: 'USD'
})}</span>
      </div>
      <p className='mt-6 text-gray-500 font-normal  text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, reprehenderit dolor, repudiandae distinctio repellat accusantium delectus voluptatibus voluptas praesentium, temporibus numquam similique sint quo inventore dicta tempore ea vel neque?</p>
     <div className='flex items-center justify-between mt-6 w-full' >
                <Link to={'/payment'} className='bg-blue-700 text-bold tracking-wider text-white lg:text-xl py-2 px-4 font-bold rounded-xl'>Donate Now</Link>
                <button className='text-xl' ><FaRegHeart /></button>
              </div>
     </div>
    
  )
}

export default CauseComponent