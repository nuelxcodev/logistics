import React from "react";
import { ImageLoader } from "../ImageLoader";
type AboutUscardprop = {
  translate: {
    about_us: {
      title: string;
      subTitle:string,
      mainText:string;
      button_text: string
      years_experience:string
    };
  };
};

function AboutUscard({ translate }: AboutUscardprop) {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 pb-4 pb-lg-0">
          
            <ImageLoader imageUrl="/img/about.jpg" name="Logistics Service"/>
            <div className="bg-primary text-dark text-center p-4">
              <h3 className="m-0 text-white">{translate.about_us.years_experience}</h3>
            </div>
          </div>
          <div className="col-lg-7">
            <h6 className="text-primary text-uppercase font-weight-bold">{translate.about_us.title}</h6>
            <h1 className="mb-4">{translate.about_us.subTitle}</h1>
            <p className="mb-4">
             {translate.about_us.mainText}
            </p>
            <div className="d-flex align-items-center pt-2">
              <button
                type="button"
                className="btn-play"
                data-toggle="modal"
                data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                data-target="#videoModal"
              >
                <span />
              </button>
              <h5 className="font-weight-bold m-0 ml-4">{translate.about_us.button_text}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUscard;
