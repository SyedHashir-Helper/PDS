import React from 'react'
import Navbar from '../../Components/Navbar'
import HeroSection from './HeroSection'
import HorizontalCard from '../../Components/HorizontalCard'
import service from "../../assets/images/service.png"
import Advantages from '../WhyHirePds/Advantages'
import WhyHirePds from '../WhyHirePds/WhyHirePds'
import Footer from '../../Components/Footer'

const Homepage = () => {
  return (
    <>
        <Navbar/>
        <HeroSection />
        <WhyHirePds />
        <Footer/>
    </>
  )
}

export default Homepage
