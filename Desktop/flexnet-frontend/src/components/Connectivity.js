import React from "react";
import FeatureBox from "./FeatureBox";
import { FaMobileAlt } from "react-icons/fa"; // Icon for the mobile section

export default function Connectivity() {
  return (
    <div className="container mx-auto px-6 py-10">
      <FeatureBox
        imageSrc="https://sakai.primereact.org/demo/images/landing/mockup.svg" // Sol tarafta gösterilecek görsel
        imageBgColor="bg-purple-200" // Sol tarafın arka plan rengi
        icon={<FaMobileAlt size={24} className="text-purple-600" />} // İkon
        iconBgColor="bg-purple-100" // İkon kutusunun arka plan rengi
        title="Connectivity" // Başlık
        description="Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Sit amet mattis vulputate enim nulla aliquet." // Açıklama metni
      />
    </div>
  );
}
