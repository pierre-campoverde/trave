import React from "react";
import { Link } from "react-router-dom";
//import flag from '../../assets/img/png/001-russia.png'
const DestinationCard = (props) => {

  return (
    <div className="bg-white col-span-12  mx-auto min-w-min sm:col-span-6 lg:col-span-3   shadow  text-center px-4 py-5 border-2  rounded-md">
      <h3 className="text-2xl">{props.continent}</h3>
      <p className="text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
        ducimus.
      </p>
  
      <ul className="mt-3 h-36">
        {props.children}
      </ul>
      <Link to={`${props.continent}`} className="inline-block transition-color ease-in duration-200 w-full mt-3 bg-gray-900 text-white px-7 rounded py-2 hover:bg-gray-700">
        See more
      </Link>
    </div>
  );
};

export default DestinationCard;