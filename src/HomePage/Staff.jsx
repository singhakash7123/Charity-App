
import Heading from '../Headings/Heading'
import HeadingButton from '../Headings/HeadingButton'

const Staff = () => {
  return (
    <div  className='flex flex-col items-center mt-20 md:px-0 '>
      <div className='max-w-[1400px] w-full flex flex-col md:flex-row gap-y-5 md:gap-y-0 items-center px-10 ' >
       <div className='w-full flex justify-start items-center'> <Heading content={'OurStaff'} /> </div>
       <div className='w-full flex justify-end items-center'> <HeadingButton content={'More Staff'} /> </div>
       
      </div>

      <div className='w-full flex flex-col  md:flex-row items-center mt-25 '>
        <div className='max-w-[500px] w-full aspect-square bg-red-500'>
          <img className='w-full h-full object-cover  ' src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZW1wbG95ZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" alt="" />
        </div>
        <div className='max-w-[500px] w-full aspect-square bg-green-500'>
          <img className='w-full h-full object-cover  ' src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVtcGxveWVlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600" alt="" />
        </div>
        <div className='max-w-[500px] w-full aspect-square bg-yellow-500'>
          <img className='w-full h-full object-cover  ' src="https://images.unsplash.com/photo-1558222218-b7b54eede3f3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGVtcGxveWVlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600" alt="" />
        </div>
        <div className='max-w-[500px] w-full aspect-square bg-blue-500'>
          <img className='w-full h-full object-cover  ' src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1wbG95ZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" alt="" />
        </div>
       
      </div>
    </div>
    )
}

export default Staff