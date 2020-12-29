import React, { useEffect } from "react";
import ProgramCard from "../../Organisms/Search/ProgramCard";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPrograms } from "../../../Store/Slices/ProgramsSlice";
import { fetchPrograms } from "../../../Store/Slices/ProgramsSlice";
import ProgramLoading from '../../Organisms/Search/ProgramLoading'

const SearchResults = () => {
  //*HOOKS
  const programsStatus = useSelector((state) => state.programs.status);
  const programs = useSelector(selectAllPrograms);
  const error = useSelector((state) => state.programs.error);
  const dispatch = useDispatch();

  //*DISPATCHING HOOK
  useEffect(() => {
    if (programsStatus === "idle") {
      dispatch(fetchPrograms());
    }
  }, [programsStatus, dispatch]);

  //*RENDERING
  let content;
  if (programsStatus === "loading") {
    content=<ProgramLoading/>
   
  } else if (programsStatus === "succeeded") {
    content =
      programs &&
      programs.map((program) => (
        <ProgramCard program={program} key={program.id} />
      ));
  }else if(programsStatus==="failed"){
    content=<div>{error}</div>
  }
  return (
    <div className="md:w-8/12 min-h-screen ml-auto py-10 px-4 ">
      {content}
    </div>
  );
};

export default SearchResults;
