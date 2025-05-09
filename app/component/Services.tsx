"use client";
import React from 'react';

const serviceData = [
  {
    icon: "fa-plane",
    title: "Air Freight",
    description:
      "We provide fast and reliable air cargo services, ensuring your goods reach their destination quickly and safely across international skies.",
  },
  {
    icon: "fa-ship",
    title: "Ocean Freight",
    description:
      "Our ocean freight solutions offer cost-effective and secure transportation for large volumes of goods across global sea routes.",
  },
  {
    icon: "fa-truck",
    title: "Land Transport",
    description:
      "We offer dependable road transport services for regional and cross-border deliveries, ensuring timely and secure movement of cargo.",
  },
  {
    icon: "fa-store",
    title: "Cargo Storage",
    description:
      "Our secure and spacious warehouses provide flexible storage solutions for goods of all sizes, with full inventory tracking and handling.",
  },
];

const Services: React.FC = () => {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="text-center pb-2">
          <h6 className="text-primary text-uppercase font-weight-bold">Our Services</h6>
          <h1 className="mb-4">Best Logistic Services</h1>
        </div>
        <div className="row pb-3">
          {serviceData.map((service, index) => (
            <div key={index} className="col-lg-3 col-md-6 text-center mb-5">
              <div className="d-flex align-items-center justify-content-center bg-primary mb-3 p-3">
                <i className={`fa fa-2x ${service.icon} text-dark pr-3`} />
                <h6 className="text-white font-weight-medium m-0">{service.title}</h6>
              </div>
              <p>{service.description}</p>
              <a className="border-bottom text-decoration-none" href="">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
