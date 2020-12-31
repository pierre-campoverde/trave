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
  const [errors, setErrors] = useState({});
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
    if (name === "email") {
      const emailFormated = value.toLowerCase().trim();
      const patt = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const emailValidation = patt.test(emailFormated);
      if (!emailValidation) {
        setErrors((prevState) => ({
          ...prevState,
          [name]: "signInError/Invalid email",
        
        }));
      } else {
        setUserCredentials((prevState) => ({
          ...prevState,
          [name]: emailFormated,
        }));
        setErrors((prevState) => ({ ...prevState, [name]: "success" }));
      }
    }
    setUserCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  
    console.log(errors)
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
  const loadingStatus = (userStatus) => {
    if (userStatus === "loading") {
      return (
        <ImSpinner8 className="text-2xl text-center mx-auto animate-spin" />
      );
    } else if (userStatus) {
      return "Log In";
    }
  };
  const inputStyles=(name)=>{
    if(name==="signInError/Invalid Name"||name==="signInError/Invalid email"||name==="signInError/Invalid Password"){
      return "input-error"
    }else if(name==="success"){
      return "input-success"
    }else{
      return "input"
    }}

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
            className={`${inputStyles(errors.email)}`}
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
