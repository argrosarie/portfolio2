import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
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
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://avatars.githubusercontent.com/u/51086021?v=4"
        alt="company logo"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Front end developer</h4>
        <p className="font-bold text-2xl mt-1">Muni de Ctes</p>
        <div className="flex space-x-2 my-2">
          <img
          className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/b54b0a9525e943809d5cfd9b1549b9f7d3b8858f-500x500.png"
            alt="technology icon"
          />
                <img
          className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/b54b0a9525e943809d5cfd9b1549b9f7d3b8858f-500x500.png"
            alt="technology icon"
          />
                <img
          className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/b54b0a9525e943809d5cfd9b1549b9f7d3b8858f-500x500.png"
            alt="technology icon"
          />
          
        </div>
        <p className="uppercase py-5 text-gray-300">Dec 2021 Nov 2022</p>
      </div>
      <ul className="list-disc space-y-4 ml-5 text-lg">
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem ipsum dolor sit.</li>
      </ul>
    </article>
  );
}

export default ExperienceCard;
