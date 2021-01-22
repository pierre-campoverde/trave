import React from "react";
import { connectSortBy } from "react-instantsearch-dom";

const SortByPrice = ({ items, refine }) => {
  return (
    <div className="flex justify-end my-2">
      <p className="my-auto text-xs font-medium text-gray-500">Sort by Price</p>
      <div className="flex my-auto mx-2">
        {items.map((item) => (
          <button
            key={item.value}
            className="text-xs bg-gray-200 rounded-md p-1 
            font-medium text-black border
            border-gray-300 mr-1 focus:outline-none focus:ring-2 focus:ring-gray-900"
            onClick={(event) => {
              event.preventDefault();
              refine(item.value);
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};
export const CustomSortByPrice = connectSortBy(SortByPrice);
export default SortByPrice;
