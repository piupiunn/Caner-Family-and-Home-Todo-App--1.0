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

  useEffect(() => {
    const smoothScrollTo = (targetPosition) => {
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      let startTime = null;

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;

        // Ease-in-out fonksiyonu ile yumuşak geçiş
        const run = easeInOutQuad(timeElapsed, startPosition, distance, 300); // 300ms sürede yumuşak geçiş
        window.scrollTo(0, run);

        if (timeElapsed < 300) requestAnimationFrame(animation); // Eğer süre dolmadıysa animasyonu devam ettir
      };

      requestAnimationFrame(animation);
    };

    // Yumuşak geçiş için easing fonksiyonu
    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const handleScroll = (event) => {
      const delta = event.deltaY;

      const currentSectionIndex = sections.current.findIndex(
        (section) => window.scrollY < section.offsetTop + section.offsetHeight
      );

      if (delta > 0 && currentSectionIndex < sections.current.length - 1) {
        const nextSection = sections.current[currentSectionIndex + 1];
        smoothScrollTo(nextSection.offsetTop);
      } else if (delta < 0 && currentSectionIndex > 0) {
        const prevSection = sections.current[currentSectionIndex - 1];
        smoothScrollTo(prevSection.offsetTop);
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div>
      <div ref={(el) => (sections.current[0] = el)}>
        <MainPageHero />
      </div>

      <h1 className="section-titles" ref={(el) => (sections.current[1] = el)}>
        Vertical Solutions
      </h1>
      <VerticalSolutionsCarousel />

      <div ref={(el) => (sections.current[2] = el)}>
        <Connectivity />
      </div>

      <div ref={(el) => (sections.current[3] = el)}>
        <UseCases />
      </div>

      <h1 className="section-titles" ref={(el) => (sections.current[4] = el)}>
        Our Partners
      </h1>
      <Partners />

      <h1 className="section-titles" ref={(el) => (sections.current[5] = el)}>
        Blog
      </h1>
      <HomeBlog />

      <h1 className="section-titles" ref={(el) => (sections.current[6] = el)}>
        FAQ
      </h1>
      <Faq />

      <h1 className="section-titles" ref={(el) => (sections.current[7] = el)}>
        Contact Us
      </h1>
      <Contact />
    </div>
  );
}
