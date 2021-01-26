import React from "react";

import Skeleton from "react-loading-skeleton";
import SaveButton from "../../Atoms/SaveButton";

const ProgramTitle = (props) => {
  return (
    <div className="flex justify-between  mb-3.5">
      <div className="w-full pr-3">
        <h2 className="h2 w-full">{props.programName || <Skeleton />}</h2>
        <div className="flex flex-wrap mt-2">
          {props.programType && (
            <p className="text-sm text-gray-500 mr-2">●{props.programType}</p>
          )}
          {props.attendance && (
            <p className="text-sm text-gray-500 mr-2">●{props.attendance}</p>
          )}
          {props.format && (
            <p className="text-sm text-gray-500 mr-2">● {props.format}</p>
          )}
        </div>
      </div>
      <SaveButton />
    </div>
  );
};

export default ProgramTitle;
