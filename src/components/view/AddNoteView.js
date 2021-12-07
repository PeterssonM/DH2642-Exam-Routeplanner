import './AddNote.css'
import Icon from './IconView';
import React, { useState } from 'react';

const AddNote = ( {handleAddNote} ) => {

    const[noteText, setNoteText] = useState('');
    const [noteTitle, setNoteTitle] = useState('');
    const characterLimit= 200;

    const handleChangeText = (event) => { 
        if(characterLimit - event.target.value.length >= 0) {
        setNoteText(event.target.value); }
    }

    const handleChangeTitle = (event) => {setNoteTitle(event.target.value); }

    const handleSaveClicked = () => { 
        if(noteText.trim().length > 0 && noteTitle.trim().length > 0 ) {
            handleAddNote(noteText, noteTitle);
            setNoteText('');
            setNoteTitle('');
        }
    };
    
    return(
        <div className="addNote">
            <textarea className="titleArea"
                rows="1" 
                cols="10"
                placeholder="Enter a title.."
                onChange={handleChangeTitle}
                value = {noteTitle}
            ></textarea>
            <textarea className="textArea"
                rows="8" 
                cols="10"
                placeholder="Type to add a new note..."
                onChange={handleChangeText}
                value = {noteText}
            ></textarea>
            <div className="characterLimit">
                <small>{characterLimit - noteText.length}</small>
            </div>
            <div className="note-footer">
                <button className="save" onClick={handleSaveClicked}> Create </button>
                <div className="editButton">
                    <i  class="fas fa-edit fa-1g"></i>
                </div>
            </div>
        </div>
    )
}

export default AddNote;