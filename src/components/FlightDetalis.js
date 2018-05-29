import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../partials/Loader';
import { flightService } from '../services/FlightService';
import { logoService } from '../services/LogoService';

class FlightDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlightLoaded: false,
            isLogoLoaded: false,
            flight: null,
            logoURL: ""
        }
    }

    componentDidMount() {
        flightService.fetchSingleFlight(this.props.match.params.id)
            .then(flight => {
                this.logoFetch(flight)
                this.setState({
                    flight,
                    isFlightLoaded: true
                });
            });
    }

    logoFetch = (flight) => {
        logoService.fetchLogo(flight.logo.split(" ").join("%20"))
            .then(response => {
                response.length === 0 ? this.secondLogoFetch(flight) : this.setState({
                    logoURL: response[0].logo,
                    isLogoLoaded: true
                });

            });
    }

    secondLogoFetch = (flight) => {
        logoService.fetchLogo(flight.logo.split(" ")[0])
            .then(response => {
                this.setState({
                    logoURL: response[0].logo,
                    isLogoLoaded: true
                });
            });
    }

    render() {

        if (!this.state.isFlightLoaded && !this.state.isLogoLoaded) {
            return <Loader />
        }

        return (
            <div>
                <ul className="breadcrumbsUL">
                    <li><Link to="/">Flights list</Link></li>
                    <li>></li>
                    <li>{this.state.flight.icao}</li>
                </ul>
                <h1>Flight ICAO : {this.state.flight.icao}</h1>
                <ul className="flightDetailsUL">
                    <li>Airplane Manufacturer and Model : {this.state.flight.airplaneModel} </li>
                    <li>Departure Airport : {this.state.flight.flightOrigin}</li>
                    <li>Destination Airport : {this.state.flight.flightDestination}</li>
                    <li><img src={this.state.logoURL} alt="" /></li>
                </ul>
            </div>
        );
    }
}

export default FlightDetails;