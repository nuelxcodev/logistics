"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

type Testimonial = {
  text: string;
  author: string;
  position: string;
};

const testimonials: Testimonial[] = [
  {
    text: "testimonial_1_text",
    author: "testimonial_1_author",
    position: "testimonial_1_position",
  },
  {
    text: "testimonial_2_text",
    author: "testimonial_2_author",
    position: "testimonial_2_position",
  },
  {
    text: "testimonial_3_text",
    author: "testimonial_3_author",
    position: "testimonial_3_position",
  },
];

const TestimonialSlider: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="md:w-[60%] justify-center items-center z-30 relative">
      <h2 className="text-3xl font-extrabold text-center mb-12 relative z-30 text-[#0b1b37]">
        {t("testimonials_heading")}
      </h2>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:w-[70%] m-auto bg-[#f4f4f4]/90 border border-white p-10 md:p-20 shadow-2xl rounded-xl"
        >
          <p className="text-lg italic text-gray-700">
            {t(testimonials[current].text)}
          </p>
          <div className="text-xl font-extrabold mt-8 text-[#1b4617] font-mono text-shadow">
            {t(testimonials[current].author)}
            <span className="font-sans">
              {" "}– {t(testimonials[current].position)}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-6 flex justify-center gap-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === current ? "bg-[#bc0a10]" : "bg-gray-500"
            }`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
