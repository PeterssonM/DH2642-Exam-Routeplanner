import './AddNote.css'

const AddNote = () => {
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
            ></textarea>
            <div className="note-footer">
                <button className="save"> Save </button>
                <button className="edit"> Edit </button>
            </div>
        </div>
    )
}

export default AddNote;