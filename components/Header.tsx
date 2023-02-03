import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-[rgb(36,36,36)] sticky top-0 py-5 flex flex-col flex-items-start md:justify-between  mx-auto z-20 xl:items-center">
      <div
        className="pl-4 flex flex-row items-center text-gray-300 cursor-pointer md:hidden"
        onClick={() => setOpen(!open)}
      >
        <Bars3Icon
          className="h-10 w-10 text-gray-500"
          name={open ? "close" : "menu"}
        />
      </div>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 10,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className={`bg-[rgb(36,36,36)] -left-2 md:bg-inherit md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${
          open ? "top-20" : "top-[-490px]"
        }`}
      >
        <div className="pt-0 flex flex-col md:items-center md:flex-row">
          <Link href="#hero">
            <button className="heroButton">Home</button>
          </Link>
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            {" "}
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contact</button>
          </Link>
        </div>
      </motion.div>
    </header>
  );
}
