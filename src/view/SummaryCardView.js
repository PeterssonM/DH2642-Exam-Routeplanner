import React from 'react'
import "./SummaryCard.css"

export default function SummaryCardView({data, title, body}) {

    console.log(data);

    return (
        <div className="cardContainer">
            <div className="titleContainer">
                <h2>{title}</h2>
            </div>

            <div className="textContainer" dangerouslySetInnerHTML={{__html: body}}>
            </div>

            <div className="routePlannerContainer">
                <table>
                    <thead>
                        <h3>DIN RESA!</h3>
                    </thead>
                    <tbody>
                        {data && data.stops.map(stop => {
                            console.log(stop);
                            return(
                                <div>
                                    <tr key={stop.direction}><h3>Mot: {stop.direction}</h3></tr>

                                    {stop.stops.Stop && stop.stops.Stop.map(station => {
                                        return( <tr key={station.id}> {station.name}</tr> )
                                    })}
                                </div>
                            )
                        })}
                    </tbody>
                </table>

            </div>

          
        </div>
    )

}
