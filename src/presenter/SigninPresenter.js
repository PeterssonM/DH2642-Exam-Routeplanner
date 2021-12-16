import React, { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth, signIn } from "../firebase"
import SigninView from "../view/SignInView"

export default function Signin() {

    //Refs
    const emailRef = useRef()
    const passwordRef = useRef()

    //Navigation
    const navigate = useNavigate()

    useEffect(() => {
        
        auth().onAuthStateChanged((user) => {
            //Is the user already logged in?
            if (user) { navigate("/home"); }
        })

    }, [navigate])

    function signin(e) {

        e.preventDefault();

        signIn(emailRef.current.value, passwordRef.current.value)
            .then( () => {
                //dispatch(login(firebase.auth().currentUser.uid))
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
