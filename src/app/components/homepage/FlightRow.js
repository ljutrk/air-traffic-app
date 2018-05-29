import React from 'react';
import { Link } from 'react-router-dom';

const FlightRow = ({ flight }) => {

    return (
        <ul className="flightRow">
            <li><i className={flight.bearing === "right" ? "fas fa-plane" : "fas fa-plane fa-rotate-180"}></i></li>
            <li>{flight.altitude}</li>
            <li>{flight.callname}</li>
            <li><Link className="flightDetailsLink" to={`/flightDetails/${flight.icao}`}>Details</Link></li>
        </ul>
    );
}

export default FlightRow;