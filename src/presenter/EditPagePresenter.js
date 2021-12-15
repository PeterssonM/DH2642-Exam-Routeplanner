//React
import React, {useRef, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

//Views
import EditPage from '../view/EditerView'

//Presenters
import Header from '../presenter/HeaderPresenter'

//Firebase
import firebase, { db } from "../firebase"

//Utils
import { nanoid } from '@reduxjs/toolkit';
import { findByName } from '../service/resRobot';


export default function EditPagePresenter() {

    //Navigation
    const navigate = useNavigate();
    
    //Refs
    const titleRef = useRef();
    const bodyRef = useRef();
    const originRef = useRef();
    const destinationRef = useRef(); 

    //States
    const [user, setUser] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (!user) navigate("/signin");
        
            setUser(user.uid);
        });
    }, [])

    function create(e) {

        e.preventDefault();

        //Check if origin and destination are valid.
        findByName(originRef.current.value)
            .then( (result) => {
                if (!result) { return alert(originRef.current.value + " is not a valid station"); }
                
                findByName(destinationRef.current.value)
                    .then( (result) => {
                        if (!result) { return alert(destinationRef.current.value + " is not a valid station")}

                        db.collection("cards").add({
                            id: nanoid(),
                            title: titleRef.current.value,
                            uid: user,
                            //body: bodyRef.current.value,
                            origin: originRef.current.value,
                            destination: destinationRef.current.value,
                            created_at: new Date()
                        })
                
                        navigate("/home")
                    })
            })
        
    }

    return (
        <div className= "editPage">
            <Header/>
            <EditPage create={create} 
                    titleRef={titleRef} 
                    bodyRef={bodyRef}
                    originRef={originRef}
                    destinationRef={destinationRef} />
        </div>
    )
}

