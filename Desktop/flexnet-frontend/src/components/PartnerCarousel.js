import React from "react";

const PartnerCarousel = () => {
  const partners = [
    {
      id: 1,
      name: "Partner 1",
      logo: "https://sakai.primereact.org/demo/images/landing/peak-logo.svg",
    },
    {
      id: 2,
      name: "Partner 2",
      logo: "https://sakai.primereact.org/layout/images/logo-dark.svg",
    },
    {
      id: 3,
      name: "Partner 3",
      logo: "https://sakai.primereact.org/demo/images/landing/peak-logo.svg",
    },
    {
      id: 4,
      name: "Partner 4",
      logo: "https://sakai.primereact.org/demo/images/landing/peak-logo.svg",
    },
    {
      id: 5,
      name: "Partner 5",
      logo: "https://sakai.primereact.org/layout/images/logo-dark.svg",
    },
  ];

  // Partner logosunu iki kez göstererek sonsuz döngü yaratıyoruz
  const duplicatedPartners = [
    ...partners,
    ...partners,
    ...partners,
    ...partners,
    ...partners,
    ...partners,
    ...partners,
    ...partners,
    ...partners,
    ...partners,
    ...partners,
    ...partners,
    ...partners,
    ...partners,
  ];

  return (
    <div className="overflow-hidden partners-band-parent">
      <div className="flex animate-marquee whitespace-nowrap partners-band ">
        {duplicatedPartners.map((partner, index) => (
          <div key={index} className="flex-none mx-4">
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-24 h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerCarousel;
