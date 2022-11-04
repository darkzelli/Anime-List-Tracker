import React from "react";
import './RatingCard.css';


function RatingCard(props){
    return(
        <div className="RatingCard_Body">
            <div className="ratingtransparent_rectangle"><div className="RatingCard_title">{props.data.title}</div></div>
        </div>
    );
}

export default RatingCard;



 