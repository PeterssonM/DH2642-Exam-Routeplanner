import React, {useRef} from 'react'
import EditPage from '../view/EditerView'

import { db } from "../firebase"

export default function EditPagePresenter() {

    const titleRef = useRef();

    function create() {

        console.log("bajs");

        db.collection('cards').add({
            title: titleRef.current.value,
            uid: "PtsTOslqGhS9Wx0TFZnC0tm7Bf52"
        })
        
          alert("Hello!");
    }

    return (
        <div className= "editPage">
            <EditPage create={create} titleRef={titleRef}/>
        </div>
    )
}

