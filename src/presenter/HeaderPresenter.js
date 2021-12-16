import React from 'react'
import Header from "../view/HeaderView"
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'

export default function HeaderPresenter() {

    const navigate = useNavigate();

    function signout(e) {
        e.preventDefault();
        console.log("hit!");
        auth().signOut();
        navigate("/signin")
    }

    return (
        <div>
            <Header signout={signout}/>
        </div>   
    )
}

