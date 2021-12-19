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
                <h3 className="accountTitle">{title}</h3>
            </div>
        )
    }

    return (
        <div>
            <div className="big">
                <div className="headerContainer">
                    <div className="left-headerContainer">
                        {showSearchBar &&
                            <div className="header-search">
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
                        <HeaderButtons icon={"fas fa-home fa-1g"} title="Home" onClick={home}/>
                        <AccountIcon className="accountIcon" icon={"fas fa-user fa-1g"} title={email}/>
                        <HeaderButtons className="homeButton" icon={"fas fa-sign-out-alt fa-1g"} title="Sign Out" onClick={signout}/>
                    </div>
                </div>
            </div>

            <div className="small">
                <div className="headerSmallContianer">
                    <div className="headerUpperContainer">
                        <div className="left_headerContainer">
                            <span className="headerTitle">Tenta Schedueler</span>
                        </div>
                        <div className="right_headerContainer">
                            <AccountIcon className="accountIcon" icon={"fas fa-user fa-1g"} title={email}/>
                            <div className="dropdown">
                                <button className="dropbtn"><i className="fa fa-ellipsis-v"></i></button>
                                <div className="dropdown-content">
                                    <HeaderButtons icon={"fas fa-home fa-1g"} title="Home" onClick={home}/>
                                    <HeaderButtons className="homeButton" icon={"fas fa-sign-out-alt fa-1g"} title="Sign Out" onClick={signout}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="headerLowerContainer">
                        {showSearchBar &&
                            <div className="header_small_search">
                                <div className="searchSmallIcon">
                                    <i className= {"fas fa-search fa-1g"} title="Search"/>
                                </div>
                                <input className="inputSmallBar" onChange={(e) => filterNotes(e.currentTarget.value)} type="text" placeholder="Type to search..."></input>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
