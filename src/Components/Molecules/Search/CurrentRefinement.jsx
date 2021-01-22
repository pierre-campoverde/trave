import React from "react";
import { connectCurrentRefinements } from "react-instantsearch-dom";

const CurrentRefinement = ({ items, refine, createURL }) => {
  console.log(items)

  //TODO posible futura implementacion 
  return (
    
    <ul className="flex">
      {items.map((item) => (
        <li key={item.label} className="bg-gray-100 rounded-full mx-2 ">
          {item.items ? (
            <React.Fragment>
              {item.label}
              <ul className="flex w-full">
                {item.items.map((nested) => (
                  <li key={nested.label}>
                    <a
                      className="text-sm"
                      href={createURL(nested.value)}
                      onClick={(event) => {
                        event.preventDefault();
                        refine(nested.value);
                      }}
                    >
                      {nested.label}
                    </a>
                  </li>
                ))}
              </ul>
            </React.Fragment>
          ) : (
            <a
              href={createURL(item.value)}
              className="text-xs block p-2 border border-gray-300 rounded-full text-gray-500 font-medium"
              onClick={(event) => {
                event.preventDefault();
                refine(item.value);
              }}
            >
              {item.currentRefinement}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};
export const CustomCurrentRefinements = connectCurrentRefinements(
  CurrentRefinement
);

export default CurrentRefinement;
