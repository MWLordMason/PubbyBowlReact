import React from "react";
import { useNavigate } from "react-router-dom";

function SinglePlayer({ player }) {
    const navigate = useNavigate()
    return (
        <div className="puppy-container">
            <h4>{player.name}</h4>
            <img src={player.imageUrl} className='puppy-img'></img>
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