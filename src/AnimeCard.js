import React from "react";
import './AnimeCard.css';


function AnimeCard(props){
    
    return(
        <div className="animeCard_body">
            <div className="transparent_rectangle"><div className="animeCard_title">{props.title}</div><div className="animeCard_rating"></div></div>
            <div className="animeCard_cover"></div>
        </div>
    );
}


export default AnimeCard;