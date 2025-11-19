import { useState } from 'react'
import { FaHeart } from "react-icons/fa6";
import Scrolltotop from '../component/ScrollToTop';


const Payment = () => {
const[donated,setDonated] = useState(0)
const[paytype,setPaytype] = useState('')
  const amount = [25,50,100,250,500,1000]
  const paymenttype = ['One Time', 'Monthly']
const RenderAmount = amount.map((item,index)=>{
  return(
    <button onClick={()=>{setDonated(item)}} key={index}  className=' flex justify-center w-[30%] py-2 text-sm font-medium border-1 border-gray-200 rounded-lg hover:bg-black hover:text-white transition-all duration-300 ease-in-out '>${item}</button>
  )
})
const RenderPaymentType = paymenttype.map((payitem,index)=>{
  return(
     <button onClick={()=>{setPaytype(payitem)}} key={index} className={`flex-1 text-center py-2 border-2 border-blue-400 rounded-xl font-semibold text-[16px] ${paytype === payitem?'bg-blue-300 text-white':'bg-white'} `}>{payitem}</button>
  )
})
  return (
   
    <section className='min-h-screen bg-gradient-to-tr from-blue-100 to-blue-200 flex flex-col items-center py-8 '>
       <Scrolltotop/>
      {/* heading */}
      <div className='max-w-[600px] w-full mt-15 '>
      <h3 className='flex justify-center' ><span className='text-3xl p-4 rounded-full text-white bg-gradient-to-br from-blue-500 to-blue-600'><FaHeart /></span></h3>
      <h5 className='text-center text-[14px] mt-5'>Make a Difference Today</h5>
      <h6 className='text-center text-[14px] mt-1 px-5'>Your generous donation helps us continue our misson and create lasting impact</h6>
      </div>

      {/* donation types */}

      <div className='max-w-[600px] w-full mt-7 bg-white p-5 rounded-xl ' >
        <p className='text-[14px] font-medium' >Donation Type</p>
        <div className='flex items-center gap-x-5 mt-5 '>
          {RenderPaymentType}
        </div>
      </div>

      {/* amountinfo */}

      <div className='max-w-[600px] w-full mt-7 bg-white p-5 rounded-xl ' >
      <p className='text-[14px] font-medium '>Select Amount</p>
      <p className='text-gray-600 text-[14px] mt-1 '>Choose a preset amount or enter your amount</p>
      <div className=' w-full flex flex-wrap justify-center gap-3 mt-5' >
        {RenderAmount}
      </div>
      <div className='mt-3'>
        <label className='text-[14px] font-medium  ' htmlFor="amount">Enter Amount</label>
        <br />
        <input onChange={(e)=>{setDonated(e.target.value)}} className='bg-gray-300 w-full py-2 rounded-lg outline-0 px-3 text-xs ' type="number" name="amount" id="amount" />
      </div>
      </div>

        {/* userdata */}

      <div className='max-w-[600px] w-full mt-7 bg-white p-5 rounded-xl ' >
      <p className='text-[14px] font-medium '>Your information</p>
      <div className='flex items-center gap-x-2 mt-7'>
      <input  className='flex h-5 w-5 ' type="checkbox" name="userdata" id="user" />
      <label className='text-[14px] font-semibold ' htmlFor="user">Make this information anonymous</label>
      </div>
      <div className='flex items-center gap-x-5 mt-3'>
        <div className='w-full'>
          <label className='text-[14px] font-semibold' htmlFor="firstname">First Name</label>
          <br />
          <input className='w-full bg-gray-300 rounded-lg px-3 outline-0 text-xs py-2' type="text" name="firstname" id="firstname" />
        </div>
        <div className='w-full'>
          <label className='text-[14px] font-semibold' htmlFor="lastname">Last Name</label>
          <br />
          <input className='w-full bg-gray-300 rounded-lg px-3 outline-0 text-xs py-2' type="text" name="lastname" id="lastname" />
        </div>
      </div>
      <div className='mt-3'>
        <label className='text-[14px] font-semibold' htmlFor="email">Email Address</label>
          <br />
          <input className='w-full bg-gray-300 rounded-lg px-3 outline-0 text-xs py-2' type="email" name="email" id="email" />
      </div>
      </div>

      {/* cardinfo */}

      <div className='max-w-[600px] w-full mt-7 bg-white p-5 rounded-xl ' >
      <p className='text-[14px] font-medium '>Payment information</p>
      <p className='text-[14px] text-gray-600 mt-2 '>Your payment is secure and encrypted</p>

      <div className='mt-3'>
        <label className='text-[14px] font-semibold' htmlFor="cardnumber">Email Address</label>
          <br />
          <input className='w-full bg-gray-300 rounded-lg px-3 outline-0 text-xs py-2' type="number" name="cardnumber" id="cardnumber" />
      </div>
      <div className='flex items-center gap-x-5 mt-3'>
        <div className='w-[70%]'>
          <label className='text-[14px] font-semibold' htmlFor="expdate">Expiry Date</label>
          <br />
          <input className='w-full bg-gray-300 rounded-lg px-3 outline-0 text-xs py-2' type="date" name="expdate" id="expdate" />
        </div>
        <div className='w-[30%]'>
          <label className='text-[14px] font-semibold' htmlFor="cvv">CVV</label>
          <br />
          <input className='w-full bg-gray-300 rounded-lg px-3 outline-0 text-xs py-2' type="text" name="cvv" id="cvv" />
        </div>
      </div>
      <div className='mt-3'>
        <label className='text-[14px] font-semibold' htmlFor="number">Billing Zip Code</label>
          <br />
          <input className='w-full bg-gray-300 rounded-lg px-3 outline-0 text-xs py-2' type="number" name="number" id="number" />
      </div>
      </div>

      <div className='max-w-[600px] w-full mt-7 p-5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 ' >
        <div className='flex justify-between items-center text-white'>
          <span>Total Donation</span>
          <span className='text-2xl'>${donated}</span>
        </div>
        <button className='flex w-full justify-center font-medium bg-white py-1 text-purple-500 rounded-lg mt-5'>Complete Donation</button>
      </div>

      <p className='text-center text-gray-400 mt-6'>By completing this donation you are agree to our terms and condition</p>
    </section>
  )
}

export default Payment