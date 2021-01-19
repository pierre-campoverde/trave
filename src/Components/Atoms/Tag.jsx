import React from 'react'

const Tag = (props) => {
    return (
        <div className="text-xs p-1 bg-blue-100 rounded-full max-w-max mr-2 max-h-min	">
           <p >{props.value}</p> 
        </div>
    )
}

export default Tag
