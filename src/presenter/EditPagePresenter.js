import React, {useRef, useEffect, useState } from 'react'
import EditPage from '../view/EditerView'
import { useNavigate } from 'react-router-dom';


import firebase, { db } from "../firebase"
import { nanoid } from '@reduxjs/toolkit';

//PtsTOslqGhS9Wx0TFZnC0tm7Bf52

export default function EditPagePresenter() {

    const navigate = useNavigate();
    const titleRef = useRef();
    const [user, setUser] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (!user) navigate("/signin");
        
            setUser(user.uid);
        });
    }, [])

    function create(e) {

        e.preventDefault();

        db.collection("cards").add({
            id: nanoid(),
            title: titleRef.current.value,
            uid: user,
            created_at: new Date()
        })

        alert("Created!");
    }

    return (
        <div className= "editPage">
            <EditPage create={create} titleRef={titleRef}/>
        </div>
    )
}

