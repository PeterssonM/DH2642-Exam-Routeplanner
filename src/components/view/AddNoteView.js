import './AddNote.css'
import Icon from './IconView';
import { useState } from 'react';

const AddNote = ( {handleAddNote} ) => {

    const[noteText, setNoteText] = useState('');

    const handleChangeWritten = (event) => { setNoteText(event.target.value); }

    const handleSaveClicked = () => { handleAddNote(noteText); }

    return(
        <div className="addNote">
            <textarea className="title-area"
                rows="1" 
                cols="10"
                placeholder="Enter a title.."
            ></textarea>
            <textarea className="textArea"
                rows="8" 
                cols="10"
                placeholder="Type to add a new note..."
                onChange={handleChangeWritten}
                value = {noteText}
            ></textarea>
            <div className="note-footer">
                <button className="save" onClick={handleSaveClicked}> Create </button>
                <Icon className="editButton" icon = {"edit"}/>
            </div>
        </div>
    )
}

export default AddNote;