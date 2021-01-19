import React from "react";
import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import Tag from '../../Atoms/Tag'
const ProgramItem = (props) => {
  return (
    <div
      className="w-40 h-56 rounded-xl w-full
        border-2 my-5  border-gray-200
        overflow-hidden  
        hover:shadow-md "
    >
      <Link to={`/programs/${props.program.id}`}>
        <div className="flex h-full w-full">
          <div className="h-full w-4/12 bg-gray-100"></div>
          <div className="w-8/12 h-full bg-white p-4">
            <h2 className="h2">{props.program.name}</h2>

            <div className="flex text-gray-500">
              <GrLocation className=" my-auto text-gray-500" />
              <p className="my-auto text-sm  ">
                {props.program.city}-{props.program.country}
              </p>
            </div>
            <p className="text-sm text-gray-500">{props.program.university}</p>
            <p className="text-sm text-gray-500 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit in
              placeat, veniam ipsam alias blanditiis illo repellendus
              perspiciatis ipsa laborum voluptates
            </p>
            <div className="flex">
                <div className="flex mt-6 w-6/12 ">
               <Tag value={props.program.type}/> 
               <Tag value={props.program.time}/>
            </div>
            <div className="flex flex-col align-end w-6/12  items-end">
                <p>{props.program.duration} years</p>
               <p className="h2">{props.program.price}$/year</p>
            </div>
            </div>
            
            
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProgramItem;
