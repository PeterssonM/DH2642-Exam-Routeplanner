import React, { Component, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Feed from "./presenter/FeedPresenter"
import Signup from "./presenter/SignupPresenter"
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
    fetchdata()
  }

  render() {
    return (
      <div>
        <div className="app">
          <Header />
          <AuthProvider>
            <Routes>
                <Route path='/' element={<Feed />}></Route>
                <Route path='/home' element={<Feed />}></Route>
                <Route path="/edit" element={<EditPage />}></Route>
                <Route path="signup" element={<Signup />}></Route>
                <Route path="/summary" element={<Summary />}></Route>
            </Routes>
          </AuthProvider>
        </div>
      </div>

    )
  }
}

/**FUCKING HARRY */