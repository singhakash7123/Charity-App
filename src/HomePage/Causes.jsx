
import Heading from '../Headings/Heading'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlinePlayCircle } from "react-icons/md";
import causeImage from '../assets/causesimage.avif'
import CauseComponent from './CauseComponent';
import causearray from '../ContentArray/CauseInfo'
import { Link } from 'react-router-dom';
const Causes = () => {
  
  const CauseImg = () => {
   return causearray.slice(0,3).map((item)=>{
     return <CauseComponent heading={item.heading}
      donated={item.donated}
      goal={item.goal}
      percentage={item.percentage}
      image={item.image}
      key={item.id}
      progress={item.percentage}
      />
   }
   )
  }

  return (
    <section className=''>
        <div className='lg:max-w-9/10 lg:ml-auto'>
        
       <div className='flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 justify-between 
       lg:pr-50 items-center px-5 '>
         <Heading content='Our Causes' />
        <div className='flex gap-x-2  items-center  self-end ' >
            <button className='text-red-400 font-bold text-xl lg:text-2xl  flex items-center' >View All Causes</button>
            <span  className='text-red-400 font-bold text-2xl flex items-center justify-center' ><FaArrowRightLong /></span>
        </div>
       </div>
       <div className='mt-10 flex flex-col lg:flex-row items-center lg:items-stretch  '>
        <div className=' min-h-[300px] lg:min-h-[436px] bg-red-400 w-99/100 lg:basis-9/20 relative before:h-full  before:w-full before:absolute before:left-0 before:top-0 before:bg-black before:opacity-40 before:content-[""] bg-center bg-cover' style={{backgroundImage:`url(${causeImage})`}} >
        
        <button className='text-9xl text-white font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' ><MdOutlinePlayCircle /></button>
        
        </div>
         <div className='min-h-[400px] bg-gradient-to-tr from-blue-800 to-blue-500 w-full
        lg:basis-11/20 p-[32px]
        lg:p-[48px] text-white ' >
        <h2 className='text-4xl font-bold' >Providing access of clean clothes, sanitised goods and essentials to needy peoples </h2>
        <span className=' flex font-bold text-red-500 mt-6'>$45,278.00</span>
        <div className='w-full h-2 bg-red-500 mt-2' ></div>
        <div className='flex items-center justify-between mt-3 font-bold tracking-wide '>
          <span>150% Donation</span>
          <span>Goal:$30,000.00</span>
        </div>
        <p className='text-white mt-6 font-light lg:text-2xl' >providing access to clean clothes for all weathers to people living in slum area for their healh comfort and dignity. Many of them lack seasonal clothesto cover their body from environmental issue. our motive to provide them the basic facility to survive </p>
        <div className='flex items-center justify-between mt-6' >
          <Link to={'/payment'} className='bg-orange-600 text-bold tracking-wider text-white py-2 px-4 font-bold lg:text-xl rounded-xl'>Donate Now</Link>
          <button className='text-xl' ><FaRegHeart /></button>
        </div>
        </div>
       
       </div>
        </div>
      <div className='flex flex-col lg:flex-row lg:justify-between items-center lg:items-stretch  mt-20 gap-y-5 gap-x-3 w-screen bg-gray-100 ' >
        {CauseImg()}
       </div>

    </section>
  )
}

export default Causes