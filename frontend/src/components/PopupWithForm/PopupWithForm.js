
import React from "react";
const PopupWithForm = (props) => {
  const [isSuccess,setIsSuccess]=React.useState(false)
  const [isSignin,setIsSignin]=React.useState(true)
const isSuccessSignup =()=>{
  setIsSuccess(true)
}


if(isSuccess && !isSignin){
  return(
   <div
   onClick={()=>{props.onClose()
    setIsSuccess(false)
    setIsSignin(true)
  }}
   className={props.isOpen ? "popup popup_open" : "popup"}
 >
   <div
     onClick={(evt) => {
       evt.stopPropagation();
     }}
     className="popup__block"
   >
     <button onClick={props.onClose} className="popup__close-btn"></button>
     <p className="popup__text">Registration successfully   completed!</p>
     <p className="popup__subtitle">
       <p onClick={()=>{setIsSignin(true)
        setIsSuccess(false)}} className="popup__link-success">
         Sign in
       </p>
     </p>
   </div>
 </div>
 )
}
  if (!isSignin) {
    return (
      <div
        onClick={props.onClose}
        className={props.isOpen ? "popup popup_open" : "popup"}
      >
        <div
          onClick={(evt) => {
            evt.stopPropagation();
          }}
          className="popup__block"
        >
          <button onClick={props.onClose} className="popup__close-btn"></button>
          <form
            className="popup__form"
            onSubmit={props.onSubmit}
            action="#"
            method="POST"
            name={props.name}
          >
            <h1 className="popup__tittle">sign up</h1>
            <label htmlFor="email" className="popup__label">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              name="email"
              // value={values.email}
              required
              minLength="5"
              maxLength="40"
              // onChange={handleChange}
              autoComplete="on"
              className="popup__input"
            />

            <label htmlFor="password" className="popup__label">
              password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              name="password"
              // value={values.email}
              required
              minLength="8"
              maxLength="40"
              // onChange={handleChange}
              autoComplete="on"
              className="popup__input"
            />
            <label htmlFor="username" className="popup__label">
              Username
            </label>
            <input
              id="username"
              type="username"
              placeholder="Enter your name"
              name="username"
              required
              minLength="2"
              maxLength="40"
              // onChange={handleChange}
              autoComplete="on"
              className="popup__input"
            />

            {props.children}
            <button className="popup__button" type="submit" onClick={(evt)=>{
              evt.preventDefault();
  
               isSuccessSignup()
          

            }}>
              Sign up
            </button>
          </form>
          <p className="popup__subtitle">
            or{" "}
            <span onClick={()=>{setIsSignin(true)} } className="popup__link " >
              Sign in
            </span>
          </p>
        </div>
      </div>
    );
  } 
  
  else {
    return (
      <div
        onClick={props.onClose}
        className={props.isOpen ? "popup popup_open" : "popup"}
      >
        <div
          onClick={(evt) => {
            evt.stopPropagation();
          }}
          className="popup__block"
        >
          <button onClick={props.onClose} className="popup__close-btn"></button>
          <form
            className="popup__form"
            onSubmit={props.onSubmit}
            action="#"
            method="POST"
            name={props.name}
          >
            <h1 className="popup__tittle">sign in</h1>
            <label htmlFor="email" className="popup__label">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              name="email"
              // value={values.email}
              required
              minLength="5"
              maxLength="40"
              // onChange={handleChange}
              autoComplete="on"
              className="popup__input"
            />

            <label htmlFor="password" className="popup__label">
              password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              name="password"
              // value={values.email}
              required
              minLength="8"
              maxLength="40"
              // onChange={handleChange}
              autoComplete="on"
              className="popup__input"
            />
            {props.children}
            <button className="popup__button" type="submit" href="">
              Sign in
            </button>
          </form>
          <p className="popup__subtitle">
            or{" "}
            <span onClick={()=>{setIsSignin(false)}} className="popup__link">
              Sign up
            </span>
          </p>
        </div>
      </div>
    );
  }
};
export default PopupWithForm;
