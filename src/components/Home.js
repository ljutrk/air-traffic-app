import React, { Component } from 'react';
import { flightService } from '../services/FlightService';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount() {
        flightService.fetchFlights()
            .then(flights => {
                console.log(flights);
            })
    }

    render() {
        return (
            <h1>hello</h1>
        );
    }
}

export default Home;