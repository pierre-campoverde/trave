import React from "react";
import { connectPagination } from "react-instantsearch-dom";
import { Link, NavLink } from "react-router-dom";

const Pagination = ({ currentRefinement, nbPages, refine, createURL }) => {
  console.log(nbPages, currentRefinement);
  return (
    <ul className="flex  justify-center content-center ">
      {new Array(nbPages).fill(null).map((_, index) => {
        const page = index + 1;
        return (
          <li
            className={`my-auto rounded-full text-center shadow flex mx-1 font-medium ${
              currentRefinement === page
                ? "bg-gray-900 text-white border-none w-9 h-9"
                : "text-black border-2  hover:bg-gray-100 hover:shadow-none w-9 h-9"
            }`}
            key={index}
          >
            <Link
              className="m-auto w-full "
              href={createURL(page)}
              onClick={(event) => {
                window.scrollTo(0, 0);
                event.preventDefault();
                refine(page);
              }}
            >
              {page}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export const CustomPagination = connectPagination(Pagination);

export default Pagination;
