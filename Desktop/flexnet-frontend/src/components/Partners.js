import React from "react";
import PartnerCarousel from "./PartnerCarousel";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Partners() {
  return (
    <div>
      <PartnerCarousel />

      <button className="partner-button shadow-lg">
        <Link to="partners">Become Partner</Link>
      </button>
    </div>
  );
}
