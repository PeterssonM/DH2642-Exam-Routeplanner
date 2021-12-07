import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';


export default function Header() {
    return (
        <div className="header">
            <div className="left-header">
                <div className="header_search">
                    <i className= {"fas fa-search fa-1g"} title="Search"/>
                    <input type="text"></input>
                </div>
            </div>

            <div className="right-header">
                <Link to='/home'>
               <HeaderButtons icon={"fas fa-home fa-1g"} title="Home"/>
               </Link>
               <HeaderButtons icon={"fas fa-sign-out-alt fa-1g"} title="Sign Out"/>
 
            </div>
        </div>
    );
}

//Template function for creating buttons
function HeaderButtons({icon, title, style}) {
    return (
        <div className="headerButtons">
            <i className= {icon}/>
            <h3 className="headerButtonTitle">{title}</h3>
        </div>
    )
}
