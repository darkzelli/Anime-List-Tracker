import React from "react";
import './AnimeCard.css';


function AnimeCard(props){
    
    return(
        <div className="animeCard_body">
            <div className="animeCard_title">{props.title}</div>
            <div className="animeCard_cover"></div>
        </div>
    );
}


export default AnimeCard;