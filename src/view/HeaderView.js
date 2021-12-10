import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

export default function Header( {handleSearchNote, handleToggleDarkMode} ) {

    return (
        <div className="header">
            <div className="left-header">
                <div className="header_search">
                    <i className= {"fas fa-search fa-1g"} title="Search"/>
                    <input 
                        onChange={(event) => 
                            handleSearchNote(event.target.value)
                        }
                        type="text" placeholder="Type to search...">
                    </input>
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
                    <div className="darkModeSwitch">
                        <label className="switch">
                            <input 
                                onClick={()=> 
                                    handleToggleDarkMode(
                                    (previousDarkMode)=>!previousDarkMode)
                                } 
                                type="checkbox"> 
                            </input>
                            <span className="slider round"></span>
                        </label>
                    </div>
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
