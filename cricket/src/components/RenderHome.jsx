import React from "react";
import Home from "./Home";
import KeyFeatures from "./KeyFeautures";
import About from "./About";
import Advantages from "./Advantages";
import GeneralSteps from "./GeneralSteps";
import WhyUs from "./WhyUs";
import Faq from "./Faq";

const RenderHome = () => {
  return (
    <div>
      <Home />
      <KeyFeatures />
      <About />
      <Advantages />
      <GeneralSteps />
      <WhyUs />
      <Faq />
      
    </div>
  );
};

export default RenderHome;
