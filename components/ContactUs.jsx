"use client";
import { trainersInfo } from "@/data";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
export default function ContactUs() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2, // Percentage of the element in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <section id="contact" className="px-16">
      <motion.div
        ref={ref}
        transition={{ duration: 0.5 }}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        className="py-8 text1 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center ">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 text-gray-600 text-center font-semibold sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="text-base block mb-2  font-bold ">
              Your email / phone
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm border-black    border my-border   rounded-lg   block w-full p-2.5 bg-white  "
              placeholder=""
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="text-base block mb-2  font-bold ">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="shadow-sm border-black  border my-border   rounded-lg   block w-full p-2.5 bg-white "
              placeholder=""
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="text-base block mb-2  font-bold ">
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="shadow-sm border-black  border my-border   rounded-lg   block w-full p-2.5 bg-white "
              placeholder=""></textarea>
          </div>
          <button
            type="submit"
            className="flex bg5 text-white focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg  px-5 py-2.5 justify-center w-full text-center">
            Send message
          </button>
        </form>
      </motion.div>
    </section>
  );
}
