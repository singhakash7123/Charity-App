import React, { Children, useState, useRef, useEffect } from 'react'

const ScrollReveal = ({children}) => {
    const ref = useRef()
    const [visible, setVisible] = useState(false)
    useEffect (()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if(entry.isIntersecting){
                setVisible(true)
                observer.unobserve(entry.target)
            }
        },{threshold:0.05})

        if(ref.current)
            observer.observe(ref.current) ;
        return () => observer.disconnect()

    },[])
  return (
    <div ref = {ref} className={`transition-all duration-600 ease-in-out opacity-0 translate-y-10 ${visible?'opacity-100 translate-y-0':''}`} >{children}</div>
  )
}

export default ScrollReveal