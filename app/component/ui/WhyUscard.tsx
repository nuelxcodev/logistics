import React from "react";

function WhyUscard() {
  return (
    <div className="container-fluid bg-secondary my-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <img className="img-fluid w-100" src="img/feature.jpg" alt="" />
          </div>
          <div className="col-lg-7 py-5 py-lg-0">
            <h6 className="text-primary text-uppercase font-weight-bold">Why Choose Us</h6>
            <h1 className="mb-4">Faster, Safe and Trusted Logistics Services</h1>
            <p className="mb-4">
              Our logistics services are designed to deliver speed, safety, and reliability every time. We guarantee faster delivery with a
              commitment to secure handling of your packages. Whether it’s a regular shipment or an urgent delivery, we have the expertise and
              technology to ensure your packages reach their destination on time, every time.
            </p>
            <ul className="list-inline">
              <li>
                <h6>
                  <i className="far fa-dot-circle text-primary mr-3" />
                  Industry-Leading Speed
                </h6>
              </li>
              <li>
                <h6>
                  <i className="far fa-dot-circle text-primary mr-3" />
                  Safe and Secure Handling
                </h6>
              </li>
              <li>
                <h6>
                  <i className="far fa-dot-circle text-primary mr-3" />
                  24/7 Reliable Customer Support
                </h6>
              </li>
            </ul>
            <a href="" className="btn btn-primary mt-3 py-2 px-4">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUscard;
