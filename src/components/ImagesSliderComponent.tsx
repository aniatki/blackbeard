"use client";
import { motion } from "motion/react";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import BookingForm from "./BookingForm";

export default function ImagesSliderComponent() {
  const images = [
    "https://cdn1.treatwell.net/images/view/v2.i5388915.w1280.h800.xA2B5BE4D/",
    "https://cdn1.treatwell.net/images/view/v2.i5381674.w1280.h800.x955ECED7/",
    "https://cdn1.treatwell.net/images/view/v2.i5382146.w1280.h800.xF72F7EC4/",
    "https://cdn1.treatwell.net/images/view/v2.i5381667.w1280.h800.x4E59DFFF/",
    "https://cdn1.treatwell.net/images/view/v2.i5381668.w1280.h800.x765ADC7D/",
    "https://cdn1.treatwell.net/images/view/v2.i5381639.w1280.h800.xF85B8446/",
  ];

  return (
    <ImagesSlider className="h-screen" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          The barbershop that<br /> nobody asked for
        </motion.p>
        <BookingForm />
      </motion.div>
    </ImagesSlider>
  );
}
