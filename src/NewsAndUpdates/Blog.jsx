import React from 'react'
import Heading from '../Headings/Heading'
import HeadingButton from '../Headings/HeadingButton'

const Blog  = () => {
  return (
    <section className='mt-20 flex flex-col items-center px-10 '>
        <div className='flex flex-col md:flex-row gap-y-7 md:gap-y-0  lg:justify-between items-center max-w-[1520px] w-full' >

        <div className='w-full' >
        <Heading content='News And Updates'/>
        </div>
        <div className='w-full text-right'>
        <HeadingButton content='READ THE BLOG' />
        </div>
        </div>
        <div className=' max-w-[1520px] w-full flex flex-col  md:flex-row md:flex-wrap items-center mt-15 justify-center ' >
            <div className=' w-full max-w-[500px] md:w-1/3 aspect-5/6 md:aspect-4/5 bg-amber-400 ' >
            <img className='w-full h-full object-cover' src="https://plus.unsplash.com/premium_photo-1683140523610-13deecbd20b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG92ZXJ0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600" alt="" />
             </div>
            <div className=' w-full max-w-[500px] md:w-1/3 aspect-5/6 md:aspect-4/5 bg-red-400 ' >
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1494832944834-a08818c634b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvdmVydHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" alt="" />
             </div>
            <div className=' w-full max-w-[500px] md:w-1/3 aspect-5/6 md:aspect-4/5 bg-green-400 ' >
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1507427100689-2bf8574e32d4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvdmVydHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" alt="" />
             </div>
            <div className=' w-full max-w-[500px] md:w-1/3 aspect-5/6 md:aspect-4/5 bg-blue-400 ' >
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" alt="" />
             </div>
            <div className=' w-full max-w-[500px] md:w-1/3 aspect-5/6 md:aspect-4/5 bg-purple-400 ' >
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1494386346843-e12284507169?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" alt="" />
             </div>
            <div className=' w-full max-w-[500px] md:w-1/3 aspect-5/6 md:aspect-4/5 bg-orange-400 ' >
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1603827457577-609e6f42a45e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRvbmF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600" alt="" />
             </div>
        </div>
        
    </section>
  )
}

export default Blog 