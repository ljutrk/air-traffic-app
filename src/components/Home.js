import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { flightService } from '../services/FlightService';
import FlightRow from './FlightRow';
import { altitudeFilter } from '../shared/utils';
import Loader from '../partials/Loader';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flights: [],
            isLoading: true
        }
    }

    componentWillMount() {
        navigator.geolocation.getCurrentPosition(this.locationTrue, this.locationFalse);

    }

    bla = (lat, lng) => {
        return flightService.fetchFlights(lat, lng)
            .then(flights => {
                flights.sort(altitudeFilter)
                this.setState({ flights })
            })
    }

    locationTrue = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        this.bla(latitude, longitude)
            .then(() => {
                this.setState({ isLoading: false });

                setInterval(
                    (lat, lng) => this.bla(lat, lng),
                    3000,
                    latitude,
                    longitude
                );
            })
    }

    locationFalse = (error) => {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                localStorage.setItem("error", "User denied the request for Geolocation.")
                break;
            case error.POSITION_UNAVAILABLE:
                localStorage.setItem("error", "Location information is unavailable.")
                break;
            case error.TIMEOUT:
                localStorage.setItem("error", "The request to get user location timed out.")
                break;
            case error.UNKNOWN_ERROR:
                localStorage.setItem("error", "An unknown error occurred.")
                break;
        }

        this.props.history.push("/geoLocationError");
    }

    render() {

        if (this.state.isLoading) {
            return <Loader />
        }
        console.log(this.state);
        console.log(this.props);


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