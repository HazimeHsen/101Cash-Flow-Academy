"use client";
import React, { useState } from "react";

export default function ServicesCard({ ser, prices, image }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="max-w-xl bg5 border font-semibold border-gray-200 rounded-lg shadow ">
      <img className="rounded-t-lg" src={image} alt="" />
      <div className="flex flex-col justify-between p-5">
        <h5 className="flex justify-between flex-1 mb-2 text-2xl font-bold tracking-tight text-white ">
          <span>{ser.title}</span>
          <span>
            <span className="mr-2 line-through text-sm text-slate-600">
              {prices[0] ? prices[0] + "$" : ""}
            </span>
            <span className="underline">
              {prices[1] ? prices[1] + "$" : ""}
            </span>
          </span>
        </h5>
        <div className="relative ">
          <button
            className="py-2 px-4 flex items-center bg4 text-white font-semibold rounded-md"
            onClick={toggleDropdown}>
            <span className="mr-2">Read more</span>
            <div>
              {isDropdownOpen ? (
                <svg
                  className="w-3 h-3 text-white dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 8 14">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                  />
                </svg>
              ) : (
                <svg
                  className="w-3 h-3 text-white dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 8">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                  />
                </svg>
              )}
            </div>
          </button>
          <div
            className={`mt-2  p-4 rounded-md transition-opacity ${
              isDropdownOpen ? "hidden" : "visible"
            }`}
            style={{ transitionDuration: "0.3s" }}>
            {ser.info.map((i, index) => (
              <p key={index} className="mb-4">
                {i}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
