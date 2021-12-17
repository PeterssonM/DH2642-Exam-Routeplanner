import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

export default function Header({signout, showSearchBar, filterNotes, email, home}) {

    /*Template function for creating header buttons and icons */
    function HeaderButtons( {icon, title, onClick} ) {
        return (
            <div onClick={onClick}
                className="headerButtons">
                <i className={icon}/>
                <h3 className="iconTitle">{title}</h3>
            </div>
        )
    }
    function AccountIcon( {icon, title} ) {
        return (
            <div className="accountIcon">
                <i className= {icon}/>
                <h3 className="iconTitle">{title}</h3>
            </div>
        )
    }

    return (
        <div className="headerContainer">
            <div className="left-headerContainer">
                {showSearchBar &&
                    <div className="header_search">
                        <div className="searchIcon">
                            <i className= {"fas fa-search fa-1g"} title="Search"/>
                        </div>
                        <input className="inputBar" onChange={(e) => filterNotes(e.currentTarget.value)} type="text" placeholder="Type to search..."></input>
                    </div>
                }
            </div>
            <div className="middle-headerContainer">
                <span className="headerTitle">Tenta Schedueler</span>
            </div>
            <div className="right-headerContainer">
                <div className="HeaderButtonShow">
                    <Link to='/home' style={{ textDecoration: 'none' }}>
                        <HeaderButtons className="homeButton" icon={"fas fa-home fa-1g"} title="Home"/>
                    </Link>
                    <AccountIcon className="accountSymbol" icon={"fas fa-user fa-1g"} title={email}/>
                    <Link to='/signin' style={{ textDecoration: 'none' }}>
                        <HeaderButtons className="signoutButton" icon={"fas fa-sign-out-alt fa-1g"} title="Sign Out" onClick={signout}/>
                    </Link>
                </div>
                <div className="dropdown">
                    <button className="dropbtn"><i className="fa fa-ellipsis-v"></i></button>
                    <div className="dropdown-content">
                        <HeaderButtons icon={"fas fa-home fa-1g"} title="Home" onClick={home}/>
                        <HeaderButtons className="homeButton" icon={"fas fa-sign-out-alt fa-1g"} title="Sign Out" onClick={signout}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
