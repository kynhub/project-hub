import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import '../SearchBar/SearchBar.css'

function SearchBar() {
  return (
    <div className='search'>
    <div className='searchInput'>
        <input type="text" placeholder='Search for a project' />
        <div className='searchIcon'><SearchIcon /></div>
    </div>
    </div>
  )
}

export default SearchBar