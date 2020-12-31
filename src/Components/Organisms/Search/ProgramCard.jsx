import React from "react";
// eslint-disable-next-line
import russianFlag from "../../../assets/png/001-russia.png";
import imgPlaceholder from "../../../assets/png/img-placeholder.png";
import { FiBookmark } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProgramCard = (props) => {
  return (
    <Link to={`/programs/${props.program.id}`}>
      <div className="h-auto border mb-8 w-80 shadow-md mx-auto rounded-md hover:shadow-none">
        {/*Event BUbbling*/}
        <div className="h-48 w-full relative   bg-gray-200 rounded-t-md">
          <FiBookmark className="text-4xl md:text-2xl my-auto absolute right-3 top-3" />
        </div>
        {/*Card Header*/}
        <div className="title w-full text-white  h-auto border-b bg-gray-800 border-gray-800  p-2 px-3 sm:flex justify-between">
          <p>{props.program.name}</p>
        </div>
        {/*End of card header*/}
        {/*Card body */}
        <div className="px-4 py-2">
          <div className="flex justify-between">
            {/* Seccion universidad */}
            <Link to="/university" className="flex">
              <img
                src={imgPlaceholder}
                className="h-8 w-8 border-gray-400 border-2 mx-2 rounded-full"
                alt=""
              />
              <p className="text-sm my-auto text-gray-600 hover:text-black">
                {props.program.university}
              </p>
            </Link>
          </div>
          {/* fin de seccion de universidad */}
          {/* Seccion stats */}
          <div className="lg:flex w-full md:mt-4 my-2 sm:justify-between ">
            <div className="descriptions flex border rounded-lg divide-x bg-gray-200  divide-gray-400">
              <div className="inline-block px-3">
                <span className="text-sm text-gray-500">Idioma</span>
                <p className="text-lg text-black">{props.program.language}</p>
              </div>
              <div className="inline-block px-3">
                <span className="text-sm text-gray-500">Duracion</span>
                <p className="text-lg text-black">{`${props.program.duration} años`}</p>
              </div>
              <div className="inline-block px-3">
                <span className="text-sm text-gray-500">Precio</span>
                <p className="text-lg text-black">{props.program.price}$/sem</p>
              </div>
            </div>
          </div>
        </div>
        {/* fin de stats */}
        {/*End of card body */}
      </div>
    </Link>
  );
};

export default ProgramCard;
