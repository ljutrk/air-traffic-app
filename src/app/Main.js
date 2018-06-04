import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from './components/homepage/Home';
import { GeoLocationError } from './components/geoLocationError/GeoLocationError';
import { FlightDetails } from './components/flightDetails/FlightDetalis';

const Main = () => {
    return (
        <main>
            <div className="container">
                <Route exact path="/" component={Home} />
                <Route exact path="/geoLocationError" component={GeoLocationError} />
                <Route path="/flightDetails/:id" component={FlightDetails} />
            </div>
        </main>
    );
};

export { Main };