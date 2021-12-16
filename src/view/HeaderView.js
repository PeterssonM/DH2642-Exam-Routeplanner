import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

export default function Header({signout, showSearchBar, filterNotes, email}) {

    /*Template function for creating header buttons */
    function HeaderButtons( {icon, title, onClick} ) {
        return (
            <div onClick={onClick} className="headerButtons">
                <i className= {icon}/>
                <h3 className="headerButtonTitle">{title}</h3>
            </div>
        )
    }
    
    function AccountSymbol( {icon, title} ) {
        return (
            <div className="accountButton">
                <i className= {icon}/>
                <h3 className="accountButtonTitle">{title}</h3>
            </div>
        )
    }

    return (
        <div className="header">
            <div className="left-header">
                {showSearchBar && 
                    <div className="header_search">
                        <div className="searchIcon">
                            <i className= {"fas fa-search fa-1g"} title="Search"/>
                        </div>
                        <input className="inputBar" onChange={(e) => filterNotes(e.currentTarget.value)} type="text" placeholder="Type to search..."></input>
                    </div>
                }
            </div>
            <div className="middle-header">
                <span className="headerTitle">Tenta Schedueler</span>
            </div>
            <div className="right-header">
                    <Link to='/home' style={{ textDecoration: 'none' }}>
                        <HeaderButtons icon={"fas fa-home fa-1g"} title="Home"/>
                    </Link>
                    <AccountSymbol className="accountSymbol" icon={"fas fa-user fa-1g"} title={email}/>
                    <Link to='/signin' style={{ textDecoration: 'none' }}>
                        <HeaderButtons className="homeButton" icon={"fas fa-sign-out-alt fa-1g"} title="Sign Out" onClick={signout}/>
                    </Link>
            </div> 
        </div>
    );
}

