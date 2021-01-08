import React, { useEffect } from "react";
import ProgramCard from "../../Organisms/Search/ProgramCard";
import { useSelector, useDispatch } from "react-redux";
import ProgramsSlice, { selectAllPrograms } from "../../../Store/Slices/ProgramsSlice";
import { fetchPrograms, fetchQuery } from "../../../Store/Slices/ProgramsSlice";
import useFetchQuery from "./hook/useFetchQuery";
import ProgramLoading from "../../Organisms/Search/ProgramLoading";

const SearchResults = () => {
  //*HOOKS
  const programSlice = useSelector((state) => state.programs);
  const programs = useSelector(selectAllPrograms);
  const error = useSelector((state) => state.programs.error);
  const query = useSelector((state) => state.programs.query);
  const dispatch = useDispatch();

  //TODO: CREAR HOOK Y FUNCION PARA ESTO
  //*DISPATCHING HOOK
  useFetchQuery(programSlice);
  useEffect(() => {
    const isEmpty = (query) => {
      for (var prop in query) {
        if (query.hasOwnProperty(prop)) {
          return false;
        }
      }
      return JSON.stringify(query) === JSON.stringify({});
    };
    const queryStatus = isEmpty(query);
    if (!queryStatus) {
      dispatch(fetchQuery(query));
    } else {
      if (programSlice.status === "idle") {
        dispatch(fetchPrograms());
      }
    }
  }, []);

  //*RENDERING
  let content;

  if (programSlice.status === "loading") {
    content = <ProgramLoading />;
  } else if (programSlice.status === "succeeded") {
    content =
      programs &&
      programs.map((program) => (
        <ProgramCard program={program} key={program.id} />
      ));
  } else if (programSlice.status === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <section className="w-full min-h-screen	 divide-y-2 py-6 ">
      <div className="mt-4 py-2">
        <h2 className="text-lg text-gray-600">Tus resultados de busqueda:</h2>
      </div>
      <div className="flex flex-wrap sm:justify-between py-4">{content}</div>
    </section>
  );
};

export default SearchResults;
