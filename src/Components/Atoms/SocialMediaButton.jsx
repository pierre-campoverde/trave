import React from 'react'
const SocialMediaButton = (props) => {
    return (
        <button onClick={props.event} className="border-2 rounded py-2 w-24 text-gray-400 text-2xl text-center
           hover:border-gray-400  hover:text-gray-600 hover:shadow-lg 
           transition-all ease-in duration-200 ">
            {props.children}
        </button>
    )
}

export default SocialMediaButton
