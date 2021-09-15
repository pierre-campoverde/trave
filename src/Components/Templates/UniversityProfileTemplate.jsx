import React from "react";
import { Link, NavLink } from "react-router-dom";
import UniveristyBanner from "../Organisms/University Profile/UniveristyBanner";
import UniversityProfilePicture from "../Organisms/University Profile/UniversityProfilePicture";
import { AiFillMessage } from "react-icons/ai";
const UniversityProfileTemplate = (props) => {
  console.log(props.universityId);
  return (
    <>
      <UniveristyBanner />
      <section className=" h-full relative ">
        <div className="w-full divide-y  md:w-11/12 lg:w-10/12 mx-auto rounded-t-3xl transform -translate-y-52 md:-translate-y-40 bg-white py-32 px-5 md:px-10 ">
          <UniversityProfilePicture />
          <div className="divide-y md:divide-none md:flex flex-row-reverse justify-between w-full  ">
            <div className="bg-gray-50 md:bg-none rounded flex py-2 justify-between">
              <Link className="border-2 mx-2 flex rounded-lg text-3xl px-2 text-gray-400">
                <AiFillMessage className="my-auto" />
              </Link>
              <button className="gradient rounded-lg mx-2  px-6 py-3 font-medium text-white">
                Inscribirse
              </button>
            </div>
            <div className="md:w-7/12">
              <ul className="md:flex divide-y-2 md:divide-none ">
                <li className="w-full flex ">
                  <NavLink
                    className="p-3 w-full hover:bg-gray-100"
                    activeClassName=" font-medium text-blue-500 border-b-2 border-blue-600"
                    to={`/university/${props.universityId}/about`}
                  >
                    About
                  </NavLink>
                </li>
                <li className="w-full flex ">
                  <NavLink
                    className="p-3 w-full hover:bg-gray-100"
                    activeClassName=" font-medium text-blue-500 border-b-2 border-blue-600"
                    to={`/university/${props.universityId}/programs`}
                  >
                    Programs
                  </NavLink>
                </li>
                <li className="w-full flex ">
                  <NavLink
                    className="p-3 w-full hover:bg-gray-100"
                    activeClassName=" font-medium text-blue-500 border-b-2 border-blue-600"
                    to={`/university/${props.universityId}/inscription`}
                  >
                    Inscription
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UniversityProfileTemplate;
