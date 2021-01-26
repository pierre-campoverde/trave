import React from "react";
import { FiClock } from "react-icons/fi";
import { MdTranslate } from "react-icons/md";
import { IoRocketOutline } from "react-icons/io5";
import { BiCalendarEvent } from "react-icons/bi";
import Skeleton from "react-loading-skeleton";

const ProgramKeyInfo = (props) => {
  return (
    <div className="md:flex flex-wrap justify-between shadow-lg rounded-xl mx-auto md:w-9/12 border-2 my-10 md:p-4 divide-y-2 md:divide-none ">
            <div className="flex p-2 md:m-none">
              <div className=" row-span-2 flex ">
                <FiClock className="text-3xl text-gray-500 mt-auto mb-auto ml-auto" />
              </div>
              <div className="my-auto ml-2">
                <div className="text-sm flex mt-auto font-medium text-blue-500">
                  Duracion
                </div>
                <div className="text-lg">{props.duration ? `${props.duration} semestres`: <Skeleton/>}</div>
              </div>
            </div>
            <div className="flex p-2   md:m-none">
              <div className=" row-span-2 flex ">
                <MdTranslate className="text-3xl text-gray-500 mt-auto mb-auto ml-auto" />
              </div>
              <div className="my-auto ml-2">
                <div className="text-sm flex mt-auto font-medium text-blue-500">
                  Idioma
                </div>
                <div className="text-lg">{props.language||<Skeleton/>}</div>
              </div>
            </div>
            <div className="flex p-2  md:m-none">
              <div className=" row-span-2 flex ">
                <IoRocketOutline className="text-3xl mt-auto mb-auto ml-auto text-gray-500" />
              </div>
              <div className="my-auto ml-2">
                <div className="text-sm flex mt-auto font-medium text-blue-500">
                  Fecha de inicio
                </div>
                <div className="text-lg">8 años</div>
              </div>
            </div>
            <div className="flex p-2  md:m-none">
              <div className=" row-span-2 flex ">
                <BiCalendarEvent className="text-3xl mt-auto mb-auto ml-auto text-gray-500" />
              </div>
              <div className="my-auto ml-2">
                <div className="text-sm flex mt-auto font-medium text-blue-500">
                  Fecha limite de inscripcion
                </div>
                <div className="text-lg">8 años</div>
              </div>
            </div>
            
          </div>
  );
};

export default ProgramKeyInfo;
