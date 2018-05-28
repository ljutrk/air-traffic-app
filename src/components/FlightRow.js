import React from 'react';

const FlightRow = ({flight}) => {

    return (
        <ul className="flightRow">         
            <li><i class={flight.bearing === "right" ? "fas fa-plane":"fas fa-plane fa-rotate-180"}></i></li>
            <li>{flight.altitude}</li>
            <li>{flight.flightCodeNumber}</li>
        </ul>
    );
}
 
export default FlightRow;