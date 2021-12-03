import React from 'react';
import './Body.css';
import Icon from './Icon';

export default function Body() {
    return (
        <div>
            <div className="squares">
                <CreatingSquares title="SquareOne" body="MASSA BAJS"/>
                <CreatingSquares title="SquareTwo" body="MASSA BAJS"/>
                <CreatingSquares title="SquareThree" body="MASSA BAJS"/>
            </div>
            <div>
                <button className="add-button" type="button">+</button> 
            </div>
        </div>
    )
}

function CreatingSquares({title, body, style}) {
    return (
        <div className="box">
            <h2>{title}</h2>
            <p>{body}</p>
            <div className="boxButtons">
                <Icon className="editButton" icon = {"edit"}/>
                <Icon className="trashButton" icon = {"trash"}/>
            </div>
        </div>
    )
}
