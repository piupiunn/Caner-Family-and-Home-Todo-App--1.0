import React from "react";
import FeatureBox from "./FeatureBox";
import { FaMobileAlt } from "react-icons/fa"; // Icon for the mobile section
import FlexNetDiagram from "./FlexnetDiagram";
import ConnectivityChart from "./ConnectivityChart";

export default function Connectivity() {
  return (
    <div className="container mx-auto px-6 py-10 ">
      <FeatureBox
        imageSrc="https://sakai.primereact.org/demo/images/landing/mockup.svg" // Sol tarafta gösterilecek görsel
        imageBgColor="bg-purple-200" // Sol tarafın arka plan rengi
        icon={<FaMobileAlt size={24} className="text-purple-600" />} // İkon
        iconBgColor="bg-purple-100" // İkon kutusunun arka plan rengi
        title="How FlexNet Works: 3 Flexible Deployment Models" // Başlık
        description="FlexNet offers 3 deployment options to suit your business needs, combining connectivity, devices, and applications for rapid deployment." // Açıklama metni
      />
      <div className=""></div>
    </div>
  );
}
