import React from 'react'

export default function StationView({data}) {
    return(
      <div className="routeContainer">
          <span className="originDestination">Skärholmen</span>
          <span className="originDestination">Kista</span>
          <span className="numberOfStations">5 stations</span>
          <span className="travelDirection">Mot Hässelby Strand </span>
      </div>
    )
}
