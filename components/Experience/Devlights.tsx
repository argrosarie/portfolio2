import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Devlights({}: Props) {
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
        src="https://scontent.fres2-1.fna.fbcdn.net/v/t39.30808-6/305649462_617242033430382_7992808437628498308_n.png?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WNjiwUu_VKsAX890SAk&_nc_ht=scontent.fres2-1.fna&oh=00_AfDF1Q_3XT7nIPb3e_PHkkIm-PGtOCFr6tvBQyOQLxa3SA&oe=63E6D481"
        alt="devlights logo"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Full Stack Developer</h4>
        <p className="font-bold text-2xl mt-1">Devlights </p>
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
        <p className="uppercase py-5 text-gray-300">may 2022 Nov 2022</p>
      </div>
      <ul className="list-disc space-y-4 ml-5 text-lg">
      <li>Development and maintenance of web applications using technologies such as HTML, CSS, JavaScript and React.</li>
      <li>Implementation of REST APIs and consumption of external services.</li>
      <li>Development of back-end functionalities using Nodejs.</li>
      <li>Collaboration in version control using Git and Bitbucket.</li>
      <li>Teamwork using agile methodologies such as Scrum and Kanban</li>
      <li>Participation in technical and architectural decision-making for the project.</li>
      </ul>
    </article>
  );
}

export default Devlights;