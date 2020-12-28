import React from 'react'
import {Link} from 'react-router-dom'
const SocialMediaButton = (props) => {
    return (
        <Link to={props.to} className="border-2 rounded py-2 w-24 text-gray-400 text-2xl text-center
           hover:border-gray-400  hover:text-gray-600 hover:shadow-lg 
           transition-all ease-in duration-200 ">
            {props.children}
          </Link>
    )
}

export default SocialMediaButton
