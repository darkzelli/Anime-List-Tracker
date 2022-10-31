import React, { useEffect, useState } from "react";
import './ListCard.css';
import AnimeListCard from "./AnimeListCard";

function ListCard(props){
    const [selected, setselected] = useState(false);
    const [subjectAnimes, setSubjectAnimes] = useState("")
    function handleSelected(){
        if(selected === false){
            setselected(true);
        }else{
            setselected(false);
        }
    }
    const animelist = props.data.list;
    useEffect(() => {
        const animes = <>{animelist.map((item, index) => (
            <AnimeListCard title={item} key={index}/>
        ))}</>
        setSubjectAnimes(animes);
    },[animelist])

    return(
        <div className={selected === true ? "ListCard_body_open" : "ListCard_body_closed"} onClick={() => handleSelected()}>
            <header className={selected === true ? "ListCard_header_open" : "ListCard_header_closed"}>
                {props.data.title}
            </header>
            <div className={selected === true ? "ListCard_animes" : "none"}>
                {subjectAnimes}
            </div>
        </div>
    );
}

export default ListCard;