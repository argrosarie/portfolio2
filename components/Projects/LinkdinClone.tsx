import React from "react";
import { motion } from "framer-motion";

const LinkedinClone = () => {
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
          
          LinkedIn{" "}
          <span className="underline decoration-[#5dc1b9]/50"> Clone</span>
        </h4>
        <p className="text-lg text-center md:text-left">
        LinkedIn Clone is a project built using React and Firebase. As the name suggests, it is a <span className="underline decoration-[#5dc1b9]/50">clone</span> of the original LinkedIn platform. The aim of this project is to provide similar functionality and features as the original LinkedIn platform, including profile creation and postings. The project leverages the power of Firebase for real-time data storage and retrieval, allowing for seamless integration with React to create a dynamic and responsive user interface.
        </p>
      </div>
    </div>
  );
};

export default LinkedinClone;
