class Flight {
    constructor(flight) {
        this.id = flight.Id
        this.bearing = parseInt(flight.Brng, 10) > 180 ? "left" : "right";
        this.altitude = flight.Alt;
        this.flightCodeNumber = flight.Type;
        this.airplaneModel = flight.Mdl;
        this.flightOrigin = flight.From || "unknown";
        this.flightDestination = flight.To || "unknown";
        this.logo = flight.Op;
        this.icao = flight.Icao;
    }
}

export default Flight;