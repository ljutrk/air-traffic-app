import React, { Component } from 'react';
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
                logoService.fetchLogo(flight.logo.split(" ").join("%20"))
                    .then(response => {
                        if (response.length === 0) {
                            logoService.fetchLogo(flight.logo.split(" ")[0])
                                .then(response => {
                                    this.setState({
                                        logoURL: response[0].logo,
                                        isLogoLoaded: true
                                    })
                                })
                        } else {
                            this.setState({
                                logoURL: response[0].logo,
                                isLogoLoaded: true
                            })
                        }
                    })
                this.setState({
                    flight,
                    isFlightLoaded: true
                })
                console.log(flight);
            })

    }

    render() {
        console.log(this.state.logoURL);

        if (!this.state.isFlightLoaded && !this.state.isLogoLoaded) {
            return <h1>Loading...</h1>
        }
        return (
            <div>
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