import React from "react";
import { Link } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
const Hero = () => {
  return (
    <main className="pt-60 sm:pt-60 px-3 sm:pb-20 text-center">
      <div className="">
        <h1 className="h1">
          Travel & study around the world
        </h1>
        <p className="my-3 sm:mt-5 md:mt-5 body-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odio,
          <br />
          maiores necessitatibus soluta atque eveniet corporis et aperiam.
        </p>
        <Link to="/destinations" className="bg-blue-500 inline-block text-white transition-all  duration-500	 transform hover:-translate-y-2 font-medium  mt-5 px-10 py-4 rounded-xl w-30 hover:shadow-xl">
          START
        </Link>
      </div>
      <span className="inline-block mt-40  mx-0  text-5xl animate-bounce	">
        <RiArrowDownSLine/>
      </span>
    </main>
  );
};

export default Hero;
