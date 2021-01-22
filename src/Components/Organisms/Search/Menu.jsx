import React from "react";
import { connectMenu } from "react-instantsearch-dom";
//*!
const Menu = ({ items, refine,  createURL }) => {
  return (
    <div className="border rounded-xl p-5">
      <h3 className="text-xs font-semibold text-gray-500">FORMATO</h3>
      <ul className="mt-3">
        {items.map((item) => (
          <li key={item.value} className="my-1">
            <a
              className={`w-full bg-gray-100 block border-2
             rounded-lg hover:bg-gray-200 p-2 
             flex justify-between
             ${item.isRefined ? "font-semibold bg-gray-200" : ""}
             `}
              href={createURL(item.value)}
              onClick={(event) => {
                event.preventDefault();
                refine(item.value);
              }}
            >
              {item.label}

              <span className="bg-gray-300 px-2 rounded-xl mx-2 text-sm flex ">
                <p className="text-sm font-semibold m-auto">{item.count}</p>
              </span>
            </a>
          </li>
        ))}
        <li>
          <a
            className={`w-full bg-gray-100 block border-2
             rounded-lg hover:bg-gray-200 p-2 
             flex justify-between
             `}
            href={createURL(items.value)}
            onClick={(event) => {
              event.preventDefault();
              refine();
            }}
          >
            All
          </a>
          <span className="bg-gray-300 px-2 rounded-xl mx-2 text-sm flex ">
            <p className="text-sm font-semibold m-auto">{items.lenght}</p>
          </span>
        </li>
      </ul>
    </div>
  );
};
export const CustomMenu = connectMenu(Menu);
export default Menu;
