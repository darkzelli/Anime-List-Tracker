import React, { useEffect, useState } from "react";
import { ratings } from './data';
import RatingCard from "./RatingCard";
import './Allratingscom.css';




function Allratingscom(){
    const [allRatings, setAllRatings] = useState("");
    const theratings = ratings; 
    useEffect(()=>{
        const ratingsJSON = <>{theratings.map((item, index) => (
            <RatingCard data={item} key={index} />
          ))}</>
        setAllRatings(ratingsJSON);
    }, [theratings])
    return(
        <div className="ratings_body">
            {allRatings}
        </div>
    )
}


export default Allratingscom;