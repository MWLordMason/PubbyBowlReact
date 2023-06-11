import React from "react";
import { useNavigate } from "react-router-dom";

function SinglePlayer({ player }) {
    const navigate = useNavigate()
    return (
        <div className="single-player">
            <h4>{player.name}</h4>
            <h4>{player.breed}</h4>
            <img src={player.imageUrl}></img>
            <button 
            onClick={() => {
                navigate(`/players/${player.id}`)
            }}
            >
                Details
            </button>
            
        </div>
    )
}


export default SinglePlayer