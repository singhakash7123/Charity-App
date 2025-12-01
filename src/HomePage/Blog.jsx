
import { Link } from 'react-router-dom'
import Heading from '../Headings/Heading'
import HeadingButton from '../Headings/HeadingButton'
import Newsimg1 from '../assets/Newsimg1.jpg'
import Newsimg2 from '../assets/Newsimg2.jpg'
import Newsimg3 from '../assets/Newsimg3.jpg'
import Newsimg4 from '../assets/Newsimg4.jpg'
import Newsimg5 from '../assets/blogimg2.avif'
import Newsimg6 from '../assets/footerimg1.avif'
const Blog  = () => {
  return (
    <section className='mt-20 flex flex-col items-center px-10 '>
        <div className='flex flex-col md:flex-row gap-y-7 md:gap-y-0  lg:justify-between items-center max-w-[1520px] w-full' >

        <div className='w-full' >
        <Heading content='News And Updates'/>
        </div>
        <div className='w-full text-right'>
          <Link to={'/news'} className='text-white  py-4 lg:py-5 px-8 lg:px-10 font-bold bg-blue-800 text-center text-xs xl:text-[16px] tracking-wide lg:tracking-[2px] ' >READ THE BLOG</Link>
        
        </div>
        </div>
        <div className=' max-w-[1520px] w-full flex flex-col  md:flex-row md:flex-wrap items-center mt-15 justify-center ' >
            <div className=' w-full max-w-[500px] md:w-1/3 aspect-5/6 md:aspect-4/5 bg-amber-400 ' >
            <img className='w-full h-full object-cover' src={Newsimg1} alt="" />
             </div>
            <div className=' w-full max-w-[500px] md:w-1/3 aspect-5/6 md:aspect-4/5 bg-red-400 ' >
            <img className='w-full h-full object-cover' src={Newsimg2} alt="" />
             </div>
            <div className=' w-full max-w-[500px] md:w-1/3 aspect-5/6 md:aspect-4/5 bg-green-400 ' >
            <img className='w-full h-full object-cover' src={Newsimg3} alt="" />
             </div>
            <div className=' w-full max-w-[500px] md:w-1/3 aspect-5/6 md:aspect-4/5 bg-blue-400 ' >
            <img className='w-full h-full object-cover' src={Newsimg4} alt="" />
             </div>
            <div className=' w-full max-w-[500px] md:w-1/3 aspect-5/6 md:aspect-4/5 bg-purple-400 ' >
            <img className='w-full h-full object-cover' src={Newsimg5} alt="" />
             </div>
            <div className=' w-full max-w-[500px] md:w-1/3 aspect-5/6 md:aspect-4/5 bg-orange-400 ' >
            <img className='w-full h-full object-cover' src={Newsimg6} alt="" />
             </div>
        </div>
        
    </section>
  )
}

export default Blog 