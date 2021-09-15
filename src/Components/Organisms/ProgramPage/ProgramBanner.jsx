import React from "react";
import UniversityCard from "./UniversityCard";

const ProgramBanner = ({ university, universityID }) => {
  const style = {
    height: "35rem",
    "background-image":
      "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)",
    "background-repeat": "no-repeat",
    "background-size": "cover",
  };
  return (
    <section className="bg-gray-100 md:px-20 xl:px-32 py-9" style={style}>
      <UniversityCard name={university} id={universityID} />
    </section>
  );
};

export default ProgramBanner;
