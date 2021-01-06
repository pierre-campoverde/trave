import React from 'react'
import { useParams } from 'react-router-dom'
import ProgramFilter from '../Components/Organisms/Search/ProgramFilter'
import SearchResults from '../Components/Templates/SearchResult/SearchResults'

const SearchPage = ({location}) => {
    console.log(location)
    return (
        <main className="h-auto w-11/12 mx-auto lg:flex ">
        <ProgramFilter/>
        <SearchResults/>
    </main>
    )
}

export default SearchPage
