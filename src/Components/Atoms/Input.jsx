import React, { useState } from "react";

import { VscEye } from "react-icons/vsc";

//inputStyles(errors.email)
const Input = (props) => {
  const [passVisibility, setPassVisibility] = useState("password");
  const handleVisibility = () => {
    if (passVisibility === "password") {
      setPassVisibility("text");
    } else {
      setPassVisibility("password");
    }
  };
  if (props.type === "password") {
    return (
      <div className={`input-group my-2 ${props.extraStyles} relative`}>
        <label htmlFor="email" className="text-sm font-medium">
          {props.label}
        </label>
        <div className="relative">
          <input
            type={`${passVisibility}`}
            name={`${props.name}`}
            className={`${props.styles ? props.styles : "input"}`}
            required
            onChange={props.handleChangeCallback}
          />
          <div
            onClick={handleVisibility}
            className="absolute group top-0 bg-blue-800 hover:bg-blue-900 cursor-pointer right-0 px-1 rounded-r-lg block h-full border-2 flex"
          >
            <VscEye className=" text-xl text-white my-auto " />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={`input-group my-2 ${props.extraStyles} relative`}>
        <label htmlFor="email" className="text-sm font-medium">
          {props.label}
        </label>
        <input
          type={`${props.type}`}
          name={`${props.name}`}
          className={`${props.styles ? props.styles : "input"}`}
          required
          onChange={props.handleChangeCallback}
        />
      </div>
    );
  }
};

export default Input;
