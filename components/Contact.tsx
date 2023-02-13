import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:rosariosanchezsampietro@gmail.com?subject=${formData.subject}&body=${formData.message}`;
  };

  return (
    <div className="h-screen flex  flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center pt-10">
      <h3 className="uppercase tracking-[18px] text-gray-500 text-2xl md:-ml-40">
        Contact
      </h3>
      <div className="flex flex-col items-center space-y-10">
    
        <div className="space-y-10 pr-4">
      
          <div className="flex flex-col md:flex-row items-center space-x-5 justify-center ">
            <EnvelopeIcon className="h-7 w-7 text-[#5dc1b9] animate-pulse" />
            <p className="text-md md:text-2xl">rosariosanchezsampietro@gmail.com</p>
          </div>
          <div className="flex flex-col md:flex-row items-center space-x-5 justify-center pr-2">
            <MapPinIcon className="ml-3 md:ml-0 h-7 w-7 text-[#5dc1b9] animate-pulse" />
            <p className="text-md md:text-2xl">Argentina</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto md:w-[500px]"
        >
          {/* <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 mr-2 md:mr-0 space-x-2 "> */}
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput "
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput "
              type="email"
            />
          {/* </div> */}
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            className="bg-[#5dc1b9] py-5 px-10 rounded-md text-[#363636] font-bold text-lg capitalize"
            type="submit"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
