import Planner from "../service/routePlanner"
import Body from "../view/BodyView"
import { nanoid } from '@reduxjs/toolkit'; //keep track of different notes
import React, {Component, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import firebase, {db} from "../firebase";


import '../view/AddNoteView';

export default function Feed(props) {

    /*componentDidMount() {
        Planner(740021730, 740012883)
            .then( (data) => {
                console.log(data.Trip);
            })
    }*/

    const navigate = useNavigate();

    const [notes, setNotes] = useState(null);
    const [user, setUser] = useState(null);


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

    const getAllCards = (user) => {
        return db.collection("cards").where("uid", "==", user.uid)
        .get()
    }

    const sortingByDate = (a, b) => {
        return new Date(b.create_at) - new Date(a.create_at);
    }

    //Checks if user is logged in.
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (!user) navigate("/signin");

            setUser(user.uid);
        
            getAllCards(user)
                .then( (snapshot) => {
                    let n = []

                    snapshot.forEach( (snap) => {
                        n.push(snap.data());
                    })

                    setNotes(n);
                })
        });
    }, [])


    return (
            <div className="feed">
                <Body
                    sortAlgoritm={sortingByDate}
                    notes={notes}
                    handleAddNote={addNote}
                    handleDeleteNote={deleteNote}
                />
            </div>
    );
}
