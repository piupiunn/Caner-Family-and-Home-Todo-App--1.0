import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import MainPageHero from "../components/MainPageHero";
import VerticalSolutionsCarousel from "../components/VerticalSolutionsCarousel";
import Connectivity from "../components/Connectivity";
import UseCases from "../components/UseCases";
import Partners from "../components/Partners";
import Faq from "../components/Faq";
import HomeBlog from "../components/HomeBlog";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <ReactFullpage
      scrollingSpeed={700} /* Scroll geçiş hızı */
      navigation /* Kenarlarda scroll navigasyonu göstermek için */
      fitToSection={true} /* Section'ları ekranın ortasına hizala */
      verticalCentered={true} /* Section içeriklerini dikeyde ortala */
      scrollOverflow={false} /* Section içerik taşmasını devre dışı bırak */
      render={() => {
        return (
          <div id="fullpage-wrapper">
            {/* Section 1 */}
            <div className="section">
              <MainPageHero />
            </div>

            {/* Section 2 */}
            <div className="section">
              <h1 className=" section-titles">Vertical Solutions</h1>
              <VerticalSolutionsCarousel />
            </div>

            {/* Section 3 */}
            <div className="section">
              <Connectivity />
            </div>

            {/* Section 4 */}
            <div className="section">
              <UseCases />
            </div>

            {/* Section 5 */}
            <div className="section">
              <h1 className="section-titles">Our Partners</h1>
              <Partners />
            </div>

            {/* Section 6 */}
            <div className="section">
              <h1 className="section-titles">Blog</h1>
              <HomeBlog />
            </div>

            {/* Section 7 */}
            <div className="section">
              <h1 className="section-titles">FAQ</h1>
              <Faq />
            </div>

            {/* Section 8 */}
            <div className="section">
              <h1 className="section-titles">Contact Us</h1>
              <Contact />
            </div>
          </div>
        );
      }}
    />
  );
}
