import './AddNote.css'
import React, { useState } from 'react';
import {Link} from 'react-router-dom';

export default function AddNote () {

    return(
        <div className="addNote">
            <div className="note-footer">
                <Link to="/edit">
                    <i className="fas fa-plus fa-10x"></i>
                </Link>    
            </div>
        </div>
    )
}

