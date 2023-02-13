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
    <div className="h-screen flex  flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center pt-20">
      <h3 className="uppercase tracking-[18px] text-gray-500 text-2xl md:-ml-40">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        {/* <h4 className="text-4xl font-semibold text-center">
          Lorem ipsum dolor sit, amet{" "}
          <span className="decoration-[#5dc1b9] underline">
            consectetur adipisicing
          </span>
        </h4> */}
        <div className="space-y-10">
          {/* <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7 text-[#5dc1b9] animate-pulse" />
            <p className="text-2xl">+987654321</p>
          </div> */}
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7 text-[#5dc1b9] animate-pulse" />
            <p className="text-2xl">rosariosanchezsampietro@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-7 w-7 text-[#5dc1b9] animate-pulse" />
            <p className="text-2xl">Argentina</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
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
