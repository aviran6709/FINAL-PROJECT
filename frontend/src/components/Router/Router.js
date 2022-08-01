import {  Routes,Route } from 'react-router-dom';
import React from "react";
import SaveNewsHeader from '../SavedNewsHeader/SaveNewsHeader';
import Header from '../Header/Header';
import Main from '../Main/Main';
const Router =()=>{
    return(
        <Routes>
   <Route path='/' element={<><Header /> <Main /></>} />
        <Route path='/saved-news' element={<SaveNewsHeader/>}/>
        </Routes>
    )
}

export default Router