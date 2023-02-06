import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import oldportfolio from "../../public/oldportfolio.png";

const OldPortfolio = () => {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
      {/* <motion.img
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
      /> */}
      <Link
       href="https://argrosarie.web.app/"
       target="_blank"
      >
      
        <Image
          className="md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[300px] object-contain cursor-pointer"
          src={oldportfolio}
          alt=""
        />
      </Link>

      <div className="space-x-10 px-0 md:px-10 max-w-6xl">
        <h4 className="text-4xl font-semibold text-center">
          Old{" "}
          <span className="underline decoration-[#5dc1b9]/50"> Portfolio</span>
        </h4>
        <p className="text-lg text-center md:text-left">
          My old portfolio is built using vanilla JavaScript and displays my
          previous work as well as the educational institutions I attended. The
          portfolio serves as a showcase of my skills, projects, and
          experiences, allowing potential clients or employers to see the
          breadth and depth of my capabilities. The goal of the portfolio is to
          demonstrate my expertise, communicate my value proposition, and
          provide a point of reference for potential clients or employers to
          evaluate my qualifications.
        </p>
      </div>
    </div>
  );
};

export default OldPortfolio;
