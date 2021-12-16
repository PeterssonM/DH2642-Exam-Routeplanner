import React, { useRef, useState } from 'react'
import firebase from "../firebase"
import SignupView from "../view/SignUpView"

export default function Signup() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    const [submitted, setSubmitted] = useState(false)
    const [message, setMessage] = useState(null);

    const auth = firebase.auth()
    const db = firebase.firestore()

    function clearRefs(refs) {
        refs.forEach(r => {
            r.current.value = ""
        })
    }

    async function signup(e) {

        setSubmitted(true)
        e.preventDefault();

        try {
            const res = await auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value);
            const user = res.user;
            await db.collection("users").add({
                uid: user.uid,
                email: emailRef.current.value,
                authProvider: "local"
            });

            clearRefs([emailRef, passwordRef, passwordConfirmRef]);
            alert("Signed in!: ")
        } catch (error) {
            setMessage({
            type: "red",
            msg: "Problems signing up"
            })
        }

    }

    return (
        <SignupView signup={signup} message={message} emailRef={emailRef} passwordRef={passwordRef} passwordConfirmRef={passwordConfirmRef} submitted={submitted}/>
    )
    
}
