"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <footer className="p-8 text1 font-semibold flex items-center mx-auto max-w-[1240px] justify-center">
      <motion.div
        ref={ref}
        transition={{ duration: 1 }}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        className="flex items-center mx-auto max-w-[1240px] justify-center">
        <div className="flex  items-center w-full justify-between md:flex-row">
          <p className="text-xs tracking-wide ">Copyright © 2022 </p>
          <div className="flex ml-3">
            <a href="#" className="mr-1  hover:text-gray-900 ">
              <AiOutlineInstagram />
            </a>
            <a href="#" className="mr-1  hover:text-gray-900 ">
              <AiFillYoutube />
            </a>
            <a href="#" className="mr-1  hover:text-gray-900 ">
              <FaTiktok />
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
