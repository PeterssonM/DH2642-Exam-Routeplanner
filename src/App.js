//React
import React from 'react';
import { Route, Routes } from 'react-router-dom';

//Css
import './App.css';

//Presenters
import Feed from "./presenter/FeedPresenter"
import Signup from "./presenter/SignupPresenter"
import Signin from "./presenter/SigninPresenter"
import EditPage from "./presenter/EditPagePresenter"
import Summary from "./presenter/SummaryCardPresenter"


export default function App() {
  
  return (
    <div>
      <div className="app">
          <Routes>
              <Route path='/home' element={<Feed />}></Route>
              <Route path="/edit" element={<EditPage />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/signin" element={<Signin />}></Route>
              <Route path="/summary/:id" element={<Summary />}></Route>
              <Route path='*' element={<Signin />}></Route>
          </Routes>
      </div>
    </div>
  )
}
