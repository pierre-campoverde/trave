import React, { useEffect, useState } from "react";

//*IMPORT ICONS
import { FaFacebookSquare, FaTwitter, FaGoogle } from "react-icons/fa";
import SocialMediaButton from "../../Atoms/SocialMediaButton";

//*IMPORT HOOKS
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

//*IMPORT COMPONENTS
import Input from "../../Atoms/Input";
import ButtonSubmit from "../../Atoms/ButtonSubmit";
import {
  logInUser,
  logInUserGoogle,
  logInUserFacebook,
} from "../../../Store/Slices/UserAuthFuntions/authFunctions";
import Checkbox from "../../Atoms/Checkbox";
const LogInForm = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const myUser = useSelector((state) => state.myUser);
  const history = useHistory();
  useEffect(() => {
    if (myUser.userLoggedIn === true) {
      history.push("/");
    }
  });

  //*EMAIL AND PASSWORD INPUT HANDLER
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
  };

  //*EMAIL AND PASSWORD SUBMIT HANDLER
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logInUser(userCredentials));
  };

  //*GOOGLE SIGN IN HANDLER
  const handleLogInGoogle = () => {
    dispatch(logInUserGoogle());
    console.log("works");
  };

  //*FACEBOOK SIGN IN HANDLER
  const handleLogInFacebook = () => {
    dispatch(logInUserFacebook());
  };

  const inputStyles = (name) => {
    if (
      name === "signInError/Invalid Name" ||
      name === "signInError/Invalid email" ||
      name === "signInError/Invalid Password"
    ) {
      return "input-error";
    } else if (name === "success") {
      return "input-success";
    } else {
      return "input";
    }
  };

  return (
    <div className="border-2 p-4 w-11/12 sm:w-96 mx-auto rounded-lg px-8 shadow-md mt-4 md:mt-8 bg-gradient-to-b	from-white to-gray-100">
      <form onSubmit={handleSubmit}>
        <Input
          type={"email"}
          name={"email"}
          label={"Email"}
          handleChangeCallback={handleChange}
          styles={inputStyles(errors.email)}
        />
        <Input
          type={"password"}
          name={"password"}
          label={"Contraseña"}
          handleChangeCallback={handleChange}
        />
        <div className="flex justify-between align-middle	">
          <Checkbox label={"Recordarme"} />
          <Link to="/" className="text-xs my-auto text-blue-500 font-medium">
            Olvidaste tu contraseña?
          </Link>
        </div>
        <ButtonSubmit myUserStatus={myUser.status} value={"Iniciar sesion"} />
      </form>
      <p className=" my-4 text-center font-medium text-gray-500 text-sm">
        O continua con
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
