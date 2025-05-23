import { locales, type Locale } from "@/libs/i18n/config";
import TestimonialSlider from "./component/TestimonialSlider";
import AboutUscard from "./component/ui/AboutUscard";
import Quoter from "./component/ui/Quoter";
import Services from "./component/ui/Services";
import WhyUscard from "./component/ui/WhyUscard";
import { getDictionary } from "@/libs/i18n/getDictionary";
import TrackingForm from "./component/TrackingForm";
import Image from "next/image"; // Added import

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <div>
      <div className="jumbotron jumbotron-fluid mb-5">
        <div className="container text-center py-5">
          <h1 className="text-primary mb-4">{dict.hero.safeFaster}</h1>
          <h1 className="text-white display-3 mb-5">{dict.hero.logisticsServices}</h1>
          <div className="mx-auto" style={{ width: "100%", maxWidth: 600 }}>
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
            <h6 className="text-primary text-uppercase font-weight-bold">{dict.our_service.blog.section}</h6>
            <h1 className="mb-4">{dict.our_service.blog.title}</h1>
          </div>
          <div className="row">
            <div className="col-md-6 mb-5">
              <div className="position-relative">
                <Image className="img-fluid w-100" src="/img/blog-1.jpg" alt="Blog Post 1" width={750} height={400} />
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
                    <Image
                      className="rounded-circle"
                      style={{ width: 40, height: 40 }}
                      src="/img/user.jpg"
                      alt={dict.our_service.blog.author1}
                      width={40}
                      height={40}
                    />
                    <a className="text-muted ml-2" href="">
                      {dict.our_service.blog.author1}
                    </a>
                  </div>
                  <div className="d-flex align-items-center ml-4">
                    <i className="far fa-bookmark text-primary" />
                    <a className="text-muted ml-2" href="">
                      {dict.our_service.blog.category1}
                    </a>
                  </div>
                </div>
                <h4 className="font-weight-bold mb-3">{dict.our_service.blog.post1.title}</h4>
                <p>{dict.our_service.blog.post1.summary}</p>
                <a className="border-bottom border-primary text-uppercase text-decoration-none" href="">
                  {dict.our_service.blog.readMore} <i className="fa fa-angle-right" />
                </a>
              </div>
            </div>
            <div className="col-md-6 mb-5">
              <div className="position-relative">
                <Image className="img-fluid w-100" src="/img/blog-2.jpg" alt="Blog Post 2" width={750} height={400} />
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
                    <Image
                      className="rounded-circle"
                      style={{ width: 40, height: 40 }}
                      src="/img/user.jpg"
                      alt={dict.our_service.blog.author2}
                      width={40}
                      height={40}
                    />
                    <a className="text-muted ml-2" href="">
                      {dict.our_service.blog.author2}
                    </a>
                  </div>
                  <div className="d-flex align-items-center ml-4">
                    <i className="far fa-bookmark text-primary" />
                    <a className="text-muted ml-2" href="">
                      {dict.our_service.blog.category2}
                    </a>
                  </div>
                </div>
                <h4 className="font-weight-bold mb-3">{dict.our_service.blog.post2.title}</h4>
                <p>{dict.our_service.blog.post2.summary}</p>
                <a className="border-bottom border-primary text-uppercase text-decoration-none" href="">
                  {dict.our_service.blog.readMore} <i className="fa fa-angle-right" />
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

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
