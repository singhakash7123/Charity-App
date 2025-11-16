import React from 'react'
import ProgressBar from '../ProgressBar/ProgressBar';
import { FaRegHeart } from "react-icons/fa6";
const CauseElement = ({heading,donated,percentage,goal,image}) => {
  return (
    <div className='relative w-full max-w-[450px] aspect-3/4 bg-yellow-400 flex flex-col items-center justify-end group overflow-hidden '>
                    <img className='w-full h-full flex object-cover scale-100 group-hover:scale-105 transition-transform duration-300 ease-in-out ' src={image} alt="img1" />
                    <div className='absolute inset-0 bg-black/60 flex flex-col items-center justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out '>
                    <h2 className='text-4xl font-extrabold text-white tracking-wide w-full '>{heading}</h2>
                    <div className= 'w-full text-white text-[22px] flex items-center justify-between mt-6'>
                        <span>${donated}</span>
                        <button >
                           <FaRegHeart />
                        </button>
                    </div>
                    <div className='mt-2 w-full'>
                        <ProgressBar value={percentage}/>
                    </div>
                    <div className='w-full text-[22px] font-extrabold text-white flex justify-between items-center mt-2'>
                        <span>{percentage}% Donated</span>
                        <span>Goal:${goal}</span>
                    </div>
                    </div>
                </div>
  )
}

export default CauseElement