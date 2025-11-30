
import background from '../assets/background.avif'


import causeinfo from '../ContentArray/CauseInfo'
import CauseElement from './CauseElement';
const OurCauses = () => {
    const Renderelements = () => {
        return causeinfo.map((item)=>{
        return <CauseElement heading={item.heading}
        donated={item.donated}
        goal={item.goal}
        percentage={item.percentage}
        image={item.image}
        key={item.id}/>
        })
    }
  return (
    <section>
         <div className='w-screen bg-cover bg-center min-h-[60vh] text-white flex flex-col items-center justify-center relative mt-15 xl:mt-0 pb-10 ' style={{backgroundImage:`url(${background})`}}>
         <h1 className='text-4xl md:text-5xl xl:text-7xl text-center font-extrabold' >Cause List - Thumbnail Overlay</h1>
         <h2 className=' text-xl xl:text-2xl font-semibold text-center mt-6 xl:mt-13 mb-5 xl:mb-13 tracking-widest text-violet-300'>EXAMPLE OF CAUSE LIST </h2>
        
        </div>
        <div className='w-screen flex items-center gap-12 justify-center flex-wrap py-20 ' >
            {Renderelements()}
            
        </div>
    </section>
    
  )
}

export default OurCauses