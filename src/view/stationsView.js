import React from 'react'

export default function SummaryCardView({data}) {
    return(
      <div className="routeContainer">
          <span className="originDestination"></span>
          <span className="originDestination">Kista</span>
          <span className="numberOfStations">5 stations</span>
          <span className="travelDirection">Mot Hässelby Strand </span>
      </div>
    )
}
