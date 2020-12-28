import React from "react";
const Feature = (props) => {
  return (
    <div className="col-span-8 md:col-span-4 mb-5 text-left ">
      <div className="w-14 py-3 mb-5  text-white rounded text-2xl h-15  w-8 bg-blue-500	">
        {props.children}
      </div>
      <h4 className="text-gray-700 mt-4 font-medium text-xl w-auto font-semibold ">
        {props.service}
      </h4>
      <p className="m-0 body-base">
        Lorem ipsum dolor sit amet consectr adipisicing elit. Laboriosam,
        temporibus.</p>
    </div>
  );
};

export default Feature;
