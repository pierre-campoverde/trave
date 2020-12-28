import React from 'react'
import ProgramFilter from '../Components/Organisms/Search/ProgramFilter'
import SearchResults from '../Components/Templates/SearchResult/SearchResults'
const SearchPage = () => {
    return (
        <div className="relative h-auto w-full sm:flex ">
        <ProgramFilter/>
        <SearchResults/>
    </div>
    )
}

export default SearchPage
