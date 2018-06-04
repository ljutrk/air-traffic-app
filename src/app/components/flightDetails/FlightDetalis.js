import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { flightService } from '../../../services/FlightService';
import { logoService } from '../../../services/LogoService';
import { Loader } from '../partials/Loader';
import { URL } from '../../../shared/constants';

class FlightDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlightLoaded: false,
            isLogoLoaded: false,
            flight: null,
            logoURL: ""
        };
        this.secondLogoFetch = this.secondLogoFetch.bind(this);
        this.logoFetch = this.logoFetch.bind(this);
    }

    componentDidMount() {
        flightService.fetchSingleFlight(this.props.match.params.id)
            .then(flight => {
                this.logoFetch(flight);
                this.setState({
                    flight,
                    isFlightLoaded: true
                });
            });
    }

    logoFetch(flight) {
        logoService.fetchLogo(flight.logo.split(" ").join("%20"))
            .then(response => {
                response.length === 0 ? this.secondLogoFetch(flight) : this.setState({
                    logoURL: response[0].logo,
                    isLogoLoaded: true
                });
            });
    }

    secondLogoFetch(flight) {
        logoService.fetchLogo(flight.logo.split(" ")[0])
            .then(response => {
                let logoURL = response[0].logo || URL.logoPlaceholder;
                this.setState({
                    logoURL,
                    isLogoLoaded: true
                });
            });
    }

    render() {
        const { isFlightLoaded, isLogoLoaded, logoURL, flight } = this.state;

        if (!isFlightLoaded && !isLogoLoaded) {
            return <Loader />;
        }

        return (
            <div className="flightDetailsDiv">
                <Link to="/"><p>Back to Flights</p></Link>
                <h2><span>Flight Code Number</span> <br /> {flight.callname}</h2>
                <ul className="flightDetailsUL">
                    <li><img src={logoURL} alt="" /></li>
                    <li><span>Airplane Manufacturer and Model</span> <br /> {flight.airplaneModel} </li>
                    <li><span>Departure Airport</span> <br /> {flight.flightOrigin}</li>
                    <li><span>Destination Airport</span> <br /> {flight.flightDestination}</li>
                </ul>
            </div>
        );
    }
}

export { FlightDetails };