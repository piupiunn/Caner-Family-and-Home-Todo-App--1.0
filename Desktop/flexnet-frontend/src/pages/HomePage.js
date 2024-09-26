import React, { useRef, useEffect } from "react";
import MainPageHero from "../components/MainPageHero";
import VerticalSolutionsCarousel from "../components/VerticalSolutionsCarousel";
import Connectivity from "../components/Connectivity";
import UseCases from "../components/UseCases";
import Partners from "../components/Partners";
import Faq from "../components/Faq";
import HomeBlog from "../components/HomeBlog";
import Contact from "../components/Contact";

export default function HomePage() {
  const sections = useRef([]);
  const isScrolling = useRef(false); // Use useRef to persist value across renders

  useEffect(() => {
    const smoothScrollTo = (targetPosition) => {
      if (isScrolling.current) return; // Prevent overlapping scrolls
      isScrolling.current = true; // Lock scrolling

      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      let startTime = null;

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;

        // Ease-in-out function for smooth transition
        const run = easeInOutQuad(timeElapsed, startPosition, distance, 300); // 300ms duration
        window.scrollTo(0, run);

        if (timeElapsed < 300) {
          requestAnimationFrame(animation); // Continue animation
        } else {
          isScrolling.current = false; // Unlock scrolling
          window.scrollTo(0, targetPosition); // Ensure precise position
        }
      };

      requestAnimationFrame(animation);
    };

    // Easing function remains the same
    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    console.log(
      sections.current.map((section, index) => ({
        index,
        offsetTop: section.offsetTop,
        offsetHeight: section.offsetHeight,
      }))
    );

    const handleScroll = (event) => {
      event.preventDefault(); // Prevent default scrolling behavior

      if (isScrolling.current) return; // Exit if animation is in progress

      const delta = event.deltaY;

      const currentSectionIndex = sections.current.findIndex(
        (section) =>
          window.scrollY < section.offsetTop + section.offsetHeight - 1
      );

      console.log("Current Section Index:", currentSectionIndex);

      if (delta > 0 && currentSectionIndex < sections.current.length - 1) {
        const nextSection = sections.current[currentSectionIndex + 1];
        smoothScrollTo(nextSection.offsetTop);
      } else if (delta < 0 && currentSectionIndex > 0) {
        const prevSection = sections.current[currentSectionIndex - 1];
        smoothScrollTo(prevSection.offsetTop);
      }
    };

    // Add the event listener with passive: false
    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Main Page Hero Section */}
      <div ref={(el) => (sections.current[0] = el)}>
        <MainPageHero />
      </div>

      {/* Vertical Solutions Section */}
      <div ref={(el) => (sections.current[1] = el)}>
        <h1 className="section-titles">Vertical Solutions</h1>
        <VerticalSolutionsCarousel />
      </div>

      {/* Connectivity Section */}
      <div ref={(el) => (sections.current[2] = el)}>
        <Connectivity />
      </div>

      {/* Use Cases Section */}
      <div ref={(el) => (sections.current[3] = el)}>
        <UseCases />
      </div>

      {/* Our Partners Section */}
      <div ref={(el) => (sections.current[4] = el)}>
        <h1 className="section-titles">Our Partners</h1>
        <Partners />
      </div>

      {/* Blog Section */}
      <div ref={(el) => (sections.current[5] = el)}>
        <h1 className="section-titles">Blog</h1>
        <HomeBlog />
      </div>

      {/* FAQ Section */}
      <div ref={(el) => (sections.current[6] = el)}>
        <h1 className="section-titles">FAQ</h1>
        <Faq />
      </div>

      {/* Contact Us Section */}
      <div ref={(el) => (sections.current[7] = el)}>
        <h1 className="section-titles">Contact Us</h1>
        <Contact />
      </div>
    </div>
  );
}
