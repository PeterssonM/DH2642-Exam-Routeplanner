import React from 'react'
import HeaderButtons from "../view/HeaderButtonsView"
import SearchBar from "../view/SearchBarView"

export default function HeaderPresenter() {

    return (
        <div>
            <div className="header">
                <SearchBar/>
                <span className="headerTitle">Tenta Schedueler</span>
                <HeaderButtons/>
             </div>
        </div>
        
    )
}

