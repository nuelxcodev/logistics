import Footer from "./component/Footer";
import Navbar from "./component/Navbar";

export default async function Home() {
  return (
    <>
      <meta charSet="utf-8" />
      <title>FASTER - Logistics Company Website Template</title>
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta content="Free HTML Templates" name="keywords" />
      <meta content="Free HTML Templates" name="description" />
      <link href="img/favicon.ico" rel="icon" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
      <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
      <link href="css/style.css" rel="stylesheet" />
      {/* Header Start */}
      <div className="jumbotron jumbotron-fluid mb-5">
        <div className="container text-center py-5">
          <h1 className="text-primary mb-4">Safe &amp; Faster</h1>
          <h1 className="text-white display-3 mb-5">Logistics Services</h1>
          <div className="mx-auto" style={{ width: "100%", maxWidth: 600 }}>
            <div className="input-group">
              <input type="text" className="form-control border-light" style={{ padding: 30 }} placeholder="Tracking Id" />
              <div className="input-group-append">
                <button className="btn btn-primary px-3">Track &amp; Trace</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}
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
              <h6 className="text-primary text-uppercase font-weight-bold">About Us</h6>
              <h1 className="mb-4">Trusted &amp; Faster Logistic Service Provider</h1>
              <p className="mb-4">
                Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet
                dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo
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
      {/*  Quote Request Start */}
      <div className="container-fluid bg-secondary my-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 py-5 py-lg-0">
              <h6 className="text-primary text-uppercase font-weight-bold">Get A Quote</h6>
              <h1 className="mb-4">Request A Free Quote</h1>
              <p className="mb-4">
                Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet
                dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo
              </p>
              <div className="row">
                <div className="col-sm-4">
                  <h1 className="text-primary mb-2" data-toggle="counter-up">
                    225
                  </h1>
                  <h6 className="font-weight-bold mb-4">SKilled Experts</h6>
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
                  <h6 className="font-weight-bold mb-4">Complete Projects</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="bg-primary py-5 px-4 px-sm-5">
                <form className="py-5">
                  <div className="form-group">
                    <input type="text" className="form-control border-0 p-4" placeholder="Your Name" required="required" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control border-0 p-4" placeholder="Your Email" required="required" />
                  </div>
                  <div className="form-group">
                    <select className="custom-select border-0 px-4" style={{ height: 47 }}>
                      <option>Select A Service</option>
                      <option value={1}>Service 1</option>
                      <option value={2}>Service 1</option>
                      <option value={3}>Service 1</option>
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
      {/* Quote Request Start */}
      {/* Services Start */}
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <h6 className="text-primary text-uppercase font-weight-bold">Our Services</h6>
            <h1 className="mb-4">Best Logistic Services</h1>
          </div>
          <div className="row pb-3">
            <div className="col-lg-3 col-md-6 text-center mb-5">
              <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                <i className="fa fa-2x fa-plane text-dark pr-3" />
                <h6 className="text-white font-weight-medium m-0">Air Freight</h6>
              </div>
              <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
              <a className="border-bottom text-decoration-none" href="">
                Read More
              </a>
            </div>
            <div className="col-lg-3 col-md-6 text-center mb-5">
              <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                <i className="fa fa-2x fa-ship text-dark pr-3" />
                <h6 className="text-white font-weight-medium m-0">Ocean Freight</h6>
              </div>
              <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
              <a className="border-bottom text-decoration-none" href="">
                Read More
              </a>
            </div>
            <div className="col-lg-3 col-md-6 text-center mb-5">
              <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                <i className="fa fa-2x fa-truck text-dark pr-3" />
                <h6 className="text-white font-weight-medium m-0">Land Transport</h6>
              </div>
              <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
              <a className="border-bottom text-decoration-none" href="">
                Read More
              </a>
            </div>
            <div className="col-lg-3 col-md-6 text-center mb-5">
              <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                <i className="fa fa-2x fa-store text-dark pr-3" />
                <h6 className="text-white font-weight-medium m-0">Cargo Storage</h6>
              </div>
              <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
              <a className="border-bottom text-decoration-none" href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Services End */}
      {/* Features Start */}
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
                Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet
                dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo
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

      {/* Testimonial Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center pb-2">
            <h6 className="text-primary text-uppercase font-weight-bold">Testimonial</h6>
            <h1 className="mb-4">Our Clients Say</h1>
          </div>
          <div className="owl-carousel testimonial-carousel">
            <div className="position-relative bg-secondary p-4">
              <i className="fa fa-3x fa-quote-right text-primary position-absolute" style={{ top: "-6px", right: 0 }} />
              <div className="d-flex align-items-center mb-3">
                <img className="img-fluid rounded-circle" src="img/testimonial-1.jpg" style={{ width: 60, height: 60 }} alt="" />
                <div className="ml-3">
                  <h6 className="font-weight-semi-bold m-0">Client Name</h6>
                  <small>- Profession</small>
                </div>
              </div>
              <p className="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita</p>
            </div>
            <div className="position-relative bg-secondary p-4">
              <i className="fa fa-3x fa-quote-right text-primary position-absolute" style={{ top: "-6px", right: 0 }} />
              <div className="d-flex align-items-center mb-3">
                <img className="img-fluid rounded-circle" src="img/testimonial-2.jpg" style={{ width: 60, height: 60 }} alt="" />
                <div className="ml-3">
                  <h6 className="font-weight-semi-bold m-0">Client Name</h6>
                  <small>- Profession</small>
                </div>
              </div>
              <p className="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita</p>
            </div>
            <div className="position-relative bg-secondary p-4">
              <i className="fa fa-3x fa-quote-right text-primary position-absolute" style={{ top: "-6px", right: 0 }} />
              <div className="d-flex align-items-center mb-3">
                <img className="img-fluid rounded-circle" src="img/testimonial-3.jpg" style={{ width: 60, height: 60 }} alt="" />
                <div className="ml-3">
                  <h6 className="font-weight-semi-bold m-0">Client Name</h6>
                  <small>- Profession</small>
                </div>
              </div>
              <p className="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita</p>
            </div>
            <div className="position-relative bg-secondary p-4">
              <i className="fa fa-3x fa-quote-right text-primary position-absolute" style={{ top: "-6px", right: 0 }} />
              <div className="d-flex align-items-center mb-3">
                <img className="img-fluid rounded-circle" src="img/testimonial-4.jpg" style={{ width: 60, height: 60 }} alt="" />
                <div className="ml-3">
                  <h6 className="font-weight-semi-bold m-0">Client Name</h6>
                  <small>- Profession</small>
                </div>
              </div>
              <p className="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita</p>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
      {/* Blog Start */}
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <h6 className="text-primary text-uppercase font-weight-bold">Our Blog</h6>
            <h1 className="mb-4">Latest From Blog</h1>
          </div>
          <div className="row">
            <div className="col-md-6 mb-5">
              <div className="position-relative">
                <img className="img-fluid w-100" src="img/blog-1.jpg" alt="" />
                <div
                  className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center rounded-circle"
                  style={{ width: 60, height: 60, bottom: "-30px", right: 30 }}
                >
                  <h4 className="font-weight-bold mb-n1">01</h4>
                  <small className="text-white text-uppercase">Jan</small>
                </div>
              </div>
              <div className="bg-secondary" style={{ padding: 30 }}>
                <div className="d-flex mb-3">
                  <div className="d-flex align-items-center">
                    <img className="rounded-circle" style={{ width: 40, height: 40 }} src="img/user.jpg" alt="user" />
                    <a className="text-muted ml-2" href="">
                      John Doe
                    </a>
                  </div>
                  <div className="d-flex align-items-center ml-4">
                    <i className="far fa-bookmark text-primary" />
                    <a className="text-muted ml-2" href="">
                      Web Design
                    </a>
                  </div>
                </div>
                <h4 className="font-weight-bold mb-3">Kasd tempor diam sea justo dolor</h4>
                <p>
                  Dolor sea ipsum ipsum et. Erat duo lorem magna vero dolor dolores. Rebum eirmod no dolor diam dolor amet ipsum. Lorem lorem sea
                  sed diam est lorem magna
                </p>
                <a className="border-bottom border-primary text-uppercase text-decoration-none" href="">
                  Read More <i className="fa fa-angle-right" />
                </a>
              </div>
            </div>
            <div className="col-md-6 mb-5">
              <div className="position-relative">
                <img className="img-fluid w-100" src="img/blog-2.jpg" alt="user" />
                <div
                  className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center rounded-circle"
                  style={{ width: 60, height: 60, bottom: "-30px", right: 30 }}
                >
                  <h4 className="font-weight-bold mb-n1">01</h4>
                  <small className="text-white text-uppercase">Jan</small>
                </div>
              </div>
              <div className="bg-secondary" style={{ padding: 30 }}>
                <div className="d-flex mb-3">
                  <div className="d-flex align-items-center">
                    <img className="rounded-circle" style={{ width: 40, height: 40 }} src="img/user.jpg" alt="user" />
                    <a className="text-muted ml-2" href="">
                      John Doe
                    </a>
                  </div>
                  <div className="d-flex align-items-center ml-4">
                    <i className="far fa-bookmark text-primary" />
                    <a className="text-muted ml-2" href="">
                      Web Design
                    </a>
                  </div>
                </div>
                <h4 className="font-weight-bold mb-3">Kasd tempor diam sea justo dolor</h4>
                <p>
                  Dolor sea ipsum ipsum et. Erat duo lorem magna vero dolor dolores. Rebum eirmod no dolor diam dolor amet ipsum. Lorem lorem sea
                  sed diam est lorem magna
                </p>
                <a className="border-bottom border-primary text-uppercase text-decoration-none" href="">
                  Read More <i className="fa fa-angle-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog End */}
    
      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary back-to-top">
        <i className="fa fa-angle-double-up" />
      </a>
    </>
  );
}
