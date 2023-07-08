"use client";
import { BsWhatsapp } from "react-icons/bs";

export default function ScrollToTopButton() {
  return (
    <div className="relative">
      <a
        target="_blank"
        href="https://api.whatsapp.com/send?phone=14062848328"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
        }}>
        <div className="absolute w-48 text-sm bg-white text-black px-4 py-2 -left-52 top-1/2 rounded-lg -translate-y-1/2">
          <span>Need Help? Chat with us</span>
        </div>
        <div
          className={`bg-green-600 scroll-to-top-btn  `}
          style={{
            zIndex: 100,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            borderRadius: "50%",
            width: "50px",
            border: "none",
            height: "50px",
            fontSize: "20px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
            cursor: "pointer",
            transition: "opacity 0.3s ease",
          }}>
          <BsWhatsapp />
        </div>
      </a>
    </div>
  );
}
