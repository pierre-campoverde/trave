import React from "react";
import { CgSpinnerTwo } from "react-icons/cg";


const LoadingPage = () => {
  return (
    <main className="h-screen flex flex-wrap content-center text-center justify-center">
      <div className="">

          
        <CgSpinnerTwo className="text-8xl mx-auto text-blue-600 animate-spin"/>
        <h2 className="text-lg ">Loading</h2>
      </div>
    </main>
  );
};

export default LoadingPage;
