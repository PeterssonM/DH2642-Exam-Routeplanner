import React, { Component } from 'react';

import {
  Route,
  Routes,
} from 'react-router-dom';

import './App.css';

import Feed from "./Feed"
import Signup from './Signup';

import { AuthProvider } from './contexts/AuthContext';

import StopFinder from './service/stopFinder.js';

// API call test
StopFinder({
  key: "8914fa48-04a5-4511-94c8-61d49831bd6a",
  input: "Kista",
  id: "740012883",
  format: "json"
})
  .then( (data) => {
    console.log(data)
  }).catch((error)=>{
    console.log(error)
  })

export default class App extends Component {

  render() {
    return (
      <div className="app">
        <AuthProvider>
          <Routes>
              <Route path='/home' element={<Feed />}></Route>
              <Route path="signup" element={<Signup />}></Route>
          </Routes>
        </AuthProvider>
      </div>

    )
  }
}
