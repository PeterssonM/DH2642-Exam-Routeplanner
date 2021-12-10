import React, { useRef, useState } from 'react'
import firebase from "../firebase"
import SignUp from '../view/SignUpView'

export default function Signup() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    const auth = firebase.auth()
    const db = firebase.firestore()

    async function signup() {
        try {
            const res = await auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value);
            const user = res.user;
            await db.collection("users").add({
                uid: user.uid,
                email: emailRef.current.value,
                authProvider: "local"
            });

            console.log("Signed up!");
        } catch (error) {
            console.log(error);
            alert(error.message)
        }
    }

    return (
        <SignUp/>
    )
}
