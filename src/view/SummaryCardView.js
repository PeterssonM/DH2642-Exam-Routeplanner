import React from 'react'
import "./SummaryCard.css"

export default function SummaryCardView({data, oriWeatherData, desWeatherData, title, body}) {

    return (
        <div className="cardContainer" key={title}>
            <div className="summaryTitleContainer">
                <h2>{title}</h2>
            </div>
            <div className="cardSubTitle">Selfmade note</div>
            <div className="textContainer" dangerouslySetInnerHTML={{__html: body}}>
            </div>
            <div className="cardSubTitle">Here's the travel path</div>
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
            <div className="cardSubTitle">Weather forecast</div>
            <table className="weatherInfo">
                <tbody>
                    <tr>
                        <td className="stationWeather">{data.stops[0].stops.Stop[0].name}</td>
                        <td className="stationWeather">{data.stops[data.stops["length"]-1].stops.Stop[data.stops[data.stops["length"]-1].stops.Stop["length"]-1]["name"]}</td>
                    </tr>
                    <tr>
                        <td className="temperature">{Number(oriWeatherData.main["temp"].toFixed(0))} ℃</td>
                        <td className="temperature">{Number(desWeatherData.main["temp"].toFixed(0))} ℃</td>
                    </tr>
                    <tr>
                        <td className="weatherDescription">{oriWeatherData.weather[0]["main"]}</td>
                        <td className="weatherDescription">{desWeatherData.weather[0]["main"]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
