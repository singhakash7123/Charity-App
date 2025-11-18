import React, { lazy, Suspense } from 'react'


import Header from '../Header/Header'
import Hero from './Hero'
import Agenda from './Agenda'
import Causes from './Causes'
import Story from './Story'
import Gallery from './Gallery'
import Staff from './Staff'
import Blog from './Blog'
import ScrollReveal from '../component/ScrollReveal'



const Home = () => {
  return (
    <>
   <Header/>
    <Hero/>

  <ScrollReveal thresvalue={0.05} >
   <Causes/>
  </ScrollReveal>

  
  <ScrollReveal thresvalue={0.05} >
   <Story/>
  </ScrollReveal>

  <ScrollReveal thresvalue={0.05} >
   <Blog/>
  </ScrollReveal>

  <ScrollReveal thresvalue={0.05} >
   <Staff/>
  </ScrollReveal>


  <ScrollReveal thresvalue={0.05} >
   <Agenda/>
  </ScrollReveal>

    <ScrollReveal thresvalue={0.05} >
   <Gallery/>
   </ScrollReveal>
    </>
  )
}

export default Home