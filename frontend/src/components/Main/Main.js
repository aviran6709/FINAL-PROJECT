

import About from "../About/About";
import Perloader from "../Preloader/Preloader"
import NewsCardList from "../NewsCardList/NewsCardList";
import React from "react";
function Main (props){
   //uncomment to change newsCardList card data info
      const cardData =[{imagLink:"https://images.unsplash.com/photo-1517458776179-baae60e41ef2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" , date:"November 4, 2020" ,tittle:"Everyone Needs a Special 'Sit Spot' in Nature" ,text:`Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find..`,src:"wikiki.cpm",tag:"nature"},{imagLink:"https://images.unsplash.com/photo-1517458776179-baae60e41ef2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" , date:"1.2.1990" ,tittle:"Everyone Needs a Special 'Sit Spot' in Nature" ,text:`Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find..`,src:"wikiki.cpm",tag:"Macbook",},{imagLink:"https://images.unsplash.com/photo-1517458776179-baae60e41ef2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" , date:"1.2.335" ,tittle:"Everyone Needs a Special 'Sit Spot' in Nature" ,text:`Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find..`,src:"wikiki.cpm",tag:"love"},{imagLink:"https://images.unsplash.com/photo-1517458776179-baae60e41ef2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" , date:"1.2.1990" ,tittle:"Everyone Needs a Special 'Sit Spot' in Nature" ,text:`Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find..`,src:"wikiki.cpm",tag:"parent",}]
//  const cardData =[]



return( 
<main  >

<NewsCardList isDarkThem={false} isLogin={true} cardData={cardData}></NewsCardList>
<About></About>

<Perloader isFund ={true}></Perloader>

</main>
)

}
export default Main