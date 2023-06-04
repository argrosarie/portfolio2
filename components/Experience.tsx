import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import Muni from "./Experience/Muni";
import Devlights from "./Experience/Devlights";
import Freelance from "./Experience/Freelance";
import Desnea from "./Experience/Desnea";

type Props = {};

const Experience = (props: Props) => {
  return (
    <div className="flex flex-col space-y-4 md:h-screen text-center lg:text-left lg:flex-row max-w-7xl justify-evenly ml-10 items-center lg:ml-10 pt-20 md:pt-[5px]">
      <h3 className="uppercase tracking-[18px]  text-gray-500 text-2xl md:text-2xl">
        Experience
      </h3>

      <div className="w-full flex flex-row space-x-5 overflow-x-scroll overflow-y-scroll pb-10 md:scrollbar-thin md:scrollbar-track-gray-400/20  md:scrollbar-thumb-[#5dc1b9]/80 lg:pt-48 ">
        <Desnea />
        <Devlights />
        <Freelance />
        <Muni />
      </div>
    </div>
  );
};

export default Experience;
