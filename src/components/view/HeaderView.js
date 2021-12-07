import React from 'react';
import './Header.css';


export default function Header() {
    return (
        <div className="header">
            <div className="left-header">
                <div className="header_search">
                    <i class= {"fas fa-search fa-1g"}/>
                    <input type="text"></input>
                </div>
            </div>

            <div className="right-header">
               <HeaderButtons icon={"fas fa-home fa-1g"} title="Home"/>
               <HeaderButtons icon={"fas fa-sign-out-alt fa-1g"} title="Sign Out"/>
            </div>
        </div>
    );
}

//Template function for creating buttons
function HeaderButtons({icon, title, style}) {
    return (
        <div className="headerButtons">
            <i class= {icon}/>
            <h3 className="headerButtonTitle">{title}</h3>
        </div>
    )
}
