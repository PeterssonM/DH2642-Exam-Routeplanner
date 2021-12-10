import React, { useRef, useState } from 'react'
import firebase from "../firebase"
import SignupView from "../view/SignUpView"

export default function Signin() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    const auth = firebase.auth()

    async function signin() {
        try {
            await auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value);
        } catch (error) {
            console.log(error);
            alert(error.message)
        }
    }

    return (
        <SignupView signup={signin} emailRef={emailRef} passwordRef={passwordRef} passwordConfirmRef={passwordConfirmRef}/>
    )
}
