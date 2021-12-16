import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../presenter/HeaderPresenter'
import Body from "../view/BodyView"
import '../view/AddNoteView';
import { nanoid } from '@reduxjs/toolkit'; //keep track of different notes
import {db, auth} from "../firebase";
import FuzzySearch from 'fuzzy-search';

export default function Feed() {

    //Navigate the user around the website
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [notes, setNotes] = useState(null);
    const [fNotes, setFNotes] = useState(null);

    const searcher = new FuzzySearch(notes, ["title"]);
    
    useEffect(() => {

        auth().onAuthStateChanged(function(user) {
            if (!user) { return navigate("/signin"); }

            //Saves the user to the state
            setUser(user);

            //Grabs the cards for the user.
            getAllCards(user.uid)
            
        });

    }, [navigate])

    const addNote = (title) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            title: title,
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

    function filterNotes(filter) {
        if (notes) {
            
            let result = searcher.search(filter);
            setFNotes(result);
        }
    }

    const sortingByDate = (a, b) => {
        return new Date(b.create_at) - new Date(a.create_at);
    }

    const redirect = (id) => {
        return navigate("/summary/" + id);
    }

    return (
            <div className="feed">
                <Header filterNotes={filterNotes}/>
                <Body
                    sortAlgoritm={sortingByDate}
                    notes={fNotes || notes}
                    handleAddNote={addNote}
                    handleDeleteNote={deleteNote}
                    redirect={redirect}
                />
            </div>
    );
}
