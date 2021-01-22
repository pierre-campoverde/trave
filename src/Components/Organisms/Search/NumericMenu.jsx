import React from "react";
import { connectNumericMenu } from "react-instantsearch-dom";

const NumericMenu = ({ items, refine, createURL }) => {
  return (
    <div className=" border my-2 rounded-lg p-5">
      <h3 className="text-xs font-semibold text-gray-500">DURACION</h3>
      <ul className="mt-3">
        {items.map((item) => (
          <li key={item.value} className="my-1">
            <div className="w-full">
              <a
                href={createURL(item.value)}
                className={`bg-gray-50 w-full block p-2 border-2 rounded-lg hover:bg-gray-200 
                ${item.isRefined?"font-semibold bg-gray-200":""}`}
                onClick={(event) => {
                  event.preventDefault();
                  refine(item.value);
                }}
              >
                {item.label}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export const CustomNumericMenu = connectNumericMenu(NumericMenu);

export default NumericMenu;
