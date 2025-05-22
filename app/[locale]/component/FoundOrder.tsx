import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

interface Order {
  id?: string;
  activeStep: number;
}

function FoundOrder({ OrderDetails, onclose }: { OrderDetails: Order; onclose: () => void }) {
  const steps = [
    { title: "Packaged", icon: "fa fa-box" },
    { title: "Shipped", icon: "fa fa-truck" },
    { title: "In Transit", icon: "fa fa-location-arrow" },
    { title: "Delivered", icon: "fa fa-check-circle" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative w-[90%] md:w-[80%] max-h-[90%] overflow-y-auto rounded-lg bg-white shadow-2xl border border-gray-200">
        {/* Header */}
        <div className="flex justify-between items-center p-5 bg-red-600 rounded-t-lg">
          <p className="text-white text-sm md:text-base font-semibold uppercase tracking-wide">
            Order ID: {OrderDetails?.id}
          </p>
          <button
            onClick={onclose}
            className="text-white text-lg hover:text-gray-200 transition"
          >
            <i className="fa fa-times"></i>
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row">
          {/* Timeline */}
          <div className="w-full md:w-[70%] p-6 space-y-6">
            {steps.map((step, i) => (
              <motion.div
                initial={{ x: 100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={i}
                className="relative flex items-center gap-4"
              >
                {/* Step Icon */}
                <span
                  className={`${
                    OrderDetails?.activeStep >= i
                      ? "bg-red-600 ring-4 ring-red-300"
                      : "bg-gray-300 ring-4 ring-gray-200"
                  } ${step.icon} text-white text-xl p-3 rounded-full z-10`}
                ></span>

                {/* Connecting Line */}
                {i !== steps.length - 1 && (
                  <div className="absolute left-[2.2rem] top-0 h-full w-1 bg-gradient-to-b from-red-600 to-red-300 z-0 rounded-full"></div>
                )}

                {/* Step Description */}
                <div className="ml-6 bg-gray-50 shadow-md border border-gray-200 p-4 rounded-md w-full">
                  <h3 className="text-sm font-bold mb-1 text-gray-700">{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-snug">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, incidunt.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image Panel */}
          <div className="w-full md:w-[30%] bg-gray-100 flex items-center justify-center p-4">
            <div className="relative w-full h-64 md:h-full">
              <Image
                src="/img/feature.jpg"
                alt="Shipping Process"
                fill
                className="object-cover rounded-md"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoundOrder;
