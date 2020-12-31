import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../../Store/Slices/UserSlice";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ImSpinner8 } from "react-icons/im";
const SignInForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const myUser = useSelector((state) => state.myUser);
  const [userCredentials, setUserCredentials] = useState({
    firstName: "",
    familyName: "",
    password: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  //*EVENT HANDLERS
  const handleChange = (e) => {
    const { name, value } = e.target;
    //*FORM VALIDATION
    if (name === "firstName" || name === "familyName") {
      const firstNameFormated = value.trim();
      const patt = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
      const firstNameValidation = patt.test(firstNameFormated);
      if (!firstNameValidation) {
        setErrors((prevState) => ({
          ...prevState,
          [name]: "signInError/Invalid Name",
        }));
      } else {
        setUserCredentials((prevState) => ({
          ...prevState,
          [name]: firstNameFormated,
        }));
        setErrors((prevState) => ({ ...prevState, [name]: "success" }));
      }
    } else if (name === "email") {
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
    } else if (name === "password") {
      const patt = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      const passwordValidation = patt.test(value);
      if (!passwordValidation) {
        setErrors((prevState) => ({
          ...prevState,
          [name]: "signInError/Invalid Password",
        }));
      } else {
        setUserCredentials((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        setErrors((prevState) => ({ ...prevState, [name]: "success" }));
      }
    }
  };
  console.log(errors);
  //*CHECK USER LOG
  useEffect(() => {
    if (myUser.userLoggedIn === true) {
      history.push("/search");
    }
  });
  //*HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(userCredentials));
    if (myUser.userLoggedIn === true) {
      history.push("/search");
    }
  };
  const inputStyles=(name)=>{
      if(name==="signInError/Invalid Name"||name==="signInError/Invalid email"||name==="signInError/Invalid Password"){
        return "input-error"
      }else if(name==="success"){
        return "input-success"
      }else{
        return "input"
      }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex">
        <div className="input-group my-2 pr-2">
          <label htmlFor="email" className="text-sm font-medium">
            Nombre
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="firstName"
            className={`${inputStyles(errors.firstName)
            }`}
          />
        </div>
        <div className="input-group my-2">
          <label htmlFor="email" className="text-sm font-medium">
            Apellido
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="familyName"
            className={`${inputStyles(errors.familyName)
            }`}
          />
        </div>
      </div>

      <div className="input-group my-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          className={`${inputStyles(errors.email)
          }`}
        />
      </div>
      <div className="input-group my-2">
        <label htmlFor="email" className="text-sm font-medium">
          Contraseña
        </label>

        <input
          onChange={handleChange}
          type="password"
          name="password"
          className={`${inputStyles(errors.password)
          }`}
        />
      </div>
      <div className="flex text-sm">
        <label htmlFor="terms" className="font-light">
          Acepto los terminos de privacidad
        </label>
      </div>
      <div className="input-group my-2">
        <button type="submit" className="btn-primary w-full ">
          {myUser.status === "loading" ? (
            <ImSpinner8 className="text-2xl text-center mx-auto animate-spin" />
          ) : (
            <p>Sign Up</p>
          )}
        </button>
      </div>
    </form>
  );
};

export default SignInForm;
