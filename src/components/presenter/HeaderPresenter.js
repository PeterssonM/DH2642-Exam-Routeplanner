import React from 'react'
import Header from "../view/HeaderView"
import {useState} from 'react'

export default function HeaderPresenter() {
    
    const [searchText, setSearchTest] = useState('');

    return (
        <div classname="Header">
            <Header/> 
        </div>
    )
}

