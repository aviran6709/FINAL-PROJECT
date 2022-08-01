import React from "react";
import { UserContext } from "../UserConetext";

const NewsCard = (props) => {
  const data = React.useContext(UserContext);
  const { title, urlToImage, url, publishedAt, content, source, keyword } =
    props.data;

  const sourceName = source.name ? source.name : source;

  const date = new Date(publishedAt);
  const day = date.getDate(publishedAt);
  const year = date.getUTCFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  const publishedAtNewOrder = `${day} ${month}, ${year}`;
  //that state for opening the tip btn to login
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSavedCard, setIsSavedCard] = React.useState(props.isSaved);

  const buttonHandler = (evt) => {
    evt.stopPropagation();
    if (!props.isDarkThem && props.isLogin && !isSavedCard) {
      setIsSavedCard(true);
      props.onSaveBtnClick(props.data);
    }
    if (props.isDarkThem) {
      console.log(props.data._id);
      props.deleteCard(props.data._id);
      // evt.target.parentElement.remove()
    }
    if (!props.isDarkThem && isSavedCard) {
      const cardToDelete = data.savedCard.find((i) => i.title === title);
      console.log(cardToDelete._id);
      props.deleteCard(cardToDelete._id);
      setIsSavedCard(false);
    }
  };

  const toggleSigninBtn = () => {
    if (props.isLogin || props.isDarkThem) {
      setIsOpen(false);
    } else {
      isOpen ? setIsOpen(false) : setIsOpen(true);
    }
  };
  const onClickHandler = () => {
    window.location.href = `${url}`;
  };

  return (
    <div className="card" onClick={onClickHandler}>
      <img className="card__img" src={urlToImage} alt={`${title}`} />
      {props.isDarkThem ? <p className="card__tag">{keyword}</p> : ""}
      <button
        className={
          props.isDarkThem
            ? "card__btn-saved "
            : `card__btn ${isSavedCard ? " card__btn-clicked" : "card__btn"}`
        }
        onClick={buttonHandler}
        onMouseEnter={toggleSigninBtn}
        onMouseLeave={toggleSigninBtn}
      ></button>
      {/* messge tag use for isOpen */}
      {isOpen ? (
        <button className="card__link">
          {" "}
          {props.isDarkThem ? "Remove from saved" : "Sign in to save articles"}
        </button>
      ) : (
        " "
      )}
      <p className="card__date">{publishedAtNewOrder}</p>
      <h3 className="card__tittle">{title}</h3>
      <p className="card__text">{content}</p>
      <p className="card__src">{sourceName}</p>
    </div>
  );
};
export default NewsCard;
