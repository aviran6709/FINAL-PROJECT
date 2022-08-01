import React from "react"
import PopupWithForm from "./PopupWithForm"
const PopupSuccess =(props)=>{
    return (
<PopupWithForm 
      openPopup={props.isOpen}
      onClose={props.onClose}
    
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
          </PopupWithForm>
    );
  }
export default PopupSuccess;