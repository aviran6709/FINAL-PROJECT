 import NewsCard from "../NewsCard/NewsCard"
 import { UserContext } from "../../contexts/UserConetext";
import Preloader from "../Preloader/Preloader"
import React from "react";
 const  NewsCardList = (props )=>{
  const {cardData}=props
let saveStatus
const data =  React.useContext(UserContext);
const savedCardData =  data.savedCard
if(data.badConnectionToServer)
{
  return(<span className="error-server">Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later.</span>)
}
if(props.isSearch){
  return <Preloader isFund ={true}></Preloader>
}

  if(cardData.length !== 0){
return(
<section className='news-results'>
  <h2 className={props.isDarkThem?" " :"news-results__tittle"}>{props.isDarkThem?"":"Search results"}</h2>  
  <ul className='card-list'>
  {cardData.map((card, index)=> { 
    if(!card.keyword){
      card.keyword=props.keyword
    }
    saveStatus = savedCardData.some((i) =>i.title === card.title);


return(
<li className="card-list__element" key={index} ><NewsCard   deleteCard={props.deleteCard}  data ={card } onSaveBtnClick={props.onSaveBtnClick} isDarkThem = {props.isDarkThem} isSaved={saveStatus} isLogin={props.isLogin} ></NewsCard></li>
)

  })}


</ul>
<button className="news-results__btn" onClick={props.handelInternalCards} >Show more</button>
</section>
)
  }if(! props.isFundSome ){
    return <Preloader isFund ={false}></Preloader>
  }

}

  
 export default NewsCardList