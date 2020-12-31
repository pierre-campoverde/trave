import React from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaBell, FaUserAstronaut } from "react-icons/fa";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const UserMenu = () => {
  const myUser = useSelector((state) => state.myUser.data);
  return (
    <div className="flex">
      <Link
        to={`/myuser/${myUser.uid}`}
        className="cursor pointer flex bg-gray-200  h-10 rounded-full border-2 mx-2 cursor-pointer hover:bg-gray-300 "
      >
        {myUser.photoURL === null ? (
          <FaUserAstronaut className="text-3xl my-auto text-gray-500 rounded-full border-2 border-gray-500 bg-white" />
        ) : (
          <img
            src={`${myUser.photoURL}`}
            alt={`${myUser.firstName} profile `}
            className="rounded-full w-9 h-9 my-auto "
          />
        )}
        <p className="my-auto mr-2  ml-1 font-medium text-sm text-gray-800">
          {myUser.firstName}
        </p>
      </Link>
      <div className=" mx-2 flex rounded-full bg-gray-200 text-center  w-10 h-10 cursor-pointer hover:bg-gray-300 ">
        <div className="m-auto">
          <FaBell className="text-2xl text-gray-500 " />
        </div>
      </div>
      <div className=" mx-2 rounded-full flex bg-gray-200 text-center w-10 h-10 cursor-pointer hover:bg-gray-300">
        <div className="m-auto">
          <TiArrowSortedDown className="text-3xl text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
