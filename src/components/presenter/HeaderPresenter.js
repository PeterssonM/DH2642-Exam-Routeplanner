import React from 'react'
import HeaderButtons from "../view/HeaderButtonsView"
import SearchBar from "../view/SearchBarView"
import {useState} from 'react'

export default function HeaderPresenter() {
    
    return (
        <div className="header">
            <SearchBar/>
            <HeaderButtons/>
        </div>
    )
}

