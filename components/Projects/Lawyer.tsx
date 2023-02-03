/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { motion } from "framer-motion";

const Lawyer = () => {
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
          <span className="underline decoration-[#5dc1b9]/50"> Landing</span>{" "}
          Page
        </h4>
        <p className="text-lg text-center md:text-left">
          This landing page is a website designed to showcase information about
          a client and their personal brand. The page serves as a platform to
          highlight the client's unique skills, achievements, and experiences,
          allowing them to effectively communicate their value proposition to
          potential clients, partners, or employers. The landing page may
          include information such as the client's background, areas of
          expertise, portfolio of work, testimonials, and contact information.
          The goal of the landing page is to build trust, establish credibility,
          and promote the client's personal brand in a professional and
          effective manner.
        </p>
      </div>
    </div>
  );
};

export default Lawyer;
