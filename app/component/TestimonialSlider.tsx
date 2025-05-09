"use client";
import React from "react";

const TestimonialSlider: React.FC = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="text-center pb-2">
          <h6 className="text-primary text-uppercase font-weight-bold">Testimonial</h6>
          <h1 className="mb-4">What Our Clients Are Saying</h1>
        </div>
        <div className="owl-carousel testimonial-carousel">
          <div className="position-relative bg-secondary p-4">
            <i className="fa fa-3x fa-quote-right text-primary position-absolute" style={{ top: "-6px", right: 0 }} />
            <div className="d-flex align-items-center mb-3">
              <img className="img-fluid rounded-circle" src="img/testimonial-1.jpg" style={{ width: 60, height: 60 }} alt="" />
              <div className="ml-3">
                <h6 className="font-weight-semi-bold m-0">Sarah Johnson</h6>
                <small>- eCommerce Seller</small>
              </div>
            </div>
            <p className="m-0">Reliable and efficient! Our packages are always delivered on time. Great service from start to finish.</p>
          </div>
          <div className="position-relative bg-secondary p-4">
            <i className="fa fa-3x fa-quote-right text-primary position-absolute" style={{ top: "-6px", right: 0 }} />
            <div className="d-flex align-items-center mb-3">
              <img className="img-fluid rounded-circle" src="img/testimonial-2.jpg" style={{ width: 60, height: 60 }} alt="" />
              <div className="ml-3">
                <h6 className="font-weight-semi-bold m-0">David Lee</h6>
                <small>- Logistics Manager</small>
              </div>
            </div>
            <p className="m-0">Their tracking system is accurate and easy to use. We’ve seen a big improvement in customer satisfaction since switching.</p>
          </div>
          <div className="position-relative bg-secondary p-4">
            <i className="fa fa-3x fa-quote-right text-primary position-absolute" style={{ top: "-6px", right: 0 }} />
            <div className="d-flex align-items-center mb-3">
              <img className="img-fluid rounded-circle" src="img/testimonial-3.jpg" style={{ width: 60, height: 60 }} alt="" />
              <div className="ml-3">
                <h6 className="font-weight-semi-bold m-0">Linda Martins</h6>
                <small>- Online Retailer</small>
              </div>
            </div>
            <p className="m-0">Excellent courier partner! They handle fragile items with care and always communicate delays in advance.</p>
          </div>
          <div className="position-relative bg-secondary p-4">
            <i className="fa fa-3x fa-quote-right text-primary position-absolute" style={{ top: "-6px", right: 0 }} />
            <div className="d-flex align-items-center mb-3">
              <img className="img-fluid rounded-circle" src="img/testimonial-4.jpg" style={{ width: 60, height: 60 }} alt="" />
              <div className="ml-3">
                <h6 className="font-weight-semi-bold m-0">James brayan</h6>
                <small>- Small Business Owner</small>
              </div>
            </div>
            <p className="m-0">Fast delivery and great customer service! I can focus on growing my business knowing they’ve got logistics covered.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
