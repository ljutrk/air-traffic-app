import fetchJsonp from 'fetch-jsonp';
import { URL } from '../shared/constants';

const myFetchGetFlights = (urlEnd) => {
    let url = URL.baseFlights + urlEnd;
    return fetchJsonp(url)
        .then(response => response.json());
};

const myFetchGetLogo = (urlEnd) => {
    let url = URL.baseLogo + urlEnd;
    let requstOptions = {
        method: 'GET',
    };
    return fetch(url, requstOptions)
        .then(response => response.json());
};

export { myFetchGetFlights, myFetchGetLogo };