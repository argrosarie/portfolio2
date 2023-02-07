import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="grid justify-items-center pb-8">
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
      <p className=" text-xs text-gray-500 pb-2 tracking-[5px]">
        From Corrientes to the world
      </p>
    </div>
  );
}
