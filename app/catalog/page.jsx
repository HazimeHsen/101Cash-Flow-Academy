"use client";
import CatalogCards from "@/components/CatalogCards";
import { catalog } from "@/data";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Catalog() {
  const controls = useAnimation();
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <div
      id="catalog"
      className="text1 px-7 w-full flex flex-col items-center text-center my-10 ">
      <motion.h1
        transition={{ duration: 0.8 }}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        className="uppercase text-3xl font-bold mb-5">
        Catalog
      </motion.h1>
      <div className="flex gap-4 flex-wrap justify-center">
        {catalog.map((cat, index) => (
          <div key={index}>
            <CatalogCards catalog={cat} />
          </div>
        ))}
      </div>
    </div>
  );
}
