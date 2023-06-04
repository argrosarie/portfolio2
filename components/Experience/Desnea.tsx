import React from "react";
import { motion } from "framer-motion";
import desnea from "../../public/desnea.jpg";
import Image from "next/image";

type Props = {};

function Desnea({}: Props) {
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
        src={desnea}
      />
      <div className="px-0 md:px-10 flex flex-col items-center">
        <h4 className="text-2xl md:text-4xl font-light text-center">
          Frontend Developer
        </h4>
        <p className="font-bold text-xl md:text-2xl mt-1">Desarrollos Nea</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/b54b0a9525e943809d5cfd9b1549b9f7d3b8858f-500x500.png"
            alt="react icon"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/ec85d60e35ac7570017f90d93c1cfd7bf1e77bcb-2048x2048.png"
            alt="tailwind icon"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/19a30950e8bb4ce1c2155bde79a02626202b173c-500x500.png"
            alt="tailwind icon"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt="javascript icon"
          />
        </div>
      </div>
      <ul className="list-disc space-y-2 ml-5 text-lg text-start">
        <li>Creating user interfaces using Tailwind CSS.</li>
        <li>Developing web applications using Next.js versions 12 and 13.</li>

        <li>
          Integrating external components and libraries into the application
          development.
        </li>
        <li>Optimizing performance and loading times of web applications.</li>

        <li>
          Utilizing version control tools like Git for tracking code changes.
        </li>
        <li>
          Researching and applying best practices in front-end development.
        </li>
      </ul>
    </article>
  );
}

export default Desnea;
