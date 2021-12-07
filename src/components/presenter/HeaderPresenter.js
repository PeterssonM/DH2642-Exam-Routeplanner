import React from 'react'
import Header from "../view/HeaderView"
import {useState} from 'react'

export default function HeaderPresenter() {
    
    const [searchText, setSearchText] = useState('');

    return (
        <div className="header">
            <Header handleSearchNote={setSearchText}/> 
        </div>
    )
}

