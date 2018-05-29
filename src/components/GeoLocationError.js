import React from 'react';
import { Link } from 'react-router-dom';

const GeoLocationError = () => {
    return (
        <div>
            <h1>{localStorage.getItem("error")} You need to manually allow access, then click button!</h1>
            <Link to="/"><button>Go back to homepage</button></Link>
        </div>
    );
}

export default GeoLocationError;