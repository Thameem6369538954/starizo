import React from 'react'
import Header from '../Components/Header'
import AboutUs from '../Components/AboutUs'
import VisionMission from '../Components/Mission'
import Infrastructure from '../Components/Infrastructure'
import InfoSection from '../Components/InfoSection'
import BrandShowcase from "../Components/BrandShowcase"
import Cate from "../Components/Cate"
import ContactUs from '../Components/ContactUs'
const Home = () => {
  return (
    <div>
      <Header />
      <AboutUs />
      <VisionMission />
      <Infrastructure />
      <InfoSection />
      <Cate />
      <BrandShowcase />
      <ContactUs />
    </div>
  )
}

export default Home