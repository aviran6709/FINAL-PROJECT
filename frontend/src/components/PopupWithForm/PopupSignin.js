import { useFormWithValidation } from "./FormValidation";
import PopupWithForm from "./PopupWithForm"
import React from "react";
const PopupSignin =(props)=>{
  const { values, handleChange, errors, isValid, resetForm   } =  useFormWithValidation()
  const [emailStatus, setEmailStatus] = React.useState("");
// popup login  the login func is props from app  same getSaveArticle
const onSubmitSignin = async (evt) => {
    evt.preventDefault();
     const token = await props.login(values);
     await props.getSavedArticle();
     if(typeof token==='object'){
      localStorage.clear()
      localStorage.setItem('jwt', token.token)
    
      props.onClose()
     }else{
      setEmailStatus("the user with the specified email not found "); 
     }
    
  };

  const handleClosePopups=()=>{
    resetForm()
    setEmailStatus("")
    props.onClose()}
   


    return (<PopupWithForm
        openPopup={props.isOpen}
        onClose={handleClosePopups}
    
    >
        <form
          className="popup__form"
          onSubmit={onSubmitSignin}
          action="#"
          method="POST"
          name={"signin"}
        >
          <h1 className="popup__tittle">sign in</h1>
          <label htmlFor="email" className="popup__label">
            Email
          </label>
          <input
             value={values.email? values.email:''}
            id="email"
            type="email"
            placeholder="Enter Email"
            name="email"
         
            required
            minLength="5"
            maxLength="40"
            onChange={handleChange}
            autoComplete="on"
            className="popup__input"
          />
 <span className="popup__error-massage"> {errors.email? `${errors.email}`: ""}</span>
          <label htmlFor="password" className="popup__label">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter password"
            name="password"
            value={values.password? values.password:''}
            required
            minLength="8"
            maxLength="40"
            onChange={handleChange}
         
            autoComplete="on"
            className="popup__input"
          />
           <span className="popup__error-massage"> {errors.password? `${errors.password}`: ""}</span>
          {/* {props.children} */}
          <span className="popup__error-massage_type_email"> {emailStatus? `${emailStatus}`: ""}</span>
          <button  className={ isValid?"popup__button ":" popup__button popup__button_disabled"}
                type={isValid?"submit": ""}>
            Sign in
          </button>
        </form>
        <p className="popup__subtitle">
          or{" "}
          <span
            onClick={props.togglePopups}
            className="popup__link"
          >
            Sign up
          </span>
        </p>
</PopupWithForm>
  )
}
export default PopupSignin;