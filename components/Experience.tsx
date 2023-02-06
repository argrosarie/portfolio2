import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import Muni from "./Experience/Muni";
import Devlights from "./Experience/Devlights";
import Freelance from "./Experience/Freelance";

type Props = {};

const Experience = (props: Props) => {
  return (
    <motion.div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-lg md:text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll overflow-y-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20  scrollbar-thumb-[#5dc1b9]/80">
        <Devlights />
        <Muni />
        <Freelance />
      </div>
    </motion.div>
  );
};

export default Experience;
