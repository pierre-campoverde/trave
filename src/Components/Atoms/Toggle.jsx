import React, { useState } from "react";

const Toggle = () => {
  const [selected, setSelected] = useState(false);
  const handleChange = () => {
    setSelected(!selected);
    //console.log("Toggle Selected", selected);
  };
  return (
    <label className="switch relative inline-block w-12 ">
      <input
        type="checkbox"
        name=""
        id=""
        className="w-full h-full  "
        onChange={handleChange}
      />
      {
        <span
          className={`slider absolute cursor-pointer inset-0   rounded-full transition-color duration-500 ${
            selected ? "bg-gray-300" : "bg-green-400"
          }`}
        >
          {selected ? (
            <span className="absolute h-full  w-6/12 rounded-full  bg-white shadow-sm active transition-all  "></span>
          ) : (
            <span className="absolute h-full  w-6/12 rounded-full  bg-white shadow-sm transform translate-x-full transition-all "></span>
          )}
        </span>
      }
    </label>
  );
};

export default Toggle;
