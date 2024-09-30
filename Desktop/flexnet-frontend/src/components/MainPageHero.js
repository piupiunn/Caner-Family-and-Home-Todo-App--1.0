import React from "react";
import { Link } from "react-router-dom";

export default function MainPageHero() {
  return (
    <div className="wrapper">
      <div className="main-page-hero">
        <div className="main-page-hero-top">
          <h1 className="hero-firstTitle ">
            FlexNet: Seamless 4G/5G Connectivity with Industry-Specific
            Solutions
          </h1>
          <h1 className="hero-subTitle">
            More than just connectivity. We provide pre-integrated & certified
            solutions with cutting-edge devices and applications through our
            marketplace
          </h1>

          <div className="flex">
            <button className="contact-button contact-button-hero">
              <Link to="/vertical-solutions">Explore Industry Solutions</Link>
            </button>

            <button className="contact-button contact-button-hero ml-5">
              <Link to="/contact">Contact</Link>
            </button>
          </div>
        </div>
        <div className="main-page-hero-bottom">
          <img
            src="https://sakai.primereact.org/demo/images/landing/screen-1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
