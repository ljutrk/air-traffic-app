import Flight from '../entities/Flight';
import { myFetchGet } from './apiService';

class FlightService {

    fetchFlights = () => {
        return myFetchGet(40, 20)
            .then(response => {
                return response.acList.map(flight => {
                    return new Flight(flight)
                })
            })
    }

}

export const flightService = new FlightService();