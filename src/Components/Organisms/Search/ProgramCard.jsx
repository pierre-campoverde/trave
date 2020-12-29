import React from "react";
import russianFlag from "../../../assets/png/001-russia.png";
import imgPlaceholder from "../../../assets/png/img-placeholder.png";
import { FiBookmark } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProgramCard = (props) => {
    return (
        <div className="h-auto mb-8 w-9/12 shadow-md mx-auto rounded-md">

        {/*Card Header*/}
        <div className="title w-full text-white bg-gray-900 h-auto b rounded-t-md p-2 px-3 sm:flex justify-between">
          <p>{props.program.name}</p>
          <div className="flex ">
            <img src={russianFlag} className="mr-2" alt="russian flag" />
            <p className="text-sm md:text-md">{props.program.location}</p>
          </div>
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
            <FiBookmark className="text-4xl md:text-2xl my-auto" />
          </div>
          {/* fin de seccion de universidad */}
          {/* Seccion stats */}
          <div className="lg:flex w-full md:mt-4 my-2 sm:justify-between">
            <div className="descriptions flex ">
              <div className="inline-block mx-3">
                <span className="text-sm text-gray-400">Idioma</span>
                <p className="text-lg">{props.program.language}</p>
              </div>
              <div className="inline-block mx-3">
                <span className="text-sm text-gray-400">Duracion</span>
                <p className="text-lg">{`${props.program.duration} años`}</p>
              </div>
              <div className="inline-block mx-3">
                <span className="text-sm text-gray-400">Precio</span>
                <p className="text-lg">{props.program.price}$/sem</p>
              </div>
            </div>
            <Link to={`/programs/${props.program.id}`} className="btn-primary mt-auto ">Mas informacion</Link>
          </div>
        </div>
        {/* fin de stats */}
        {/*End of card body */}
  
      </div>
    )
}

export default ProgramCard
