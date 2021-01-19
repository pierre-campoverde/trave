import React from "react";
import { FiBookmark } from "react-icons/fi";

const ProgramTitle = (props) => {
  return (
    <div className=" w-full py-3 flex justify-between">
      <div>
        <h3 className="text-xl font-medium">{props.title}</h3>
        <p className="text-sm text-gray-500">Bachelor • Ciencias Aplicadas </p>
      </div>
      <button className=" my-auto h-10 border-2 flex px-5 border-gray-400 rounded-lg text-gray-500 shadow-md hover:shadow-lg hover:border-black hover:text-black  ">
            <FiBookmark className="my-auto text-xl" />
            <p className="my-auto">Guardar</p>
          </button>
    </div>
  );
};

export default ProgramTitle;
