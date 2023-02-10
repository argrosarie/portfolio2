import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import Muni from "./Experience/Muni";
import Devlights from "./Experience/Devlights";
import Freelance from "./Experience/Freelance";

type Props = {};

const Experience = (props: Props) => {
  return (
    <div className="h-screen flex overflow-hidden mt-10 flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center md:ml-10">
      <h3 className="uppercase tracking-[20px]  text-gray-500 text-lg md:text-2xl">
        Experience
      </h3>
      <div className="w-full flex flex-col md:flex-row space-x-5 overflow-x-scroll overflow-y-scroll p-10  md:scrollbar-thin md:scrollbar-track-gray-400/20  md:scrollbar-thumb-[#5dc1b9]/80 lg:pt-48">
        <Devlights />
        <Freelance />
        <Muni />
      </div>
    </div>
  );
};

export default Experience;
