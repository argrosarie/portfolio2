import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import profile from "../public/profile.jpeg";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col space-y-4 md:h-screen text-center md:pt-10 lg:text-left lg:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center lg:ml-10 pt-20">
      <h3 className=" uppercase tracking-[10px] text-gray-500 text-2xl ">
        About
      </h3>

      <Image
        src={profile}
        alt="profile pic"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]"
      />
      <div className="space-y-4 px-0 md:px-10">
        <h4 className="text-2xl lg:text-4xl font-semibold text-justify">
          The Front-end Force User:
          <br /> Charting My Course in the Tech Galaxy
        </h4>
        <p className="text-base leading-relaxed text-justify pb-4">
          As a passionate and dedicated front-end developer, I stand out with my
          ability to work with advanced technologies such as Next, JavaScript,
          React, and Tailwind. Not only do I have an insatiable thirst for
          learning, but I also apply each new knowledge I acquire diligently in
          my daily work. I am a reliable and responsible team player with a
          strong work ethic and a passion for professional growth. I firmly
          believe in the importance of sharing knowledge and skills to achieve
          greater effectiveness and success in teamwork. I am excited to
          continue growing in my career and to face new challenges in the
          future.
        </p>
      </div>
    </div>
  );
};

export default About;
