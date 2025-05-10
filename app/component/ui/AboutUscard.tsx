import React from "react";

function AboutUscard() {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 pb-4 pb-lg-0">
            <img className="img-fluid w-100" src="img/about.jpg" alt="Logistics Service" />
            <div className="bg-primary text-dark text-center p-4">
              <h3 className="m-0">25+ Years Experience</h3>
            </div>
          </div>
          <div className="col-lg-7">
            <h6 className="text-primary text-uppercase font-weight-bold">About Us</h6>
            <h1 className="mb-4">Trusted &amp; Faster Logistic Service Provider</h1>
            <p className="mb-4">
              With over 25 years of experience, we deliver reliable and efficient logistics solutions tailored to meet the needs of modern
              businesses. From timely freight delivery to supply chain optimization, our commitment to speed, safety, and customer satisfaction
              sets us apart in the logistics industry. Trust us to move your goods with precision and care—every time.
            </p>
            <div className="d-flex align-items-center pt-2">
              <button
                type="button"
                className="btn-play"
                data-toggle="modal"
                data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                data-target="#videoModal"
              >
                <span />
              </button>
              <h5 className="font-weight-bold m-0 ml-4">Play Video</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUscard;
