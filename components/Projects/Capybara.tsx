import React from "react";
import { motion } from "framer-motion";

const Capybara = () => {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
      <motion.img
        initial={{
          y: -300,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        src="https://cdn.sanity.io/images/ltuexkre/production/b54b0a9525e943809d5cfd9b1549b9f7d3b8858f-500x500.png"
        alt=""
      />
      <div className="space-x-10 px-0 md:px-10 max-w-6xl">
        <h4 className="text-4xl font-semibold text-center">
          <span className="underline decoration-[#5dc1b9]/50">
            {" "}
            Lazy 
          </span>
          {" "}Capybara
        </h4>
        <p className="text-lg text-center md:text-left">
        Lazy Capybara is a web application that consumes a random capybara photo API. Its unique feature is its lazy loading, which only loads the images as the user scrolls through the page. This results in a faster and more seamless user experience, as the images only load as they become visible to the user.
        </p>
      </div>
    </div>
  );
};

export default Capybara;
