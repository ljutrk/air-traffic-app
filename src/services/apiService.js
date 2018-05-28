import { URL } from '../shared/constants';

const myFetchGet = (lat, lng) => {
    let url = URL.base + `?lat=${lat}&lng=${lng}&fDstL=0&fDstU=180`
    let requstOptions = {
        method: 'GET',
    }
    return fetch(url, requstOptions)
        .then(response => response.json())
}

export { myFetchGet }