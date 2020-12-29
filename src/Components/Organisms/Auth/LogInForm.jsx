import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaTwitter, FaGoogle } from "react-icons/fa";
import SocialMediaButton from "../../Atoms/SocialMediaButton";
import { logInUser, logInUserGoogle , logInUserFacebook } from "../../../Store/Slices/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../../Api/config/fbConfig";
import { ImSpinner8 } from "react-icons/im";
import { useHistory } from "react-router-dom";
const LogInForm = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.myUser);

  //*EVENT HANDLERS
  //EMAIL AND PASSWORD INPUT HANDLER
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  //EMAIL AND PASSWORD SUBMIT HANDLER
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logInUser(userCredentials));
    const user = auth.currentUser;
    console.log(user.email, user.uid);
  };
  //GOOGLE SIGN IN HANDLER
  const handleLogInGoogle =(e) => {
     dispatch(logInUserGoogle());
  };
  //FACEBOOK SIGN IN HANDLER
  const handleLogInFacebook =(e) => {
    dispatch(logInUserFacebook());
 };
  //TODO:Create a method to disable all inputs while loading
  //*Hacemos un fetching del usuario sin embargo deberia se un componente de mayo jerarquia quien administre eso

  const loadingStatus = (userStatus) => {
    if (userStatus === "loading") {
      return (
        <ImSpinner8 className="text-2xl text-center mx-auto animate-spin" />
      );
    } else if (userStatus) {
      return "Log In";
    }
  };
  return (
    <div className="border-2 p-4 w-11/12 sm:w-96 mx-auto rounded-lg px-8 shadow-md mt-4 md:mt-8">
      <form onSubmit={handleSubmit}>
        <div className="input-group my-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email Adress
          </label>
          <input
            type="email"
            name="email"
            className="block py-1 mt-1 focus:outline-none focus:ring-blue-600 focus:ring-2 px-3 rounded-md border-2 w-full"
            placeholder="your-email@here.com"
            required
            onChange={handleChange}
          />
        </div>
        <div className="input-group my-2">
          <label htmlFor="email" className="text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            className="block py-1 mt-1 focus:ring-blue-600 focus:outline-none focus:ring-2 px-3 rounded-md border-2 w-full"
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
          <Link to="/" className="text-xs my-auto text-blue-500 font-medium">
            Forgot your password?
          </Link>
        </div>
        <button
          type="submit"
          className="w-full 
            rounded 
          h-10 cursor-pointer
          bg-blue-500 text-white
          hover:bg-blue-600
             text-sm hover:shadow-lg disabled:opacity-50 transition-all duration-300 ease-in"
        >
          {loadingStatus(user.status)}
        </button>
      </form>
      <p className=" my-4 text-center font-medium text-gray-500 text-sm">
        Or continue with
      </p>
      <div className="flex justify-between">
        
        <SocialMediaButton  event={handleLogInFacebook}>
          <FaFacebookSquare className="mx-auto" />
        </SocialMediaButton>
        <SocialMediaButton >
          <FaTwitter className="mx-auto" />
        </SocialMediaButton>
        <SocialMediaButton event={handleLogInGoogle}>
          <FaGoogle className="mx-auto"  />
        </SocialMediaButton>
      </div>
    </div>
  );
};

export default LogInForm;
