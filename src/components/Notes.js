import React from 'react';
import Icon from './Icon';
import './Notes.css';
import './AddNote';

const Notes = ({id, title, text, date}) => {
    return <div className="note">
        <h3>{title}</h3>
        <p>{text}</p>
        <div className="note-foot">
            <small>{date}</small>
            <div className="note-buttons">
                <Icon className="editButton" icon = {"edit"}/>
                <Icon className="trashButton" icon = {"trash"}/>
            </div>
        </div>
    </div>
};

export default Notes;