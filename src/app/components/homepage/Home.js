import React, { Component } from 'react';
import { Loader } from '../partials/Loader';
import { FlightRow } from './FlightRow';
import { flightService } from '../../../services/FlightService';
import { altitudeFilter } from '../../../shared/utils';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flights: [],
            isLoading: true
        };
        this.callFetchFlight = this.callFetchFlight.bind(this);
        this.locationGranted = this.locationGranted.bind(this);
        this.locationError = this.locationError.bind(this);
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.locationGranted, this.locationError);
    }

    callFetchFlight(lat, lng) {
        return flightService.fetchFlights(lat, lng)
            .then(flights => {
                flights.sort(altitudeFilter);
                this.setState({ flights });
            });
    }

    locationGranted(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        this.callFetchFlight(latitude, longitude)
            .then(() => {
                this.setState({ isLoading: false });

                this.dataUpdate = setInterval(
                    (lat, lng) => this.callFetchFlight(lat, lng),
                    3000,
                    latitude,
                    longitude
                );
            });
    }

    locationError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                localStorage.setItem("error", "User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                localStorage.setItem("error", "Location information is unavailable.");
                break;
            case error.TIMEOUT:
                localStorage.setItem("error", "The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                localStorage.setItem("error", "An unknown error occurred.");
                break;
            default:
                localStorage.setItem("error", "Something went wrong... not really sure what? ");
                break;
        }

        this.props.history.push("/geoLocationError");
    }

    componentWillUnmount() {
        clearInterval(this.dataUpdate);
    }

    render() {
        const {isLoading, flights} = this.state;

        if (isLoading) {
            return <Loader />;
        }

        return (
            <div className="homeDiv">
                <ul className="flightRow flightRowHeader ">
                    <li>Flight Bearing</li>
                    <li>Flight Altitude</li>
                    <li>Flight Code Number</li>
                    <li>Flight Info</li>
                </ul>
                {flights.map(flight => <FlightRow flight={flight} key={flight.id} />)}
            </div>
        );
    }
}

export { Home };