import React from 'react';
import './Notes.css';

export default function Notes ({id, title, text, origin, destination, date, handleDeleteNote, redirect}) {    
    
    return (
        <div className="note" onClick={() => redirect(id)}>
            <div className="title">
                <h3>{title}</h3>
            </div>
            <div className= "paragraph">
                <p className="textBox">{text}</p>
            </div>
            <div className="routeCards">
                <p>Origin: {origin}</p>
                <p>Destination: {destination}</p>
            </div>
            <div className="note-foot">
                <small>{date}</small>
                <div className="note-buttons">
                    <i className="fas fa-trash fa-1g" onClick={()=> handleDeleteNote(id)}></i>
                </div>
            </div>
        </div> 
    )
}