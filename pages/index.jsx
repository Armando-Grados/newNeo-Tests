import React from "react";

import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Bcorp from "../components/Bcorp/Bcorp";
import Contact from "../components/Contact/Contact";
import Region from "../components/Region/Region";
import SuccessCase from "../components/SuccessCase/SuccessCase";
import Solutions from "../components/Solutions/Solutions";
import Partners from "../components/Companies/Partners/Partners";
import Trust from "../components/Companies/Trust/Trust";
import Questions from "../components/Questions/Questions";
import { questionsHome } from "../utilities/home/questions";
import Testimonials from "../components/Testimonials/Testimonials";

const index = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Solutions />
      <Partners />
      <SuccessCase />
      {/* <Testimonials /> */}
      <Trust />
      <Region />
      <Bcorp />
      <Questions questions={questionsHome} />
      <Contact />
    </div>
  );
};

export default index;
