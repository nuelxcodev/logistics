import type { Locale } from "@/libs/i18n/config";
import { getDictionary } from "@/libs/i18n/getDictionary";
import Image from "next/image";

async function BlogPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
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
                {dict.nav.home}
              </a>
            </p>
            <i className="fa fa-circle px-3" />
            <p className="m-0">{dict.blog_page.breadcrumbCurrent}</p>
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
                  <Image className="img-fluid w-100" src="/img/blog-1.jpg" alt="" width={750} height={400} />
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
                      <Image className="rounded-circle" style={{ width: 40, height: 40 }} src="/img/user.jpg" alt="" width={40} height={40} />
                      <a className="text-muted ml-2" href="">
                        {dict.blog_page.author}
                      </a>
                    </div>
                    <div className="d-flex align-items-center ml-4">
                      <i className="far fa-bookmark text-primary" />
                      <a className="text-muted ml-2" href="">
                        {dict.blog_page.category}
                      </a>
                    </div>
                  </div>
                  <h4 className="font-weight-bold mb-3">{dict.blog_page.post1_title}</h4>
                  <p>{dict.blog_page.post1_desc}</p>
                  <a className="border-bottom border-primary text-uppercase text-decoration-none" href="">
                    {dict.blog_page.read_more} <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <div className="position-relative">
                  <Image className="img-fluid w-100" src="/img/blog-2.jpg" alt="" width={750} height={400} />
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
                      <Image className="rounded-circle" style={{ width: 40, height: 40 }} src="/img/user.jpg" alt="" width={40} height={40} />
                      <a className="text-muted ml-2" href="">
                        {dict.blog_page.author}
                      </a>
                    </div>
                    <div className="d-flex align-items-center ml-4">
                      <i className="far fa-bookmark text-primary" />
                      <a className="text-muted ml-2" href="">
                        {dict.blog_page.category}
                      </a>
                    </div>
                  </div>
                  <h4 className="font-weight-bold mb-3">{dict.blog_page.post2_title}</h4>
                  <p>{dict.blog_page.post2_desc}</p>
                  <a className="border-bottom border-primary text-uppercase text-decoration-none" href="">
                    {dict.blog_page.read_more} <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <div className="position-relative">
                  <Image className="img-fluid w-100" src="/img/blog-1.jpg" alt="" width={750} height={400} />
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
                      <Image className="rounded-circle" style={{ width: 40, height: 40 }} src="/img/user.jpg" alt="" width={40} height={40} />
                      <a className="text-muted ml-2" href="">
                        {dict.blog_page.author}
                      </a>
                    </div>
                    <div className="d-flex align-items-center ml-4">
                      <i className="far fa-bookmark text-primary" />
                      <a className="text-muted ml-2" href="">
                        {dict.blog_page.category}
                      </a>
                    </div>
                  </div>
                  <h4 className="font-weight-bold mb-3">{dict.blog_page.post3_title}</h4>
                  <p>{dict.blog_page.post3_desc}</p>
                  <a className="border-bottom border-primary text-uppercase text-decoration-none" href="">
                    {dict.blog_page.read_more} <i className="fa fa-angle-right" />
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
                  <input type="text" className="form-control border-0 p-4" placeholder={dict.blog_page.search_placeholder} />
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
              <h3 className="mb-4">{dict.blog_page.categories}</h3>
              <div className="bg-secondary" style={{ padding: 30 }}>
                <ul className="list-inline m-0">
                  <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                    <a className="text-dark" href="#">
                      <i className="fa fa-angle-right text-primary mr-2" />
                      {dict.blog_page.category_delivery}
                    </a>
                    <span className="badge badge-secondary badge-pill">150</span>
                  </li>
                  <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                    <a className="text-dark" href="#">
                      <i className="fa fa-angle-right text-primary mr-2" />
                      {dict.blog_page.category_tracking}
                    </a>
                    <span className="badge badge-secondary badge-pill">131</span>
                  </li>
                  <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                    <a className="text-dark" href="#">
                      <i className="fa fa-angle-right text-primary mr-2" />
                      {dict.blog_page.category_logistics}
                    </a>
                    <span className="badge badge-secondary badge-pill">78</span>
                  </li>
                  <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                    <a className="text-dark" href="#">
                      <i className="fa fa-angle-right text-primary mr-2" />
                      {dict.blog_page.category_tips}
                    </a>
                    <span className="badge badge-secondary badge-pill">56</span>
                  </li>
                  <li className="py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                    <a className="text-dark" href="#">
                      <i className="fa fa-angle-right text-primary mr-2" />
                      {dict.blog_page.category_support}
                    </a>
                    <span className="badge badge-secondary badge-pill">98</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Category End */}
            {/* Recent Post Start */}
            <div className="mb-5">
              <h3 className="mb-4">{dict.blog_page.recent_posts}</h3>
              <div className="d-flex mb-3">
                <Image
                  className="img-fluid"
                  src="/img/blog-1.jpg"
                  style={{ width: 80, height: 80, objectFit: "cover" }}
                  alt=""
                  width={80}
                  height={80}
                />
                <a href="" className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3" style={{ height: 80 }}>
                  {dict.blog_page.recent_post1}
                </a>
              </div>
              <div className="d-flex mb-3">
                <Image
                  className="img-fluid"
                  src="/img/blog-2.jpg"
                  style={{ width: 80, height: 80, objectFit: "cover" }}
                  alt=""
                  width={80}
                  height={80}
                />
                <a href="" className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3" style={{ height: 80 }}>
                  {dict.blog_page.recent_post2}
                </a>
              </div>
              <div className="d-flex mb-3">
                <Image
                  className="img-fluid"
                  src="/img/blog-1.jpg"
                  style={{ width: 80, height: 80, objectFit: "cover" }}
                  alt=""
                  width={80}
                  height={80}
                />
                <a href="" className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3" style={{ height: 80 }}>
                  {dict.blog_page.recent_post3}
                </a>
              </div>
              <div className="d-flex mb-3">
                <Image
                  className="img-fluid"
                  src="/img/blog-2.jpg"
                  style={{ width: 80, height: 80, objectFit: "cover" }}
                  alt=""
                  width={80}
                  height={80}
                />
                <a href="" className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3" style={{ height: 80 }}>
                  {dict.blog_page.recent_post4}
                </a>
              </div>
              <div className="d-flex mb-3">
                <Image
                  className="img-fluid"
                  src="/img/blog-1.jpg"
                  style={{ width: 80, height: 80, objectFit: "cover" }}
                  alt=""
                  width={80}
                  height={80}
                />
                <a href="" className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3" style={{ height: 80 }}>
                  {dict.blog_page.recent_post5}
                </a>
              </div>
            </div>
            {/* Recent Post End */}
            {/* Image Start */}
            <div className="mb-5">
              <Image src="/img/blog-1.jpg" alt="" className="img-fluid" width={400} height={250} />
            </div>
            {/* Image End */}
            {/* Tags Start */}
            <div className="mb-5">
              <h3 className="mb-4">{dict.blog_page.tag_cloud}</h3>
              <div className="d-flex flex-wrap m-n1">
                <a href="" className="btn btn-secondary m-1">
                  {dict.blog_page.tag_shipping}
                </a>
                <a href="" className="btn btn-secondary m-1">
                  {dict.blog_page.tag_tracking}
                </a>
                <a href="" className="btn btn-secondary m-1">
                  {dict.blog_page.tag_logistics}
                </a>
                <a href="" className="btn btn-secondary m-1">
                  {dict.blog_page.tag_support}
                </a>
                <a href="" className="btn btn-secondary m-1">
                  {dict.blog_page.tag_delivery}
                </a>
                <a href="" className="btn btn-secondary m-1">
                  {dict.blog_page.tag_express}
                </a>
              </div>
            </div>
            {/* Tags End */}
            {/* Image Start */}
            <div className="mb-5">
              <Image src="/img/blog-2.jpg" alt="" className="img-fluid" width={400} height={250} />
            </div>
            {/* Image End */}
            {/* Plain Text Start */}
            <div>
              <h3 className="mb-4">{dict.blog_page.about_us}</h3>
              <div className="bg-secondary text-center" style={{ padding: 30 }}>
                <p>{dict.blog_page.about_us_text}</p>
                <a href="" className="btn btn-primary py-2 px-4">
                  {dict.blog_page.learn_more}
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
