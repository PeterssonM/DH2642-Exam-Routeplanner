import React from 'react';
import './HeaderButtons.css';
import {Link} from 'react-router-dom';

export default function Header( {handleSearchNote} ) {

    return (
            <div className="right-header">
                <Link to='/home' style={{ textDecoration: 'none' }}>
               <HeaderButtons icon={"fas fa-home fa-1g"} title="Home"/>
               </Link>
               <HeaderButtons icon={"fas fa-sign-out-alt fa-1g"} title="Sign Out"/>
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
