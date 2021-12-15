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
<<<<<<< HEAD
    const textRef = useRef();
=======
    const bodyRef = useRef();
    const originRef = useRef();
    const destinationRef = useRef(); 

    //States
>>>>>>> 25d8d87e9ee1f2a4f07027065382928b45a4ea64
    const [user, setUser] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (!user) navigate("/signin");
        
            setUser(user.uid);
        });
    }, [])

    function create(e) {

        e.preventDefault();

<<<<<<< HEAD
        db.collection("cards").add({
            id: nanoid(),
            title: titleRef.current.value,
            //text: textRef.current.value,
            uid: user,
            created_at: new Date()
        })
=======
        //Check if origin and destination are valid.
        findByName(originRef.current.value)
            .then( (result) => {
                if (!result) { return alert(originRef.current.value + " is not a valid station"); }
                
                findByName(destinationRef.current.value)
                    .then( (result) => {
                        if (!result) { return alert(destinationRef.current.value + " is not a valid station")}
>>>>>>> 25d8d87e9ee1f2a4f07027065382928b45a4ea64

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
<<<<<<< HEAD
            <EditPage 
                create={create} 
                titleRef={titleRef} 
                //textRef={textRef}
            />
=======
            <EditPage create={create} 
                      titleRef={titleRef} 
                      bodyRef={bodyRef}
                      originRef={originRef}
                      destinationRef={destinationRef} />
>>>>>>> 25d8d87e9ee1f2a4f07027065382928b45a4ea64
        </div>
    )
}

