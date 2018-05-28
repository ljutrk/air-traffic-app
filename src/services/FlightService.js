import Flight from '../entities/Flight';
import { myFetchGet } from './apiService';

class FlightService {
    fetchFlights = (lat, lng) => {
        return myFetchGet(lat, lng)
            .then(response => {
                return response.acList.map(flight => {
                    return new Flight(flight)
                })
            })
    }

    fetchSingleFlight = (icao) => {
        return fetch(`http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?fIcoQ=${icao}`)
        .then(response => response.json())
        .then(flight => new Flight(flight.acList[0]))
    }

}

export const flightService = new FlightService();