import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import Image from "next/image";
import bgindustrial from "../public/bgindustrial.png";
import { SocialIcon } from "react-social-icons";
import SplineTest from "./Test.js";
type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name is Rosario",
      "I'm a Frontend developer",
      "I'm a Full Stack developer",
      "I'm a Computer Science student",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className=" h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      {/* <BackgroundCircles /> */}
      <Image
        src={bgindustrial}
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        alt="face"
      />
      {/* <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://avatars.githubusercontent.com/u/51086021?v=4"
        alt=""
      /> */}

      <div className="z-20">
        <h2 className="uppercase text-sm  text-gray-500 pb-2 tracking-[15px]">
          Software developer
        </h2>
        <h1 className="text-xl lg:text-4xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#5dc1b9" />
        </h1>
        <SocialIcon
          url="https://www.linkedin.com/in/rosariosanchezsampietro/"
          fgColor="grey"
          bgColor="transparent"
          target="_blank"
        />
        <SocialIcon
          url="https://www.github.com/argrosarie"
          fgColor="grey"
          bgColor="transparent"
          target="_blank"
        />
        <SocialIcon
          url="https://twitter.com/argrosarie"
          fgColor="grey"
          bgColor="transparent"
          target="_blank"
        />
      </div>

      {/* <section className="
      absolute w-screen left-0 h-[500px]">
      <SplineTest />
      </section> */}
    </div>
  );
}
