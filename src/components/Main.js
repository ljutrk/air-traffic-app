import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';

const Main = () => {
    return (
        <div className="container">
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/flightDetails" component={FlightDetalis} /> */}
        </div>
    );
}

export default Main;