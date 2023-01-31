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
        <h4 className="text-4xl font-semibold">Lorem ipsum dolor sit.</h4>
        <p className="text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
          recusandae magnam tenetur nobis obcaecati dolores reiciendis nisi!
          Voluptatibus nisi blanditiis velit corporis architecto dolorem id
          reiciendis, ullam incidunt, quibusdam ea facere nulla optio, veniam
          repudiandae beatae. Molestiae esse, alias quas minima vitae officiis
          fuga? Ea officia, omnis error, ut, eum ipsam perspiciatis molestias
          soluta vero iure alias totam dolore necessitatibus!
        </p>
      </div>
    </motion.div>
  );
};

export default About;
