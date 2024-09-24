import React, { useRef } from "react";
import Contact from "../components/Contact";

export default function ContactUsPage() {
  const mapRef = useRef(null); // Create a reference to the map

  const scrollToMap = () => {
    if (mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="contact-us-page">
      <h1 className="section-titles contact-page-title">Contact Our Team</h1>
      <Contact />

      <div className="embed-map" ref={mapRef}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.203526397624!2d11.57817947685227!3d48.16415854930964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e779f6b17fda7%3A0x1962059adc04b0f9!2sOpticoms!5e0!3m2!1str!2str!4v1727101131740!5m2!1str!2str"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
