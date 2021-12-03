import React, { Component } from 'react';

import {
  Route,
  Routes,
} from 'react-router-dom';

import './App.css';

import Feed from "./Feed"

import { AuthProvider } from './contexts/AuthContext';

import StopFinder from './service/stopFinder.js';

export default class App extends Component {

  StopFinder().then((data)=>{
    console.log(data);
  })

  render() {
    return (
      <div className="app">
        <Routes>

            <Route path='/home' element={<Feed />}></Route>

        </Routes>
      </div>

    )
  }
}
