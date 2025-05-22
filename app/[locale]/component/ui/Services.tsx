"use client";
import React from "react";

type serviceTrans = {
  translate: {
    our_service: {
      title: string;
      service1: {
        title: string;
        descriptiom: string;
      };
      service2: {
        title: string;
        descriptiom: string;
      };
      service3: {
        title: string;
        descriptiom: string;
      };
      service4: {
        title: string;
        descriptiom: string;
      };
    };
  };
};

const Services: React.FC<serviceTrans> = ({ translate }) => {
  const serviceData = [
    {
      icon: "fa-plane",
      title: translate.our_service.service1.title,
      description: translate.our_service.service1.descriptiom,
    },
    {
      icon: "fa-ship",
      title: translate.our_service.service2.title,
      description: translate.our_service.service2.descriptiom,
    },
    {
      icon: "fa-truck",
      title: translate.our_service.service3.title,
      description: translate.our_service.service3.descriptiom,
    },
    {
      icon: "fa-store",
      title: translate.our_service.service4.title,
      description:translate.our_service.service4.descriptiom
    },
  ];
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="text-center pb-2">
          <h6 className="text-primary text-uppercase font-weight-bold">Our Services</h6>
          <h1 className="mb-4">{translate.our_service.title}</h1>
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
