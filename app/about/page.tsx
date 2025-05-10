import React from "react";
import AboutUscard from "../component/ui/AboutUscard";
import WhyUscard from "../component/ui/WhyUscard";

function AboutPage() {
  return (
    <>
      <meta charSet="utf-8" />
      <title>FASTER - Logistics Company Website Template</title>
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta content="Free HTML Templates" name="keywords" />
      <meta content="Free HTML Templates" name="description" />
      {/* Favicon */}
      <link href="img/favicon.ico" rel="icon" />
      {/* Google Web Fonts */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      {/* Libraries Stylesheet */}
      <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
      

      {/* Header Start */}
      <div className="jumbotron jumbotron-fluid mb-5">
        <div className="container text-center py-5">
          <h1 className="text-white display-3">About</h1>
          <div className="d-inline-flex align-items-center text-white">
            <p className="m-0">
              <a className="text-white" href="">
                Home
              </a>
            </p>
            <i className="fa fa-circle px-3" />
            <p className="m-0">About</p>
          </div>
        </div>
      </div>

      {/* About Start */}
      <AboutUscard />
      {/* About End */}
      {/* Features Start */}
      <WhyUscard/>
      {/* Features End */}
      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary back-to-top">
        <i className="fa fa-angle-double-up" />
      </a>
      
    </>
  );
}

export default AboutPage;
