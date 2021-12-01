import React from 'react';

export default function Header(props) {
  
    let amount = 5;

    return (
        <div className="header">
            <h1>{props.message}</h1>
            <p>{amount + props.amount}</p> 
        </div>
    );
}


