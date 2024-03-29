import React from "react";
import ProgramFilter from "../Components/Organisms/Search/ProgramFilter";
import SearchResults from "../Components/Templates/SearchResult/SearchResults";
/*SEARCH ENGINES DEPENDENCIES */
import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-dom";
import ProgramFIlterResponsive from "../Components/Organisms/Search/ProgramFIlterResponsive";
const { REACT_APP_ALGOLIA_ID, REACT_APP_ALGOLIA_KEY } = process.env;
const searchClient = algoliasearch(REACT_APP_ALGOLIA_ID, REACT_APP_ALGOLIA_KEY);
const SearchPage = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName="PROGRAMS">
      <main className="h-auto w-11/12 sm:w-10/12 mx-auto lg:flex justify-between">
        <ProgramFIlterResponsive/>
        <ProgramFilter />
        <SearchResults />
      </main>
    </InstantSearch>
  );
};

export default SearchPage;
