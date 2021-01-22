import React from 'react'
import ProgramFilter from '../Components/Organisms/Search/ProgramFilter'
import SearchResults from '../Components/Templates/SearchResult/SearchResults'
/*SEARCH ENGINES DEPENDENCIES */
import algoliasearch from "algoliasearch/lite";
import {
    InstantSearch
  } from "react-instantsearch-dom";
  const searchClient = algoliasearch(
    "V0MLISWCE7",
    "75f7ab6d8b2de98b644000a57ea70ffd"
  );


  const SearchPage = () => {
    return (
        <InstantSearch searchClient={searchClient} indexName="PROGRAMS">
        <main className="h-auto w-11/12 sm:w-10/12 mx-auto lg:flex justify-between">
        <ProgramFilter/>
        <SearchResults/>
        </main>
    </InstantSearch>
    )
}

export default SearchPage
