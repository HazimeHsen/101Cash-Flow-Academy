import React from "react";
import { BsTelegram } from "react-icons/bs";
export default function Reviews() {
  return (
    <div className="text-center">
      <div>
        <h1 className="uppercase text1 mb-3 font-bold text-3xl">Reviews</h1>
        <a
          href="https://t.me/+zpO_FCkSZkExNzVk"
          className="text-xl font-semibold text-slate-700 flex justify-center items-center"
          target="_blank">
          <span className="mr-3">Check Our Telegram</span>
          <div className="text1">
            <BsTelegram />
          </div>
        </a>
      </div>
    </div>
  );
}
