import React from "react";
import { ImageLoader } from "../ImageLoader";

type WhyUscardProps= {
  translate:{
    why_us_card:{
      title:string,
      subtitle:string
      maintext:string
      list:{
        list1:string,
        list2:string,
        list3:string
      }
    }
    learn_more:string
  }
}
function WhyUscard({translate}: WhyUscardProps) {
  return (
    <div className="container-fluid bg-secondary my-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <ImageLoader imageUrl="/img/feature.jpg" name="djdj"/>
          </div>
          <div className="col-lg-7 py-5 py-lg-0">
            <h6 className="text-primary text-uppercase font-weight-bold">{translate.why_us_card.title}</h6>
            <h1 className="mb-4">{translate.why_us_card.subtitle}</h1>
            <p className="mb-4">
             {translate.why_us_card.maintext}
            </p>
            <ul className="list-inline">
              <li>
                <h6>
                  <i className="far fa-dot-circle text-primary mr-3" />
                  {translate.why_us_card.list.list1}
                </h6>
              </li>
              <li>
                <h6>
                  <i className="far fa-dot-circle text-primary mr-3" />
                  {translate.why_us_card.list.list2}
                </h6>
              </li>
              <li>
                <h6>
                  <i className="far fa-dot-circle text-primary mr-3" />
                  {translate.why_us_card.list.list3}
                </h6>
              </li>
            </ul>
            <a href="" className="btn btn-primary mt-3 py-2 px-4">
              {translate.learn_more}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUscard;
