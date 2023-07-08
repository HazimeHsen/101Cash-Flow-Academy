"use client";
import { home1, home2, home3, packageName } from "@/data";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
export default function StartPage() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <section className=" text1  pt-4 md:text-start text-center">
      <motion.div className=" px-4 sm:px-10 mx-auto max-w-screen-xl">
        <motion.h1
          transition={{ duration: 0.8, delay: 0 }}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          className=" text-3xl md:text-5xl font-extrabold mb-7">
          {packageName}
        </motion.h1>
        <div className="md:ml-5">
          <motion.div
            transition={{ duration: 0.8, delay: 1 }}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            className=" bg4  shadow-lg rounded-lg p-8 md:p-12 mb-8">
            <motion.p
              transition={{ duration: 0.8, delay: 1.5 }}
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
              }}
              className=" font-semibold  text-gray-600 mb-6">
              {home1}
            </motion.p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              transition={{ duration: 0.8, delay: 1 }}
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
              }}
              className=" bg4  shadow-lg rounded-lg p-8 md:p-12">
              <motion.p
                transition={{ duration: 0.8, delay: 1.5 }}
                initial="hidden"
                animate={controls}
                variants={{
                  visible: { opacity: 1 },
                  hidden: { opacity: 0 },
                }}
                className=" font-semibold  text-gray-600 mb-4">
                {home2}
              </motion.p>
            </motion.div>
            <motion.div
              transition={{ duration: 0.8, delay: 1 }}
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
              }}
              className=" bg4  shadow-lg rounded-lg p-8 md:p-12">
              <motion.p
                transition={{ duration: 0.8, delay: 1.5 }}
                initial="hidden"
                animate={controls}
                variants={{
                  visible: { opacity: 1 },
                  hidden: { opacity: 0 },
                }}
                className=" font-semibold  text-gray-600 mb-4">
                {home3}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
