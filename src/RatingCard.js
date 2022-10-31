import React from "react";
import './RatingCard.css';


function RatingCard(props){
    return(
        <div className="RatingCard_Body">
            <div className="RatingCard_title">{props.data.title}</div>
            <div className="RatingCard_rating">{props.data.rating}/5</div>
        </div>
    );
}

export default RatingCard;



 