import React from "react";
 import api from "../../utils/api";
import { UserContext } from "../UserConetext";
import Footer from '../Footer/Footer';
import {  Routes,Route } from 'react-router-dom';
import SaveNewsHeader from '../SavedNewsHeader/SaveNewsHeader';
import Header from '../Header/Header';
import Main from '../Main/Main';
import ProtectedRoute from '../ProtectedRoute';
import getNewsRequest from "../../utils/NewsApi";


function App() {
const [data, setData]=React.useState([]);
const[savedCard , setSavedCard]=React.useState([])
// use to save article
const[isLoggedIn , setIsLoggedIn] =React.useState(false)
//the search news status
const[onSearch , setOnSearch] =React.useState(false)
const[isFundSome , setIsFundSome] =React.useState(true)
const [newsCardData , setNewsCardData]=React.useState([])
const [keyword , setKeyword]=React.useState("")
 
// if the object that the function get(token.name) is Not accepted ,
// try call setData(token.name) on popUP login as a handelLogin func
const login = async(data)=>{ 
  
  const token = await api.signin(data).then((res) =>{ 
    return res
  }).catch(console.log)

  if (token) {
    setIsLoggedIn(true)
    //set the name for btn
    setData(token.name)
   
  }
 
  return token
}

const logout =()=>{
 localStorage.clear() 
 setIsLoggedIn(false)

}





 const checkToken=()=>{
  const token = localStorage.getItem("jwt")
  api.checkToken(token).then((res)=>{
    if(res){
      setIsLoggedIn(true)
    }
  }).catch(console.log)
 }

//return bool for success signup popup (popupWithForm)
const createNewUser = async( data)=>{
 const status = await api.signup(data).then((res) => {
if(typeof res === 'undefined'){
  return "This email is not available"
}
  if(res.data){ 
return true
  }else{ 
    return false 
  }
}).catch(console.log)
 return status
}



 const getSavedArticle =  ()=>{
  api.getArticle()
 .then(res =>{  
   if(res){
     setSavedCard(res)  
     return res 
   }
  }).catch(console.log)
}

const getUserData= ()=>{
//func that get the savedCard & user info 
//if req is ok . it set logging
 return api.getUserInfo().then((res) => {
    if(res){
      setData(res.name)
      
      return res
    }
  }).catch(err => console.log(err))
  
}
 

const getNewsWithApi=(searchResults)=>{
  setOnSearch(true)
  setKeyword(searchResults)
  getNewsRequest(searchResults).then((res,)=>{
  setNewsCardData(res.articles)
  if(newsCardData.length===0){
      setIsFundSome(false)
     }
     setOnSearch(false)
   }).catch(console.log)
   
}


//those func sended to newsCard component as props
const saveNewArticle =(cardData)=>{ 
  api.saveArticle(cardData).then((res)=>{
  getSavedArticle()
  }).catch(err => console.log(err))
}

const deleteArticle =(cardToDele)=>{
  api.unSavedArticle(cardToDele).then((res)=>{
    getSavedArticle()
}).catch(err => console.log(err))}

 React.useEffect(() => {
  if(isLoggedIn===true) {
    getUserData()
    getSavedArticle()
  }else{
    checkToken()
  }
 
},[isLoggedIn]); 






//  localStorage.clear() 
  return (
<div className = "app"  
>
<UserContext.Provider 
value={{user:data, savedCard:savedCard , isLoggedIn:isLoggedIn}}
>

<Routes>
      <Route path='/' element={<><Header getNews={getNewsWithApi} isLoggedIn={isLoggedIn} registerFunc={createNewUser} logout={logout} loginFunc={login}/> <Main   unSavedArticle={deleteArticle} onSearchStatus={onSearch} keyword={keyword} isFundSome={isFundSome} onSaveBtnClick={saveNewArticle} cardData={newsCardData}/></>} />
      <Route path='/saved-news' element={ <ProtectedRoute isLoggedIn={isLoggedIn}  unSavedArticle={deleteArticle} logout={logout} component={SaveNewsHeader}/> }/>
 </Routes>


<Footer/>

</UserContext.Provider>
  </div>
  )

}

export default App;
