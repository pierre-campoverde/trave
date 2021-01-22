import React, { useState } from 'react'
import { ImCheckmark } from "react-icons/im";

const Checkbox = (props) => {
    const [checked, setChecked] = useState(false)
    const handleClick=()=>{
        setChecked(!checked)
    }
    return (
        <div onClick={handleClick} className="flex my-4 justify-start relative items-start">
            <div className={`${checked?"bg-blue-600 border-blue-600":"bg-gray-100 border-gray-300"} border-2 rounded  w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-600`}>
                <input type="checkbox" className="absolute opacity-0 border w-full border-red-500" name={props.name} />
                <ImCheckmark className={`${checked?"text-white text-xs":"hidden"}`}/>
            </div> 
            <label htmlFor={props.name} className="text-xs select-none text-gray-900 my-auto ">{props.label}</label>
        </div>
    )
}

export default Checkbox
