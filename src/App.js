import React, { Component, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Feed from "./presenter/FeedPresenter"
import Signup from "./presenter/SignupPresenter"
import Signin from "./presenter/SigninPresenter"
import EditPage from "./presenter/EditPagePresenter"
import Header from "./presenter/HeaderPresenter"
import { AuthProvider } from './generatedFiles/contexts/AuthContext';
import Summary from "./presenter/SummaryCardPresenter"

import firebase from "./firebase"

import StopFinder from './service/stopFinder.js';

const app  = firebase.firestore();

const fetchdata = async() => {
  const res = app.collection("cards");
  const data = await res.get();

  data.docs.forEach(d => {
    console.log(d.data());
  })
}

export default class App extends Component {

  constructor(props) {
    super(props)
  }
  

  componentDidMount() {
    //fetchdata()
  }

  render() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("logged in")
      } else {
        console.log("Not logged in")
      }
    });

    return (
      <div>
        <div className="app">
            <Header />
            
            <Routes>
                <Route path='/' element={<Feed />}></Route>
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
}

/**FUCKING HARRY */