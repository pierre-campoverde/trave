import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FaFacebookSquare, FaTwitter, FaGoogle } from "react-icons/fa";
import SocialMediaButton from "../../Atoms/SocialMediaButton";
import {
  logInUser,
  logInUserGoogle,
  logInUserFacebook,
} from "../../../Store/Slices/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { ImSpinner8 } from "react-icons/im";
const LogInForm = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const user = useSelector((state) => state.myUser);
  const history = useHistory();

 const disableInputs = (user) => {
    if (user.status === "loading") {
      return true;
    } else {
      return false;
    }
  }; 
  useEffect(() => {
    if (user.userLoggedIn === true) {
      history.push("/search");
    }
  });
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
    if (user.userLoggedIn === true) {
      history.push("/search");
    }
  };
  //GOOGLE SIGN IN HANDLER
  const handleLogInGoogle = () => {
    dispatch(logInUserGoogle());
    console.log("works");
  };
  //FACEBOOK SIGN IN HANDLER
  const handleLogInFacebook = () => {
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
            className="input "
            required
            disabled={disableInputs}
            onChange={handleChange}
          />
        </div>
        <div className="input-group my-2">
          <label htmlFor="email" className="text-sm font-medium">
            Password
          </label>
          <input
          disabled={disableInputs}
            type="password"
            name="password"
            onChange={handleChange}
            className="input"
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
        <button type="submit" className="btn-primary disabled:opacity-50  w-full" >
          {loadingStatus(user.status)}
        </button>
      </form>
      <p className=" my-4 text-center font-medium text-gray-500 text-sm">
        Or continue with
      </p>
      <div className="flex justify-between">
        <SocialMediaButton event={handleLogInFacebook}>
          <FaFacebookSquare className="mx-auto" />
        </SocialMediaButton>
        <SocialMediaButton>
          <FaTwitter className="mx-auto" />
        </SocialMediaButton>
        <SocialMediaButton event={handleLogInGoogle}>
          <FaGoogle className="mx-auto" />
        </SocialMediaButton>
      </div>
    </div>
  );
};

export default LogInForm;
