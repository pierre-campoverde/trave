import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../../Store/Slices/UserAuthFuntions/authFunctions";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Input from "../../Atoms/Input";
import ButtonSubmit from "../../Atoms/ButtonSubmit";
import Checkbox from "../../Atoms/Checkbox";
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
 //*CHECK USER LOG
  useEffect(() => {
    if (myUser.userLoggedIn === true) {
      history.push("/search");
    }
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

 

  //*EVENT HANDLERS HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(userCredentials));
    if (myUser.userLoggedIn === true) {
      history.push("/search");
    }
  };

  //*HANDLE ERRORS STYLES
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
    <form onSubmit={handleSubmit}>
      <div className="flex">
        <Input
          type={"text"}
          name={"firstName"}
          label={"Nombre"}
          handleChangeCallback={handleChange}
          styles={inputStyles(errors.firstName)}
          extraStyles={"pr-2"}
        />
        <Input
          type={"text"}
          name={"familyName"}
          label={"Apellido"}
          handleChangeCallback={handleChange}
          styles={inputStyles(errors.familyName)}
        />
      </div>
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
        label={"Password"}
        handleChangeCallback={handleChange}
        styles={inputStyles(errors.password)}
      /> <div className={`bg-red-100 rounded-lg p-1 ${errors.password==="signInError/Invalid Password"?"block":"hidden"} `}><p className="text-xs font-medium text-red-600">La contraseña debe contener al menos 8 digitos y un numero</p></div>
      <Checkbox label={"Acepto los terminos de servicio"} name={"terms"} />
      <ButtonSubmit myUserStatus={myUser.status} value={"Registrarse"} />
    </form>
  );
};

export default SignInForm;
