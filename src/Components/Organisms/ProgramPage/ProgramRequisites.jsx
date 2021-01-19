import React from "react";
import Requisite from '../../Atoms/Requisite'
const requisites=[
    {
        id:1,
        requisite:'TOELF'
    },
    {
        id:2,
        requisite:'High school degree'
    }
]

const ProgramRequisites = () => {
  return (
    <article>
      <h4 className="h4">Requisitos</h4>
      {
          requisites.map(requisite=>{
              return(<Requisite req={requisite}/>)
              
          })
      }
    </article>
  );
};

export default ProgramRequisites;
