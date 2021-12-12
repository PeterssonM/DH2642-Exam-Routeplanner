import React, { Component } from 'react';
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

  constructor() {
    super()
    this.state = {
      user: null
    }

    this.componentDidMount = this.componentDidMount.bind(this)
  }
  
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({user})
        console.log(user)
      } else {
        console.log("Not logged in")
      }
    });
  }

  render() {
    
    const {user} = this.state;

    return (
      <div>
        <div className="app">
            <Header/>
            <Routes>
                <Route path='/' element={<Signin />}></Route> //landingPage = signIn
                <Route path='*' element={<Signin />}></Route> //all random routes are sent to signIn
                <Route path='/home' element={<Feed user={user} />}></Route>
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
