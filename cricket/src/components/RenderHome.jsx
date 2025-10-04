import React from 'react'
import Home from './Home'
import KeyFeatures from './KeyFeautures'
import About from './About'
import Advantages from './Advantages'
import GeneralSteps from './GeneralSteps'
import WhyUs from './WhyUs'
const RenderHome = () => {
  return (
    <div>
      <Home/>
      <KeyFeatures/>
      <About/>
        <Advantages/>
        <GeneralSteps/>
        <WhyUs/>
    </div>
  )
}

export default RenderHome
