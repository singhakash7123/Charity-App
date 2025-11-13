import React from 'react'

const Heading = ({content}) => {
  return (
    <>
    
    <div className='text-5xl lg:text-6xl font-extrabold text-gray-700 lg:mt-10 w-fit'>
        {content}
        <div className='w-9 h-1 bg-orange-500 mt-6' ></div>
        </div>
    
    </>
  )
}

export default Heading