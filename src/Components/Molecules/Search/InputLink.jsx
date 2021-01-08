import React from "react";

const InputLink = (props) => {
  return (
    <div className="rounded-4xl group  rounded-3xl px-2 hover:bg-gray-100 cursor-pointer flex text-left transition ease-in duration-200 h-full content-center ">
      <div className="my-auto ">
        <label
          htmlFor={props.name}
          className="block select-none text-xs font-semibold cursor-pointer"
        >
          {props.label}
        </label>
        <input
          onChange={props.handleChange}
          type="text"
          name={props.name}
          placeholder={props.placeholder}
          className="transition ease-in  text-sm group-hover:bg-gray-100 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default InputLink;
