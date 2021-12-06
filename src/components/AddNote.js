import './AddNote.css'

const AddNote = () => {
    return(
        <div className="addNote">
            <textarea className="title-area"
                rows="1" 
                cols="0"
                placeholder="Enter a title.."
            ></textarea>
            <textarea className="text-area"
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