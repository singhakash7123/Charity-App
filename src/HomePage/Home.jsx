import React from 'react'
import Header from '../Header/Header'
import Hero from './Hero'
import Agenda from './Agenda'
import Causes from './Causes'
import Story from './Story'
import Gallery from './Gallery'
import Staff from './Staff'
import ScrollReveal from '../component/ScrollReveal'
import Footer from '../Footer/Footer'
import Blog from './Blog'
const Home = () => {
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
    </>
  )
}

export default Home