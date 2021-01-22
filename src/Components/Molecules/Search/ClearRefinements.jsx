import { connectCurrentRefinements } from "react-instantsearch-dom";

const ClearRefinements = ({ items, refine }) => {
  return (
    <button onClick={() => refine(items)} disabled={!items.length}>
      Clear all refinements
    </button>
  );
};

export const CustomClearRefinements = connectCurrentRefinements(
  ClearRefinements
);
export default ClearRefinements;
