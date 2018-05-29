import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/homepage/Home';
import FlightDetails from './components/flightDetails/FlightDetalis';
import GeoLocationError from './components/geoLocationError/GeoLocationError';

const Main = () => {
    return (
        <div className="container">
            <Route exact path="/" component={Home} />
            <Route exact path="/geoLocationError" component={GeoLocationError} />
            <Route path="/flightDetails/:id" component={FlightDetails} />
        </div>
    );
}

export default Main;