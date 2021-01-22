import React from "react";

const ButtonLoadingSkeleton = () => {
  return <div className="flex">
      <div className="h-10 rounded-full w-24 bg-gray-200 ml-2 animate-pulse"></div>
      <div className="h-10 rounded-full w-24 bg-gray-200 ml-2"></div>
  </div>;
};

export default ButtonLoadingSkeleton;
