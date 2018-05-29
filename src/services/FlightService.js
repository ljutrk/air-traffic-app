import Flight from '../entities/Flight';
import { myFetchGetFlights } from './apiService';

class FlightService {
    fetchFlights = (lat, lng) => {
        let urlEnd = `?lat=${lat}&lng=${lng}&fDstL=0&fDstU=180`;
        return myFetchGetFlights(urlEnd)
            .then(response => {
                return response.acList.map(flight => {
                    return new Flight(flight)
                })
            })
    }

    fetchSingleFlight = (icao) => {
        let urlEnd = `?fIcoQ=${icao}`;
        return myFetchGetFlights(urlEnd)
            .then(flight => new Flight(flight.acList[0]))
    }

}

export const flightService = new FlightService();