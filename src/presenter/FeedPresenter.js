import Planner from "../service/routePlanner"
import Body from "../view/BodyView"
import { nanoid } from '@reduxjs/toolkit'; //keep track of different notes
import React, {Component, useState} from 'react';

import '../view/AddNoteView';

export default function Feed(props) {

    /*componentDidMount() {
        Planner(740021730, 740012883)
            .then( (data) => {
                console.log(data.Trip);
            })
    }*/

    const [notes, setNotes] = useState([
        {
            id: nanoid(),
            title: "Diskret Matte",
            text: "Ta med: penna, sudd, linjal",
            origin: "Medborgarplatsen",
            destination: "Kista",
            date: "15/12/2020"
        },
        {
            id: nanoid(),
            title: "Pogrammering 1",
            text: "Ta med: Dator",
            date: "11/12/2020",
            origin: "Hötorget",
            destination: "Tekniska Högskolan",
        },
        {
            id: nanoid(),
            title: "Datalagring",
            text: "Ta med: penna och sudd           Ät ett äpple",
            date: "12/12/2020",
            origin: "Fittja",
            destination: "Kista",
        },
        {
            id: nanoid(),
            title: "Algoritmer och Datastrukturer",
            text: "Glöm inte datorladdare",
            date: "9/12/2020",
            origin: "Fittja",
            destination: "Kista",
        }]);


    const addNote = (text, title) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            title: title,
            //text: text,
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
