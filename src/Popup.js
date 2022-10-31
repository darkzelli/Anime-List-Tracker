import React, { useEffect, useState } from "react";
import './Popup.css';
import { lists, ratings } from './data';


function Popup(props){
    const [rating, setrating] = useState(0)
    const [star1, setstar1] = useState("star_border")
    const [star2, setstar2] = useState("star_border")
    const [star3, setstar3] = useState("star_border")
    const [star4, setstar4] = useState("star_border")
    const [star5, setstar5] = useState("star_border")
    const ratingLength = ratings.length;
    useEffect(() => {
        for(let i = 0; i < ratingLength; i++ ){
            if(props.title === ratings[i].title){
                calculateStarDisplay(ratings[i].rating);
            }
        }
    })

    function checkDuplicateRatingnUpdate(rating){
        const lengthOfRating = ratings.length;
        let updateInteger = 0; 
        let replaceIndex = 0;

        if(lengthOfRating === 0){
            ratings.push({title: props.title, rating: rating});
        }else{
            for(let i = 0; i < lengthOfRating; i++){
                if(ratings[i].title === props.title){
                    updateInteger = updateInteger + 1; 
                    replaceIndex = i;
                }
                if(i === (lengthOfRating - 1)){
                    if(updateInteger === 0){
                        ratings.push({title: props.title, rating: rating});
                    }else{
                        if(ratings[replaceIndex].rating !== rating ){
                            ratings[replaceIndex] = {title: props.title, rating: rating};
                        }
                    }
                }
            }
        }
    }
    function calculateRating(rating){
        switch(rating){
            case 1:
                setrating(1);
                checkDuplicateRatingnUpdate(1);
                break;
            case 2:
                setrating(2);
                checkDuplicateRatingnUpdate(2);
                break;
            case 3:
                setrating(3);
                checkDuplicateRatingnUpdate(3);
                break;
            case 4:
                setrating(4);
                checkDuplicateRatingnUpdate(4);
                break;
            case 5:
                setrating(5);
                checkDuplicateRatingnUpdate(5);
                break;
            default:

        }
    }

    function removeStarDisplay(){
        if(rating === 0){
            setstar1("star_border");
            setstar2("star_border");
            setstar3("star_border");
            setstar4("star_border");
            setstar5("star_border");
        }else{
            switch(rating){
                case 1:
                    setstar2("star_border");
                    setstar3("star_border");
                    setstar4("star_border");
                    setstar5("star_border");
                    break;
                case 2:
                    setstar3("star_border");
                    setstar4("star_border");
                    setstar5("star_border");
                    break;
                case 3:
                    setstar4("star_border");
                    setstar5("star_border");
                    break;
                case 4:
                    setstar5("star_border");
                    break;
                default:

            }
        }
    }

    function calculateStarDisplay(rating){
        switch(rating){
            case 1:
                setstar1("star");
                setstar2("star_border");
                setstar3("star_border");
                setstar4("star_border");
                setstar5("star_border");
                break;
            case 2:
                setstar1("star");
                setstar2("star");
                setstar3("star_border");
                setstar4("star_border");
                setstar5("star_border");
                break;
            case 3:
                setstar1("star");
                setstar2("star");
                setstar3("star");
                setstar4("star_border");
                setstar5("star_border");
                break;
            case 4:
                setstar1("star");
                setstar2("star");
                setstar3("star");
                setstar4("star");
                setstar5("star_border");
                break;
            case 5:
                setstar1("star");
                setstar2("star");
                setstar3("star");
                setstar4("star");
                setstar5("star");
                break;
            default:
                console.log("Error: 345 Invalid Rating");
        }
    }

    function duplicateListCheckNUpdate(list){
        const checkList = lists.data[list].list;
        const checkListLength = checkList.length;
        const checkForTitle = props.title;
        let updateInteger = 0;
        if( checkListLength === 0){
            lists.data[list].list.push(props.title);
        }else{
            for(let i = 0; i < checkListLength; i++){
                if(checkList[i] === checkForTitle){
                    updateInteger = updateInteger + 1; 
                }
                
                if(i === (checkListLength - 1)){
                    if(updateInteger === 0){
                            lists.data[list].list.push(props.title);
                    }
                }
                
            }
        }
    }
    

    return(
        <div className="popup_body">
            <div className="pop_up_body_2">
                
            </div>
            <div className="pop_up_body_3">
                <div className="popup_cover"></div>
                <div className="popup_title">{props.title}</div>
                <div className="popup_hr"></div>
                <span className="rating_squares">
                    <div className="rs rs1" onMouseEnter={() => calculateStarDisplay(1)} onMouseLeave={() => removeStarDisplay()} onClick={() => calculateRating(1)}></div>
                    <div className="rs rs2" onMouseEnter={() => calculateStarDisplay(2)} onMouseLeave={() => removeStarDisplay()} onClick={() => calculateRating(2)}></div>
                    <div className="rs rs3" onMouseEnter={() => calculateStarDisplay(3)} onMouseLeave={() => removeStarDisplay()} onClick={() => calculateRating(3)}></div>
                    <div className="rs rs4" onMouseEnter={() => calculateStarDisplay(4)} onMouseLeave={() => removeStarDisplay()} onClick={() => calculateRating(4)}></div>
                    <div className="rs rs5" onMouseEnter={() => calculateStarDisplay(5)} onMouseLeave={() => removeStarDisplay()} onClick={() => calculateRating(5)}></div>
                </span>
                <span className="popup_rating_stars">
                    <div className="material-icons ratingstar">{star1}</div>
                    <div className="material-icons ratingstar">{star2}</div>
                    <div className="material-icons ratingstar">{star3}</div>
                    <div className="material-icons ratingstar">{star4}</div>
                    <div className="material-icons ratingstar">{star5}</div>
                </span>
                <div className="addto">
                    <div className="addtoSection Watching" onClick={() => duplicateListCheckNUpdate(0)}> Add to Watching</div>
                    <div className="addtoSection Completed" onClick={() => duplicateListCheckNUpdate(1)}> Add to Completed</div>
                    <div className="addtoSection OnHold" onClick={() => duplicateListCheckNUpdate(2)}> Add to On-Hold</div>
                    <div className="addtoSection Dropped" onClick={() => duplicateListCheckNUpdate(3)}> Add to Dropped</div>
                    <div className="addtoSection PlanTo" onClick={() => duplicateListCheckNUpdate(4)}> Add to Plan to Watch</div>
                </div>
            </div>
        </div>
    );
}


export default Popup;