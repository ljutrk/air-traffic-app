import React, { Component } from 'react';
import { flightService } from '../services/FlightService';
import FlightRow from './FlightRow';
import { altitudeFilter } from '../shared/utils';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flights:[],
            isLoading: true
        }
    }

    componentWillMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
            
        });
        flightService.fetchFlights(40, 20)
            .then(flights => {
                flights.sort(altitudeFilter)
                console.log(flights);
                this.setState({flights, isLoading: false});
            })
    }


    render() {

        if (this.state.isLoading) {
            return <h1>Loading...</h1>
        }

        return (
            <div className="homeDiv">
                {this.state.flights.map(flight => <FlightRow flight={flight} key={flight.id} />)}
            </div>
        );
    }
}

export default Home;