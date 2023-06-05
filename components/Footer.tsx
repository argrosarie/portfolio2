import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="grid justify-items-center pb-8 pt-8">
      <div>
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
      <p className="text-xs pb-2 tracking-[5px]">
        <span className="text-red-500">F</span>
        <span className="text-orange-500">r</span>
        <span className="text-yellow-500">o</span>
        <span className="text-green-500">m</span>
        <span className="text-blue-500"> </span>
        <span className="text-indigo-500">C</span>
        <span className="text-purple-500">o</span>
        <span className="text-pink-500">r</span>
        <span className="text-red-500">r</span>
        <span className="text-orange-500">i</span>
        <span className="text-yellow-500">e</span>
        <span className="text-green-500">n</span>
        <span className="text-blue-500">t</span>
        <span className="text-indigo-500">e</span>
        <span className="text-purple-500">s</span>
        <span className="text-pink-500"> </span>
        <span className="text-red-500">t</span>
        <span className="text-orange-500">o</span>
        <span className="text-yellow-500"> </span>
        <span className="text-green-500">t</span>
        <span className="text-blue-500">h</span>
        <span className="text-indigo-500">e</span>
        <span className="text-purple-500"> </span>
        <span className="text-pink-500">w</span>
        <span className="text-red-500">o</span>
        <span className="text-orange-500">r</span>
        <span className="text-yellow-500">l</span>
        <span className="text-green-500">d</span>
      </p>
    </div>
  );
}
