import type { Locale } from "@/libs/i18n/config";
import TestimonialSlider from "./component/TestimonialSlider";
import AboutUscard from "./component/ui/AboutUscard";
import Quoter from "./component/ui/Quoter";
import Services from "./component/ui/Services";
import WhyUscard from "./component/ui/WhyUscard";
import { getDictionary } from "@/libs/i18n/getDictionary";
import TrackingForm from "./component/TrackingForm";


export default async function Home({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale);
  
  return (
    <div className=" relative">
      <div className="jumbotron jumbotron-fluid mb-5">
        <div className="container text-center py-5">
          <h1 className="text-primary mb-4">Safe &amp; Faster</h1>
          <h1 className="text-white display-3 mb-5">Logistics Services</h1>
          <div className="mx-auto " style={{ width: "100%", maxWidth: 600 }}>
            <TrackingForm />
          </div>
        </div>
      </div>


      {/* About Start */}
      <AboutUscard translate={dict} />
      <Quoter />
      <Services translate={dict} />
      <WhyUscard translate={dict} />
      <TestimonialSlider />

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
                <img className="img-fluid w-100" src="../img/blog-1.jpg" alt="Blog Post 1" />
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
                    <img className="rounded-circle" style={{ width: 40, height: 40 }} src="img/user.jpg" alt="John Doe" />
                    <a className="text-muted ml-2" href="">
                      John Doe
                    </a>
                  </div>
                  <div className="d-flex align-items-center ml-4">
                    <i className="far fa-bookmark text-primary" />
                    <a className="text-muted ml-2" href="">
                      Logistics
                    </a>
                  </div>
                </div>
                <h4 className="font-weight-bold mb-3">The Future of Logistics: Innovation and Trends</h4>
                <p>
                  The logistics industry is rapidly evolving with advancements in technology, automation, and data analytics. In this post, we
                  explore the future of logistics, from AI-powered tracking systems to the rise of drones and autonomous vehicles in delivery
                  services. Learn how these innovations are shaping the way we move goods and enhancing efficiency.
                </p>
                <a className="border-bottom border-primary text-uppercase text-decoration-none" href="">
                  Read More <i className="fa fa-angle-right" />
                </a>
              </div>
            </div>
            <div className="col-md-6 mb-5">
              <div className="position-relative">
                <img className="img-fluid w-100" src="img/blog-2.jpg" alt="Blog Post 2" />
                <div
                  className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center rounded-circle"
                  style={{ width: 60, height: 60, bottom: "-30px", right: 30 }}
                >
                  <h4 className="font-weight-bold mb-n1">02</h4>
                  <small className="text-white text-uppercase">Feb</small>
                </div>
              </div>
              <div className="bg-secondary" style={{ padding: 30 }}>
                <div className="d-flex mb-3">
                  <div className="d-flex align-items-center">
                    <img className="rounded-circle" style={{ width: 40, height: 40 }} src="./img/user.jpg" alt="Jane Smith" />
                    <a className="text-muted ml-2" href="">
                      Jane Smith
                    </a>
                  </div>
                  <div className="d-flex align-items-center ml-4">
                    <i className="far fa-bookmark text-primary" />
                    <a className="text-muted ml-2" href="">
                      Delivery Services
                    </a>
                  </div>
                </div>
                <h4 className="font-weight-bold mb-3">How to Ensure Safe and Timely Deliveries</h4>
                <p>
                  In the fast-paced world of logistics, ensuring that goods are delivered on time and in perfect condition is a top priority.
                  This blog post highlights best practices for safe and timely deliveries, from packaging and route planning to communication
                  with customers. Discover how our delivery experts maintain the highest standards in the industry.
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
    </div>
  );
}
