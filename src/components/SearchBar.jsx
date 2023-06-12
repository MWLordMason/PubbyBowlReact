import { useState, useEffect } from 'react'
import SinglePlayer from './SinglePlayer';


function SearchBar() {
    const [searchQuery, setSearchQuery] = useState("")
    const [players, setPlayers] = useState([])
    let filteredPlayers = players.filter((result) => {
        let lowercasedName = result.name.toLowerCase(); 
        let lowercasedQuery = searchQuery.toLowerCase(); 
    
        if (lowercasedName.includes(lowercasedQuery)) {
    
          return result
    
        }
      })
      useEffect(()=>{
        async function fetchAllPlayers() {
            try {
            const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2304-FTB-ET-WEB-FT/players')
            const translatedData = await response.json();
            setPlayers(translatedData.data.players)
            } catch (error) {
                console.log(error)
                }
        }
        fetchAllPlayers()
    })
    return (
        <>
          <form>
            
            <label htmlFor="search-query">Search By Name Here: </label>
            <input 
              name="search-query" 
              type="text"
              placeholder="type here"
              value={searchQuery}
              onChange={(search) => {
                // console.log(search.target.value)
                setSearchQuery(search.target.value)
              }}
            ></input>
          </form>
          <div id='all-players-container'>
          {
            filteredPlayers.length ? filteredPlayers.map((result, idx) => {
              return <SinglePlayer key={idx} player={result} />
            }) : <p>Failed to find a player by that name.</p>
          }
          
        </div>
      </>
      )
}


export default SearchBar