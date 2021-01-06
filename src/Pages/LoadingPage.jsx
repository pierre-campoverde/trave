import React from "react";
import { ImSpinner10 } from "react-icons/im";


const LoadingPage = () => {
  return (
    <main className="h-screen flex flex-wrap content-center text-center justify-center">
      <div className="">

          
        <ImSpinner10 className="text-6xl mx-auto text-indigo-400 animate-spin"/>
        <h2 className="text-lg mt-2">Loading</h2>
      </div>
    </main>
  );
};

export default LoadingPage;
