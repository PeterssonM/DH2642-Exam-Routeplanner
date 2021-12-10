import React, { useRef, useState } from 'react'
import firebase from "../firebase"
import SigninView from "../view/SignInView"

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
        <SigninView signin={signin} emailRef={emailRef} passwordRef={passwordRef} />
    )
}
