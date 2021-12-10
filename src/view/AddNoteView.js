import './AddNote.css'
import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const AddNote = ( {handleAddNote} ) => {

    const [noteTitle, setNoteTitle] = useState('');

    const handleChangeTitle = (event) => {setNoteTitle(event.target.value); }

    const handleSaveClicked = () => { 
        if(noteTitle.trim().length > 0 ) {
            handleAddNote(noteTitle);
            setNoteTitle('');
        }
    };
    
    return(
        <div className="addNote">
            <div className="titleField">
                <textarea className="titleArea"
                    rows="1" 
                    cols="10"
                    placeholder="Enter a title.."
                    onChange={handleChangeTitle}
                    value = {noteTitle}
                ></textarea>
            </div>
            <div className="note-footer">
                <Link to="/edit">
                    <i className="fas fa-plus fa-10x" onClick={handleSaveClicked} ></i>
                </Link>    
            </div>
        </div>
    )
}

export default AddNote;