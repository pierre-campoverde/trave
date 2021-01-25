import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProgram } from "../../Store/Slices/ProgramsSlice";
import ProgramBanner from "../Organisms/ProgramPage/ProgramBanner";
import ProgramTitle from "../Organisms/ProgramPage/ProgramTitle";
import ProgramDescription from "../Organisms/ProgramPage/ProgramDescription";
import ProgramCTA from "../Organisms/ProgramPage/ProgramCTA";
import ProgramKeyInfo from "../Organisms/ProgramPage/ProgramKeyInfo";
import ProgramInfoSlider from '../Organisms/ProgramPage/ProgramInfoSlider'
const ProgramPageTemplate = (props) => {
  const dispatch = useDispatch();
  const program = useSelector((state) => state.programs.selectedProgram);
  //TODO modificar la functio para obtener el programa
  useEffect(() => {
    dispatch(fetchProgram(props.programId));
  }, []);
  return (
    <main className="min-h-screen relative">
      <ProgramBanner />
      <section className="md:px-32 border-2 h-full relative ">
        <div className="rounded-t-3xl transform -translate-y-52 md:-translate-y-40 w-full bg-white py-8 px-10 ">
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
        </div>
      </section>
    
    </main>
  );
};

export default ProgramPageTemplate;
