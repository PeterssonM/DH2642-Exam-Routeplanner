import React from 'react'
import "./SummaryCard.css"

export default function SummaryCardView({data, oriWeatherData, desWeatherData, title, body}) {

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
                                    <div key={i} className='tableBoarder'>
                                        <table className='tableWidthFix'>
                                            <tbody >
                                                <tr key={stop.direction}>
                                                    <td className="travelTowardsTitle">Mot: {stop.direction}</td>
                                                </tr>
                                                {stop.stops.Stop && stop.stops.Stop.map(station => {
                                                    return(
                                                        <tr key={station.id} className='rows'>
                                                            <td>{station.name}</td>
                                                            <td className= {"fas fa-arrow-down fa-1g"}></td>
                                                        </tr>
                                                    )
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
            <div className="weatherInfo">
                <div className="oriWeather">
                    <span>{oriWeatherData.main["temp"]}</span>
                </div>
                <div className="desWeather">
                    <span>{desWeatherData.main["temp"]}</span>
                </div>
            </div>
        </div>
    )
}
