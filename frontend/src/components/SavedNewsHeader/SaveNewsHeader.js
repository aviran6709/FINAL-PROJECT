import { UserContext } from "../UserConetext";
import Navigation from "../Navigation/Navigation"
import NewsCardList from "../NewsCardList/NewsCardList"
import React from "react";

const SaveNewsHeader =(props) =>{


const data =  React.useContext(UserContext);

   const cardData =  data.savedCard
   let  cardDataTags = cardData.map(element => { return ` ${element.keyword}`})
   let uniqueTags= []
    uniqueTags = [...new Set(cardDataTags)]
   let uniqueTagsForDisplay =[...Array(uniqueTags[0],uniqueTags[1])];



return(
<section className="save-news-header">
<Navigation isLogin={true} logout={props.logout} isDarkThem={true}  ></Navigation>
<div className="save-news">
    <h1 className="save-news__title">Saved articles</h1>
    <h2 className="save-news__subtitle">Elise, you have {cardData.length} saved articles</h2>
    <h3 className="save-news__subtitle-resource" >By keywords: <p className="save-news__subtitle-tag">{uniqueTags.length < 2?uniqueTagsForDisplay:`${uniqueTagsForDisplay}  , and  ${uniqueTags.length - 2} other` }</p></h3>
 </div>
<NewsCardList  deleteCard={props.unSavedArticle} isDarkThem={true} cardData={data.savedCard}></NewsCardList>

</section>


)
}

export default SaveNewsHeader