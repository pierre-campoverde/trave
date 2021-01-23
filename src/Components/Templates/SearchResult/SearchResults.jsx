import React, { useEffect } from "react";
import { connectStateResults, Hits } from "react-instantsearch-dom";
import Hit from "../../Organisms/Search/Hit";
import { CustomSortByPrice } from "../../Molecules/Search/SortByPrice";
import { FaSpinner } from "react-icons/fa";
import { CustomPagination } from "../../Organisms/Search/Pagination";
import { CurrentRefinements } from "react-instantsearch-dom";

import { CustomClearRefinements } from "../../Molecules/Search/ClearRefinements";
import { useDispatch, useSelector } from "react-redux";
<CurrentRefinements />;
const Loader = () => {
  return (
    <div className="p-5 rounded-full text-4xl text-blue-600 shadow-lg border-2 h-20 w-20  absolute bg-white inset-0 m-auto  ">
      <FaSpinner className="animate-spin" />
    </div>
  );
};

const LoadingIndicator = connectStateResults(({ isSearchStalled }) =>
  isSearchStalled ? <Loader /> : null
);
const SearchResults = () => {
  const dispatch = useDispatch()
  const mySavedPrograms = useSelector((state) => state.myUser.savedPrograms);
  useEffect(() => {
  }, );

  return (
    <section className=" lg:my-10 lg:w-8/12 min-h-screen py-6 ">
      <LoadingIndicator />
      <div className="divide-y-2">
        <div className="hidden lg:block py-2 flex  content-end justify-between ">
          <h2 className="text-lg text-gray-600">Tus resultados de busqueda:</h2>
          <CustomSortByPrice
            defaultRefinement="PROGRAMS"
            items={[
              { value: "PROGRAMS_PRICE_ASC", label: "Asc" },
              { value: "PROGRAMS_PRICE_DSC", label: "Dsc" },
            ]}
          />
        </div>
        <div>
          <Hits hitComponent={Hit} />
          <CustomPagination />
        </div>
      </div>
    </section>
  );
};

export default SearchResults;
