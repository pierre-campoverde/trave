import React from "react";
import SocialMediaButton from "../../Atoms/SocialMediaButton";
import { FaFacebookSquare, FaTwitter, FaGoogle } from "react-icons/fa";

//TODO-Aceptar los terminos de privacidad
const SignUpForm = () => {
  return (
    <div className="w-full md:w-5/12 mt-16">
      <div className=" w-11/12 sm:w-7/12 md:w-11/12 lg:w-7/12 mx-auto">
        <div className="form-title mx-auto">
          <h2 className="text-3xl font-semibold">
            Sign up and start a new adventure{" "}
          </h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="sign  mx-auto mt-4 ">
          <p className="text-sm font-medium text-gray-600 ">Sign up with</p>
          <div className="flex justify-around mt-2">
            <SocialMediaButton>
              <FaFacebookSquare className="mx-auto" />
            </SocialMediaButton>
            <SocialMediaButton>
              <FaTwitter className="mx-auto" />
            </SocialMediaButton>
            <SocialMediaButton>
              <FaGoogle className="mx-auto" />
            </SocialMediaButton>
          </div>
        </div>
        <p className="text-center text-gray-600 text-sm my-6">
          Or continue with
        </p>
        <div className="form">
          <form action="">
            <div className="input-group my-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email Adress
              </label>
              <input
                type="text"
                name="email"
                className="block py-1 mt-1 focus:outline-none focus:ring-2 px-3 rounded-md border-2 w-full"
                placeholder="your-email@here.com"
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
              />
            </div>
            <div className="input-group my-2">
              <label htmlFor="passConfi" className="text-sm font-medium">
                Confirm your password
              </label>
              <input
                type="password"
                name="passConfi"
                className="block py-1 mt-1 focus:outline-none focus:ring-2 px-3 rounded-md border-2 w-full"
                placeholder="••••••••••"
              />
              <input
                type="submit"
                value="Sign Up "
                className="w-full mt-4 py-2 rounded-md cursor-pointer hover:shadow-lg transition-all duration-300 ease-in bg-blue-500 text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;