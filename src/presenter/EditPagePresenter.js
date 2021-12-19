import React, {useRef, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EditPage from '../view/EditorView'
import Header from '../presenter/HeaderPresenter'
import firebase, { db } from "../firebase"
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
    const [message, setMessage] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (!user) navigate("/signin");
        
            setUser(user.uid);
        });
    }, [navigate])

    function getTime() {
        function pad2(n) {
            return (n < 10 ? '0' : '') + n;
        }
    
        var date = new Date();
        var month = pad2(date.getMonth()+1);//months (0-11)
        var day = pad2(date.getDate());//day (1-31)
        var year= date.getFullYear();

        return year+"-"+month+"-"+day
    }
    function create(e) {

        e.preventDefault();

        let o = "";
        let d = "";

        if (originRef.current.value === "" || destinationRef.current.value === "" || bodyRef.current === undefined || titleRef.current.value === "") {
            return setMessage({
                type: "red", 
                msg: "You missed some parts"
            });
        }

        //Check if origin and destination are valid.
        findByName(originRef.current.value)
            .then( (result) => {
                if (!result) { 
                    return setMessage({
                        type: "red",
                        msg: originRef.current.value + " is not a valid station"
                    })
                }
                
                o = result["name"];

                findByName(destinationRef.current.value)
                    .then( (result) => {
                        if (!result) { 
                            return setMessage({
                                type: "red",
                                msg: destinationRef.current.value + " is not a valid station"
                            })
                        }
                        d = result["name"];


                        if (o === d) {
                            return setMessage({
                                type: "red",
                                msg: "Origin and destination cannot be the same"
                            })
                        }

                        db.collection("cards").add({
                            id: nanoid(),
                            title: titleRef.current.value,
                            uid: user,
                            body: bodyRef.current,
                            origin: o,
                            destination: d,
                            created_at: getTime()
                        })
                
                        navigate("/home")
                    })
            })
        
    }
    return (
        <div className= "editPage">
            <Header showSearchBar={false}/>
            
            <EditPage 
                    message={message}
                    create={create} 
                    titleRef={titleRef} 
                    bodyRef={bodyRef}
                    originRef={originRef}
                    destinationRef={destinationRef} 
            />
        </div>
    )
}

