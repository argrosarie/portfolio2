/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import lawyer from "../../public/lawyer.png";
import Link from "next/link";

const Lawyer = () => {
  return (
    // <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
      <div className="h-max md:pb-10 flex flex-col  items-center space-y-6 flex-shrink-0 w-[260px] md:w-[700px] px-4 py-6 my-6 ">
    
      <Link
        href="https://estudiojdcofuentesyasociados.web.app/"
        target="_blank"
      >
        <Image
          className="md:mb-0  w-36 h-36 rounded md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[300px] object-contain cursor-pointer"
          src={lawyer}
          alt="site' screenshot"
        />
      </Link>

      <div className="space-x-10 space-y-6 px-0 md:px-10 max-w-6xl">
        <h4 className="text-2xl md:text-4xl font-semibold text-center">
          <span className="underline decoration-[#5dc1b9]/50"> Landing</span>{" "}
          Page
        </h4>
        <p className="text-lg text-start">
        Landing page highlights client's personal brand, skills, achievements, and experiences. Builds trust, establishes credibility, and communicates value proposition to potential clients, partners, or employers. Includes background, expertise, and contact info
        </p>
      </div>
    </div>
  );
};

export default Lawyer;
