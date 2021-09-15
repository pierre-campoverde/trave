import React from "react";
import Feature from "../Molecules/Presentation/Feature";
import { FiFileText, FiHome } from "react-icons/fi";
import { MdLocalAirport } from "react-icons/md";


const ServicesSection = () => {
  return (
    <section className="lg:flex py-20 px-5 lg:px-28  md:py-10  ">

        <h2 className="text-black font-bold text-3xl md:text-4xl">
          An easier and safer way to <br /> discover the world
        </h2>
      
      <div className="mt-5 grid place-items-end lg:w-9/12 grid-cols-8 gap-y-4  lg:ml-auto">
        <Feature service={"Service 1"}  >
          <FiFileText className="mx-auto" />
        </Feature>
        <Feature service={"Service 2"}>
          <FiHome className="mx-auto" />
        </Feature>
        <Feature service={"Service 3"}>
          <MdLocalAirport className="mx-auto" />
        </Feature>
        <Feature service={"Service 4"}>
          <FiFileText className="mx-auto" />
        </Feature>
      </div>
    </section>
  );
};

export default ServicesSection;
