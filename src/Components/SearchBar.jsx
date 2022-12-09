import React, { useState, useContext } from 'react'
import { SearchContext } from '../Context/SearchContext.jsx'

function SearchBar() {
    const { term, handleSearch } = useContext(SearchContext)

    return (
        <form>
            <input ref={term} type="text" placeholder="Enter a search term" />
            <input type="submit" onClick={(e) => handleSearch(e, term.current.value)}/>
        </form>
    )
}

export default SearchBar