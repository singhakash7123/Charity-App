import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { FaPinterestP } from "react-icons/fa";
import Gallerimg1 from '../assets/Galleryimg1.jpg'
import Gallerimg2 from '../assets/Galleryimg2.jpg'
import Gallerimg3 from '../assets/Galleryimg3.jpg'
import Gallerimg4 from '../assets/Galleryimg4.jpg'
import Gallerimg5 from '../assets/Galleryimg5.jpg'

const Gallery = () => {
  return (
    <section className=' mt-25 ' >
    <div className='flex flex-col items-center'>
        <h1 className='text-4xl text-gray-800 font-extrabold tracking-wide' >Gallery</h1>
        <div className='w-10 h-1 bg-red-400 mt-2'></div>
    </div>

        <div className='flex flex-col lg:flex-row items-center  min-h-[400px] mt-22 '>
            <div className=' w-full aspect-16/9 lg:aspect-square bg-green-400 ' >
                <img className='w-full h-full object-cover' src={Gallerimg1} alt="" />
            </div>
            <div className=' w-full aspect-16/9 lg:aspect-square bg-red-400 ' >
                <img className='w-full h-full object-cover' src={Gallerimg2} alt="" />
            </div>
            <div className=' w-full aspect-16/9 lg:aspect-square bg-yellow-400 ' >
                <img className='w-full h-full object-cover' src={Gallerimg3} alt="" />
            </div>
            <div className=' w-full aspect-16/9 lg:aspect-square bg-blue-400 ' >
                <img className='w-full h-full object-cover' src={Gallerimg4} alt="" />
            </div>
            <div className=' w-full aspect-16/9 lg:aspect-square bg-cyan-400 ' >
                <img className='w-full h-full object-cover' src={Gallerimg5} alt="" />
            </div>
            
        </div>
        <div className='w-screen bg-blue-700 ' >
        <div className='min-h-75 max-w-[500px] md:max-w-full w-full  mx-auto md:mx-0 gap-y-10 md:gap-y-0  flex flex-col md:flex-row items-center justify-center md:justify-around px-5 ' >
            <div className=' flex items-stretch gap-x-6 w-full md:w-fit' >
                <div>

                <h2 className='text-3xl xl:text-4xl text-white mt-1'><IoCallOutline /></h2>
                </div>
                 <div>
                <h2 className=' gap-x-2 text-3xl xl:text-4xl text-white' >Call Us! <span className='font-bold' >1800-2355-2356</span></h2>
                <h4 className='text-gray-400 text-xl xl:text-2xl mt-4'>1810 Campus Way WA 98011</h4>
            </div>
            </div>
           
            <div className='w-full  md:w-fit ' >
                <h5 className='text-lg xl:text-2xl text-gray-400 text-right' >Follow Us On</h5>
                <div className='flex gap-x-8 xl:gap-x-11 text-white mt-3 justify-end'>
                    <a className='text-lg lg:text-2xl xl:text-[28px] ' href="#"><FaFacebook /></a>
                    <a className='text-lg lg:text-2xl xl:text-[28px] ' href="#"><FaPinterestP /></a>
                    <a className='text-lg lg:text-2xl xl:text-[28px] ' href="#"><FaLinkedin /></a>
                    <a className='text-lg lg:text-2xl xl:text-[28px] ' href="#"><FaXTwitter /></a>
                    <a className='text-lg lg:text-2xl xl:text-[28px] ' href="#"><FaInstagram /></a>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Gallery