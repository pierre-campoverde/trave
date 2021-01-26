import React from "react";

const ProgramCTA = (props) => {
  return (
    <div className="md:w-full grid gap-3  grid-cols-2 mx-auto">
      <div className="text-center col-span-1 rounded-lg  bg-blue-100  px-2 py-3 flex flex-col justify-center">
        <p className="h3">8</p>
        <h4 className="text-sm">Cupos disponibles</h4>
      </div>
      <div className=" text-center col-span-1  rounded-lg  bg-green-100 px-2 py-3 flex flex-col justify-center">
        <p className="h3">Abiertas</p>
        <h4 className="text-sm">Admisiones</h4>
      </div>

      <div className="bg-gray-100 p-2 col-span-2 flex flex-col rounded-lg">
        <span className="text-xs">Costos educativos</span>
        <p className="h3 ml-auto">1500$</p>
      </div>
      <div className="col-span-2">
        <button className="btn-cta w-full p-3 font-medium text-lg">Inscribirse</button>
      </div>
    </div>
  );
};

export default ProgramCTA;
