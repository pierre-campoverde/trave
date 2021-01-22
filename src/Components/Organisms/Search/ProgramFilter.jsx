import React from "react";
import { CustomRangeSlider } from "../../Molecules/Search/RangeSlider";
import { CustomMenuSelect } from "../../Molecules/Search/Select";
import { FaFilter } from "react-icons/fa";
import { CustomNumericMenu } from "./NumericMenu";
import { CustomMenu } from "./Menu";

const ProgramFilter = () => {
  return (
    <div className="hidden lg:block lg:h-full py-4 min-w-min md:w-full lg:w-3/12 mx-4">
      <div className=" rounded-2xl lg:hidden h-16"></div>
      <div className="gradient  rounded-xl mt-12 p-4 flex justify-between">
        <h2 className="h2 text-white ">Filtro de busqueda</h2>
        <FaFilter className="text-xl my-auto text-white" />
      </div>
      <div className="shadow-md mx-auto overflow-hidden mt-5 lg:w-12/12 xl:w-12/12  hidden lg:block rounded-xl border">
        <div className="p-2 bg-gray-100">
          <h3 className="font-medium text-center text-gray-500">
            ¿Que estudiar?
          </h3>
        </div>
        <div className=" p-4 ">
          <CustomMenuSelect label="PROGRAM" attribute="program" />
          <CustomMenuSelect label="AREA" attribute="area" />
          <CustomMenuSelect label="ESPECIALITY" attribute="name" />
        </div>
      </div>
      <div className="shadow-md mx-auto overflow-hidden mt-5 lg:w-12/12 xl:w-12/12  hidden lg:block rounded-xl border">
        <div className="p-2 bg-gray-100">
          <h3 className="font-medium text-center text-gray-500">
            ¿Donde estudiar?
          </h3>
        </div>
        <div className=" p-4 ">
          <CustomMenuSelect label="COUNTRY" attribute="country" />
          <CustomMenuSelect label="CITY" attribute="city" />
          <CustomMenuSelect label="UNIVERSITY" attribute="university" />
        </div>
      </div>
      <div className="mt-5 ">
        <p className="text-gray-500">Other filters</p>
        <CustomRangeSlider attribute="fee" />
        <CustomNumericMenu
          attribute="duration"
          items={[
            { label: "< 1 año", end: 1 },
            { label: "1 año - 2 años", end: 2 },
            { label: "2 años - 3 años", end: 3 },
            { label: "3 años - 5 años", end: 5 },
          ]}
        />
        <CustomMenu attribute="attendace"/>
      </div>
      
    </div>
  );
};

export default ProgramFilter;
