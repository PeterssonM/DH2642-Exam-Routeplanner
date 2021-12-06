import Header from "../view/HeaderView"
import Planner from "../../service/sl"
import Body from "../view/BodyView"
import { nanoid } from '@reduxjs/toolkit'; //keep track of different notes
import React, {Component, useState} from 'react';
import '../view/AddNoteView';

const Feed = () =>  {

    /*componentDidMount() {
        Planner(740021730, 740012883)
            .then( (data) => {
                console.log(data.Trip);
            })
    }*/
<<<<<<< HEAD

    constructor(props) {
        super(props);
        this.state = {
            notes: [
=======
        const [notes, setNotes] = useState([
>>>>>>> c688ca1192a01d94784bba18b846553f203f1833
            {
                id: nanoid(),
                title: "Title1",
                text: "test",
                origin: "Kista",
                destination: "T-centralen",
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
<<<<<<< HEAD
            ]
        }

    }
    render() {
        const {notes} = this.state;
=======
            ]);
        
    
        const addNote = (text, title) => {
            const date = new Date();
            const newNote = {
                id: nanoid(),
                title: title,
                text: text,
                date: date.toLocaleDateString()
            }
            const newNotes = [...notes, newNote];
            setNotes(newNotes);


        }
>>>>>>> c688ca1192a01d94784bba18b846553f203f1833
        return (
            <div className="feed">
                <Header/>
                <Body notes={notes} handleAddNote={addNote}/>
            </div>
        );
    }
<<<<<<< HEAD
=======
    
    export default Feed;


>>>>>>> c688ca1192a01d94784bba18b846553f203f1833

}
