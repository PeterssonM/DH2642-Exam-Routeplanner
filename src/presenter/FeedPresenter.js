import Planner from "../service/routePlanner"
import Body from "../view/BodyView"
import { nanoid } from '@reduxjs/toolkit'; //keep track of different notes
import React, {Component, useState} from 'react';
import '../view/AddNoteView';

export default function Feed() {

    /*componentDidMount() {
        Planner(740021730, 740012883)
            .then( (data) => {
                console.log(data.Trip);
            })
    }*/
        const [notes, setNotes] = useState([
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

        const deleteNote = (id) => {
            const  newNotes = notes.filter((note)=> note.id !== id);
            setNotes(newNotes);
        }

        return (
                <div className="feed">
                    <Body
                        notes={notes}
                        handleAddNote={addNote}
                        handleDeleteNote={deleteNote}
                    />
                </div>

        );
}
