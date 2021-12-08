import React from 'react';
import './Body.css';
import Notes from './NotesView';
import  AddNote from './AddNoteView';
import '../presenter/HeaderPresenter'

export default function Body({notes, handleAddNote, handleDeleteNote}) {
    return (
        <div>
            <div className="notes">
                {notes.map((note) => (
                    <Notes
                           id={note.id}
                           title={note.title}
                           text={note.text}
                           origin={note.origin}
                           destination={note.destination}
                           date={note.date}
                           handleDeleteNote={handleDeleteNote}
                    />
                ))}
                <AddNote handleAddNote={handleAddNote}/>
            </div>
        </div>
    );
};
