import React from "react";
import MainPageHero from "../components/MainPageHero";
import VerticalSolutions from "../components/VerticalSolutions";
import Connectivity from "../components/Connectivity";
import UseCases from "../components/UseCases";
import Partners from "../components/Partners";
import Faq from "../components/Faq";
import HomeBlog from "../components/HomeBlog";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <div>
      <MainPageHero />
      <h1 className="section-titles">Vertical Solutions</h1>
      <VerticalSolutions />
      <Connectivity />
      <UseCases />
      <h1 className="section-titles">Our Partners</h1>
      <Partners />
      <h1 className="section-titles">Blog</h1>
      <HomeBlog />
      <h1 className="section-titles">FAQ</h1>
      <Faq />
      <h1 className="section-titles">Contact Us</h1>
      <Contact />
    </div>
  );
}
