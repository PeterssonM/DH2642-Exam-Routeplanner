//React
import React, { useState } from 'react';
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
  

  const [message, setMessage] = useState(null);
  
  function settingMessage(msg) {
    setMessage(msg);
  }

  return (
    <div>
      <div className="app">
    
          {message && 
              <div>
                  <h3 style={{color: message.type}}>{message.msg}</h3>
              </div>
            }
        
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
