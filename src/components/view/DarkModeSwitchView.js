import React from 'react'
import "./DarkModeSwitch.css"

export default function DarkModeSwitchView( {handleToggleDarkMode} ) {
    return (
        <div className="darkModeSwitch">
            <label className="switch">
                <input 
                    onClick={()=> 
                        handleToggleDarkMode(
                        (previousDarkMode)=>!previousDarkMode
                    )} 
                    type="checkbox"> 
                </input>
                <span className="slider round"></span>
            </label>
        </div>
    )
}

