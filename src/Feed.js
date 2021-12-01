import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header"
import Planner from "./service/sl"

export default class Feed extends Component {

    componentDidMount() {
        Planner(740021730, 740012883)
            .then( (data) => {
                console.log(data.Trip);
            })
    }

    render() {
        return (
            <div className="feed">
              <Header/>
            </div>
          );
    }
}
