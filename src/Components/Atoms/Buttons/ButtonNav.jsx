import React from "react";

const ButtonNav = (props) => {
  return (
    <button onClick={()=>props.handleClickCallback(props.name)} className="btn-bordered-gray">
      {props.name}
    </button>
  );
};

export default ButtonNav;
