import React, { Component, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Feed from "./components/presenter/FeedPresenter"
import Signup from "./components/presenter/SignupPresenter"
import EditPage from "./components/presenter/EditPagePresenter"
import Header from "./components/presenter/HeaderPresenter"
import { AuthProvider } from './contexts/AuthContext';
import StopFinder from './service/stopFinder.js';

export default function App() {

  const[darkMode, setDarkMode] = useState(false);

    return (
      <div className={`${darkMode && 'dark-mode'}`}>
        <div className="app">
          <Header handleToggleDarkMode={setDarkMode} />
          <AuthProvider>
            <Routes>
                <Route path='/' element={<Feed />}></Route>
                <Route path='/home' element={<Feed />}></Route>
                <Route path="/edit" element={<EditPage />}></Route>
                <Route path="signup" element={<Signup />}></Route>
            </Routes>
          </AuthProvider>
        </div>
      </div>

    )
}

