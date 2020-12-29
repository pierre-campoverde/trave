import React from "react";
import { useSelector } from "react-redux";
import { selectProgramsById } from "../Store/Slices/ProgramsSlice";
const ProgramPage = ({ match }) => {
  const { programId } = match.params;
  const program = useSelector((state) => selectProgramsById(state, programId));
  if(!program){
    return(
        <section>
            <h2>Program not found!</h2>
        </section>
    )
}
return (
    <section>
        <article className="program">
            <h2>{program.name}</h2>
            <p>{program.university}</p>
        </article>
    </section>
)
};

export default ProgramPage;
