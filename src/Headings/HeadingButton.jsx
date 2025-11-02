import React from 'react'

const HeadingButton = ({content}) => {
  return (
    <button className='text-white  py-4 lg:py-5 px-8 lg:px-10 font-bold bg-blue-800 text-center text-xs xl:text-[16px] tracking-wide lg:tracking-[2px] ' >{content}</button>
  )
}

export default HeadingButton