import React from 'react'
import Header from '../Header/Header'
import Hero from './Hero'
import Agenda from './Agenda'
import Causes from './Causes'
import Story from './Story'
import Gallery from './Gallery'
import Staff from './Staff'
import ScrollReveal from '../component/ScrollReveal'
import Blog from './Blog'
const Home = () => {
  return (
    <>
    <Header/>
   <Hero/>

   <ScrollReveal thresvalue={0} >
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