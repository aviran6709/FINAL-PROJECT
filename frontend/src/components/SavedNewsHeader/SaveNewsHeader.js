
import Navigation from "../Navigation/Navigation"
import NewsCardList from "../NewsCardList/NewsCardList"
import React from "react";
const SaveNewsHeader =() =>{
 
   const cardData =[{imagLink:"https://images.unsplash.com/photo-1517458776179-baae60e41ef2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" , date:"1.2.335" ,tittle:"Everyone Needs a Special 'Sit Spot' in Nature" ,text:`Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find..`,src:"wikiki.cpm",tag:"nature"},{imagLink:"https://images.unsplash.com/photo-1517458776179-baae60e41ef2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" , date:"1.2.1990" ,tittle:"Everyone Needs a Special 'Sit Spot' in Nature" ,text:`Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find..`,src:"wikiki.cpm",tag:"Macbook",},{imagLink:"https://images.unsplash.com/photo-1517458776179-baae60e41ef2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" , date:"1.2.335" ,tittle:"Everyone Needs a Special 'Sit Spot' in Nature" ,text:`Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find..`,src:"wikiki.cpm",tag:"love"},{imagLink:"https://images.unsplash.com/photo-1517458776179-baae60e41ef2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" , date:"1.2.1990" ,tittle:"Everyone Needs a Special 'Sit Spot' in Nature" ,text:`Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find..`,src:"wikiki.cpm",tag:"parent",}]
   let  cardDataTags = cardData.map(element => { return ` ${element.tag}`})
   const uniqueTags = [...new Set(cardDataTags)]
   let uniqueTagsForDisplay =[...Array(uniqueTags[0],uniqueTags[1])];

return(<>
<section className="save-news-header">
<Navigation isLogin={true}  isDarkThem={true} ></Navigation>
<div className="save-news">
    <h1 className="save-news__title">Saved articles</h1>
    <h2 className="save-news__subtitle">Elise, you have {cardData.length} saved articles</h2>
    <h3 className="save-news__subtitle-resource" >By keywords: <p className="save-news__subtitle-tag">{uniqueTags.length < 2?uniqueTagsForDisplay:`${uniqueTagsForDisplay}  , and  ${uniqueTags.length - 2} other` }</p></h3>
 </div>
<NewsCardList isDarkThem={true} cardData={cardData}></NewsCardList>

</section>
</>

)
}

export default SaveNewsHeader