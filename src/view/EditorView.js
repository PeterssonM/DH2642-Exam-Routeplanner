import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "./Editor.css"

export default function EditPageView({ create, titleRef, originRef, destinationRef, bodyRef,message }) {

    return (
        <form onSubmit={create}>
            <div className="errorfeedback">{message && 
                <div >
                    <h3   style={{color: message.type}}>{message.msg}</h3>
                </div>
            }</div>
            <div className= "siteContainer">
                <div className="editTitleContainer">
                    <textarea className="titleArea"
                        ref={titleRef}
                        maxLength="30"
                        placeholder='Enter a Title..'
                    ></textarea>
                </div>
                <div className="slStationContainer">
                    <span className="slTitle">Where do you want to go?</span>
                    <div className="textBoxLayout">
                        <textarea className='stationInputTextAreaTo'
                            maxLength="30"
                            placeholder="From:"
                            ref={originRef}
                        ></textarea>
                        <div className="arrowsIcon"><i className=  {"fas fa-exchange-alt fa-1g"} title="swap"/></div>
                        <textarea className='stationInputTextAreaFrom'
                            maxLength="30"
                            placeholder="To:"
                            ref={destinationRef}
                        ></textarea>
                    </div>
                </div>                
                <div className="ckEditorContainer">
                    <CKEditor className="ckEditor"
                        placeholder="Type the content here!"
                        editor={ ClassicEditor }
                        onChange={ ( event, editor) => {
                            bodyRef.current = editor.getData();
                        } }
                    />
                    <div className="buttonPosition">
                    <button className="createButton">Create</button>
                </div>
                </div>
                
            </div>
        </form>
    )
}
