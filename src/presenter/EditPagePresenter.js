import React, {useRef, useEffect, useState } from 'react'
import EditPage from '../view/EditerView'
import { useNavigate } from 'react-router-dom';
import Header from '../presenter/HeaderPresenter'


import firebase, { db } from "../firebase"
import { nanoid } from '@reduxjs/toolkit';

//PtsTOslqGhS9Wx0TFZnC0tm7Bf52

export default function EditPagePresenter() {

    const navigate = useNavigate();
    const titleRef = useRef();
    const textRef = useRef();
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
            //text: textRef.current.value,
            uid: user,
            created_at: new Date()
        })

        navigate("/home")
    }

    return (
        <div className= "editPage">
            <Header/>
            <EditPage 
                create={create} 
                titleRef={titleRef} 
                //textRef={textRef}
            />
        </div>
    )
}

