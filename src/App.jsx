import React from 'react'
import Hero from './HomePage/Hero'
import Header from './Header/Header'
import Causes from './HomePage/Causes'
import Story from './HomePage/Story'
import Footer from './Footer/Footer'
import Gallery from './HomePage/Gallery'
import Blog from './NewsAndUpdates/Blog'
import Agenda from './HomePage/Agenda'
import Staff from './Staff/Staff'
import ScrollReveal from './component/ScrollReveal'

const App = () => {
 
  return (
    <>
    <Header/>
   <Hero/>

   <ScrollReveal>

   <Causes/>
   </ScrollReveal>
    <ScrollReveal>

   <Story/>
   </ScrollReveal>
   <ScrollReveal>

   <Blog/>
   </ScrollReveal>
    <ScrollReveal>

   <Staff/>
   </ScrollReveal>
   <ScrollReveal>

   <Agenda/>
   </ScrollReveal>
    <ScrollReveal>

   <Gallery/>
   </ScrollReveal>

   <Footer/>
    </>
  )
}

export default App