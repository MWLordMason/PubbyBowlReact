import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function SinglePlayerCard({ puppy }) {
    const [players,setPlayers] = useState(null)
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        async function fetchAllPlayers() {
            try {
            const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2304-FTB-ET-WEB-FT/players/${id}`)
            const translatedData = await response.json();
            setPlayers(translatedData.data.player)
            console.log(players)
            } catch (error) {
                console.log(error)
                }
        }
        fetchAllPlayers()
    }, [])

    return (
        <>
            {
                players && players.id ? (
                    <div className="player-card">
                    <h4>{players.id}</h4>
                    <h4>{players.breed}</h4>
                    <h4>{players.status}</h4>
                    <img src={players.imageUrl}></img>
                    <button 
                    onClick={() => {
                    navigate(`/players/`)
                    }}
                    >
                        Close
                    </button>
                    </div>
                ) : (
                    <h3>Loading...</h3>
                )
            } 
        
        </>
    )
}


export default SinglePlayerCard