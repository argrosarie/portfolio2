import React from "react";

import Image from "next/image";
import Link from "next/link";
import lazycapybara from "../../public/lazycapybara.png";

const Capybara = () => {
  return (
    <div className="h-max md:pb-10 flex flex-col  items-center space-y-6 flex-shrink-0 w-[260px] md:w-[700px] mx-10 py-6 my-6 ">
    <Link
       href="https://lazycapybara.vercel.app/"
       target="_blank"
      >
      
        <Image
          className="md:mb-0  w-36 h-36 rounded md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[300px] object-contain cursor-pointer"
          src={lazycapybara}
          alt=""
        />
      </Link>
      <div className="space-x-10 space-y-6 px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl font-semibold text-center">
          <span className="underline decoration-[#5dc1b9]/50">
            {" "}
            Lazy 
          </span>
          {" "}Capybara
        </h4>
        <p className="text-lg text-start">
        Lazy Capybara is a web application that consumes a random capybara photo API. Its unique feature is its lazy loading, which only loads the images as the user scrolls through the page. This results in a faster and more seamless user experience, as the images only load as they become visible to the user.
        </p>
      </div>
    </div>
  );
};

export default Capybara;
