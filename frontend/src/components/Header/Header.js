import React from "react";
import Navigation from "../Navigation/Navigation";
import SearchFrom from "../SearchForm/SearchFrom";
import PopupSignup from "../PopupWithForm/PopupSignup";
import PopupSignin from "../PopupWithForm/PopupSignin";
function Header(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [signinPopup, setSigninPopup] = React.useState(true);
  const closePopups = () => {
    setIsOpen(false);
  };
  const openPopup = () => {
    setIsOpen(true);
  };
  const togglePopups = () => {
    signinPopup ? setSigninPopup(false) : setSigninPopup(true);
  };

  React.useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        closePopups();
      }
    };
    document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);

  return (
    <header className="header">
      <Navigation
        openPopup={openPopup}
        logout={props.logout}
        isDarkThem={false}
      ></Navigation>
      <PopupSignup
        togglePopups={togglePopups}
        isOpen={isOpen && !signinPopup}
        onClose={closePopups}
        createNewUser={props.registerFunc}
      />
      <PopupSignin
        isOpen={isOpen && signinPopup}
        togglePopups={togglePopups}
        onClose={closePopups}
        login={props.loginFunc}
        getSavedArticle={props.getArticle}
      />
      <SearchFrom getNews={props.getNews}></SearchFrom>
    </header>
  );
}

export default Header;
