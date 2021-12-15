//React
import React, { useEffect, useState} from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

//Css
import './App.css';

//Presenters
import Feed from "./presenter/FeedPresenter"
import Signup from "./presenter/SignupPresenter"
import Signin from "./presenter/SigninPresenter"
import EditPage from "./presenter/EditPagePresenter"
import Summary from "./presenter/SummaryCardPresenter"

//Firebase
import { auth } from "./firebase"

//Sl Api
import StopFinder from './service/stopFinder.js';

export default function App() {

  return (
    <div>
      <div className="app">
          <Routes>
              <Route path='/home' element={<Feed />}></Route>
              <Route path="/edit" element={<EditPage />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/signin" element={<Signin />}></Route>
              <Route path="/summary" element={<Summary />}></Route>
              <Route path='*' element={<Signin />}></Route> //all random routes are sent to signIn
          </Routes>
      </div>
    </div>
  )
  //hej
}
