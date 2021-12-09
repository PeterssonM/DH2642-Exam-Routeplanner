import React from 'react'
import "./SlPlanner.css"

export default function slPlannerView() {
    return (
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
    )
}


