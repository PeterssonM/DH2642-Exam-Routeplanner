import './AddNote.css'
import Icon from './IconView';
import { useState } from 'react';

const AddNote = ( {handleAddNote} ) => {

    const[noteText, setNoteText] = useState('');
    const [noteTitle, setNoteTitle] = useState('');

    const handleChangeText = (event) => { setNoteText(event.target.value); }

    const handleChangeTitle = (event) => {setNoteTitle(event.target.value); }

    const handleSaveClicked = () => { handleAddNote(noteText); }

    return(
        <div className="addNote">
            <textarea className="title-area"
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
            <div className="note-footer">
                <button className="save" onClick={handleSaveClicked}> Create </button>
                <Icon className="editButton" icon = {"edit"}/>
            </div>
        </div>
    )
}

export default AddNote;