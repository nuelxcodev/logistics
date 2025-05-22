import { locales, type Locale } from "@/libs/i18n/config";
import { getDictionary } from "@/libs/i18n/getDictionary";
import React from "react";

async function BlogPage({ params }: { params: { locale: Locale } }) {
   const {locale} = params;
  const dict = await getDictionary(locale);
  return (
    <>
      {/* Header Start */}
      <div className="jumbotron jumbotron-fluid mb-5">
        <div className="container text-center py-5">
          <h1 className="text-white display-3">{dict.blog_page.title}</h1>
          <div className="d-inline-flex align-items-center text-white">
            <p className="m-0">
              <a className="text-white" href="">
                Home
              </a>
            </p>
            <i className="fa fa-circle px-3" />
            <p className="m-0">Blog</p>
          </div>
        </div>
      </div>
      {/* Header End */}
      {/* Blog Start */}
      <div className="container py-5">
        <div className="row">
          {/* Blog Grid Start */}
          <div className="col-lg-8">
            <div className="row">
              <div className="col-md-12 mb-3">
                <div className="position-relative">
                  <img className="img-fluid w-100" src="/img/blog-1.jpg" alt="" />
                  <div
                    className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center rounded-circle"
                    style={{ width: 60, height: 60, bottom: "-30px", right: 30 }}
                  >
                    <h4 className="font-weight-bold mb-n1">01</h4>
                    <small className="text-white text-uppercase">Jan</small>
                  </div>
                </div>
                <div className="bg-secondary mb-3" style={{ padding: 30 }}>
                  <div className="d-flex mb-3">
                    <div className="d-flex align-items-center">
                      <img className="rounded-circle" style={{ width: 40, height: 40 }} src="/img/user.jpg" alt="" />
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
                    Dolor sea ipsum ipsum et. Erat duo lorem magna vero dolor dolores. Rebum eirmod no dolor diam dolor amet ipsum. Lorem lorem
                    sea sed diam est lorem magna
                  </p>
                  <a className="border-bottom border-primary text-uppercase text-decoration-none" href="">
                    Read More <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <div className="position-relative">
                  <img className="img-fluid w-100" src="/img/blog-2.jpg" alt="" />
                  <div
                    className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center rounded-circle"
                    style={{ width: 60, height: 60, bottom: "-30px", right: 30 }}
                  >
                    <h4 className="font-weight-bold mb-n1">01</h4>
                    <small className="text-white text-uppercase">Jan</small>
                  </div>
                </div>
                <div className="bg-secondary mb-3" style={{ padding: 30 }}>
                  <div className="d-flex mb-3">
                    <div className="d-flex align-items-center">
                      <img className="rounded-circle" style={{ width: 40, height: 40 }} src="/img/user.jpg" alt="" />
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
                    Dolor sea ipsum ipsum et. Erat duo lorem magna vero dolor dolores. Rebum eirmod no dolor diam dolor amet ipsum. Lorem lorem
                    sea sed diam est lorem magna
                  </p>
                  <a className="border-bottom border-primary text-uppercase text-decoration-none" href="">
                    Read More <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <div className="position-relative">
                  <img className="img-fluid w-100" src="/img/blog-1.jpg" alt="" />
                  <div
                    className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center rounded-circle"
                    style={{ width: 60, height: 60, bottom: "-30px", right: 30 }}
                  >
                    <h4 className="font-weight-bold mb-n1">01</h4>
                    <small className="text-white text-uppercase">Jan</small>
                  </div>
                </div>
                <div className="bg-secondary mb-3" style={{ padding: 30 }}>
                  <div className="d-flex mb-3">
                    <div className="d-flex align-items-center">
                      <img className="rounded-circle" style={{ width: 40, height: 40 }} src="/img/user.jpg" alt="" />
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
                    Dolor sea ipsum ipsum et. Erat duo lorem magna vero dolor dolores. Rebum eirmod no dolor diam dolor amet ipsum. Lorem lorem
                    sea sed diam est lorem magna
                  </p>
                  <a className="border-bottom border-primary text-uppercase text-decoration-none" href="">
                    Read More <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <nav aria-label="Page navigation">
                  <ul className="pagination pagination-lg justify-content-center mb-0">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">»</span>
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          {/* Blog Grid End */}
          {/* Sidebar Start */}
          <div className="col-lg-4 mt-5 mt-lg-0">
            {/* Search Form Start */}
            <div className="mb-5">
              <div className="bg-secondary" style={{ padding: 30 }}>
                <div className="input-group">
                  <input type="text" className="form-control border-0 p-4" placeholder="Keyword" />
                  <div className="input-group-append">
                    <span className="input-group-text bg-primary border-primary text-white">
                      <i className="fa fa-search" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Search Form End */}
            {/* Category Start */}
            <div className="mb-5">
              <h3 className="mb-4">Categories</h3>
              <div className="bg-secondary" style={{ padding: 30 }}>
                <ul className="list-inline m-0">
                  <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                    <a className="text-dark" href="#">
                      <i className="fa fa-angle-right text-primary mr-2" />
                      Web Design
                    </a>
                    <span className="badge badge-secondary badge-pill">150</span>
                  </li>
                  <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                    <a className="text-dark" href="#">
                      <i className="fa fa-angle-right text-primary mr-2" />
                      Web Development
                    </a>
                    <span className="badge badge-secondary badge-pill">131</span>
                  </li>
                  <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                    <a className="text-dark" href="#">
                      <i className="fa fa-angle-right text-primary mr-2" />
                      Online Marketing
                    </a>
                    <span className="badge badge-secondary badge-pill">78</span>
                  </li>
                  <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                    <a className="text-dark" href="#">
                      <i className="fa fa-angle-right text-primary mr-2" />
                      Keyword Research
                    </a>
                    <span className="badge badge-secondary badge-pill">56</span>
                  </li>
                  <li className="py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                    <a className="text-dark" href="#">
                      <i className="fa fa-angle-right text-primary mr-2" />
                      Email Marketing
                    </a>
                    <span className="badge badge-secondary badge-pill">98</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Category End */}
            {/* Recent Post Start */}
            <div className="mb-5">
              <h3 className="mb-4">Recent Post</h3>
              <div className="d-flex mb-3">
                <img className="img-fluid" src="/img/blog-1.jpg" style={{ width: 80, height: 80, objectFit: "cover" }} alt="" />
                <a href="" className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3" style={{ height: 80 }}>
                  Lorem ipsum dolor sit amet consec adipis elit
                </a>
              </div>
              <div className="d-flex mb-3">
                <img className="img-fluid" src="/img/blog-2.jpg" style={{ width: 80, height: 80, objectFit: "cover" }} alt="" />
                <a href="" className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3" style={{ height: 80 }}>
                  Lorem ipsum dolor sit amet consec adipis elit
                </a>
              </div>
              <div className="d-flex mb-3">
                <img className="img-fluid" src="/img/blog-1.jpg" style={{ width: 80, height: 80, objectFit: "cover" }} alt="" />
                <a href="" className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3" style={{ height: 80 }}>
                  Lorem ipsum dolor sit amet consec adipis elit
                </a>
              </div>
              <div className="d-flex mb-3">
                <img className="img-fluid" src="/img/blog-2.jpg" style={{ width: 80, height: 80, objectFit: "cover" }} alt="" />
                <a href="" className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3" style={{ height: 80 }}>
                  Lorem ipsum dolor sit amet consec adipis elit
                </a>
              </div>
              <div className="d-flex mb-3">
                <img className="img-fluid" src="/img/blog-1.jpg" style={{ width: 80, height: 80, objectFit: "cover" }} alt="" />
                <a href="" className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3" style={{ height: 80 }}>
                  Lorem ipsum dolor sit amet consec adipis elit
                </a>
              </div>
            </div>
            {/* Recent Post End */}
            {/* Image Start */}
            <div className="mb-5">
              <img src="/img/blog-1.jpg" alt="" className="img-fluid" />
            </div>
            {/* Image End */}
            {/* Tags Start */}
            <div className="mb-5">
              <h3 className="mb-4">Tag Cloud</h3>
              <div className="d-flex flex-wrap m-n1">
                <a href="" className="btn btn-secondary m-1">
                  Design
                </a>
                <a href="" className="btn btn-secondary m-1">
                  Development
                </a>
                <a href="" className="btn btn-secondary m-1">
                  Marketing
                </a>
                <a href="" className="btn btn-secondary m-1">
                  SEO
                </a>
                <a href="" className="btn btn-secondary m-1">
                  Writing
                </a>
                <a href="" className="btn btn-secondary m-1">
                  Consulting
                </a>
              </div>
            </div>
            {/* Tags End */}
            {/* Image Start */}
            <div className="mb-5">
              <img src="/img/blog-2.jpg" alt="" className="img-fluid" />
            </div>
            {/* Image End */}
            {/* Plain Text Start */}
            <div>
              <h3 className="mb-4">Plain Text</h3>
              <div className="bg-secondary text-center" style={{ padding: 30 }}>
                <p>
                  Vero sea et accusam justo dolor accusam lorem consetetur, dolores sit amet sit dolor clita kasd justo, diam accusam no sea ut
                  tempor magna takimata, amet sit et diam dolor ipsum amet diam
                </p>
                <a href="" className="btn btn-primary py-2 px-4">
                  Read More
                </a>
              </div>
            </div>
            {/* Plain Text End */}
          </div>
          {/* Sidebar End */}
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

export default BlogPage;


export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}