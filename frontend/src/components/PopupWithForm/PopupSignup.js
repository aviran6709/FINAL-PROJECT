import React from "react";
import PopupSuccess from "./PopupSuccess";
import { useFormWithValidation } from "../../hooks/FormValidation";
import PopupWithForm from "./PopupWithForm";

const PopupSignup = ({togglePopups ,onClose ,createNewUser,isOpen}) => {
  const [isSuccess, setIsSuccess] = React.useState(false);
  //emailStatus stands for handel email error
  const [emailStatus, setEmailStatus] = React.useState("");
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const handelPopupToggle = () => {
    resetForm();
    togglePopups();
    setIsSuccess(false);
    setEmailStatus("");
  };
  const handleClosePopups = () => {
    setIsSuccess(false);
    resetForm();
    setEmailStatus("");
    onClose();
  };

  // func from App
  const onSubmitSignup = async (evt) => {
    evt.preventDefault();
    const status = await createNewUser(values);
    const isBoolean = (val) => "boolean" === typeof val;
    if (isBoolean(status)) {
      setIsSuccess(status);
    } else {
      setEmailStatus(status);
    }
  };

  if (isSuccess) {
    return (
      <PopupSuccess
        isOpen={isOpen}
        onClose={() => handleClosePopups}
        togglePopups={handelPopupToggle}
      />
    );
  }

  return (
    <PopupWithForm
      onSubmitForm={onSubmitSignup}
      onClose={handleClosePopups}
      openPopup={isOpen}
    >
      <h1 className="popup__tittle">sign up</h1>
      <label htmlFor="email" className="popup__label">
        Email
      </label>
      <input
        id="signupEmail"
        value={values.email ? values.email : ""}
        type="email"
        placeholder="Enter Email"
        name="email"
        required
        minLength="5"
        maxLength="40"
        autoComplete="on"
        className="popup__input"
        onChange={handleChange}
      />
      <span className="popup__error-massage">
        {" "}
        {errors.email ? `${errors.email}` : ""}
      </span>
      <label htmlFor="password" className="popup__label">
        password
      </label>
      <input
        id="SignupPassword"
        type="password"
        placeholder="Enter password"
        name="password"
        value={values.password ? values.password : ""}
        required
        minLength="8"
        maxLength="40"
        onChange={handleChange}
        autoComplete="on"
        className="popup__input"
      />
      <span className="popup__error-massage">
        {" "}
        {errors.password ? `${errors.password}` : ""}
      </span>
      <label htmlFor="name" className="popup__label">
        Username
      </label>
      <input
        id="name"
        placeholder="Enter your name"
        name="name"
        required
        minLength="2"
        maxLength="40"
        onChange={handleChange}
        autoComplete="on"
        className="popup__input"
        value={values.name ? values.name : ""}
      />
      <span className="popup__error-massage">
        {" "}
        {errors.name ? `${errors.name}` : ""}
      </span>

      <span className="popup__error-massage_type_email">
        {" "}
        {emailStatus ? `${emailStatus}` : ""}
      </span>
      <button
        className={
          isValid ? "popup__button " : " popup__button popup__button_disabled"
        }
        type={isValid ? "submit" : ""}
      >
        Sign up
      </button>

      <p className="popup__subtitle">
        or{" "}
        <span onClick={togglePopups} className="popup__link ">
          Sign in
        </span>
      </p>
    </PopupWithForm>
  );
};
export default PopupSignup;
