import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProgram } from "../../Store/Slices/ProgramsSlice";
import ProgramBanner from "../Organisms/ProgramPage/ProgramBanner";
import ProgramTitle from "../Organisms/ProgramPage/ProgramTitle";
import ProgramDescription from "../Organisms/ProgramPage/ProgramDescription";
import ProgramCTA from "../Organisms/ProgramPage/ProgramCTA";
import ProgramKeyInfo from "../Organisms/ProgramPage/ProgramKeyInfo";
import ProgramInfoSlider from '../Organisms/ProgramPage/ProgramInfoSlider'
import ProgramInfoMenu from "../Organisms/ProgramPage/ProgramInfoMenu";
const ProgramPageTemplate = (props) => {
  const dispatch = useDispatch();
  const program = useSelector((state) => state.programs.selectedProgram);
  //TODO modificar la functio para obtener el programa
  useEffect(() => {
    dispatch(fetchProgram(props.programId));
  }, []);
  return (
    <main className="min-h-screen relative">
      <ProgramBanner university={program.university} universityID={program.univeristyID}/>
      <section className="h-full relative ">
        <div className="w-full  md:w-11/12 lg:w-10/12 mx-auto rounded-t-3xl transform -translate-y-52 md:-translate-y-40 bg-white py-8 px-5 md:px-10 ">
          <div className="md:flex justify-between">
            <div className="w-full md:w-7/12 divide-y-2">
              <ProgramTitle
                programName={program.name}
                programType={program.program}
                attendance={program.attendace}
                format={program.format}
              />
              <ProgramDescription />
            </div>
            <div className="md:w-4/12 ">
              <ProgramCTA />
            </div>
          </div>
          <ProgramKeyInfo
            duration={program.duration}
            language={program.language}
          />
          <ProgramInfoSlider/>
          <ProgramInfoMenu/>
        </div>
      </section>
    
    </main>
  );
};

export default ProgramPageTemplate;
