import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProgramPageTemplate from "../Components/Templates/ProgramPageTemplate";
import { fetchProgram } from "../Store/Slices/ProgramsSlice";

const ProgramPage = ({ match }) => {
  const dispatch = useDispatch();
  const { programId } = match.params;
  const program = useSelector((state) => state.programs.selectedProgram);
  //TODO modificar la functio para obtener el programa
  useEffect(() => {
    dispatch(fetchProgram(programId));
  },[]);
  return (
    <main className="min-h-screen">
        <ProgramPageTemplate programId={programId}/>
    </main>
  );
};

export default ProgramPage;
