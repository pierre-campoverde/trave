import React from "react";

const ProgramCTA = () => {
  return (
    <div className="h-auto p-5 w-10/12 border-2 rounded-xl ml-auto shadow-lg">
      <div className="flex">
        <h4 className="text-2xl font-medium">$1000</h4>
        <span className="text-xs my-auto text-gray-500">/semester</span>
      </div>
      <div className="bg-gray-100 border-gray-300 border-2 my-3 rounded-xl divide-y-2 divide-gray-300">
        <div className="flex divide-x-2 divide-gray-300">
          <div className="w-6/12 p-2">
              <span className="text-xs font-medium text-gray-500">Admisiones</span>
              <p className="font-medium">Abiertas</p>
          </div>
          <div className="w-6/12 p-2"><span className="text-xs font-medium text-gray-500">Cupos disponibles</span>
              <p className="font-medium ">8</p>
          </div>
        </div>
        <div>
        <div className="w-full p-2">
          <span className="text-xs font-medium text-gray-500">Fecha limite de inscripcion</span>
              <p className="font-medium">01/enero/2020</p>
          </div>
        </div>
      </div>
        <button className="btn-cta w-full h-10 my-0">Inscribirse</button>
    </div>
  );
};

export default ProgramCTA;
