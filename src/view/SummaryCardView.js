import React from 'react'
import "./SummaryCard.css"

export default function SummaryCardView({data, title}) {

    console.log(data);

    return (
        <div className="cardContainer">
            <div className="titleContainer">
                <span>{title}</span>
            </div>

            <div className="textContainer">
                { data && data.stops.map( (stop) => {
                    return (
                        <div>
                            <h1>Mot: {stop.direction}</h1>
                            {stop.stops.Stop && stop.stops.Stop.map( (s) => {
                                return <span>{s.name}</span>
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )

}
