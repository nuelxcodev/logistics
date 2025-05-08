import React from 'react'

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
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  />
  {/* Font Awesome */}
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
    rel="stylesheet"
  />
  {/* Libraries Stylesheet */}
  <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
  {/* Customized Bootstrap Stylesheet */}
  <link href="css/style.css" rel="stylesheet" />
  {/* Topbar Start */}
 
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
  <div className="container-fluid py-5">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5 pb-4 pb-lg-0">
          <img className="img-fluid w-100" src="img/about.jpg" alt="" />
          <div className="bg-primary text-dark text-center p-4">
            <h3 className="m-0">25+ Years Experience</h3>
          </div>
        </div>
        <div className="col-lg-7">
          <h6 className="text-primary text-uppercase font-weight-bold">
            About Us
          </h6>
          <h1 className="mb-4">
            Trusted &amp; Faster Logistic Service Provider
          </h1>
          <p className="mb-4">
            Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore
            sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor
            sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo
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
  {/* About End */}
  {/* Features Start */}
  <div className="container-fluid bg-secondary my-5">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5">
          <img className="img-fluid w-100" src="img/feature.jpg" alt="" />
        </div>
        <div className="col-lg-7 py-5 py-lg-0">
          <h6 className="text-primary text-uppercase font-weight-bold">
            Why Choose Us
          </h6>
          <h1 className="mb-4">Faster, Safe and Trusted Logistics Services</h1>
          <p className="mb-4">
            Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore
            sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor
            sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo
          </p>
          <ul className="list-inline">
            <li>
              <h6>
                <i className="far fa-dot-circle text-primary mr-3" />
                Best In Industry
              </h6>
            </li>
            <li>
              <h6>
                <i className="far fa-dot-circle text-primary mr-3" />
                Emergency Services
              </h6>
            </li>
            <li>
              <h6>
                <i className="far fa-dot-circle text-primary mr-3" />
                24/7 Customer Support
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
  {/* Features End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary back-to-top">
    <i className="fa fa-angle-double-up" />
  </a>
  {/* JavaScript Libraries */}
  {/* Contact Javascript File */}
  {/* Template Javascript */}
</>

  )
}

export default AboutPage