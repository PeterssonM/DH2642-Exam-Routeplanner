import React from 'react'
import "./SearchBar.css"


export default function SearchBarView( {handleSearchNote} ) {
    return (
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
    )
}

