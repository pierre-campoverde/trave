import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../../Store/Slices/UiSlice";
import { Link } from "react-router-dom";
import MyUserMenu from "./MyUserMenu";
const UserMenu = () => {
  const myUser = useSelector((state) => state.myUser.data.userData);
  const menuStatus = useSelector((state) => state.interface.value);
  const dispatch = useDispatch();
  const handleClick = () => {
    if(menuStatus===false){
      dispatch(toggle());
    }
  };
  return (
    <div className="flex">
      <Link
        to={`/myuser/${myUser.uid}`}
        className="cursor pointer flex   h-10 rounded-full border-2  transition transition-all border-gray-300    mx-2 cursor-pointer shadow-lg  hover:shadow-none bg-gray-100"
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
        <img src="" alt="" />
      </Link>
      <div className=" mx-2  ">
        <button className="h-10 w-10 cursor pointer flex focus:outline-none  h-10 rounded-full border-2  transition transition-all border-gray-300  mx-2 cursor-pointer shadow-lg  hover:shadow-none bg-gray-100">
          <FaBell className="text-2xl text-gray-900 m-auto " />
        </button>
      </div>
      <div className="">
        <button onClick={handleClick} disabled={menuStatus} className="h-10 w-10 cursor pointer flex focus:outline-none  h-10 rounded-full border-2  transition transition-all  border-gray-300  mx-2 cursor-pointer shadow-lg  hover:shadow-none bg-gray-100">
          <HiMenu className="text-2xl text-gray-900 m-auto" />
        </button>
      </div>
      {menuStatus && <MyUserMenu />}
    </div>
  );
};

export default UserMenu;
