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
import Header from "./presenter/HeaderPresenter"
import Summary from "./presenter/SummaryCardPresenter"

//Firebase
import { auth } from "./firebase"

//Sl Api
import StopFinder from './service/stopFinder.js';

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  //Navigate user around the website
  const navigate = useNavigate();



  return (
    <div>
      <div className="app">
          <Header/>
          <Routes>
              <Route path='/home' element={<Feed user={userId}/>}></Route>
              <Route path="/edit" element={<EditPage />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/signin" element={<Signin loggedIn={loggedIn} />}></Route>
              <Route path="/summary" element={<Summary />}></Route>
              <Route path='*' element={<Signin />}></Route> //all random routes are sent to signIn
          </Routes>
      </div>
    </div>
  )
  //hej
}
