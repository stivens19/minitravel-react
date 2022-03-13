import React from 'react'
import Contact from '../components/sections/Contact';
import Carousel from './../components/sections/Carousel';
import Info from './../components/sections/Info';


const Home = () => {
  return (
      <>
        <Carousel />
        <Info />
        <Contact />
      </>
  )
}

export default Home