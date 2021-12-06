import React from 'react';
import './Body.css';
import Notes from './NotesView';
import  AddNote from './AddNoteView';

export default function Body({notes, handleAddNote}) {
    return (
        <div>
            <div className="notes">
                {notes.map((note) => ( 
                <Notes 
                       id={note.id} 
                       title={note.title} 
                       text={note.text} 
                       date={note.date}/>
                ))}
                <AddNote handleAddNote={handleAddNote}/>
            </div>
        </div>
    );
};
