import React from 'react'

import { FaUserAstronaut } from "react-icons/fa";


const UserMenu = () => {
    return (
        <div className="cursor pointer flex bg-gray-200 p-1 rounded-full border-2 cursor-pointer hover:bg-gray-300 ">
            <FaUserAstronaut className="text-4xl  text-gray-600 rounded-full border-2 border-gray-800 bg-white"/>
            <p className="my-auto mx-2">Pierre</p>
        </div>
    )
}

export default UserMenu
