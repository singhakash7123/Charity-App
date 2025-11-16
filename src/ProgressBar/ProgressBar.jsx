import React, { useEffect, useState } from 'react'

const ProgressBar = ({value}) => {
   const[animatedProgress, setAnimatedProgress] = useState(0)
   useEffect(()=>{
    setInterval(()=>{
      setAnimatedProgress(value)
    },1000)
   },[animatedProgress])
  return (
    <div className='w-full h-2 bg-gray-300 overflow-hidden'>
        <div className='h-full bg-green-400 transition-all ease-in duration-500' style={{transform:`translateX(${animatedProgress-100}%)`}} ></div>
    </div>
  )
}

export default ProgressBar