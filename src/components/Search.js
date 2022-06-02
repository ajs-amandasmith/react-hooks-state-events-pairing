import React, { useState } from 'react'

function Search() {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {

  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>
        Search by Username:
        <input 
          type="text" 
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <input type="submit" value="Submit"></input>
      </label>
    </form>
  )
}

export default Search;