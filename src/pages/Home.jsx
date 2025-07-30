import React from 'react'
import Banner from '../components/Banner'
import AboutMe from '../components/AboutMe'
import MyPortfolio from '../components/MyPortfolio'
import OurSkills from '../components/OurSkills'
import Service from '../components/Service'

const Home = () => {
  return (
    <>
      <Banner/>
      <AboutMe/>
      <MyPortfolio/>
      <OurSkills/>
      <Service/>
    </>
  )
}

export default Home