import React from "react";
import { Link } from "react-router-dom";
import { GrLocation } from 'react-icons/gr'

const UniversityCard = ({ name, id ,location }) => {
  return (
    <div className=" w-3/12  border-red-600 ">
      <Link to={`/university/${id}`}>
          <div className="lg:h-auto bg-white w-full px-4 py-2.5 rounded-lg flex">
              <div className="w-20 h-20 bg-gray-200 mr-3 rounded-md"></div>
              <div>
                  <p className="font-medium">{name}</p>
                  <div className="flex">
                     <GrLocation className=" my-auto text-gray-500" /> <p className="text-sm">Samara-Rusia</p> 
                  </div>
                  
              </div>
                
          </div>        
        
      </Link></div>
  );
};

export default UniversityCard;
