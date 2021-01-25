import React from 'react'
import { GrLocation } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import SaveButton from '../../Atoms/SaveButton'
import Tag from '../../Atoms/Tag'

const Hit = ({hit}) => {

    const handleClick=()=>{
      window.scrollTo(0,0)
    }
    return (
        <div
      className=" h-auto rounded-xl w-full
        border my-5 border-gray-200 
        shadow-md
        hover:shadow-lg
         "
    >
      <Link to={`/programs/${hit.objectID}`} onClick={handleClick}>
        <div className="md:flex h-full w-full">
          <div className="h-60 md:h-auto w-full md:w-4/12 bg-gray-200 "></div>
          <div className="md:w-8/12 h-full  p-4  ">
            <div className="flex justify-between">
              <h2 className="h2">{hit.name}</h2>
              <SaveButton programID={hit.objectID}/>
            </div>
            

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
