import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "./EditPage.css"
import { useState } from 'react'

export default function EditPageView() {

    const characterLimit= 200;
    const[noteText, setNoteText] = useState('');

    return (
        <div>
            <div ClassName="editTitle">
                <textarea
                  rows="1" 
                  cols="40"
                  placeholder="Enter a title.."
                ></textarea>
            </div>

            <div className="slPlanner">
                <textarea
                    className="fromInput"
                    rows="1" 
                    cols="40"
                    placeholder="From:"
                ></textarea>
                <i className= {"fas fa-exchange-alt fa-1g"} title="exChangeSymbol"/>
                <textarea
                    className="toInput"
                    rows="1" 
                    cols="40"
                    placeholder="To:"
                ></textarea>


            </div>
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
                <div className="footButtons">
                    <button className="saveButton"> SAVE </button>
                </div>
            </div>
        </div>
        
    )
}



