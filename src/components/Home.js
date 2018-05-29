import React, { Component } from 'react';
import { flightService } from '../services/FlightService';
import FlightRow from './FlightRow';
import { altitudeFilter } from '../shared/utils';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flights: [],
            isLoading: true
            // latitude: null,
            // longitude: null
        }
    }

    componentWillMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            flightService.fetchFlights(position.coords.latitude, position.coords.longitude)
                .then(flights => {
                    flights.sort(altitudeFilter)
                    console.log(flights);
                    this.setState({
                        flights,
                        isLoading: false
                        // latitude: position.coords.latitude,
                        // longitude: position.coords.longitude
                    });
                    setInterval(function (lat, lng) {
                        flightService.fetchFlights(lat, lng)
                            .then(flights => {
                                flights.sort(altitudeFilter)
                                refreshState(flights)
                            })
                    }, 3000, position.coords.latitude, position.coords.longitude);
                    const refreshState = (flights) => {
                        this.setState({
                            flights
                        });
                    }
                })
        });

    }

    render() {

        if (this.state.isLoading) {
            return <h1>Loading...</h1>
        }
        console.log(this.state);

        return (
            <div className="homeDiv">
                <ul className="flightRow flightRowHeader ">
                    <li>Flight Bearing</li>
                    <li>Flight Altitude</li>
                    <li>Flight Code Number</li>
                    {/* <li>Flight Details</li> */}
                </ul>
                {this.state.flights.map(flight => <FlightRow flight={flight} key={flight.id} />)}
            </div>
        );
    }
}

export default Home;