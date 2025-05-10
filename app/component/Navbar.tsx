"use client";
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // toggle state

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Top Contact + Social Bar */}
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
              <a className="text-white px-2" href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="text-white px-2" href="#">
                <i className="fab fa-twitter" />
              </a>
              <a className="text-white px-2" href="#">
                <i className="fab fa-linkedin-in" />
              </a>
              <a className="text-white px-2" href="#">
                <i className="fab fa-instagram" />
              </a>
              <a className="text-white pl-2" href="#">
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
          {/* Logo */}
          <Link href="/" passHref legacyBehavior>
            <a className="navbar-brand ml-lg-3">
              <h1 className="m-0 display-5 text-uppercase text-primary">
                <i className="fa fa-truck mr-2" />
                Airmetriz
              </h1>
            </a>
          </Link>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Collapsible Section */}
          <div className={`navbar-collapse ${isOpen ? "d-block" : "d-none"} d-lg-flex justify-between`}>
            {/* Nav Links */}
            <div className="navbar-nav m-auto py-0">
              <Link href="/" passHref legacyBehavior>
                <a className="nav-item nav-link active">Home</a>
              </Link>
              <Link href="/about" passHref legacyBehavior>
                <a className="nav-item nav-link">About</a>
              </Link>
              <Link href="/services" passHref legacyBehavior>
                <a className="nav-item nav-link">Service</a>
              </Link>
              <Link href="/blog" passHref legacyBehavior>
                <a className="nav-item nav-link">Blog</a>
              </Link>
              <Link href="/contact" passHref legacyBehavior>
                <a className="nav-item nav-link">Contact</a>
              </Link>
            </div>

            {/* CTA Button */}
            <Link href="#" passHref legacyBehavior>
              <a className="btn btn-primary py-2 px-4 d-none d-lg-block">Get A Quote</a>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
