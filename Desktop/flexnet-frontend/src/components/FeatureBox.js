import React from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

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
      <div
        className={`lg:w-1/2 flex justify-center p-6 rounded-lg ${imageBgColor}`}
      >
        <img src={imageSrc} alt="Feature Illustration" className="rounded-lg" />
      </div>

      {/* Sağ Bölüm - İkon, Başlık ve Metin */}
      <div
        className="lg:w-1/2 text-end lg:text-end lg:pl-8 mt-6 lg:mt-0 
    .lg\:align-items-end 
    "
      >
        {/* İkon Kutusu */}
        <div className="flex justify-center lg:justify-end mb-4">
          <div
            className={`feature-icon rounded-lg flex items-center justify-center ${iconBgColor}`}
          >
            {icon}
          </div>
        </div>

        {/* Başlık */}
        <h3 className="line-height-1 text-900 text-4xl font-normal feature-title">
          {title}
        </h3>

        {/* Açıklama */}
        <p className="text-700 text-2xl line-height-3 ml-0 md:ml-2 feature-p">
          {description}
        </p>

        <button className="connectivity-button">
          <Link to="/connectivity">Go to Connectivity Page</Link>{" "}
          <FaExternalLinkAlt className="ml-2" />
        </button>
      </div>
    </div>
  );
}
