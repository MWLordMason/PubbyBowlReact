import { useEffect, useState } from "react";
import SinglePlayer from "../SinglePlayer/SinglePlayer";

function AllPlayers() {
  const [players,setPlayers] = useState([])

useEffect(()=>{
    async function fetchAllPlayers() {
        try {
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2304-FTB-ET-WEB-FT/players')
        const translatedData = await response.json();
        // console.log(translatedData.data.players)
        setPlayers(translatedData.data.players)
        } catch (error) {
            console.log(error)
            }
    }
    fetchAllPlayers()
}, [])  
return (
  <div>
    <h1>Player List</h1>
        {
          players.length ? (
            players.map((player) => {
              return <SinglePlayer key={player.id} player={player} players={players} />

            })
          ) : (
            <h3>Loading . . .</h3>
          )
        }
    </div>
  )
}

export default AllPlayers
