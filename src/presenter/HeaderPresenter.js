import React, { useEffect, useState } from 'react'
import Header from "../view/HeaderView"
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'

export default function HeaderPresenter( {showSearchBar=true, filterNotes} ) {

    const navigate = useNavigate();
    const [email, setEmail] = useState();

    function signout(e) {
        e.preventDefault();
        
        auth().signOut();
        navigate("/signin")
    }

    useEffect( () => {
        auth().onAuthStateChanged( (user) => {
            setEmail(user.email);
        })
    }, [])

    return (
        <div>
            <Header signout={signout} showSearchBar={showSearchBar} email={email} filterNotes={filterNotes}/>
        </div>   
    )
}

