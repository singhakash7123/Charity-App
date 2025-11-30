
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaChildren } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Story = () => {
  return (
    <section className='mt-20' >
        <div className='flex flex-col md:flex-row items-stretch  w-screen '>
            <div className='w-full  bg-red-300'>
                <img className='w-full h-full object-cover ' src="https://plus.unsplash.com/premium_photo-1683134557797-55ab062573b5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" alt="" />
            </div>
            <div className='w-full  md:max-w-1/2 bg-gray-900 px-5 lg:px-20 py-20 '>
                <div className='flex items-center gap-x-4 ' >

                <h3 className='font-bold text-red-400 text-xl lg:text-[28px]'>Our Story</h3>
                <div className='w-7 h-1 bg-red-400 mt-5 '></div>
                </div>
                <h2 className=' text-4xl lg:text-5xl text-white font-semibold mt-5 tracking-wider ' >Who We are?</h2>
                <p className='text:lg lg:text-xl text-gray-300 mt-8' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem minus, consequuntur libero nesciunt doloribus molestias eius consectetur eum modi inventore aut aspernatur laborum, mollitia labore non dolores eveniet, tempora rem quasi numquam? Commodi praesentium cum id harum quos repellat repellendus.</p>
                <Link to={'/news'} className=' flex items-center gap-x-3 w-fit text-white font-semibold text-xl lg:text-2xl bg-blue-800 px-5 lg:px-8 py-2 lg:py-3 mt-12'>Learn More <div className=' font-bold text-3xl' ><IoIosArrowRoundForward /></div> </Link>
            </div>
        </div>
        <div className='flex  items-stretch  w-screen' >
            <div className='w-full  md:max-w-1/2 bg-blue-900 px-5 lg:px-20 py-20 '>
                <div className='flex items-center gap-x-4 ' >

                <h3 className='font-bold text-red-400 text-xl lg:text-[28px]'>Our Story</h3>
                <div className='w-7 h-1 bg-red-400 mt-5 '></div>
                </div>
                <h2 className=' text-4xl lg:text-5xl text-white font-semibold mt-5 tracking-wider ' >Why Choose Us?</h2>
                <p className='text:lg lg:text-xl text-gray-300 mt-8' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi repellendus rerum perspiciatis, quo ea inventore delectus fuga corporis sequi qui obcaecati facilis neque debitis facere expedita quaerat aut id, quibusdam dolorem quam enim? Quis obcaecati natus quae doloremque non! Earum.</p>
                <Link to={'/news'} className='flex items-center gap-x-3  w-fit text-blue-800 font-semibold text-xl lg:text-2xl bg-white px-5 lg:px-8 py-2 lg:py-3 mt-12'>Learn More <div className=' font-bold text-3xl text-red-400' ><IoIosArrowRoundForward /></div> </Link>
            </div>
            <div className='w-full hidden md:block  bg-red-300'>
                <img className='w-full h-full object-cover '  src="https://plus.unsplash.com/premium_photo-1683134055585-3d84cb07b60e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" alt="" />
            </div>
        </div>
        <div className='w-screen bg-black min-h-[450px] flex flex-col md:flex-row items-center justify-around p-10 gap-y-8 md:gap-y-0 ' >
            <div className='flex flex-col items-center  gap-y-3 ' >
                <span className='text-6xl text-red-400' ><FaHandHoldingHeart /></span>
                <h2  className='text-white text-4xl lg:text-5xl font-extrabold mt-5' >30M</h2>
                <span className='flex text-xl lg:text-2xl  text-gray-400 text-center ' >Number of Supporters</span>
            </div>
            <div className='flex flex-col items-center  gap-y-3 ' >
                <span className='text-6xl text-red-400' ><FaHandHoldingUsd /></span>
                 <h2  className='text-white text-4xl lg:text-5xl font-extrabold mt-5' >$100M</h2>
                <span className='flex text-xl lg:text-2xl  text-gray-400 text-center ' >Fund Raised</span>
            </div>
            <div className='flex flex-col items-center  gap-y-3' >
                <span className='text-6xl text-red-400' ><FaChildren /></span>
                 <h2  className='text-white text-4xl lg:text-5xl font-extrabold mt-5' >20M</h2>
                <span className='flex text-xl lg:text-2xl text-gray-400 text-center  ' >Children helped</span>
            </div>
            <div className='flex flex-col items-center  gap-y-3' >
                <span className='text-6xl text-red-400' ><FaPeopleGroup /></span>
                 <h2  className='text-white text-4xl lg:text-5xl font-extrabold mt-5' >18,000</h2>
                <span className='flex text-xl lg:text-2xl  text-gray-400 text-center ' >Volunteer Worldwide</span>
            </div>
        </div>

    </section>
  )
}

export default Story