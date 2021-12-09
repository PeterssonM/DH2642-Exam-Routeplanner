
import React from 'react'
import "./SlPlanner.css"

export default function slPlannerView() {
    return (
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
    )
}
