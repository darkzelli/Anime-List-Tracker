import './App.css';
import React, { useEffect, useState } from 'react';
import AnimeCard from './AnimeCard';
import { animeData, lists } from './data';
import ListCard from './ListCard';
import Popup from './Popup';
import Allratingscom from './Allratingscom';

function App(){
  //Array used to display featured anime on the homepage
  const [animeDisplay, setanimeDisplay] = useState([{title: "naruto"},2,3,4,5,6,7,8,9,10,11,12]);
  //variable used to change the cotent displayed on the page based on the tab selected
  const [activeTabData, setactiveTabData] = useState("nothing");
  //Used to display and remove popup
  const [popupState, setpopupState] = useState("");
  //Used to keep track of the selected tab
  const [activeTab, setActiveTab] = useState("home");

  useEffect(()=> {
    function generateRandomList(){
      const randomAnime = [];
      for(let i = 0; i < 12; i++){
        const randomAnimeItem = animeData[Math.floor(Math.random()*animeData.length)]; 
        randomAnime.push(randomAnimeItem);
      }
      return(randomAnime)
    }
    function checkData(randomAnime){
      if (randomAnime.length === 12){
        setanimeDisplay(randomAnime)
      }else{
        setTimeout(checkData, 250)
      }
    }

    function checkUn(randomAnime){
      if (typeof randomAnime === "undefined"){
        setTimeout(checkUn, 250);
      }else{
        checkData(randomAnime);
      }
    }
    checkUn(generateRandomList());
  },[])
  const home = <>      
    <span className='front_group_1'>
      <div onClick={() => createPopup(animeDisplay[0].title)}><AnimeCard title={animeDisplay[0].title} /></div>
      <div onClick={() => createPopup(animeDisplay[1].title)}><AnimeCard title={animeDisplay[1].title} /></div>
      <div onClick={() => createPopup(animeDisplay[2].title)}><AnimeCard title={animeDisplay[2].title} /></div>
    </span>
    <span className='front_group_2'>
      <div onClick={() => createPopup(animeDisplay[3].title)}><AnimeCard title={animeDisplay[3].title} /></div>
      <div onClick={() => createPopup(animeDisplay[4].title)}><AnimeCard title={animeDisplay[4].title} /></div>
      <div onClick={() => createPopup(animeDisplay[5].title)}><AnimeCard title={animeDisplay[5].title} /></div>
    </span>
    <span className='front_group_3'>
      <div onClick={() => createPopup(animeDisplay[6].title)}><AnimeCard title={animeDisplay[6].title} /></div>
      <div onClick={() => createPopup(animeDisplay[7].title)}><AnimeCard title={animeDisplay[7].title} /></div>
      <div onClick={() => createPopup(animeDisplay[8].title)}><AnimeCard title={animeDisplay[8].title} /></div>
    </span>
    <span className='front_group_4'>
      <div onClick={() => createPopup(animeDisplay[9].title)}><AnimeCard title={animeDisplay[9].title} /></div>
      <div onClick={() => createPopup(animeDisplay[10].title)}><AnimeCard title={animeDisplay[10].title} /></div>
      <div onClick={() => createPopup(animeDisplay[11].title)}><AnimeCard title={animeDisplay[11].title} /></div>
    </span>
  </>;
  const listData = lists.data;

  const list = <>{listData.map((item, index) => (
    <ListCard data={item} key={index}/>
  ))}</>


  function createPopup(animeTitle){
    setpopupState(<Popup title={animeTitle} />);
  }

  const rating = <><Allratingscom /></>

  function homeClick(){
    setactiveTabData(home);
    setActiveTab("home");
  }

  function ratingClick(){
    setactiveTabData(rating);
    setActiveTab("rating");
  }

  function listClick(){
    setactiveTabData(list);
    setActiveTab("list");
  }

  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      <header className='App_header'></header>
      <div className='appTabs'>
        <div className={activeTab === "list" ? 'apptab_active material-icons' : 'apptab_nonactive material-icons' }><div className='apptab_icon' onClick={() => listClick(list)}>list</div></div>
        <div className={activeTab === "home" ? 'apptab_active material-icons hometab' : 'apptab_nonactive material-icons hometab' }><div className='apptab_icon' onClick={() => homeClick()}>home</div></div>
        <div className={activeTab === "rating" ? 'apptab_active material-icons' : 'apptab_nonactive material-icons' }><div className='apptab_icon' onClick={() => ratingClick(rating)}>star</div></div>
      </div>
      <div className={activeTab === "rating" ? 'popup_closer_noactive' : 'search_bar_bg' }>
        <form>
          <input type="search" className='search_bar' placeholder='Search anime...' />
        </form>
      </div>
      <div className={popupState === "" ? 'popup_closer_noactive' : 'popup_closer_active'} onClick={() => setpopupState("")}>CLOSE</div>
      <div className='filler_block'></div>
      {activeTabData === "nothing" ? home : activeTabData}
      <div className="createdpopup">{popupState}</div> 
    </div>
  );
}

export default App;


