import React from 'react'
import { GrLocation } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import Tag from '../../Atoms/Tag'

const Hit = ({hit}) => {

    return (
        <div
      className="w-40 h-56 rounded-xl w-full
        border-2 my-5 border-gray-200 
        shadow-md
        overflow-hidden  
        hover:shadow-lg
         "
    >
      <Link to={`/programs/${hit.objectID}`}>
        <div className="flex h-full w-full">
          <div className="h-full w-4/12 bg-gray-100"></div>
          <div className="w-8/12 h-full  p-4  ">
            <h2 className="h2">{hit.name}</h2>

            <div className="flex text-gray-500">
              <GrLocation className=" my-auto text-gray-500" />
              <p className="my-auto text-sm">
                {hit.city}-{hit.country}
              </p>
            </div>
            <p className="text-sm text-gray-500">{hit.university}</p>
            <p className="text-sm text-gray-500 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit in
              placeat, veniam ipsam alias blanditiis illo repellendus
              perspiciatis ipsa laborum voluptates
            </p>
            <div className="flex">
                <div className="flex mt-6 w-6/12 ">
               <Tag value={hit.program}/> 
               <Tag value={hit.format}/>
            </div>
            <div className="flex flex-col align-end w-6/12  items-end">
                <p>{hit.duration} years</p>
               <p className="h2">{hit.fee}$/year</p>
            </div>
            </div>
            
            
          </div>
        </div>
      </Link>
    </div>
    )
}

export default Hit
