import React, { useState } from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserMenu = () => {
  // eslint-disable-next-line


  const myUser = useSelector((state) => state.myUser.data);
  return (
    <div className="flex">
      <Link
        to={`/myuser/${myUser.uid}`}
        className="cursor pointer flex bg-gray-200  h-10 rounded-full border-2 mx-2 cursor-pointer hover:bg-gray-300 "
      >
        {myUser.photoURL === null ? (
          <FaUserCircle className="text-3xl my-auto text-gray-600 rounded-full border-2 border-gray-500 bg-white" />
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
      <div className=" mx-2  ">
        <button

          className="bg-gray-200 rounded-full focus:outline-none focus:ring-2 w-10 h-10 focus:ring-gray-600 w-10"
        >
          <FaBell className="text-2xl text-gray-900 m-auto " />
        </button>
      </div>
      <div className=" mx-2 rounded-full flex bg-gray-200 text-center w-10 h-10 cursor-pointer hover:bg-gray-300">
      <button

          className="bg-gray-200 rounded-full focus:outline-none focus:ring-2 w-10 h-10 focus:ring-gray-600 w-10"
        >
          <HiMenu className="text-2xl text-gray-900 m-auto" />
        </button>
      </div>
     
    </div>
  );
};

export default UserMenu;
