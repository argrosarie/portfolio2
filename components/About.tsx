import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{duration:1.5}}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        src="https://avatars.githubusercontent.com/u/51086021?v=4"
        alt="developer picture"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">The Front-end Force User: Charting My Course in the Tech Galaxy</h4>
        <p className="text-base">
        As a passionate and dedicated front-end developer, I stand out with my ability to work with advanced technologies such as JavaScript, React, and Tailwind. Not only do I have an insatiable thirst for learning, but I also apply each new knowledge I acquire diligently in my daily work. I am a reliable and responsible team player with a strong work ethic and a passion for professional growth. I firmly believe in the importance of sharing knowledge and skills to achieve greater effectiveness and success in teamwork. I am excited to continue growing in my career and to face new challenges in the future.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
