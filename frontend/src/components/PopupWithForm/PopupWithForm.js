import React from "react";
const PopupWithForm = (props) => {

    return (
    

      <div
        onClick={props.onClose}
        className={props.openPopup ? "popup popup_open" : "popup"}
      >
        <div
          onClick={(evt) => {
            //cancel onClick func on that div
            evt.stopPropagation();
          }}
          className="popup__block"
        >
          <button onClick={props.onClose} className="popup__close-btn"></button>
         {/* here goes form */}
         {props.children}
{/* here go the span part  */}
        </div>
      </div>
    )
  }

export default PopupWithForm;
