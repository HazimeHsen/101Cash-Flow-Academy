"use client";
import { services } from "@/data";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ServicesCard from "@/components/ServicesCard";

export default function Services() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);
  const prices = [
    ["", ""],
    ["", "60"],
    ["250", "130"],
    ["900", "248"],
    ["2600", "348"],
  ];
  const images = [
    "/biz.jpeg",
    "/biz.jpeg",
    "/biz.jpeg",
    "/easy.jpg",
    "/easymoney.jpg",
  ];
  return (
    <motion.div
      id="services"
      transition={{ duration: 0.8 }}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      className="px-10 mt-6 w-full h-fit flex flex-col ">
      <h1 className="text-center text1 mb-5 uppercase font-bold text-2xl">
        About Our Services
      </h1>
      <div className="flex text-white items-center justify-evenly flex-wrap-reverse">
        <div className="mt-4 md:mt-0">
          <div className="flex justify-center flex-col w-full flex-wrap gap-4">
            {services.map((ser, index) => (
              <div key={index}>
                <ServicesCard
                  ser={ser}
                  image={images[index]}
                  prices={prices[index]}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
