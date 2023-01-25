import React, { useEffect, useState } from "react";

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
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";

const index = () => {
  const [scrolled, setScrolled] = useState(false);
  console.log(scrolled);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = (e) => {
        const scrollY = window.scrollY;

        if (scrollY > 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div>
      <Header scrolled={scrolled} />
      <Hero />
      <Solutions />
      <Partners />
      <SuccessCase />
      <Testimonials />
      <Trust />
      <Region />
      <Bcorp />
      <Questions questions={questionsHome} />
      <Contact />
      <Content />
      <Footer />
    </div>
  );
};

export default index;
