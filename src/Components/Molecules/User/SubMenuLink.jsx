import React from "react";

const SubMenuLink = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="p-3 cursor-pointer hover:bg-gray-100 rounded-lg  w-full flex"
    >
      {props.children}

      <p className={`text-sm my-auto ${props.text}`}>{props.value}</p>
    </button>
  );
};

export default SubMenuLink;
