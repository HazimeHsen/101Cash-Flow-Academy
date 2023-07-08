"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
export default function Benefits() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <motion.div
      id="benefits"
      transition={{ duration: 0.8 }}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      className="text1 px-7 w-full flex flex-col items-center text-center my-10 ">
      <h1 className="uppercase text-3xl font-bold mb-5">
        Key benefits of the business accelerator course
      </h1>
      <div className="lg:mx-36 bg4 shadow-lg rounded-lg p-8 md:p-12 mb-8">
        <h1 className="text-white text-xl font-bold mb-5">
          Since we value your Trust more than anything else,we’re also offering
          you a:
        </h1>
        <p className="font-semibold text-gray-600 mb-6">
          This is exactly what we’re offering in the “Business Growth Mastery
          Program” package but it doesn’t include the support from our
          experienced mentors which will provide guidance and support throughout
          the program.However,the course alone should be able to take your
          business to the next level following the valuable informations that
          are being said by a multi-millionaire influencer and businessman.
        </p>
      </div>
    </motion.div>
  );
}
