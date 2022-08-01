import React from "react";
 function Navigation(props){
const name ="adi"
const [isItMenu, setIsItMenu]= React.useState(false);
const onClickBtnMenu =()=>{
    isItMenu?setIsItMenu(false):setIsItMenu(true)
}

return(
    <>
 <div className={isItMenu?"navigation__overly":" "}>
    <div className={props.isDarkThem &&!isItMenu ?  " navigation_dark navigation":isItMenu? " navigation_menu ":"navigation"}>
        <h1 className={props.isDarkThem &&!isItMenu? " navigation__header navigation__header_dark ": " navigation__header"}>NewsExplorer</h1>
        <button className={props.isDarkThem &&!isItMenu?"navigation__btn_menu_black navigation__btn_menu":!isItMenu?"navigation__btn_menu ":" navigation__btn_menu navigation__btn_close"} onClick={onClickBtnMenu}/>
    <ul className={isItMenu ?"navigation__buttons_menu navigation__buttons":"navigation__buttons"}>
    <li className="navigation__links" ><a className={props.isDarkThem &&!isItMenu? "navigation__links_tittle navigation__links_tittle_dark"  :"navigation__links_tittle"} href="/">Home</a></li>
       
        <li  className={props.isLogin ?  "navigation__links": " " }>{props.isLogin ? <a className={props.isDarkThem &&!isItMenu? "navigation__links_tittle_save-article navigation__links_tittle_save-article_dark":"navigation__links_tittle_save-article "} href="/saved-news
">Saved articles</a>: " "}</li>
{/* need to replace with logout */}
        <li className="navigation__links"><button onClick={props.isLogin ? props.openPopup : ()=> {
props.openPopup() 
onClickBtnMenu()
        } } className={props.isLogin && props.isDarkThem &&!isItMenu? "navigation__btn_signout  navigation__btn_signout_dark" :props.isLogin? " navigation__btn_signout navigation__btn_signin ":"navigation__btn_signin "}>{props.isLogin ? `${name} ` :"Sign in" }</button></li>
    </ul>
    </div>
    
    </div>


    </>
)
 }
export default Navigation