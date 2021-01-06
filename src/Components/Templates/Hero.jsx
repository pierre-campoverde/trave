import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import SearchHomePage from "../Organisms/Search/SearchHomePage";
const Hero = () => {
  return (
    <main className="pt-60 sm:pt-20 h- px-3 sm:pb-20 text-center">
      <h1 className="h1">Travel & study around the world</h1>
      <SearchHomePage />
      <span className="inline-block mt-60  mx-0  text-5xl animate-bounce	">
        <RiArrowDownSLine />
      </span>
    </main>
  );
};

export default Hero;
