const altitudeFilter = (a, b) => {
    const propA = a.altitude;
    const propB = b.altitude;

    let comparison = 0;
    if (propA > propB) {
        comparison = -1;
    } else if (propA < propB) {
        comparison = 1;
    }
    return comparison;
}

export { altitudeFilter };