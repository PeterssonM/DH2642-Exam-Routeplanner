import React from 'react'
import "./SummaryCard.css"

export default function SummaryCardView({id, title, text, origin, destination, date}) {
    return (
        <div className="card">
            <div className="summaryCard">
                {/*<p>{id}</p> debugging*/}
                <h3 className="summaryCardTitle">TITLE</h3>
                <div className="summaryCardParagraphBoxLayout">
                    <div className="summaryCardParagraphBox">
                        <p className= "summaryCardParagraph">text</p>
                    </div>
                </div>
                <div className="summaryCardSlRouteBoxLayout">
                    <div className="summaryCardSlRouteBox">
                        <div className="summaryCardRouteCards">
                            <p className='originRoute'>Origin: {origin}</p>
                            <p className='destinationRoute'>Destination: {destination}</p>
                        </div>
                    </div>
                </div>
                <div className="summaryCardnote-foot">
                    <small>{date}</small>
                </div>
            </div> 
        </div>
    )   
}


