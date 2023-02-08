import React from "react";
import { motion } from "framer-motion";
import Capybara from "./Projects/Capybara";
import Lawyer from "./Projects/Lawyer";
import LinkdinClone from "./Projects/LinkdinClone";
import OldPortfolio from "./Projects/OldPortfolio"


type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5, 6];
  return (
    <motion.div 
    initial={{
        opacity:0
    }}
    whileInView={{
        opacity:1
    }}
    transition={{
        duration: 1.2
    }}
    className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 ">
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl md:ml-16">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20  scrollbar-thumb-[#5dc1b9]/80">
        <Lawyer />
        <OldPortfolio />
        {/* <Capybara/>
        <LinkdinClone /> */}
      </div>
      <div className="w-full absolute top-[30%] bg-[#5dc1b9]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
