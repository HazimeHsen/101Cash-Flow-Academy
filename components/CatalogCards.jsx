import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function CatalogCards({ catalog }) {
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
    <motion.div
      ref={ref}
      transition={{ duration: 0.8 }}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      className="p-5 flex-1 h-full bg4 shadow-lg bordeaux rounded-2xl">
      <div className="flex flex-col items-center justify-between max-w-sm">
        <h1 className=" text-white text-xl font-bold my-3">{catalog.title}</h1>
        <p className="flex-1 text-gray-600 font-semibold mb-7">
          {catalog.info}
        </p>
      </div>
    </motion.div>
  );
}
