import React from "react";

export default function MainPageHero() {
  return (
    <div className="wrapper">
      <div className="main-page-hero">
        <div className="main-page-hero-top">
          <h1 className="hero-firstTitle">Lorem ipsum dolor sit amet</h1>
          <h1 className="hero-subTitle">
            consectetur adipisicing elit Consectetur.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            quod nihil laboriosam rerum blanditiis explicabo consequatur.
            Consectetur quod nihil laboriosam rerum blanditiis explicabo
            consequatur
          </p>
          <button className="contact-button contact-button-hero">
            <a href="">Contact</a>
          </button>
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
