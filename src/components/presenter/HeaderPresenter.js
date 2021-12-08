import React from 'react'
import HeaderButtons from "../view/HeaderButtonsView"
import SearchBar from "../view/SearchBarView"
import DarkModeSwitch from "../view/DarkModeSwitchView"
import {useState} from 'react'

export default function HeaderPresenter() {

    const[darkMode, setDarkMode] = useState(false);
    
    return (
        <div className={`${darkMode && 'dark-mode'}`}>
            <div className="header">
                <SearchBar/>
                <HeaderButtons/>
                <DarkModeSwitch handleToggleDarkMode={setDarkMode}/>
             </div>
        </div>
        
    )
}

