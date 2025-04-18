import React from 'react'
import Header from '../Components/Header'
import AboutUs from '../Components/AboutUs'
import VisionMission from '../Components/Mission'
import Infrastructure from '../Components/Infrastructure'
import InfoSection from '../Components/InfoSection'
import BrandShowcase from "../Components/BrandShowcase"
import Cate from "../Components/Cate"
import ContactUs from '../Components/ContactUs'
import TMBioEnergy from '../Components/TMBioEnergy'
import TripleAAA from '../Components/TripleAAA'
import QualityCompliance from '../Components/QualityCompliance'
const Home = () => {
  return (
    <div>
      <Header />
      <AboutUs />
      <TMBioEnergy />
      <QualityCompliance />
      {/* <TripleAAA /> */}
      <VisionMission />
      <Cate />
      <Infrastructure />
      {/* <InfoSection /> */}
      <BrandShowcase />
      <ContactUs />
    </div>
  )
}

export default Home