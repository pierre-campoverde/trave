import React, {useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../Atoms/Button";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../../assets/svg/Logo";
import UserMenu from "../Molecules/User/UserMenu";
import { useSelector } from "react-redux";
//*Crrear un variable neutra mientras que no se compuebe el stado se manteien neutra (Loading)
const Navbar = () => {
  const [clicked, setClicked] = useState(true);
  const userStatus = useSelector((state) => state.myUser.userLoggedIn);
  console.log(userStatus);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <nav className="bg-white shadow-sm sticky relative top-0  block w-full   z-40 mb-15 ">
        <div className="container mx-auto  p-4 flex flex-wrap items-center justify-between  md:flex-no-wrap">
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
          {userStatus ? (
            <UserMenu />
          ) : (
            <div className="hidden button-group md:flex mr-5">
              <Button type={"secondary"} to={"/signup"} name={"Sign Up"} />
              <Button type={"primary"} to={"/login"} name={"Log in"} />
            </div>
          )}
          {/*---------Hamburger----------*/}
          <div
            className="ml-auto md:hidden text-3xl cursor-pointer "
            onClick={handleClick}
          >
            <span className="text-3xl text-gray-900">
              {clicked ? (
                <FiMenu className="text-3xl " />
              ) : (
                <FiX className="text-3xl " />
              )}
            </span>
          </div>
          {/*Buttons Sign In  */}
        </div>
      </nav>
      <div
        className={`bg-white absolute w-full p-4 text-black transform ${
          clicked ? "-translate-x-full" : "translate-x-0"
        } shadow z-40 md:hidden transition-transform duration-300 ease-in-out`}
      >
        <ul className="text-center sm:w-6/12 m-auto">
          <Link onClick={handleClick} to="/">
            <li className="p-2 rounded-md my-2 hover:bg-blue-50 transition-colors">
              Home
            </li>
          </Link>
          <Link to="/destinations" onClick={handleClick}>
            <li className="p-2 rounded-md my-2 hover:bg-blue-50 transition-colors">
              Destinations
            </li>
          </Link>
          <Link onClick={handleClick} to="/contact">
            <li className="p-2 rounded-md my-2 hover:bg-blue-50 transition-colors">
              Contact
            </li>
          </Link>
          <hr className="opacity-80" />
          <Link to="/signup">
            <li className="p-2  rounded-md my-2 bg-gray-900 hover:bg-gray-700 text-white  transition-all">
              Sign Up
            </li>
          </Link>
          <Link to="/login" onClick={handleClick}>
            <li className="p-2 mx-2 rounded-md text-blue-400 my-2 bg-white border-2 border-blue-500 duration-500  hover:bg-blue-500 hover:text-white transition-colors">
              Log In
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
