import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProgramsById } from "../Store/Slices/ProgramsSlice";
import { AiFillStar } from "react-icons/ai";
import { RiMedalFill } from "react-icons/ri";
import { FiBookmark } from "react-icons/fi";
import ProgramCTA from "../Components/Organisms/ProgramPage/ProgramCTA";
import ButtonNav from "../Components/Atoms/Buttons/ButtonNav";
import ProgramTitle from "../Components/Organisms/ProgramPage/ProgramTitle";
import ProgramDescription from "../Components/Organisms/ProgramPage/ProgramDescription";
import ProgramKeyInfo from "../Components/Organisms/ProgramPage/ProgramKeyInfo";
import ProgramInfoSlider from "../Components/Organisms/ProgramPage/ProgramInfoSlider";
import { fetchProgram } from "../Store/Slices/ProgramsSlice";
const ProgramPage = ({ match }) => {
  const dispatch = useDispatch();
  const { programId } = match.params;

  const program = useSelector((state) => state.programs.selectedProgram);

  //TODO modificar la functio para obtener el programa
  useEffect(() => {
    dispatch(fetchProgram(programId));
  }, [programId,dispatch]);
  return (
    <main className="min-h-screen">
      <section className="program sm:w-11/12 md:w-10/12 xl:w-8/12 mx-auto pt-16">
        {/*UNIVERISTY NAME AND INFO */}
        <div className="md:flex justify-between">
          <div className="title">
            <h2 className="text-2xl font-medium">{program.university}</h2>
            <div className="flex my-1.5">
              <span className="flex ">
                <AiFillStar className="my-auto text-lg text-blue-500" />
                <p className="my-auto text-sm">9.10</p>{" "}
                <p className="text-gray-500 text-sm">(40)</p>
              </span>
              •
              <span className="flex">
                <RiMedalFill className="my-auto text-lg text-blue-500" />
                <p className="my-auto text-sm">Top regional</p>
              </span>
              •
              <span className="flex ">
                <p className="text-sm my-auto">Samara, Republica Rusa</p>
              </span>
            </div>
          </div>
          <button className=" my-auto h-10 border-2 flex px-5 border-gray-400 rounded-lg text-gray-500 shadow-md hover:shadow-lg hover:border-black hover:text-black  ">
            <FiBookmark className="my-auto text-xl" />
            <p className="my-auto">Guardar</p>
          </button>
        </div>
        {/*GALLERY COMPONNENT */}
        <div className="h-80 w-full  my-3 rounded-2xl bg-gray-100"></div>
        <div className="flex">
          <div className="w-7/12 divide-y-2 divide-gray-200">
            <ProgramTitle title={program.name} />
            <ProgramDescription />
            <ProgramKeyInfo />
          </div>
          <div className="w-5/12 ">
            {/*INSCRIPTCION COMPONNENT */}
            <ProgramCTA />
            <div className="h-28 border-2 w-10/12 bg-white shadow-lg rounded-xl ml-auto my-2"></div>
            {/*MENU COMPONENT */}
          </div>
        </div>
        <ProgramInfoSlider />
      </section>
    </main>
  );
};

export default ProgramPage;
