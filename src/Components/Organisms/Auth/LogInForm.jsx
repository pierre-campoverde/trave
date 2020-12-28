import React from 'react'
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaTwitter, FaGoogle } from "react-icons/fa";
import SocialMediaButton from "../../Atoms/SocialMediaButton";

const LogInForm = () => {
    return (
        <div className="border-2 p-4 w-11/12 sm:w-96 mx-auto rounded-lg px-8 shadow-md mt-4 md:mt-8">
        <form action="" >
          <div className="input-group my-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email Adress
            </label>
            <input
              type="email"
              name="email"
              
              className="block py-1 mt-1 focus:outline-none focus:ring-2 px-3 rounded-md border-2 w-full"
              placeholder="your-email@here.com"
              required
            />
          </div>
          <div className="input-group my-2">
            <label htmlFor="email" className="text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
           
              className="block py-1 mt-1 focus:outline-none focus:ring-2 px-3 rounded-md border-2 w-full"
              placeholder="••••••••••"
              required
            />
          </div>
          <div className="flex my-4 justify-between align-middle	">
            <div className="input-group flex align-middle 	">
              <input
                type="checkbox"
                name="rememberPass"
                className="shadow border-2 border-black"
              />
              <label
                htmlFor="rememberPass"
                className="text-xs   font-medium  ml-2"
              >
                Remember me
              </label>
            </div>
            <Link  to='/'  className="text-xs my-auto text-blue-500 font-medium">
              Forgot your password?
            </Link>
          </div>
          <input
            type="submit"
            className="w-full 
            rounded 
          py-2 cursor-pointer
          bg-blue-500 text-white
          hover:bg-blue-600
             text-sm hover:shadow-lg transition-all duration-300 ease-in"
            value="Log In"
          />
          <p className=" my-4 text-center font-medium text-gray-500 text-sm">
            Or continue with
          </p>
          <div className="flex justify-between">
            <SocialMediaButton to={"/"}>
              <FaFacebookSquare className="mx-auto" />
            </SocialMediaButton>
            <SocialMediaButton to={"/"}>
              <FaTwitter className="mx-auto" />
            </SocialMediaButton>
            <SocialMediaButton to={"/"}>
              <FaGoogle className="mx-auto" />
            </SocialMediaButton>
          </div>
        </form>
      </div>
    )
}

export default LogInForm
