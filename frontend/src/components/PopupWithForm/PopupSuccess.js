import React from "react"
const PopupSuccess =(props)=>{
    return (

<div
      onClick={props.onClose()}
      className={props.isOpen ? "popup popup_open" : "popup"}
    >
      <div
        onClick={(evt) => {
          //cancel onClick func on that div
          evt.stopPropagation();
        }}
        className="popup__block"
      >
          <p className="popup__text">Registration successfully completed!</p>
          <div className="popup__subtitle">
            <p
             onClick={props.togglePopups}
              className="popup__link-success"
            >
              Sign in
            </p>
          </div>
          <button onClick={props.onClose()} className="popup__close-btn"></button>

          </div>
          </div>
      
    );
  }
export default PopupSuccess;