import React, { Component } from 'react';

import {
  Route,
  Routes,
} from 'react-router-dom';

import './App.css';

import Feed from "./Feed"
import Signup from './Signup';

import { AuthProvider } from './contexts/AuthContext';

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

