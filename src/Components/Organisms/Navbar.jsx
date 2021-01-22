import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../Atoms/Button";
import Logo from "../../assets/svg/Logo";
import UserMenu from "../Molecules/User/UserMenu";
import { useSelector } from "react-redux";
import NavbarButtons from "../Molecules/User/NavbarButtons";
const Navbar = () => {
  const userStatus = useSelector((state) => state.myUser.userLoggedIn);
 
  return (
    <>
      <nav className="bg-white absolute sticky relative top-0  block w-full border-b border-gray-300  z-40 mb-15 ">
        <div className=" mx-auto  p-4 flex flex-wrap items-center justify-between  md:flex-no-wrap">
          <div className="logo ">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="hidden ml-auto md:flex">
            <ul className="flex mr-5  ">
              <li>
                <NavLink
                  className="m-2 font-medium text-gray-500 transition-all ease-in duration-200 text-md  hover:text-blue-600 "
                  to="/"
                  exact
                  activeClassName="text-blue-600 transition-all"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="m-2 transition-all text-gray-500 font-medium hover:text-blue-600 ease-in duration-200 text-md 	"
                  to="/search"
                  activeClassName="text-blue-600 transition-all"
                >
                  Find
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="m-2 font-medium transition-all text-gray-500 hover:text-blue-600 ease-in duration-200 h-full text-md "
                  to="/contact"
                  activeClassName="text-blue-600 transition-all"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <NavbarButtons userState={userStatus}/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
