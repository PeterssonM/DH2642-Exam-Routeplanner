import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "./Editer.css"
import { useState } from 'react'

export default function EditPageView() {

    const characterLimit= 200;
    const[noteText, setNoteText] = useState('');

    return (
        <form className="editPage">
            <div className="totalBorder">
                <div className="editTitleBorder">
                    <div className="titleBox">
                        <textarea className="titleArea"
                            rows={2}
                            cols={40}
                            placeholder='Enter a Title..'
                        ></textarea>
                    </div>
                </div>
                <div className="slPlanner">
                <div className="border">
                    <span className="Sltitle">Where do you wanna go?</span>
                        <div className="layout">
                            <div className="fromInput">
                                <textarea
                                    className='fromInputTextArea'
                                    rows="1" 
                                    cols="40"
                                    placeholder="From:"
                                ></textarea>
                            </div>
                            <i className= {"fas fa-exchange-alt fa-1g"} title="exChangeSymbol"/>
                            <div className="toInput">
                                <textarea
                                    className='toInputTextArea'
                                    rows="1" 
                                    cols="40"
                                    placeholder="To:"
                                ></textarea>
                            </div>
                        </div>
                </div>
            </div>
                    <div className="editField">
                        <CKEditor className="ckEditor"
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
        </form>
        
    )
}
