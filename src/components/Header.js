import React from 'react';
import './Header.css';
import Icon from './Icon';

export default function Header() {
    return (
        <div className="header">

            <div className="left-header">
                <div className="header_search">
                    <Icon icon={"search"} style={"icc"} />
                    <input type="text"></input>
                </div>
            </div>

            <div className="right-header">
               <HeaderButtons icon={"home"} title="Home"/>
               <HeaderButtons className="signOutButton" icon={"sign-out-alt"} title="Sign Out"/>
            </div>
        </div>
    );
}

//Template function for creating buttons
function HeaderButtons({icon, title}) {
    return (
        <div className="headerButtons">
            <Icon className="headerIcons" icon = {icon}/>
            <h3 className="headerButtonTitle">{title}</h3>
        </div>
    )
}
