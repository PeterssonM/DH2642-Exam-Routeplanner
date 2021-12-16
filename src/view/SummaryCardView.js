import React from 'react'
import "./SummaryCard.css"

export default function SummaryCardView({data, title, body}) {


    return (
        <div className="cardContainer" key={title}>
            <div className="summaryTitleContainer">
                <h2>{title}</h2>
            </div>
            <div className="textContainer" dangerouslySetInnerHTML={{__html: body}}>
            </div>
            <div className="routePlannerContainer">
                <div className="travelTitle">
                        <h3>DIN RESA!</h3>
                    </div>
                <table className="routeTableContainer">
            
                    <div className="travelData">
                        <tbody>
                            {data && data.stops.map((stop, i) => {
                                return(
                                    <div key={i}>
                                        <tr key={stop.direction}><h3>Mot: {stop.direction}</h3></tr>

                                        {stop.stops.Stop && stop.stops.Stop.map(station => {
                                            return( <tr key={station.id}> {station.name}</tr> )
                                        })}
                                    </div>
                                )
                            })}
                        </tbody>
                    </div>
                </table>

            </div>
        </div>
    )

}