import React from "react";
import { motion } from "framer-motion";
import devlights from "../../public/devlights.png";
import Image from "next/image";

type Props = {};

function Devlights({}: Props) {
  return (
    <article className="h-max md:pb-10 flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-[260px] md:w-[800px] px-4 py-6  bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200">
      {/* <motion.img
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
        className="w-24 h-24 rounded-full md:w-[100px] md:h-[100px] object-cover object-center"
        src="../../public/devlights.png"
        alt="devlights logo"
      /> */}
      <Image
        alt="devlights logo"
        className="w-24 h-24 rounded-full md:w-[100px] md:h-[100px] object-cover object-center"
        src={devlights}
      />
      <div className="px-0 md:px-10 flex flex-col items-center">
        <h4 className="text-2xl md:text-4xl font-light text-center">
          Full Stack Developer
        </h4>
        <p className="font-bold text-xl md:text-2xl mt-1">Devlights </p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/b54b0a9525e943809d5cfd9b1549b9f7d3b8858f-500x500.png"
            alt="react icon"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/fa5e6eeb3377a1601e181d0eeb9a60633090cff2-500x500.png"
            alt="typescript icon"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/28cdc2c56750f218336fa8f3a528b5c6935c8f43-500x500.png"
            alt="node icon"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/9c1587d869001b2a2e479b5fdf92a4c14d3cfd6f-500x500.png"
            alt="posgres icon"
          />
        </div>
      </div>
      <ul className="list-disc space-y-2 ml-5 text-lg text-start">
        <li>
          Development and maintenance of web applications using technologies
          such as HTML, CSS, JavaScript and React.
        </li>
        <li>
          Implementation of REST APIs and consumption of external services.
        </li>

        <li>Collaboration in version control using Git and Bitbucket.</li>
        <li>Teamwork using agile methodologies such as Scrum and Kanban</li>
        <li>
          Participation in technical and architectural decision-making for the
          project.
        </li>
      </ul>
    </article>
  );
}

export default Devlights;
