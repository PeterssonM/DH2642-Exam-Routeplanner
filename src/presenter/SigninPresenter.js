import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import firebase, {auth, signIn } from "../firebase"
import SigninView from "../view/SignInView"

//Redux
import {
    login, 
    logout,
    selectLoggedState,
    selectUserId
  } from "../generatedFiles/features/user/userSlice"
import { useSelector, useDispatch } from 'react-redux';
  

export default function Signin() {

    //Refs
    const emailRef = useRef()
    const passwordRef = useRef()

    //Navigation
    const navigate = useNavigate()

    //Redux
    const logged_in = useSelector(selectLoggedState);
    const dispatch = useDispatch(); 

    useEffect(() => {
        console.log("logged in: " + logged_in);
        if (logged_in) { return navigate("/home"); }
    }, [])

    function signin(e) {

        e.preventDefault();

        signIn(emailRef.current.value, passwordRef.current.value)
            .then( () => {
                dispatch(login(firebase.auth().currentUser.uid))
                navigate("/home");
            })
            .catch( (error) => {
                console.log(error);
            })
    }

    return (
        <SigninView signin={signin} emailRef={emailRef} passwordRef={passwordRef} />
    )
}
