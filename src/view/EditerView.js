import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "./Editer.css"
import { useState } from 'react'

export default function EditPageView() {

    const characterLimit= 200;
    const[noteText, setNoteText] = useState('');

    return (
        <div>
            <div className="editField">
                <CKEditor
                    editor={ ClassicEditor }
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor,) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
            </div>
            <div className="editField-Footer">
                <div className="characterCount">
                    <small>{characterLimit - noteText.length}</small>
                </div>
            </div>
            <div className="buttonPosition">
                <button className="createButton">Create</button>
            </div>
        </div>
        
    )
}
