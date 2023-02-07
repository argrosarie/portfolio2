import React from "react";
import { motion } from "framer-motion";

type Props = {
  
};

function Skill({}: Props) {
  return (
    <div className="group flex cursor-pointer">
      <img
     
        src="https://cdn.sanity.io/images/ltuexkre/production/b54b0a9525e943809d5cfd9b1549b9f7d3b8858f-500x500.png"
        alt="technology icon"
        className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
    </div>
  );
}

export default Skill;
