import React from "react";
import AboutUscard from "../component/ui/AboutUscard";
import WhyUscard from "../component/ui/WhyUscard";
import { getDictionary } from "@/libs/i18n/getDictionary";
import { Locale } from "@/libs/i18n/config";

type Props = {
  params: {
    locale: Locale;
  };
};

export default async function AboutPage({ params }: Props) {
  const dict = await getDictionary(params.locale);

  return (
    <>
      {/* Header Start */}
      <div className="jumbotron jumbotron-fluid mb-5">
        <div className="container text-center py-5">
          <h1 className="text-white display-3">{dict.about?.headerTitle}</h1>
          <div className="d-inline-flex align-items-center text-white">
            <p className="m-0">
              <a className="text-white" href="">
                {dict.about?.breadcrumbHome}
              </a>
            </p>
            <i className="fa fa-circle px-3" />
            <p className="m-0">{dict.about?.breadcrumbCurrent}</p>
          </div>
        </div>
      </div>

      {/* About Start */}
      <AboutUscard translate={dict} />
      {/* About End */}

      {/* Features Start */}
      <WhyUscard translate={dict} />
      {/* Features End */}

      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary back-to-top">
        <i className="fa fa-angle-double-up" />
      </a>
    </>
  );
}
