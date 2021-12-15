import React from 'react'
import "./SummaryCard.css"

export default function SummaryCardView({data, title}) {

    console.log(data);

    return (
        <div className="cardContainer">
            <div className="titleContainer">
                <span>{title}</span>
            </div>

            <div className="routePlannerContainer">
                <table>
                    <thead>
                        <span>Reseplaneraren!</span>
                    </thead>
                    <tbody>
                        {data && data.stops.map(stop => {
                            return(
                                <div>
                                    <tr key={stop.stops.id}><h3>Mot: {stop.direction}</h3></tr>

                                    {stop.stops.stop && stop.stops.stop.map(station => {
                                        return( <tr key={station.id}>{station.name}</tr> )
                                    })}
                                </div>
                            )
                        })}
                    </tbody>
                </table>

            </div>

            <div className="textContainer">

            </div>
        </div>
    )

}
