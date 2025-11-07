import React from 'react'
import background from '../assets/background.jpg'
const CaseStudies = () => {
  return (
     <section className=''>
        <div className='w-screen bg-cover bg-center min-h-[60vh] text-white flex flex-col items-center justify-center relative mt-15 xl:mt-0 ' style={{backgroundImage:`url(${background})`}}>
         <h1 className='text-4xl md:text-5xl xl:text-7xl font-extrabold' >PortFolio 3 Columns</h1>
         <h2 className=' text-xl xl:text-2xl font-semibold text-center mt-6 xl:mt-13 mb-5 xl:mb-13 tracking-widest text-violet-300'>NO EXCERPT, WITH SPACE </h2>
         
        </div>
        <div className='max-w-[1400px] w-full mx-auto py-20 px-5 lg:px-0 '>
         <div className='font-semibold lg:text-lg flex items-center justify-center gap-x-6 lg:gap-x-18'>
            <button>ALL</button>
            <button>FOOD</button>
            <button>HELP</button>
            <button>PEACE</button>
         </div>
         <div className='flex  items-center justify-center flex-wrap gap-x-10 gap-y-10 mt-15 '>
            <div className='max-w-[440px] w-full ' >
               <img className='w-full aspect-4/3 bg-blue-500' src="https://plus.unsplash.com/premium_photo-1683140538884-07fb31428ca6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" alt="" />
               <h4 className='font-semibold text-center text-[22px] mt-8 '>International KKFL event</h4>
            </div>
            <div className='max-w-[440px] w-full  ' >
               <img className='w-full aspect-4/3 bg-blue-500' src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" alt="" />
               <h4 className='font-semibold text-center text-[22px] mt-8 '>New Community Center</h4>
            </div>
            <div className='max-w-[440px] w-full  ' >
               <img className='w-full aspect-4/3 bg-blue-500' src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" alt="" />
               <h4 className='font-semibold text-center text-[22px] mt-8 '>Help Fight Poverty</h4>
            </div>
            <div className='max-w-[440px] w-full  ' >
               <img className='w-full aspect-4/3 bg-blue-500' src="https://plus.unsplash.com/premium_photo-1683134059041-3604e05950e4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRvbmF0aW9uJTIwY2hhcml0aXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600" alt="" />
               <h4 className='font-semibold text-center text-[22px] mt-8 '>CI Honoured 2016</h4>
            </div>
            <div className='max-w-[440px] w-full  ' >
               <img className='w-full aspect-4/3 bg-blue-500' src="https://plus.unsplash.com/premium_photo-1681492084473-1bf689e085c9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvbmF0aW9uJTIwY2hhcml0aXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600" alt="" />
               <h4 className='font-semibold text-center text-[22px] mt-8 '>Help Vunerable Youth in Honduras</h4>
            </div>
            <div className='max-w-[440px] w-full  ' >
               <img className='w-full aspect-4/3 bg-blue-500' src="https://plus.unsplash.com/premium_photo-1681492068263-85e9b6cfe8a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRvbmF0aW9uJTIwY2hhcml0aXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600" alt="" />
               <h4 className='font-semibold text-center text-[22px] mt-8 '>Fight Proverty Through Music</h4>
            </div>
         </div>
        </div>
       
        
     </section>
  )
}

export default CaseStudies