import React from "react";

function Quoter() {
  return (
    <div className="container-fluid bg-secondary my-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 py-5 py-lg-0">
            <h6 className="text-primary text-uppercase font-weight-bold">Get A Quote</h6>
            <h1 className="mb-4">Request a Free Delivery Quote</h1>
            <p className="mb-4">
              Looking for fast, secure, and affordable courier services? We specialize in same-day, local, and international deliveries to meet your business and personal logistics needs. Request a free quote today and let us help you move your packages with ease and reliability.
            </p>
            <div className="row">
              <div className="col-sm-4">
                <h1 className="text-primary mb-2" data-toggle="counter-up">
                  225
                </h1>
                <h6 className="font-weight-bold mb-4">Delivery Experts</h6>
              </div>
              <div className="col-sm-4">
                <h1 className="text-primary mb-2" data-toggle="counter-up">
                  1050
                </h1>
                <h6 className="font-weight-bold mb-4">Happy Clients</h6>
              </div>
              <div className="col-sm-4">
                <h1 className="text-primary mb-2" data-toggle="counter-up">
                  2500
                </h1>
                <h6 className="font-weight-bold mb-4">Parcels Delivered</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="bg-primary py-5 px-4 px-sm-5">
              <form className="py-5">
                <div className="form-group">
                  <input type="text" className="form-control border-0 p-4" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control border-0 p-4" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <select className="custom-select border-0 px-4" style={{ height: 47 }}>
                    <option>Select A Service</option>
                    <option value={1}>Same-Day Delivery</option>
                    <option value={2}>International Shipping</option>
                    <option value={3}>Bulk Freight</option>
                  </select>
                </div>
                <div>
                  <button className="btn btn-dark btn-block border-0 py-3" type="submit">
                    Get A Quote
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quoter;
