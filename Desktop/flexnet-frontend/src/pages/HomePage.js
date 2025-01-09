import React, { useState, useEffect } from "react";
import { Element, scroller } from "react-scroll";
import MainPageHero from "../components/MainPageHero";
import VerticalSolutionsCarousel from "../components/VerticalSolutionsCarousel";
import Connectivity from "../components/Connectivity";
import UseCases from "../components/UseCases";
import Partners from "../components/Partners";
import Faq from "../components/Faq";
import HomeBlog from "../components/HomeBlog";
import Contact from "../components/Contact";
import VerticalSolutionsHome from "../components/VerticalSolutionsHome";
import UseCasesHome from "../components/UseCasesHome";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState(0); // Active section index
  const sectionNames = [
    "section1",
    "section2",
    "section3",
    "section4",
    "section5",
    "section6",
    "section7",
    "section8",
  ]; // List of section names

  // Function to scroll to a section
  const scrollToSection = (sectionIndex) => {
    if (sectionIndex >= 0 && sectionIndex < sectionNames.length) {
      scroller.scrollTo(sectionNames[sectionIndex], {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
      setActiveSection(sectionIndex); // Update active section
    }
  };

  // Handle scroll event
  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      // Scrolling down
      scrollToSection(activeSection + 1); // Go to next section
    } else {
      // Scrolling up
      scrollToSection(activeSection - 1); // Go to previous section
    }
  };

  // Handle keydown event
  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      scrollToSection(activeSection + 1); // Go to next section
    } else if (event.key === "ArrowUp") {
      scrollToSection(activeSection - 1); // Go to previous section
    }
  };

  // Set up event listeners
  useEffect(() => {
    window.addEventListener("wheel", handleScroll); // Listen for mouse wheel scroll
    window.addEventListener("keydown", handleKeyDown); // Listen for keyboard arrow keys

    // Cleanup function to remove the event listeners
    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeSection]); // Re-add event listeners when activeSection changes

  return (
    <div>
      {/* Section 1 */}
      <Element name="section1">
        <MainPageHero />
      </Element>

      {/* Section 2 */}
      <Element className="section" name="section2">
        <h1 className="section-titles mt-10">Vertical Solutions</h1>
        <p>
          Discover how FlexNet delivers complete solutions for industries like
          Construction, Logistics, Media, Maritime, and more. From 4G/5G
          connectivity to applications and devices, we help solve real-world
          problems.
        </p>
        <VerticalSolutionsHome />
      </Element>

      {/* Section 3 */}
      <Element className="section" name="section3">
        <h1 className="section-titles mt-10">Connectivity</h1>
        <h3 className=" mb-10">
          Our connectivity solution with three different model
        </h3>
        <Connectivity />
      </Element>

      {/* Section 4 */}
      <Element className="section" name="section4">
        <h1 className="section-titles">Use Cases</h1>
        <h3 className=" mb-10">Outlook on the Industries</h3>
        <UseCasesHome />
      </Element>

      {/* Section 5 */}
      <Element className="section" name="section5">
        <h1 className="section-titles">Our Trusted Partners</h1>
        <h3 className=" mb-10">
          FlexNet collaborates with leading partners to bring you the best
          devices, applications, and services.
        </h3>
        <Partners />
      </Element>

      {/* Section 6 */}
      <Element className="section" name="section6">
        <h1 className="section-titles">Stay Updated with FlexNet Insights</h1>
        <h3>
          Read the latest trends, industry insights, and updates from FlexNet.
        </h3>
        <HomeBlog />
      </Element>

      {/* Section 7 */}
      <Element className="section" name="section7">
        <h1 className="section-titles">Frequently Asked Questions</h1>
        <h3>
          Got questions? We’ve got answers. Find out more about FlexNet’s
          solutions, deployments, and services.
        </h3>
        <Faq />
      </Element>

      {/* Section 8 */}
      <Element className="section" name="section8">
        <h1 className="section-titles">Contact Us</h1>
        <Contact />
      </Element>
    </div>
  );
}
