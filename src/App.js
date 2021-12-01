import React, { Component } from 'react';

import {
  Route,
  Routes,
} from 'react-router-dom';

import './App.css';

import Feed from "./Feed"

export default class App extends Component {

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

