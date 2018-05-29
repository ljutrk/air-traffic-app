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
            <div className="flightDetailsDiv">
                {/* <ul className="breadcrumbsUL">
                    <li><Link to="/">Flights list</Link></li>
                    <li>></li>
                    <li>{this.state.flight.icao}</li>
                </ul> */}
                <Link to="/"><p>Back to Flights</p></Link>
                <h2><span>Flight Code Number</span> <br /> {this.state.flight.icao}</h2>
                <ul className="flightDetailsUL">
                    <li><img src={this.state.logoURL} alt="" /></li>
                    <li><span>Airplane Manufacturer and Model</span> <br /> {this.state.flight.airplaneModel} </li>
                    <li><span>Departure Airport</span> <br /> {this.state.flight.flightOrigin}</li>
                    <li><span>Destination Airport</span> <br /> {this.state.flight.flightDestination}</li>
                </ul>
            </div>
        );
    }
}

export default FlightDetails;