import React from "react";

const Requisite = (props) => {
  return (
    <div className="border my-3 rounded-lg overflow-hidden flex">
      <div className="w-10 flex bg-gray-900">
        <p className="m-auto text-white text-sm">{props.req.id}</p>
      </div>
      <div className="p-2">
        <p>{props.req.requisite}</p>
      </div>
    </div>
  );
};

export default Requisite;
