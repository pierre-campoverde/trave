import React, { useState } from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'

const Accordion = (props) => {
    const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
    return (
        <div className="w-full rounded-lg border-2 mb-2   transition-all ease-in duration-150">
        <div className={`flex justify-between px-2 py-3  transition-all duration-200 ease-out  rounded-t-lg ${open?"bg-blue-100":""} `} onClick={handleClick}>
          <p className="font-medium text-lg">{props.name}</p>
          <RiArrowDownSLine className={`text-2xl my-auto transform transition-transform duration-300 ease-out ${open?"rotate-180":""}`} />
        </div>
        <article
          className={`body-base transform scale-y-1 mt-1 p-2 ${open ? "" : "hidden"}`}
        >
          {props.children}
        </article>
      </div>
    )
}

export default Accordion
