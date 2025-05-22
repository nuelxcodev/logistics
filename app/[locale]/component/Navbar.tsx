"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitch from "./languageSwitch";
import { usePathname } from "next/navigation";

type Navprops = {
  dict: {
    nav: {
      home: string;
      about: string;
      service: string;
      contact: string;
      blog: string;
      quote: string;
    };
  };
};

function Navbar({ dict }: Navprops) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navigationLinks = [
    { name: dict.nav.home, route: "/" },
    { name: dict.nav.about, route: "/about" },
    { name: dict.nav.blog, route: "/blog" },
    { name: dict.nav.contact, route: "/contact" },
  ];
  const path = usePathname();

  return (
    <div>
      {/* Top Contact + Social Bar */}
      <div className="container-fluid bg-dark">
        <div className="row py-2 px-lg-5">
          <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center text-white">
              <small>
                <i className="fa fa-phone-alt mr-2" /> +012 345 6789
              </small>
              <small className="px-3">|</small>
              <small>
                <i className="fa fa-envelope mr-2" /> info@example.com
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
          <Link href="/" className="navbar-brand ml-lg-3">
            <h1 className="m-0 display-5 text-uppercase text-primary">
              <i className="fa fa-truck mr-2" /> Airmetriz
            </h1>
          </Link>

          {/* Toggler */}
          <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
            <span className="navbar-toggler-icon" />
          </button>

          <div className="navbar-nav m-auto py-0 d-none d-lg-flex">
            {navigationLinks.map((nav) => (
              <Link href={nav.route} className={`nav-item nav-link ${path.slice(3) === nav.route ? "active" : ""}`} key={nav.name}>
                {nav.name}
              </Link>
            ))}
          </div>

          <LanguageSwitch />

          {/* CTA Button */}
          <Link href="#" className="btn btn-primary py-2 px-4 d-none d-lg-block">
            {dict.nav.quote}
          </Link>
          {/* Animated Collapsible Section */}

          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="navbar-collapse"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="navbar-collapse d-block justify-between"
              >
                {/* Nav Links */}
                <div className="navbar-nav m-auto py-0">
                  {navigationLinks.map((nav) => (
                    <Link href={nav.route} className={`nav-item nav-link ${path.slice(3) === nav.route ? "active" : ""}`} key={nav.name}>
                      {nav.name}
                    </Link>
                  ))}
                </div>

                {/* CTA Button */}
                <Link href="#" className="btn btn-primary py-2 px-4 d-none d-lg-block">
                  {dict.nav.quote}
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
