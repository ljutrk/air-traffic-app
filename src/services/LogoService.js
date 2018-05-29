import { myFetchGetLogo } from './apiService';
import Logo from '../entities/Logo';

class LogoService {

    fetchLogo = (q) => {
        let urlEnd = q;
        return myFetchGetLogo(urlEnd)
            .then(response => {
                return response.map(logo => {
                    return new Logo(logo)
                })
            })
    }
}

export const logoService = new LogoService()