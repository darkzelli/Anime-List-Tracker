import React, { useEffect, useState } from "react";
import { ratings2 } from './data';
import RatingCard from "./RatingCard";
import './Allratingscom.css';




function Allratingscom(){
    const [fivestars, setfivestars] = useState("no ratings in this category");
    const [fourstars, setfourstars] = useState("no ratings in this category");
    const [threestars, setthreestars] = useState("no ratings in this category");
    const [twostars, settwostars] = useState("no ratings in this category");
    const [onestars, setonestars] = useState("");
    const [bodyStatus, setBodyStatus] = useState("rating");
    const [fiveStatus, setFiveStatus] = useState(false);
    const [fourStatus, setFourStatus] = useState(false);
    const [threeStatus, setThreeStatus] = useState(false);
    const [twoStatus, setTwoStatus] = useState(false);
    const [OneStatus, setOneStatus] = useState(false);
    const ratingsNew = ratings2.data;
    useEffect(()=>{

        const fivestarJSON = <>{ratingsNew[0].list.map((item, index) =>(
            <RatingCard data={item} key={index} />
        ))}</>
        setfivestars(fivestarJSON);
        
        const fourstarJSON = <>{ratingsNew[1].list.map((item, index) =>(
            <RatingCard data={item} key={index} />
        ))}</>
        setfourstars(fourstarJSON);

        const threestarJSON = <>{ratingsNew[2].list.map((item, index) =>(
            <RatingCard data={item} key={index} />
        ))}</>
        setthreestars(threestarJSON);

        const twostarJSON = <>{ratingsNew[3].list.map((item, index) =>(
            <RatingCard data={item} key={index} />
        ))}</>
        settwostars(twostarJSON);

        const onestarJSON = <>{ratingsNew[4].list.map((item, index) =>(
            <RatingCard data={item} key={index} />
        ))}</>
        setonestars(onestarJSON);
        
    }, [ratingsNew])

    function handleSelection(starCount){
        switch(starCount){
            case 5:
                if(fiveStatus === false){
                    setFiveStatus(true);
                    break;
                }else{
                    setFiveStatus(false);
                    break;
                }
            case 4:
                if(fourStatus === false){
                    setFourStatus(true);
                    break;
                }else{
                    setFourStatus(false);
                    break;
                }
            case 3:
                if(threeStatus === false){
                    setThreeStatus(true);
                    break;
                }else{
                    setThreeStatus(false);
                    break;
                }
            case 2:
                if(twoStatus === false){
                    setTwoStatus(true);
                    break;
                }else{
                    setTwoStatus(false);
                    break;
                }
            case 1:
                if(OneStatus === false){
                    setOneStatus(true);
                    break;
                }else{
                    setOneStatus(false);
                    break;
                }
            default:
                console.log("Invalid Case");
        }
    }

    const ratingBody = <><div className="allStars">
        <div className="fivestarTitle startitle" onClick={() => handleSelection(5)}>
            <div className="material-icons ">star</div>
            <div className="material-icons ">star</div>
            <div className="material-icons ">star</div>
            <div className="material-icons ">star</div>
            <div className="material-icons ">star</div>
        </div>
        <div className={fiveStatus === true ? "fivestarBlock starBlock" : "displayNone" }>{fivestars}</div>
        <div className="fourstarTitle startitle" onClick={() => handleSelection(4)}>
            <div className="material-icons ">star</div>
            <div className="material-icons ">star</div>
            <div className="material-icons ">star</div>
            <div className="material-icons ">star</div>
        </div>
        <div className={fourStatus === true ? "fourstarBlock starBlock" : "displayNone" }>{fourstars}</div>
        <div className="threestarTitle startitle" onClick={() => handleSelection(3)}>
            <div className="material-icons ">star</div>
            <div className="material-icons ">star</div>
            <div className="material-icons ">star</div>
        </div>
        <div className={threeStatus === true ? "threestarBlock starBlock" : "displayNone" }>{threestars}</div>
        <div className="twostarTitle startitle" onClick={() => handleSelection(2)}>
            <div className="material-icons ">star</div>
            <div className="material-icons ">star</div>
        </div>
        <div className={twoStatus === true ? "twostarBlock starBlock" : "displayNone" }>{twostars}</div>
        <div className="onestarTitle startitle" onClick={() => handleSelection(1)}>
            <div className="material-icons ">star</div>
        </div>
        <div className={OneStatus === true ? "onestarBlock starBlock" : "displayNone" }>{onestars}</div>
        </div></>;

    const orderBody = <></>;
    return(
        <div className="ratings_body">
            {bodyStatus === "rating" ? ratingBody : orderBody}
        </div>
    )
}


export default Allratingscom;