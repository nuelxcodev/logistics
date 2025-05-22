import { motion } from "framer-motion";
import React from "react";

interface Order {
  id?: string;
  activeStep: number;
}

function FoundOrder({ OrderDetails, onclose }: { OrderDetails: Order; onclose: () => void }) {
  const steps = [
    { title: "pasceled", icon: "fa fa-box" },
    { title: "shipped", icon: "fa fa-truck" },
    { title: "moving", icon: "fa fa-location" },
    { title: "dilivered", icon: "fa fa-check" },
  ];
  return (
    <div className=" absolute inset-0 h-screen w-full backdrop:blur-[5px] flex justify-center items-center">
      <div className=" bg-gray-100 h-[80%] w-[90%] md:w-[80%] z-50 shadow-lg border border-white overflow-y-auto overflow-x-hidden">
        <div className=" flex justify-between p-10 items-center  bg-amber-700 text-white">
          <p>
            <strong className=" text-white uppercase">Order Id: </strong>
            {OrderDetails?.id}
          </p>
          <p>
            <i className="fa fa-close " onClick={onclose}></i>
          </p>
        </div>
        <div className=" flex flex-col md:flex-row" >
          <div className="w-full md:w-[70%]">
            {steps.map((step, i: number) => (
              <motion.div
                initial={{ x: 100 }}
                whileInView={{ x: 10 }}
                transition={{ duration: 0.5 }}
                key={i}
                className=" flex items-center not-first:mt-[20px] justify-center md:mt-[40px]"
              >
                <div className="">
                  {/* <span className=" font-bold">{step.title}</span> */}
                  <span
                    className={`${step.icon} ${
                      OrderDetails?.activeStep >= i ? "bg-indigo-950 ring-orange-600" : "bg-gray-400"
                    } p-3 text-white rounded-full ring-2  ring-offset-4`}
                  ></span>
                </div>
                <span className="w-[10%] md:w-[20%] h-[1px] bg-orange-600"></span>
                <p className=" shadow-md border w-[60%] text-xs bg-white p-2 z-10">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, atque. Enim ut architecto facilis quae cumque nostrum omnis
                  perferendis sed tempore, harum dignissimos, ab velit, in illo repudiandae. Quod, esse.
                </p>
              </motion.div>
            ))}
          </div>
          <div className=" md:w-[30%] h-full">
            <img src="/img/feature.jpg" alt="ship" className=" object-fill z-20 relative "/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoundOrder;
