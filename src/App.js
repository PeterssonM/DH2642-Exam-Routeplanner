//React
import React, { useEffect} from 'react';
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
import firebase from "./firebase"

//Sl Api
import StopFinder from './service/stopFinder.js';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import {
  login, 
  logout,
  selectLoggedState,
  selectUserId
} from "./generatedFiles/features/user/userSlice"

export default function App() {

  //Redux
  const user = firebase.auth().currentUser;
  const logged_in = useSelector(selectLoggedState);
  const dispatch = useDispatch(); 

  //Navigate user around the website
  const navigate = useNavigate();

  useEffect(() => {

    console.log(user);

    if (user) {
      dispatch(login(user.uid));
    } else {
      dispatch(logout());
    }
    
    //Checks if user is signed i
    if (!logged_in) { navigate("/signin"); }
    
  }, [])
  

  return (
    <div>
      <div className="app">
          <Header/>
          <Routes>
              <Route path='/' element={<Signin />}></Route> //landingPage = signIn
              <Route path='*' element={<Signin />}></Route> //all random routes are sent to signIn
              <Route path='/home' element={<Feed />}></Route>
              <Route path="/edit" element={<EditPage />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/signin" element={<Signin />}></Route>
              <Route path="/summary" element={<Summary />}></Route>
          </Routes> 
      </div>
    </div>
  )
  
}
