import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header"

export default class Feed extends Component {

    render() {
        return (
            <div className="feed">
              <Header/>
            </div>
          );
    }
}
