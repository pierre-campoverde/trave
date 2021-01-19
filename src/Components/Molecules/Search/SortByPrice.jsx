import React from "react";
import { connectSortBy } from "react-instantsearch-dom";

const SortByPrice = ({ items, refine, createURL }) => {
  return (
    <div className="flex justify-end my-2">
      <p className="my-auto text-xs font-medium text-gray-500">Sort by Price</p>
      <div className="flex my-auto mx-2">
        {items.map((item) => (
          <button
            key={item.value}
            className="text-xs bg-gray-900 rounded-md p-1 font-medium text-white mr-1"
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
