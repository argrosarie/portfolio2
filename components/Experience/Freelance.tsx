import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Freelance({}: Props) {
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
        alt="Rosario's picture"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Frontend Developer</h4>
        <p className="font-bold text-2xl mt-1">Freelance </p>
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
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt="javascript icon"
          />
               <img
          className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/5ca925937ccd56e069dd6f7cf8c5c7853542603f-500x500.png"
            alt="firebase icon"
          />
          
        </div>
        <p className="uppercase py-5 text-gray-300">August 2020 June 2022</p>
      </div>
      <ul className="list-disc space-y-4 ml-5 text-lg">
        <li>Understanding client requirements and translating them into technical specifications</li>
        <li>Implementing responsive design to ensure the website or application looks great on all devices</li>
        <li>Keeping up-to-date with latest front-end technologies, tools and best practices</li>
        <li>Communicating with clients, providing regular updates, and ensuring their satisfaction with the work</li>
        <li>Managing project timelines, budgets, and deadlines to deliver projects on-time and within budget</li>
      </ul>
    </article>
  );
}

export default Freelance;