import React from "react";
import { connectCurrentRefinements } from "react-instantsearch-dom";

const CurrentRefinement = ({ items, refine, createURL }) => {
  return <div></div>;
};
export const CustomCurrentRefinements = connectCurrentRefinements(
  CurrentRefinement
);

export default CurrentRefinement;
