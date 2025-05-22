"use client";
import Link from "next/link";

type Footerprops = {
  dict: {
    nav: {
      home: string;
      about: string;
      service: string;
      contact: string;
      blog: string;
      quote: string;
    };
    footer: {
      summary: string;
      button: string;
      title: string;
      FQA: {
        design: string;
        reserve: string;
        PrivacyPolicy: string;
        terms: string;
        FAQS: string;
        suport:string
      };
    };
  };
};
const Footer = ({ dict }: Footerprops) => {
  return (
    <div>
      <div className="container-fluid bg-dark text-white mt-5 py-5 px-sm-3 px-md-5">
        <div className="row pt-5">
          <div className="col-lg-7 col-md-6">
            <div className="row">
              <div className="col-md-6 mb-5">
                <h3 className="text-primary mb-4">Contact Us</h3>
                <p>
                  <i className="fa fa-map-marker-alt mr-2" />
                  123 Street, New York, USA
                </p>
                <p>
                  <i className="fa fa-phone-alt mr-2" />
                  +012 345 67890
                </p>
                <p>
                  <i className="fa fa-envelope mr-2" />
                  info@example.com
                </p>
                <div className="d-flex justify-content-start mt-4">
                  <Link className="btn btn-outline-light btn-social mr-2" href="#">
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link className="btn btn-outline-light btn-social mr-2" href="#">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link className="btn btn-outline-light btn-social mr-2" href="#">
                    <i className="fab fa-linkedin-in" />
                  </Link>
                  <Link className="btn btn-outline-light btn-social" href="#">
                    <i className="fab fa-instagram" />
                  </Link>
                </div>
              </div>
              <div className="col-md-6 mb-5">
                <h3 className="text-primary mb-4">Quick Links</h3>
                <div className="d-flex flex-column justify-content-start">
                  <Link className="text-white mb-2" href="#">
                    <i className="fa fa-angle-right mr-2" />
                    {dict.nav.home}
                  </Link>
                  <Link className="text-white mb-2" href="#">
                    <i className="fa fa-angle-right mr-2" />
                    {dict.nav.about}
                  </Link>
                  <Link className="text-white mb-2" href="#">
                    <i className="fa fa-angle-right mr-2" />
                    {dict.nav.blog}
                  </Link>
                  <Link className="text-white mb-2" href="#">
                    <i className="fa fa-angle-right mr-2" />
                    {dict.nav.service}
                  </Link>
                  <a className="text-white" href="#">
                    <i className="fa fa-angle-right mr-2" />
                    {dict.nav.service}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 mb-5">
            <h3 className="text-primary mb-4">{dict.footer.title}</h3>
            <p>{dict.footer.summary}</p>
            <div className="w-100">
              <div className="input-group">
                <input type="text" className="form-control border-light" style={{ padding: 30 }} placeholder="Your Email Address" />
                <div className="input-group-append">
                  <button className="btn btn-primary px-4">{dict.footer.button}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style={{ borderColor: "#3E3E4E !important" }}>
        <div className="row">
          <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
            <p className="m-0 text-white">
              © <a href="#">Aimetriz</a>. {dict.footer.FQA.reserve}
              {dict.footer.FQA.design} <a href="https://chukwuemeka-ekine.vercel.app">nuelcodex</a>
            </p>
          </div>
          <div className="col-lg-6 text-center text-md-right">
            <ul className="nav d-inline-flex">
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="#">
                  {dict.footer.FQA.PrivacyPolicy}
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white py-0" href="#">
                  {dict.footer.FQA.terms}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white py-0" href="#">
                  {dict.footer.FQA.FAQS}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white py-0" href="#">
                  {dict.footer.FQA.suport}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
