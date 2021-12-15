//React
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../presenter/HeaderPresenter'

//Views
import Body from "../view/BodyView"
import '../view/AddNoteView';

//Utils
import { findByName } from "../service/resRobot"
import { nanoid } from '@reduxjs/toolkit'; //keep track of different notes

//Firebase
import firebase, {db, auth} from "../firebase";

//Redux
//Redux
import { useSelector, useDispatch } from 'react-redux';
import {
    login, 
    logout,
    selectLoggedState,
    selectUserId
} from "../generatedFiles/features/user/userSlice"


export default function Feed() {

    //Navigate the user around the website
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [notes, setNotes] = useState(null);
    
    useEffect(() => {

        auth().onAuthStateChanged(function(user) {
            if (!user) { return navigate("/signin"); }

            //Saves the user to the state
            setUser(user);

            //Grabs the cards for the user.
            getAllCards(user.uid)
            
        });

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
        db.collection("cards").where("id", "==", id).get()
        .then( (snapshot) => {
            snapshot.docs[0].ref.delete()
        }).then( () => {
            getAllCards(user.uid)
        })
    }

    const getAllCards = (user) => {
        db.collection("cards").where("uid", "==", user)
        .get()
        .then( (snapshot) => {
            let n = []

            snapshot.forEach( (snap) => {
                n.push(snap.data());
            })

            setNotes(n);
        })
    }

    const sortingByDate = (a, b) => {
        return new Date(b.create_at) - new Date(a.create_at);
    }

    const redirect = (id) => {
        return navigate("/summary/" + id);
    }

    return (
            <div className="feed">
                <Header/>
                <Body
                    sortAlgoritm={sortingByDate}
                    notes={notes}
                    handleAddNote={addNote}
                    handleDeleteNote={deleteNote}
                    redirect={redirect}
                />
            </div>
    );
}
