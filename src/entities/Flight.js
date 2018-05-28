class Flight {
    constructor(flight) {
        this.bearing = parseInt(flight.Brng, 10) > 180 ? "left" : "right";
        this.altitude = flight.Alt;
        this.flightCodeNumber = flight.Type;
        this.airplaneModel = flight.Mdl;
        this.flightOrigin = flight.From;
        this.flightDestination = flight.To;
        this.logo = flight.Op;
    }
}

export default Flight;