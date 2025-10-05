import React from 'react'
import CardSlider from './CardSlider'
import Hero from './Hero'
import PromoSlider from './PromoSlider'
import Course from './Course'

const Home = () => {
  return (
      <>
          <CardSlider />
          <Hero/>
          <PromoSlider />
          <Course/>
      </>
  )
}

export default Home