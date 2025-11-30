import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
const Login = () => {
  return (
    <div className={`min-h-screen  fixed left-0 top-0 right-0 flex  items-center justify-center px-8 `}>
                        <form className='w-full max-w-[550px] bg-gray-300 min-h-20 px-5 py-8 flex flex-col items-center gap-y-5 rounded-2xl'>
                          <h1 className='text-center text-3xl font-bold text-blue-500'>Login</h1>
                          <div className='w-full'>
                            <label htmlFor="username">Username</label>
                            <input className='w-full flex  bg-white py-1 px-5 text-xm' type="text" name="username" id="username" />
                          </div>
                          <div className='w-full'>
                            <label htmlFor="email">Email</label>
                            <input className='w-full flex  bg-white py-1 px-5 text-xm' type="email" name="email" id="email" />
                          </div>
                          <div className='w-full'>
                            <label htmlFor="password">Password</label>
                            <input className='w-full flex  bg-white py-1 px-5 text-xm' type="password" name="password" id="password" />
                          </div>

                            <div className='w-full flex items-center justify-center gap-x-5'>
                              <button type='button' className='py-1 px-5 text-xm  md:text-xl text-white bg-green-500 font-semibold rounded-2xl'>Sign In</button>
                              <button type='button' className='py-1 px-5 text-xm  md:text-xl text-white bg-green-500 font-semibold rounded-2xl'>Sign Up</button>
                            </div>

                              <div className='w-full flex items-center justify-center text-xl md:text-2xl gap-x-3'>
                                <span className='p-2 md:p-3 bg-blue-500 text-white rounded-full '><FaFacebook /></span>
                                <span className='p-2 md:p-3 bg-red-500 text-white rounded-full '><FaGoogle /></span>
                               
                              </div>
                            
                        </form>
              </div>
  )
}

export default Login