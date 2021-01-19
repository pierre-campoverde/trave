import React from "react";
import ProgramRequisites from "./ProgramRequisites";
import ProgramStructure from "./ProgramStructure";

const ProgramSlideContent = (props) => {
  if (props.info === "ProgramStructure") {
    return <ProgramStructure />;
  } else if(props.info==='Requirements') {
    return <ProgramRequisites/>;
  }else if(props.info==='Costos de vida'){
      return <p>Costos de vida</p>
  }else if(props.info==='Visado'){
      return <p>Visado</p>
  }else if(props.info==='Permisos de trabajo'){
    return <p>Permisos de trabajo</p>
  }else if(props.info==='Costos educativos'){
    return <p>Costos educativos</p>
  }
};

export default ProgramSlideContent;
