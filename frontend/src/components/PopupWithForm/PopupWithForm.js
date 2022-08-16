import React from "react";
const PopupWithForm = ({ children, onClose, openPopup, onSubmitForm }) => {
  return (
    <div onClick={onClose} className={openPopup ? "popup popup_open" : "popup"}>
      <div
        onClick={(evt) => {
          //cancel onClick func on that div
          evt.stopPropagation();
        }}
        className="popup__block"
      >
        <form
          className="popup__form"
          onSubmit={onSubmitForm}
          action="#"
          method="POST"
          // name={"signup"}
        >
          <button
            type="button"
            onClick={onClose}
            className="popup__close-btn"
          ></button>
          {/* here goes form */}
          {children}
          {/* here go the span part  */}
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;
