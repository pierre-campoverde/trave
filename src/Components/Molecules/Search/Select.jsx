import React from "react";
import { connectMenu } from "react-instantsearch-dom";

const Select = ({ items, currentRefinement, refine , label}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="country"
        className="text-xs text-gray-500 block font-semibold "
      >
        {label}
      </label>
      <select
        name=""
        id=""
        className="w-full bg-gray-100 rounded-xl px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 "
        onChange={(event) => refine(event.currentTarget.value)}
      >
        <option value="">Select All</option>
        {items.map((item) => (
          <option
            key={item.label}
            value={item.isRefined ? currentRefinement : item.value}
          >
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};
export const CustomMenuSelect = connectMenu(Select);
