import React from 'react';
import { Link } from 'react-router-dom';

const GeoLocationError = () => {
    return (
        <div className="locationErrorDiv">
            <h2>{localStorage.getItem("error")}<br /> You need to allow location access in order to see flights!</h2>
            <Link to="/"><button className="locationErrorBtn">Back to Homepage</button></Link>
        </div>
    );
};

export { GeoLocationError };