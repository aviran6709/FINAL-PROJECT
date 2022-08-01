import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import React from "react";
import { UserContext } from "../UserConetext";

function Main(props) {
  //uncomment to change newsCardList card data info

  const UserData = React.useContext(UserContext);

  const [cardToShow, setFullList] = React.useState(3);

  const firstSetCard = props.cardData.slice(0, cardToShow);

  const handelInternalCards = (e) => {
    if (props.cardData.length < cardToShow) {
      //used opacity because need to keep the btn style
      // i.o get margin between about card-list
      e.target.style.opacity = "0";
    } else {
      setFullList(cardToShow + 3);
    }
  };

  return (
    <main>
      <NewsCardList
        keyword={props.keyword}
        onSaveBtnClick={props.onSaveBtnClick}
        deleteCard={props.unSavedArticle}
        isDarkThem={false}
        isLogin={UserData.isLoggedIn}
        isFundSome={props.isFundSome}
        isSearch={props.onSearchStatus}
        cardData={firstSetCard}
        handelInternalCards={handelInternalCards}
      ></NewsCardList>

      <About></About>
    </main>
  );
}
export default Main;
