import React from "react";
import './AnimeListCard.css';


function AnimeListCard(props){
    return(
        <div className="animelistCard_body">
            <div className="animelistCard_title">{props.title}</div>
            <div className="animelistCard_cover"></div>
        </div>
    );
}


export default AnimeListCard;