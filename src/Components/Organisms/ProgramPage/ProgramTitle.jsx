import React from "react";

import Skeleton from "react-loading-skeleton";
import SaveButton from "../../Atoms/SaveButton";

const ProgramTitle = (props) => {
  return (
    <div className=" mb-3.5">
      
      <div className="flex justify-between w-full">
        <h2 className="h2">{props.programName || <Skeleton count={2} />}</h2>
        <SaveButton />
      </div>
      <div className="flex flex-shrink-0 mt-2">
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
      <div>
        
      </div>
    </div>
  );
};

export default ProgramTitle;
