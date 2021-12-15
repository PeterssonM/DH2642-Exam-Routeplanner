import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "./Editer.css"

<<<<<<< HEAD
export default function EditPageView({ create, titleRef, textRef }) {
=======
export default function EditPageView({ create, titleRef, originRef, destinationRef }) {
>>>>>>> 25d8d87e9ee1f2a4f07027065382928b45a4ea64

    return (
        <form onSubmit={create}>
            <div className= "siteContainer">
                <div className="titleContainer">
                    <textarea className="titleArea"
                        ref={titleRef}
                        maxlength="30"
                        placeholder='Enter a Title..'
                    ></textarea>
                </div>
                <div className="slStationContainer">
                    <span className="slTitle">Where do you want to go?</span>
                    <div className="textBoxLayout">
                        <textarea className='stationInputTextAreaTo'
                            maxlength="30"
                            placeholder="From:"
                            ref={originRef}
                        ></textarea>
                        <div className="arrowsIcon"><i className=  {"fas fa-exchange-alt fa-1g"} title="swap"/></div>
                        <textarea className='stationInputTextAreaFrom'
                            maxlength="30"
                            placeholder="To:"
                            ref={destinationRef}
                        ></textarea>
                    </div>
                </div>                
                <div className="ckEditorContainer">
                    <CKEditor className="ckEditor"
                        ref={textRef}
                        editor={ ClassicEditor }
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
