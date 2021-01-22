import React, { useEffect, useState } from "react";
import "rheostat/css/rheostat.css";
import Rheostat from "rheostat";
import { connectRange } from "react-instantsearch-dom";

const RangeSlider = ({ min, max, currentRefinement, canRefine, refine }) => {
  const [stateMin, setStateMin] = useState(min);
  const [stateMax, setStateMax] = useState(max);
  useEffect(() => {
    if (canRefine) {
      setStateMin(currentRefinement.min);
      setStateMax(currentRefinement.max);
    }
  }, [currentRefinement.min, currentRefinement.max,canRefine]);

  if (min === max) {
    return null;
  }

  const onChange = ({ values: [min, max] }) => {
    if (currentRefinement.min !== min || currentRefinement.max !== max) {
      refine({ min, max });
    }
  };

  const onValuesUpdated = ({ values: [min, max] }) => {
    setStateMin(min);
    setStateMax(max);
  };

  return (
    <div className="  mt-4 border rounded-xl py-2  ">
    <div className="w-10/12 mx-auto">
       <label htmlFor=""  className="text-xs text-gray-500 block font-semibold ">PRICE RANGE</label>
    <div className="mt-3">
        <Rheostat
        
        min={min}
        max={max}
        values={[currentRefinement.min, currentRefinement.max]}
        onChange={onChange}
       
        onValuesUpdated={onValuesUpdated}
      >
        <div className=" flex justify-between" style={{ left: 0 }}>
          <div className="rheostat-value mt-3 text-sm font-medium text-gray-500">{stateMin} $</div>

          <div
            className="rheostat-marker rheostat-marker--large"
            style={{ right: 0 }}
          >
            <div className="rheostat-value mt-3 text-sm font-medium text-gray-500">{stateMax} $</div>
          </div>
        </div>
      </Rheostat>
    </div>
       
    </div>
    
    </div>
  );
};

export default RangeSlider;
export const CustomRangeSlider = connectRange(RangeSlider);
