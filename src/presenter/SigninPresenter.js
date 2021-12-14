import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {auth, signIn } from "../firebase"
import SigninView from "../view/SignInView"

export default function Signin() {

    const emailRef = useRef()
    const passwordRef = useRef()

    const navigate = useNavigate()

    useEffect(() => {
        auth.signOut();

    }, [])

    function signin(e) {

        e.preventDefault();

        signIn(emailRef.current.value, passwordRef.current.value)
            .then( () => {
                alert("Logged in " );
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
