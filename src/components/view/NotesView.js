import React from 'react';
import Icon from './IconView';
import './Notes.css';
import './AddNoteView';

const Notes = ({id, title, text, origin, destination, date}) => {
    return <div className="note">
        {/*<p>{id}</p> debugging*/}
        <h3>{title}</h3>
        <p>{text}</p>
        <div className="routeCards"> {/*Klassen har ännu inte specificerats :)*/}
            <p>Origin: {origin}</p>
            <p>Destination: {destination}</p>
        </div>
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
