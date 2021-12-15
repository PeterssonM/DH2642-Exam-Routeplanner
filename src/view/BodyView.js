import React from 'react';
import './Body.css';
import Notes from './NotesView';
import  AddNote from './AddNoteView';
import '../presenter/HeaderPresenter'

export default function Body({notes, handleAddNote, handleDeleteNote, redirect}) {
    return (
        <div>
            <div className="notes">
                {notes && notes.map((note) => (
                    <Notes
                        id={note.id}
                        title={note.title}
                        text={note.text}
                        origin={note.origin}
                        destination={note.destination}
                        date={note.date}
                        handleDeleteNote={handleDeleteNote}
                        redirect={redirect}
                    />
                ))}
                <AddNote handleAddNote={handleAddNote}/>
            </div>
        </div>
    );
}
