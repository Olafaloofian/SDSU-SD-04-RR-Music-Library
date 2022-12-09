import { useState, useRef } from 'react'
import './App.css';
import Gallery from './Components/Gallery.jsx'
import SearchBar from './Components/SearchBar.jsx'
import { DataContext } from './Context/DataContext.jsx'
import { SearchContext } from './Context/SearchContext.jsx'

function App() {
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([])
  let searchInput = useRef('')

  const API_URL = 'https://itunes.apple.com/search?term='

  const handleSearch = (e, term) => {
    e.preventDefault()
    const fetchData = async () => {
      document.title = `${term} Music`
      const response = await fetch(API_URL + term)
      const resData = await response.json()
      if (resData.results.length > 0) {
        setData(resData.results)
      } else {
        setMessage("Not found.")
      }
      console.log(resData)
    }
    fetchData()
  }

  return (
    <div className="app" style={{background: "grey"}}>
      <SearchContext.Provider value={{
        term: searchInput,
        handleSearch: handleSearch
      }}>
        <SearchBar />
      </SearchContext.Provider>
      {message}
      <DataContext.Provider value={data}>
        <Gallery />
      </DataContext.Provider>
    </div>
  );
}

export default App;
