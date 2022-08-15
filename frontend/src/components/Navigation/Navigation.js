import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserConetext";

function Navigation(props) {
  const data = React.useContext(UserContext);
  const { user, isLoggedIn } = data;
  let name = user ? user : "";
  // const [name ,setName]=React.useState( "")

  //isItMenu used for drop down menu on < 768 screens
  const [isItMenu, setIsItMenu] = React.useState(false);
  const onClickBtnMenu = () => {
    isItMenu ? setIsItMenu(false) : setIsItMenu(true);
  };

  return (
    <div className={isItMenu ? "overly" : "  overly-off "}>
      <section
        className={
          props.isDarkThem && !isItMenu
            ? "navigation navigation_dark "
            : isItMenu
            ? " navigation_menu "
            : "navigation"
        }
      >
        <h1
          className={
            props.isDarkThem && !isItMenu
              ? " navigation__header navigation__header_dark "
              : " navigation__header"
          }
        >
          NewsExplorer
        </h1>
        <button
          className={
            props.isDarkThem && !isItMenu
              ? "  navigation__btn-menu navigation__btn-menu_black "
              : !isItMenu
              ? "navigation__btn-menu "
              : " navigation__btn-menu navigation__btn-menu_close"
          }
          onClick={onClickBtnMenu}
        />
        <ul
          className={
            isItMenu
              ? "navigation__buttons navigation__buttons_menu "
              : "navigation__buttons"
          }
        >
          <li className="navigation__links">
            <Link
              className={
                props.isDarkThem && !isItMenu
                  ? "navigation__links-tittle navigation__links-tittle_dark"
                  : "navigation__links-tittle"
              }
              to="/"
            >
              Home
            </Link>
          </li>

          <li className={isLoggedIn ? "navigation__links" : " "}>
            {isLoggedIn ? (
              <Link
                className={
                  props.isDarkThem && !isItMenu
                    ? "navigation__links-tittle-save-article navigation__links-tittle-save-article_dark"
                    : "navigation__links-tittle-save-article "
                }
                to="/saved-news
"
              >
                Saved articles
              </Link>
            ) : (
              " "
            )}
          </li>

          <li className="navigation__links">
            <button
              onClick={
                isLoggedIn && !isItMenu
                  ? props.logout
                  : isItMenu && isLoggedIn
                  ? props.logout
                  : () => {
                      setIsItMenu(false);
                      props.openPopup();
                    }
              }
              className={
                isLoggedIn && props.isDarkThem && !isItMenu
                  ? "navigation__btn-signout  navigation__btn-signout_dark"
                  : isLoggedIn
                  ? " navigation__btn-signout  "
                  : "navigation__btn-signin "
              }
            >
              {isLoggedIn ? `${name} ` : "Sign in"}
            </button>
          </li>
        </ul>
      </section>
    </div>
  );
}
export default Navigation;
