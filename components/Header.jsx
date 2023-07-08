"use client";
import React, { useEffect, useRef, useState } from "react";
import { trainersInfo } from "@/data";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
    <>
      <nav className=" bg2 text1 md:px-8 w-full z-50 shadow-xl">
        <motion.div
          ref={ref}
          transition={{ duration: 0.8 }}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          className="max-w-screen-xl text1 h-fit overflow-hidden flex flex-wrap items-center justify-between mx-auto  relative">
          <a href="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              <Image
                alt="logo"
                className="logo object-contain"
                src="/new-logo.png"
                width={150}
                height={180}
              />
            </span>
          </a>
          <div className="flex items-center ">
            <button
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text1 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200  hover:bg-slate-300 "
              aria-controls="navbar-solid-bg"
              aria-expanded={isMenuOpen ? "true" : "false"}
              onClick={toggleMenu}>
              {!isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>

          <div
            className={`w-full md:block md:w-auto ${
              isMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-solid-bg">
            <ul className="flex flex-col text1 font-medium mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <Link
                  href="/"
                  className="py-2 pl-3 pr-4 rounded  md:border-0 md:hover:text-slate-300 md:p-0    md:hover:bg-transparent hover:bg-slate-300 flex justify-center "
                  aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog"
                  className="py-2 pl-3 pr-4 rounded  md:border-0 md:hover:text-slate-300 md:p-0    md:hover:bg-transparent hover:bg-slate-300 flex justify-center ">
                  Catalog
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="py-2 pl-3 pr-4 rounded  md:border-0 md:hover:text-slate-300 md:p-0    md:hover:bg-transparent hover:bg-slate-300 flex justify-center ">
                  Services
                </Link>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="py-2 pl-3 pr-4 rounded  md:border-0 md:hover:text-slate-300 md:p-0    md:hover:bg-transparent hover:bg-slate-300 flex justify-center ">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </nav>
    </>
  );
}
