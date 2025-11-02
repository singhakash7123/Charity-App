import React from 'react'

const Agenda = () => {
  return (
    <section className='mt-25 flex items-center justify-center py-10 md:py-25 px-10 '>
        <div className=' max-w-[1500px] w-full flex flex-col md:flex-row md:justify-center items-center gap-x-8  ' >
            <div className='  max-w-[450px] w-full md:w-1/3  p-15 bg-black ' >
                <div className='w-10 h-1 bg-red-400 ' ></div>
                <h2 className='text-white text-6xl mt-5 xl:mt-7 font-extrabold  ' >01</h2>
                <h3 className=' text-[26px] xl:text-4xl text-red-400 mt-5 xl:mt-8 font-medium xl:tracking-wide'>We seek to unlock the possibility</h3>
                <h4 className='text-lg xl:text-[21px] text-gray-400 font-normal  mt-5 xl:mt-8 ' >Towards the end of the 19th century, with the advent of the New Liberalism and the innovative work of Charles</h4>
            </div>
            <div className='  max-w-[450px] w-full md:w-1/3  p-15 bg-blue-600 '>
                <div className='w-10 h-1 bg-red-400 ' ></div>
                <h2 className='text-white text-6xl mt-5 xl:mt-7 font-extrabold  ' >02</h2>
                <h3 className=' text-[26px] xl:text-4xl text-red-400 mt-5 xl:mt-8 font-medium xl:tracking-wide'>We seek to unlock the possibility</h3>
                <h4 className='text-lg xl:text-[21px] text-white font-normal  mt-5 xl:mt-8' >Towards the end of the 19th century, with the advent of the New Liberalism and the innovative work of Charles</h4>
            </div>
            <div className=' max-w-[450px] w-full md:w-1/3  p-15 bg-red-400 ' >
                <div className='w-10 h-1 bg-white ' ></div>
                <h2 className='text-white text-6xl mt-5 xl:mt-7 font-extrabold  ' >03</h2>
                <h3 className=' text-[26px] xl:text-4xl text-blue-600 mt-5 xl:mt-8 font-medium xl:tracking-wide'>We seek to unlock the possibility</h3>
                <h4 className='text-lg xl:text-[21px] text-white font-normal  mt-5 xl:mt-8 ' >Towards the end of the 19th century, with the advent of the New Liberalism and the innovative work of Charles</h4>
            </div>
        </div>
    </section>
  )
}

export default Agenda