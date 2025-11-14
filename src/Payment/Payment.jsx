import React from 'react'
import { FaHeart } from "react-icons/fa6";

const Payment = () => {
  return (
    <section className='min-h-screen bg-gradient-to-tr from-white to-blue-100 flex justify-center '>
      <div className='max-w-[600px] w-full mt-15 '>
      <h3 className='flex justify-center' ><span className='text-3xl p-4 rounded-full text-white bg-gradient-to-br from-blue-500 to-blue-600'><FaHeart /></span></h3>
      <h5 className='text-center text-[14px] mt-5'>Make a Difference Today</h5>
      <h6 className='text-center text-[14px] mt-1'>Your generous donation helps us continue our misson and create lasting impact</h6>
      </div>

      <div className='max-w-[600px] w-full mt-15 ' >
        <p className='' >Donation Type</p>
      </div>
    </section>
  )
}

export default Payment