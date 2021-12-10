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
            <Routes>
                <Route path='/' element={<Feed />}></Route>
                <Route path='/home' element={<Feed />}></Route>
                <Route path="/edit" element={<EditPage />}></Route>
<<<<<<< HEAD
                <Route path="/signup" element={<Signup />}></Route>
=======
<<<<<<< HEAD
                <Route path="/signup" element={<Signup />}></Route>
=======
>>>>>>> f64922e94e58af409d566f2d1f378eda9ffb1fec
>>>>>>> 1f6c1e8fbae74452d80a6602b0aac1a72ec6549a
                <Route path="/summary" element={<Summary />}></Route>
            </Routes>
        </div>
      </div>

    )
  }
}

/**FUCKING HARRY */