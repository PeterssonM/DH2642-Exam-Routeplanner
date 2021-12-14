import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

export default function Header() {

    return (
        <div className="header">
            <div className="left-header">
                <div className="header_search">
                    <div className="searchIcon">
                        <i className= {"fas fa-search fa-1g"} title="Search"/>
                    </div>
                    <input type="text" placeholder="Type to search..."></input>
                </div>
            </div>
            <div className="middle-header">
                <span className="headerTitle">Tenta Schedueler</span>
            </div>
            <div className="right-header">
                    <Link to='/home' style={{ textDecoration: 'none' }}>
                        <HeaderButtons icon={"fas fa-home fa-1g"} title="Home"/>
                    </Link>
                    <Link to='/signin' style={{ textDecoration: 'none' }}>
                        <HeaderButtons icon={"fas fa-sign-out-alt fa-1g"} title="Sign Out"/>
                    </Link>
            </div> 
        </div>
    );
}

//Template function for creating buttons
function HeaderButtons( {icon, title} ) {
    return (
        <div className="headerButtons">
            <i className= {icon}/>
            <h3 className="headerButtonTitle">{title}</h3>
        </div>
    )
}
