import React from "react";

const ButtonNav = (props) => {
  return (
    <button onClick={props.handleClick} className="button-nav">
      {props.name}
    </button>
  );
};

export default ButtonNav;
