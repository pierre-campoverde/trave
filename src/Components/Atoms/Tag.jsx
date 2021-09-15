import React from 'react'

const Tag = (props) => {
    return (
        <div className="text-xs border-2 border-gray-500 flex px-2 mx-1 rounded-full ">
           <p className="my-auto">{props.value}</p> 
        </div>
    )
}

export default Tag
