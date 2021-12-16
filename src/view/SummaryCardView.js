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
            <div className="travelTitle">Here's the travel path</div>
            <div className="routePlannerContainer">
                <div className="routeTableContainer">
                    <div className="travelData">
                        <div>
                            {data && data.stops.map((stop, i) => {
                                return(
                                    <div key={i}>
                                        <table className='tableWidthFix'>
                                            <tbody >
                                                <tr key={stop.direction}>
                                                    <td className="travelTowardsTitle">Mot: {stop.direction}</td>
                                                </tr>
                                                {stop.stops.Stop && stop.stops.Stop.map(station => {
                                                    return(
                                                        <tr key={station.id} className='rows'>
                                                            <td>{station.name}</td>
                                                        </tr>)   
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}