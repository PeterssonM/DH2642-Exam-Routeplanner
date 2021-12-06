import './App.css';
import Header from "./components/HeaderView"
import Planner from "../../service/sl"
import Body from "../view/BodyView"
import { nanoid } from '@reduxjs/toolkit';
import React, {Component} from 'react';



export default class Feed extends Component {

    /*componentDidMount() {
        Planner(740021730, 740012883)
            .then( (data) => {
                console.log(data.Trip);
            })
    }*/

    constructor(props) {
        super(props);
        this.state = {
            notes: [{
                id: nanoid(),
                title: "Title1",
                text: "test",   
                date: "15/12/2020"
            },
            {
                id: nanoid(),
                title: "Title2",
                text: "test",
                date: "11/12/2020"
            },
            {
                id: nanoid(),
                title: "Title3",
                text: "test",
                date: "12/12/2020"
            },
            {
                id: nanoid(),
                title: "Title4",
                text: "test",
                date: "9/12/2020"
            },
            {
                id: nanoid(),
                title: "Title5",
                text: "test",
                date: "4/12/2020"
            }
            ]
        }
    
    }
    render() {
        const {notes} = this.state;
        return (
            <div className="feed">
                <Header/>
                <Body notes={notes}/>
            </div>
        );
    }
    
}



