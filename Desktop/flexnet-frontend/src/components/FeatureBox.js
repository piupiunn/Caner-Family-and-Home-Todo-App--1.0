import React from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import ConnectivityChart from "./ConnectivityChart";

export default function FeatureBox({
  imageSrc,
  imageBgColor,
  icon,
  iconBgColor,
  title,
  description,
}) {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-white p-8 rounded-lg shadow-lg">
      {/* Sol Bölüm - Renkli Arka Plan ve Görsel */}
      <div className={`lg:w-1/2 flex justify-center p-6 rounded-lg ${""}`}>
        <ConnectivityChart />
      </div>

      {/* Sağ Bölüm - İkon, Başlık ve Metin */}
      <div
        className="text-center lg:text-end  mt-6 lg:mt-0 
    .lg\:align-items-end  connectivity-right
    "
      >
        {/* Başlık */}
        <h3 className="line-height-1 text-900 text-4xl font-normal feature-title">
          {title}
        </h3>

        {/* Açıklama */}
        <p className="text-700 text-2xl line-height-3 ml-0 md:ml-2 feature-p">
          {description}
        </p>

        <br />
        <p
          clas
          className="text-700  line-height-3 ml-0 md:ml-2 feature-p connecticity-solutions-p"
        >
          <span className="font-bold"> On-Prem:</span> "Complete control with a
          local server for core operations."
        </p>
        <p className="text-700  line-height-3 ml-0 md:ml-2 feature-p connecticity-solutions-p">
          <span className="font-bold">On-Prem Portable:</span> "A portable
          solution for pop-up networks, easy to set up in minutes."
        </p>
        <p className="text-700  line-height-3 ml-0 md:ml-2 feature-p connecticity-solutions-p">
          <span className="font-bold"> Cloud-Based: </span> "Manage your
          connectivity and applications through our cloud service."
        </p>

        <button className="connectivity-button">
          <Link to="/connectivity">Go to Connectivity Page</Link>{" "}
          <FaExternalLinkAlt className="ml-2" />
        </button>
      </div>
    </div>
  );
}
