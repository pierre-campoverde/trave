import React, { useState } from "react";
import ButtonNav from "../../Atoms/Buttons/ButtonNav";
import ProgramSlideContent from "./ProgramSlideContent";
import ProgramStructure from "./ProgramStructure";

const ProgramInfoSlider = () => {
  const [info, setInfo] = useState('ProgramStructure');

  const handleClick = (name) => {
    setInfo(name)
  };
  return (
    <div className="flex pb-6 min-h-full">
      <div className="w-7/12 min-h-full">
        <ProgramSlideContent info={info} />
      </div>
      <div className="w-5/12">
        <div className="w-10/12 ml-auto">
          <ButtonNav
            handleClick={()=>handleClick("ProgramStructure")}
            name={"Program Structure"}
          />
          <ButtonNav
            name={"Requisitos de admision"}
            handleClick={()=>handleClick('Requirements')}
          />
          <ButtonNav name={"Costos educativos"} 
          handleClick={()=>handleClick('Costos educativos')}
          />
          <ButtonNav name={"Costos de vida"}
          handleClick={()=>handleClick('Costos de vida')}
          />
          <ButtonNav name={"Visado"} 
          handleClick={()=>handleClick('Visado')}
          />
          <ButtonNav name={"Permisos de trabajo"} 
          handleClick={()=>handleClick('Permisos de trabajo')}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgramInfoSlider;
