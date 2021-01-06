import React, { useEffect } from "react";
import ProgramCard from "../../Organisms/Search/ProgramCard";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPrograms } from "../../../Store/Slices/ProgramsSlice";
import { fetchPrograms } from "../../../Store/Slices/ProgramsSlice";

import ProgramLoading from "../../Organisms/Search/ProgramLoading";

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
    content = <ProgramLoading />;
  } else if (programsStatus === "succeeded") {
    content =
      programs &&
      programs.map((program) => (
        <ProgramCard program={program} key={program.id} />
      ));
  } else if (programsStatus === "failed") {
    content = <div>{error}</div>;
  }
  return (
    <section className="w-full divide-y-2 py-6">
      <div className="mt-4 py-2">
        <h2 className="text-lg text-gray-600">Tus resultados de busqueda:</h2>
      </div>
      <div className="flex flex-wrap sm:justify-between py-4">{content}</div>
    </section>
  );
};

export default SearchResults;
