//React
import React, {Component, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

//Views
import Body from "../view/BodyView"
import '../view/AddNoteView';

//Utils
import Planner from "../service/routePlanner"
import { nanoid } from '@reduxjs/toolkit'; //keep track of different notes

//Firebase
import firebase, {db} from "../firebase";

//Redux
//Redux
import { useSelector, useDispatch } from 'react-redux';
import {
  login, 
  logout,
  selectLoggedState,
  selectUserId
} from "../generatedFiles/features/user/userSlice"


export default function Feed(props) {

    /*componentDidMount() {
        Planner(740021730, 740012883)
            .then( (data) => {
                console.log(data.Trip);
            })
    }*/

    //Navigate the user around the website
    const navigate = useNavigate();

    //Redux
    const logged_in = useSelector(selectLoggedState)
    

    const [notes, setNotes] = useState(null);
    const [user, setUser] = useState(null);
    
    useEffect(() => {

        console.log(logged_in);

        //Send user to signin pag

        //Ends of code.
        /* 
        firebase.auth().onAuthStateChanged((user) => {

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
        */
    }, [])



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
