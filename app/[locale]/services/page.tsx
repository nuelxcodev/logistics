import Link from "next/link";
import Services from "../component/ui/Services";
import Quoter from "../component/ui/Quoter";
import TestimonialSlider from "../component/TestimonialSlider";
import { getDictionary } from "@/libs/i18n/getDictionary";
import { locales, type Locale } from "@/libs/i18n/config";

export default async function ServicesPage({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale);
  return (
    <>
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

      <Services translate={dict} />
      <Quoter />
      <TestimonialSlider />

      <a href="#" className="btn btn-lg btn-primary back-to-top">
        <i className="fa fa-angle-double-up" />
      </a>
    </>
  );
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
