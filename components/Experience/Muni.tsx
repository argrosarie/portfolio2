import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Muni({}: Props) {
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
        src="https://yt3.googleusercontent.com/ytc/AL5GRJX2zr2DtHfl_S-xaOnMUW5R0_h3Gkr9FrHw8ZKKWg=s900-c-k-c0x00ffffff-no-rj"
        alt="Municipalidad logo"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Frontend Developer</h4>
        <p className="font-bold text-2xl mt-1">Modernization, Innovation and Technology Office (Goverment)</p>
        <div className="flex space-x-2 my-2">
          <img
          className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/df2fb90aec55dc3d8df7544efeb4a476508b0029-500x500.png"
            alt="HTML icon"
          />
                <img
          className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/4d05ea180968c83605afe80a2617de5fb71744e2-500x500.png"
            alt="CSS icon"
          />
                <img
          className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/b54b0a9525e943809d5cfd9b1549b9f7d3b8858f-500x500.png"
            alt="react icon"
          />
                    <img
          className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/da55259f760c8c5606b1cab6e6a9f61bbc60bf0d-500x500.png"
            alt="visual studio code icon"
          />
          
        </div>
        
      </div>
      <ul className="list-disc space-y-4 ml-5 text-lg">
        <li>Development of web application using React, JavaScript and Material UI</li>
        <li>Creation and maintenance of UI components and structures in React.</li>
        <li>Design and development of prototypes and mockups in Figma to demonstrate visual solutions to teams</li>
      </ul>
    </article>
  );
}

export default Muni;