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

}

export const flightService = new FlightService();