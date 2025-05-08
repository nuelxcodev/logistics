import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div>
      <div className="container-fluid bg-dark">
        <div className="row py-2 px-lg-5">
          <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center text-white">
              <small>
                <i className="fa fa-phone-alt mr-2" />
                +012 345 6789
              </small>
              <small className="px-3">|</small>
              <small>
                <i className="fa fa-envelope mr-2" />
                info@example.com
              </small>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <Link className="text-white px-2" href="">
                <i className="fab fa-facebook-f" />
              </Link>
              <Link className="text-white px-2" href="">
                <i className="fab fa-twitter" />
              </Link>
              <Link className="text-white px-2" href="">
                <i className="fab fa-linkedin-in" />
              </Link>
              <Link className="text-white px-2" href="">
                <i className="fab fa-instagram" />
              </Link>
              <Link className="text-white pl-2" href="">
                <i className="fab fa-youtube" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
          <Link href="/" className="navbar-brand ml-lg-3">
            <h1 className="m-0 display-5 text-uppercase text-primary">
              <i className="fa fa-truck mr-2" />
              Airmetriz
            </h1>
          </Link>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
            <div className="navbar-nav m-auto py-0">
              <Link href="/" className="nav-item nav-link active">
                Home
              </Link>
              <Link href="/about" className="nav-item nav-link">
                About
              </Link>
              <Link href="/service" className="nav-item nav-link">
                Service
              </Link>
              <a href="/price" className="nav-item nav-link">
                Price
              </a>
              <div className="nav-item dropdown">
                <Link href="/" className="nav-link dropdown-toggle" data-toggle="dropdown">
                  Pages
                </Link>
                <div className="dropdown-menu rounded-0 m-0">
                  <Link href="/blog" className="dropdown-item">
                    Blog Grid
                  </Link>
                  <a href="/single" className="dropdown-item">
                    Blog Detail
                  </a>
                </div>
              </div>
              <Link href="/contact" className="nav-item nav-link">
                Contact
              </Link>
            </div>
            <Link href="" className="btn btn-primary py-2 px-4 d-none d-lg-block">
              Get A Quote
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
