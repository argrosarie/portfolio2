import React from "react";
import Image from "next/image";
import Link from "next/link";
import oldportfolio from "../../public/oldportfolio.png";

const OldPortfolio = () => {
  return (
   
    <div className="h-max md:pb-10 flex flex-col  items-center space-y-6 flex-shrink-0 w-[260px] md:w-[700px] mx-10 py-6 my-6 ">
  
      <Link
       href="https://argrosarie.web.app/"
       target="_blank"
      >
      
        <Image
          className="md:mb-0  w-36 h-36 rounded md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[300px] object-contain cursor-pointer"
          src={oldportfolio}
          alt=""
        />
      </Link>

      <div className="space-x-10 space-y-6 px-0 md:px-10 ">
        <h4 className="text-2xl md:text-4xl font-semibold text-center">
          Old{" "}
          <span className="underline decoration-[#5dc1b9]/50"> Portfolio</span>
        </h4>
        <p className="text-lg text-start">
         Old portfolio built using vanilla JS showcases skills, projects, education, and experiences. Serves as a demonstration of expertise, communication of value proposition, and reference for potential clients/employers to evaluate qualifications.
        </p>
      </div>
    </div>
  );
};

export default OldPortfolio;
