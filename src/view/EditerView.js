import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "./Editer.css"
import { useState } from 'react'

export default function EditPageView({ create, titleRef }) {

    const characterLimit= 200;
    const[noteText, setNoteText] = useState('');

    return (
        <form onSubmit={create}>
            <div className= "siteContainer">
                <div className="titleContainer">
                    <textarea className="titleArea"
                        ref={titleRef}
                        rows={2}
                        cols={40}
                        placeholder='Enter a Title..'
                    ></textarea>
                </div>
                <div className="slStationContainer">
                    <span className="slTitle">Where do you want to go?</span>
                    <div className="textBoxLayout">
                        <textarea className='stationInputTextArea'
                            rows="1" 
                            cols="40"
                            placeholder="From:"
                        ></textarea>
                        <div className="arrowsIcon"><i className=  {"fas fa-exchange-alt fa-1g"} title="exChangeSymbol"/></div>
                        <textarea className='stationInputTextArea'
                            rows="1" 
                            cols="40"
                            placeholder="To:"
                        ></textarea>
                    </div>
                </div>                
                <div className="ckEditorContainer">
                    <CKEditor className="ckEditor"
                        editor={ ClassicEditor }
                        onReady={ editor => {

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
                <div className="buttonPosition">
                    <button className="createButton">Create</button>
                </div>
            </div>
        </form>
    )
}
