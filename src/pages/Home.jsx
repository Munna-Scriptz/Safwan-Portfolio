import React from 'react'
import Banner from '../components/Banner'
import AboutMe from '../components/AboutMe'
import MyPortfolio from '../components/MyPortfolio'
import OurSkills from '../components/OurSkills'
import Service from '../components/Service'
import Awards from '../components/Awards'
import Blog from '../components/blog'
import Subscribe from '../components/Subscribe'

const Home = () => {
  return (
    <>
      <Banner/>
      <AboutMe/>
      <MyPortfolio/>
      <OurSkills/>
      <Service/>
      <Awards/>
      <Blog/>
      <Subscribe/>
    </>
  )
}

export default Home