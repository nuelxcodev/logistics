import Head from "next/head";
import Services from "../component/ui/Services";
import TestimonialSlider from "../component/TestimonialSlider";
import Quoter from "../component/ui/Quoter";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>FASTER - Logistics Company Website Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Free HTML Templates" />
        <meta name="description" content="Free HTML Templates" />
        <link rel="icon" href="/img/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
       
      </Head>

      {/* Content remains the same */}
      <div className="jumbotron jumbotron-fluid mb-5">
        <div className="container text-center py-5">
          <h1 className="text-white display-3">Service</h1>
          <div className="d-inline-flex align-items-center text-white">
            <p className="m-0">
              <Link className="text-white" href="/">
                Home
              </Link>
            </p>
            <i className="fa fa-circle px-3" />
            <p className="m-0">Service</p>
          </div>
        </div>
      </div>

      <Services />
      <Quoter />
      <TestimonialSlider />

      <a href="#" className="btn btn-lg btn-primary back-to-top">
        <i className="fa fa-angle-double-up" />
      </a>
    </>
  );
}
