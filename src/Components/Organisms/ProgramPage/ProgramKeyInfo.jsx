import React from "react";

const ProgramKeyInfo = () => {
  return (
    <article className="py-3">
      <h4 className="text-lg font-medium">Informacion Clave</h4>
      <div className="flex divide-x-2 divide-gray-200 py-2 justify-between">
          <div className="pl-3">
              <span className="text-sm font-medium text-gray-500">Duracion</span>
              <p className="my-1">8 Semestres</p>
          </div>
          <div className="pl-3">
              <span className="text-sm font-medium text-gray-500">Idioma</span>
              <p className="my-1">Ruso</p>
          </div>
          <div className="pl-3">
              <span className="text-sm font-medium text-gray-500">Fecha de inicio</span>
              <p className="my-1">14 de diciembre 2020</p>
          </div>
      </div>
    </article>
  );
};

export default ProgramKeyInfo;
