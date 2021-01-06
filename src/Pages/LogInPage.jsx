import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/svg/Logo";
import LogInForm from "../Components/Organisms/Auth/LogInForm";
const LogInPage = () => {
  return (
    <main className=" flex-col content-center h-screen py-16 md:py-24">
      <div className="justify-center content-center flex flex-col ">
        <div className=" mx-auto my-2">
          <Logo />
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold  text-center">
          Log into your account
        </h2>
      </div>
      <LogInForm />
      <p className="text-sm font-medium text-gray-500 text-center mt-4">
        Aun no tienes un cuenta?
        <Link className="text-blue-500 block sm:inline" to="/signup">
          Registrate aqui
        </Link>
      </p>
    </main>
  );
};

export default LogInPage;
