import React from 'react';
import Icon from './Icon';
import './Notes.css';

const Notes = () => {
    return <div className="note">
        <span>Title</span>
        <div className="note-foot">
            <small>DATE</small>
            <div className="note-buttons">
                <Icon className="editButton" icon = {"edit"}/>
                <Icon className="trashButton" icon = {"trash"}/>
            </div>
        </div>
    </div>
};

export default Notes;