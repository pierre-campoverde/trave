import React from "react";
import {Link} from 'react-router-dom'
const Button = (props) => {
  if (props.type === "primary") {
    return (
      <Link to={props.to} className="btn-bordered-blue mx-2">
        {props.name}
      </Link>
    );
  } else if (props.type === "secondary") {
    return (
      <Link to={props.to} className="btn-secondary mx-2">
        {props.name}
      </Link>
    );
  }
};

export default Button;