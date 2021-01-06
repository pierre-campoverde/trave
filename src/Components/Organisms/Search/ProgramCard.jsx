import React from "react";

import russianFlag from "../../../assets/png/001-russia.png";
import imgPlaceholder from "../../../assets/png/About-mipt.jpg";
// eslint-disable-next-line
import { FiBookmark } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
const ProgramCard = (props) => {
  return (
    <div className="w-full sm:w-1/2 py-3 lg:w-1/3 ">
      <Link to={`/programs/${props.program.id}`}>
        <div className="w-10/12 mx-auto h-auto my-2 sm:w-10/12  md:w-9/12 lg:w-11/12 xl:w-10/12 rounded-3xl border overflow-hidden hover:shadow-lg group  ">
          <div className="card-image overflow-hidden  h-40 bg-gray-200 w-full">
            <img src={imgPlaceholder} className="" alt="" />
          </div>
          <div className="divide-y-2">
          <div className="card-title  h-10 w-full flex px-2 justify-between">
            <h2 className=" my-auto font-medium">{props.program.name}</h2>
            <div className="status p-1 rounded-full font-medium text-black my-auto bg-white">
              <span className="my-auto">{props.program.price}$</span>
            </div>
          </div>
            <div className="card-body p-2">
              <div className="flex my-2">
                <img src={russianFlag} alt="study-Russia" className="mx-2" />
                <p className="text-sm text-gray-600 my-auto">
                  {props.program.country}
                </p>
              </div>
              <div className="flex my-2">
                <IoLocationOutline className="text-xl mx-2" />
                <p className="text-sm text-gray-600 my-auto">
                  {props.program.university}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProgramCard;
